import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ContractCard from './ContractCard';
import './HeroParallax.css';

const HeroParallax = ({ contracts = [] }) => {
    // We need at least 15 items for the effect to look good, so we might duplicate if needed
    // or just show what we have. For this specific request, we will align them in rows.
    // The user requested NO horizontal scroll (carousel), so we just position them.

    // Divide contracts into rows for the visual effect
    const firstRow = contracts.slice(0, 3);
    const secondRow = contracts.slice(3, 6);
    const thirdRow = contracts.slice(6, 9);

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        // Animate while the component is entering the viewport
        // "start end": When top of component hits bottom of viewport (starts entering)
        // "start start": When top of component hits top of viewport (fully entered)
        offset: ["start start", "end start"],
    });

    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    // Map the scroll progress (0 to 1 during entry) to the animation
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 0]), // Always start from -700 as requested
        springConfig
    );

    return (
        <div
            ref={ref}
            className="hero-parallax-container"
        >
            <div className="parallax-header">
                <h2>O Padrão Ouro em Investimentos</h2>
                <p>Segurança física com rendimento digital. Uma curadoria exclusiva da Golden Brasil.</p>
            </div>

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
                        {contracts.map((contract) => (
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
        </div>
    );
};

export default HeroParallax;
