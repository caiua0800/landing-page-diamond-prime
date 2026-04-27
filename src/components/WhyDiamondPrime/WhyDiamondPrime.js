import React from 'react';
import { motion } from 'framer-motion';
import './WhyDiamondPrime.css';

import diamondImage from '../../img/diamond_prime_diamond (1).png';

const differentiators = [
  { icon: 'fa-solid fa-gem', text: 'Produto físico e certificado' },
  { icon: 'fa-solid fa-arrow-trend-up', text: 'Histórico anual de valorização do produto de 10% a 20%' },
  { icon: 'fa-solid fa-sack-dollar', text: 'Cashback mensal de 2%' },
  { icon: 'fa-solid fa-shield-halved', text: 'Garantia de entrega Golden Brasil' },
  { icon: 'fa-solid fa-wand-magic-sparkles', text: 'Transformação em joia exclusiva' }
];

const WhyDiamondPrime = () => {
  return (
    <section className="why-prime-section">
      <motion.div 
        className="why-prime-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* --- COLUNA ESQUERDA: TEXTO --- */}
        <motion.div 
          className="text-column"
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
          }}
        >
          <span className="text-highlight">Diferenciais</span>
          <h2 className="why-prime-title">Por que o Diamond Prime é Único?</h2>
          
          {/* Imagem para a visualização em mobile */}
          <div className="image-column-mobile">
            <img src={diamondImage} alt="Diamante lapidado" className="why-prime-diamond-image" />
          </div>

          <p className="why-prime-paragraph">
            Em um mercado cada vez mais volátil, o Diamond Prime surge como um porto seguro. Combinamos a estabilidade milenar e o valor intrínseco do diamante com um modelo de negócio inovador que gera lucratividade mensal, oferecendo o melhor dos dois mundos.
          </p>
          
          <ul className="differentiators-list">
            {differentiators.map((item, index) => (
              <li key={index}>
                <i className={`list-icon ${item.icon}`}></i>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* --- COLUNA DIREITA: IMAGEM (PARA DESKTOP) --- */}
        <motion.div 
          className="image-column-desktop"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
          }}
        >
          <img src={diamondImage} alt="Diamante lapidado" className="why-prime-diamond-image" />
        </motion.div>

      </motion.div>
    </section>
  );
};

export default WhyDiamondPrime;