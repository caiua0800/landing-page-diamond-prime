import React from 'react';
import './NewsSection.css';

const newsItems = [
  {
    url: 'https://www.gazetadopovo.com.br/conteudo-publicitario/golden-brasil/daniel-mors-mercado-minerios-pedras-preciosas/?ref=busca',
    title:
      'Daniel Mors cresce no mercado de minérios e pedras preciosas',
    description:
      'Depois de tentar diferentes caminhos, Daniel Mors encontrou no setor mineral a oportunidade de estruturar um negócio com potencial de crescimento e escala.',
    image:
      'https://media.gazetadopovo.com.br/2026/04/22104256/materia_gazeta_02-2-960x540.jpg.webp',
  }
];

const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="news-header">
        <span>Golden na mídia</span>
        <h2>Reconhecimento e presença institucional</h2>
        <p>
          Publicações que reforçam a presença da Golden Brasil no mercado e em veículos de grande alcance.
        </p>
      </div>

      <div className="news-grid">
        {newsItems.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="news-card"
          >
            <div className="news-image-wrapper">
              <img src={item.image} alt={item.title} className="news-image" />
              <div className="news-image-overlay"></div>
            </div>

            <div className="news-content">
              <span className="news-source">{item.source}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="news-link">
                Ler matéria
                <span>→</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;