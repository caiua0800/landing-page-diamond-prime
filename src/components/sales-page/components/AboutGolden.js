import React from 'react';
import './AboutGolden.css';

const AboutGolden = () => {
  return (
    <section className="about-golden">
      <div className="about-container">

        <div className="about-left">
          <span className="about-tag">Golden Brasil</span>

          <h2>
            Ativos reais. <br />
            Estratégia inteligente.
          </h2>

          <p>
            A Golden Brasil conecta você ao mercado de diamantes certificados com um modelo
            estruturado, transparente e focado em previsibilidade financeira.
          </p>

          <p>
            Cada ativo é selecionado com critério técnico e validado por certificação internacional,
            garantindo segurança e liquidez dentro de um modelo claro e documentado.
          </p>

          <div className="about-stats">
            <div>
              <strong>2% a.m.</strong>
              <span>cashback mensal</span>
            </div>

            <div>
              <strong>12 meses</strong>
              <span>contrato estruturado</span>
            </div>

            <div>
              <strong>+ de 5 anos</strong>
              <span>de experiência de mercado</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-card">
            <div className="about-card-glow"></div>

            <h3>Por que escolher a Golden?</h3>

            <ul>
              <li>Ativos físicos de alto valor</li>
              <li>Modelo previsível de retorno</li>
              <li>Operação estruturada e formal</li>
              <li>Curadoria especializada</li>
            </ul>

            <button className="about-cta">
              Ver diamantes disponíveis
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutGolden;