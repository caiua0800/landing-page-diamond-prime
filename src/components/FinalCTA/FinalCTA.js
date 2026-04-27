import React from 'react';
import { motion } from 'framer-motion';
import './FinalCTA.css';

import diamondImageCTA from '../../img/diamond_prime_diamond_05 (2).png';

const FinalCTA = () => {
  return (
    <section className="final-cta-section">
      <motion.div 
        className="cta-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* --- COLUNA ESQUERDA: TEXTO E BOTÃO --- */}
        <motion.div 
          className="cta-text-column"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
          }}
        >
          <h2 className="cta-title">
            Diamond Prime – Seu Patrimônio Blindado em Beleza e Valor
          </h2>

          {/* Imagem para a visualização em mobile */}
          <div className="cta-image-column-mobile">
            <img src={diamondImageCTA} alt="Diamante Diamond Prime" className="cta-diamond-image" />
          </div>

          <p className="cta-subtitle">
            Adquira agora seu <strong>DIAMANTE LAPIDADO</strong>, certificado internacionalmente, com 2% de cashback mensal durante 12 meses e a valorização contínua dessa pedra única.
          </p>
          
          {/* MODIFICAÇÃO AQUI: Adicionada a tag <a> ao redor do botão */}
          <a href="https://sistema.diamondprime.com.br/" target="_blank" rel="noopener noreferrer">
            <button className="cta-button-final">
              <span>Quero Meu Diamond Prime Agora</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </a>
        </motion.div>

        {/* --- COLUNA DIREITA: IMAGEM (PARA DESKTOP) --- */}
        <motion.div 
          className="cta-image-column-desktop"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
          }}
        >
          <img src={diamondImageCTA} alt="Diamante Diamond Prime" className="cta-diamond-image" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;