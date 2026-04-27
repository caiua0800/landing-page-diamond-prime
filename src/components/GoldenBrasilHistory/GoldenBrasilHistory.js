import React from 'react';
import { motion } from 'framer-motion';
import './GoldenBrasilHistory.css';
import buildingImage from '../../img/golden-brasil-predio.jpg';

const timelineData = [
  { year: '2019', event: 'Fundação da Golden Brasil, com a missão de democratizar o acesso a ativos de valor.' },
  { year: '2021', event: 'Expansão nacional, com a abertura de novos escritórios e solidificação da marca no mercado.' },
  { year: '2023', event: 'Marco de centenas de clientes ativos, consolidando uma comunidade forte e próspera.' },
  { year: '2025', event: 'Lançamento do Diamond Prime, revolucionando o investimento em diamantes no Brasil.' }
];

const GoldenBrasilHistory = () => {
  return (
    <section className="gb-history-section">
      {/* --- ESTRUTURA PARA DESKTOP --- */}
      <div className="background-shape-desktop">
        <div
          className="shape-image"
          style={{ backgroundImage: `url(${buildingImage})` }}
        ></div>
      </div>

      <div className="gb-history-container">
        <motion.div 
          className="content-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-highlight">Nossa Trajetória</span>
          <h2 className="gb-history-title">Uma Fundação Sólida para um Futuro Brilhante</h2>
          <p className="gb-history-paragraph">
            Nascemos do desejo de construir pontes para a prosperidade. Hoje, a Golden Brasil é um grupo sólido, com escritórios espalhados pelo Brasil e uma comunidade com centenas de clientes que confiam em nossa visão.
          </p>

          {/* --- BANNER DE IMAGEM MOVIDO PARA CÁ (APENAS PARA MOBILE) --- */}
          <div 
            className="mobile-image-banner"
            style={{ backgroundImage: `url(${buildingImage})` }}
          ></div>

          <div className="timeline">
            {timelineData.map((item, index) => (
              <motion.div 
                className="timeline-item" 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <p className="timeline-event">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <blockquote className="gb-history-quote">
            “Segurança e valorização do seu patrimônio.”
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default GoldenBrasilHistory;