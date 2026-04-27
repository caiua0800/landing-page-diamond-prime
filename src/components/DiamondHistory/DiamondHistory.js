import React from 'react';
import { motion } from 'framer-motion';
import './DiamondHistory.css';

// Importe a nova imagem do diamante
import diamondImage from '../../img/diamond_prime_diamond_03.png';

const DiamondHistory = () => {
  // Variantes de animação
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.3 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, rotate: -10 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotate: 0,
      transition: { 
        duration: 1.2,
        ease: "circOut" 
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section className="diamond-history-section">
      <motion.div 
        className="history-container"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* Imagem visível apenas no Desktop */}
        <motion.div className="diamond-image-container-desktop" variants={imageVariants}>
          <img src={diamondImage} alt="Diamante histórico lapidado" className="diamond-image" />
        </motion.div>

        {/* Conteúdo de Texto, que agora também contém a imagem para mobile */}
        <motion.div className="diamond-text-content" variants={textVariants}>
          <span className="text-highlight">Desde a Antiguidade</span>
          
          <h2 className="history-title">Símbolo de Poder e Prosperidade Eterna</h2>
          
          {/* Imagem visível apenas no Mobile */}
          <div className="diamond-image-container-mobile">
            <img src={diamondImage} alt="Diamante histórico lapidado" className="diamond-image" />
          </div>

          <p className="history-paragraph">
            Por milênios, os diamantes foram mais que pedras preciosas; foram amuletos de reis, símbolos de força inabalável e a materialização da luz. Carregar um diamante era carregar um fragmento da eternidade. Hoje, essa herança de exclusividade e valor perpétuo está ao seu alcance.
          </p>
          
          <blockquote className="diamond-quote">
            “Mais que uma joia, um patrimônio eterno.”
          </blockquote>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DiamondHistory;