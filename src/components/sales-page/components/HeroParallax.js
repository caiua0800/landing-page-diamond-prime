import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ContractCard from './ContractCard';
import './HeroParallax.css';

const HeroParallax = ({ contracts = [] }) => {
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768;
  });

  const [sortOrder, setSortOrder] = React.useState('alphabetical');

  React.useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getContractValue = (contract) => Number(contract?.unityPrice || 0);

    const sortedContracts = useMemo(() => {
    return [...contracts].sort((a, b) => {
        if (sortOrder === 'alphabetical') {
        const nameA = String(a?.name || a?.title || '').toLowerCase();
        const nameB = String(b?.name || b?.title || '').toLowerCase();

        return nameA.localeCompare(nameB, 'pt-BR', { numeric: true });
        }

        const valueA = getContractValue(a);
        const valueB = getContractValue(b);

        return sortOrder === 'desc' ? valueB - valueA : valueA - valueB;
    });
    }, [contracts, sortOrder]);

  const firstRow = sortedContracts.slice(0, 3);
  const secondRow = sortedContracts.slice(3, 6);
  const thirdRow = sortedContracts.slice(6, 9);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'start 20%'],
  });

  const springConfig = { stiffness: 220, damping: 28 };

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [8, 0]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [0.65, 1]),
    springConfig
  );

  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [6, 0]),
    springConfig
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [-120, 0]),
    springConfig
  );

  return (
    <div ref={ref} className="hero-parallax-container">
      <div className="parallax-header">
        <h2>Escolha seu diamante</h2>

        <p>
          Ordene por valor para encontrar o plano ideal de cashback mensal.
        </p>

        <div className="parallax-sort-panel">
          <span>Ordenar por valor</span>

          <div className="parallax-sort-buttons">

            <button
            type="button"
            className={sortOrder === 'alphabetical' ? 'active' : ''}
            onClick={() => setSortOrder('alphabetical')}
            >
            A-Z
            </button>
            
            <button
              type="button"
              className={sortOrder === 'asc' ? 'active' : ''}
              onClick={() => setSortOrder('asc')}
            >
              Menor valor
            </button>

            <button
              type="button"
              className={sortOrder === 'desc' ? 'active' : ''}
              onClick={() => setSortOrder('desc')}
            >
              Maior valor
            </button>
          </div>
        </div>
      </div>

      <div className="parallax-layout">
        {sortedContracts.length === 0 ? (
          <div className="parallax-empty-state">
            Nenhum diamante encontrado.
          </div>
        ) : (
          <motion.div
            style={{
              rotateX,
              rotateZ,
              translateY,
              opacity,
            }}
            className="parallax-content"
          >
            {isMobile ? (
              <div className="parallax-mobile-grid">
                {sortedContracts.map((contract) => (
                  <ContractCard key={contract.id} contract={contract} />
                ))}
              </div>
            ) : (
              <>
                <div className="parallax-row">
                  {firstRow.map((contract) => (
                    <ContractCard key={contract.id} contract={contract} />
                  ))}
                </div>

                <div className="parallax-row">
                  {secondRow.map((contract) => (
                    <ContractCard key={contract.id} contract={contract} />
                  ))}
                </div>

                <div className="parallax-row">
                  {thirdRow.map((contract) => (
                    <ContractCard key={contract.id} contract={contract} />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        )}
      </div>
      <div className="parallax-cta">
        <button
          className="cta-button-secondary"
          onClick={() => {
            document
              .querySelector('.contract-grid')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Fale conosco
        </button>
      </div>
    </div>
  );
};

export default HeroParallax;