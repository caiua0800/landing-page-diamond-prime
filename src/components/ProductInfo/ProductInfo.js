import React from 'react';
import { motion } from 'framer-motion';
import './ProductInfo.css';

// Os benefícios agora com textos mais curtos, ideais para a faixa
const benefits = [
  { icon: 'fa-solid fa-hand-holding-dollar', text: '2% de Cashback Mensal' },
  { icon: 'fa-solid fa-truck-fast', text: 'Diamante Físico em Casa' },
  { icon: 'fa-solid fa-award', text: 'Certificação Internacional' },
  { icon: 'fa-solid fa-chart-line', text: 'Valorização Histórica' },
  { icon: 'fa-solid fa-wand-magic-sparkles', text: 'Transforme em Joia' }
];

// Variantes de animação para a faixa e seus itens
const stripContainerVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.15 // Anima os filhos em sequência
    }
  }
};

const benefitItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const ProductInfo = () => {
  return (
    // A seção agora é a "faixa preta"
    <section className="product-strip-section">
      <motion.div 
        className="strip-container"
        variants={stripContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // A animação começa quando 50% da faixa estiver visível
      >
        {benefits.map((benefit, index) => (
          <motion.div className="benefit-item" key={index} variants={benefitItemVariants}>
            <i className={`strip-icon ${benefit.icon}`}></i>
            <span className="strip-text">{benefit.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProductInfo;