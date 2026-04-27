import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import CountUp from 'react-countup';
import './SocialProof.css';

const chartData = [
  { year: '2020', valor: 100 },
  { year: '2021', valor: 112 },
  { year: '2022', valor: 128 },
  { year: '2023', valor: 145 },
  { year: '2024', valor: 165 },
  { year: '2025', valor: 185 },
];

const testimonialsData = [
  { quote: "Segurança e profissionalismo incomparáveis.", author: "Ricardo M.", status: "Cliente Prime" },
  { quote: "Receber o diamante em casa me deu total tranquilidade.", author: "Ana Carolina", status: "Cliente Prime" },
  { quote: "Meu patrimônio está crescendo de duas formas ao mesmo tempo!", author: "Fernando C.", status: "Cliente Prime" },
  { quote: "O cashback mensal é um diferencial incrível.", author: "Mariana A.", status: "Cliente Prime" },
  { quote: "Muito além de um investimento, é um ativo real.", author: "Julio P.", status: "Cliente Prime" },
  { quote: "A solidez da Golden Brasil foi decisiva para mim.", author: "Beatriz L.", status: "Cliente Prime" }
];

const SocialProof = () => {
  return (
    <section className="social-proof-section">
      {/* --- PARTE SUPERIOR (BRANCA) --- */}
      <div className="proof-top">
        <div className="social-proof-container">
          {/* ... (código do gráfico e dos números, inalterado) ... */}
          <motion.div 
            className="chart-column"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="chart-title">Valorização Histórica do Diamante</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="year" stroke="#5a5a5c" />
                <YAxis stroke="#5a5a5c" unit="$" />
                <Tooltip contentStyle={{ background: '#1D1D1F', border: 'none', borderRadius: '10px', color: '#fff' }} />
                <Line type="monotone" dataKey="valor" stroke="#DEAB43" strokeWidth={3} dot={{ r: 6, fill: '#DEAB43' }} activeDot={{ r: 8 }}/>
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
          <motion.div 
            className="content-column"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* <span className="text-highlight">Resultados Comprovados</span> */}
            <h2 className="proof-title">Construa seu Patrimônio com Segurança</h2>
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-value">+<CountUp end={10} duration={2.5} enableScrollSpy scrollSpyOnce />% a <CountUp end={20} duration={2.5} enableScrollSpy scrollSpyOnce />%</span>
                <span className="stat-label">Historico de valorização média anual</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- FAIXA INFERIOR (PRETA) COM CARROSSEL INFINITO --- */}
      <div className="testimonial-ticker-section">
        {/* --- ADIÇÃO: CABEÇALHO DO CARROSSEL --- */}
        <div className="ticker-header">
          <h3 className="ticker-title">A Confiança de Nossos Clientes em Movimento</h3>
          <p className="ticker-subtitle">Veja o que dizem aqueles que já fazem parte da nossa comunidade.</p>
        </div>

        <div className="ticker-wrapper">
          {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <div className="testimonial-header">
                <div className="avatar">
                  <i className="fa-solid fa-user"></i>
                </div>
                <div className="author-info">
                  <span className="author-name">{testimonial.author}</span>
                  <span className="author-status">{testimonial.status}</span>
                </div>
                <div className="star-rating">
                  {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                </div>
              </div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;