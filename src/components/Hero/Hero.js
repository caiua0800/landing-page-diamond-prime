import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

import diamondImage from '../../img/diamond_prime_diamond_02.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="hero-section">
      {/* Container principal que agora engloba tanto o texto quanto a imagem */}
      <motion.div
        className="hero-main-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Coluna de texto */}
        <div className="hero-text-content">
          <motion.div className="hero-highlight" variants={itemVariants}>
            Lançamento Exclusivo no Brasil
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Diamond Prime:
            <br />
            O Futuro da Riqueza
            em Suas Mãos
          </motion.h1>
          
          {/* A imagem foi movida para DENTRO do fluxo de conteúdo para reordenação no mobile */}
          <div className="hero-visual-mobile">
            <motion.img
              src={diamondImage}
              alt="Diamante lapidado"
              className="hero-diamond-image"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
          </div>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Compre seu diamante com certificação internacional, receba em casa e garanta 2% de cashback mensal durante 12 meses. Uma união perfeita entre a segurança de um ativo real e a lucratividade digital.
          </motion.p>

          <motion.div variants={itemVariants}>
            {/* MODIFICAÇÃO AQUI: Adicionada a tag <a> ao redor do botão */}
            <a href="https://sistema.diamondprime.com.br/" target="_blank" rel="noopener noreferrer">
              <button className="hero-cta-button">
                <span>Quero Saber Mais</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </a>
          </motion.div>
        </div>

        {/* Imagem original para a visualização em desktop */}
        <div className="hero-visual-desktop">
          <motion.img
            src={diamondImage}
            alt="Diamante lapidado"
            className="hero-diamond-image"
            initial={{ opacity: 0, y: 100, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;