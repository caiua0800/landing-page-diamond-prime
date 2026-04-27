import React from 'react';
import './Footer.css';

import goldenLogo from '../../img/Untitled design (5).png';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-main-content">

          {/* Coluna Principal (Esquerda) */}
          <div className="footer-brand-column">
            <img src={goldenLogo} alt="Golden Brasil Logo" className="footer-logo" />
            <p className="footer-cnpj">CNPJ: 42.007.698/0001-17</p>
          </div>

          {/* Grupo de Colunas Secundárias (Direita) */}
          <div className="footer-links-group">
            {/* <div className="footer-column">
              <h3>Atendimento</h3>
              <p>Segunda à Sexta: 8h – 18h</p>
            </div> */}
            <div className="footer-column">
              <h3>Contatos</h3>
              <p>
                {/* <a href="https://wa.me/5541999328683" target="_blank" rel="noopener noreferrer">(41) 99932-8683</a><br /> */}
                <a href="https://wa.me/5508000420938" target="_blank" rel="noopener noreferrer">0800 042 0938</a><br />
                {/* <a href="tel:08000420938">0800 042 0938</a><br /> */}
                <a href="mailto:sac@goldenbrasil.com.br">sac@goldenbrasil.com.br</a>
              </p>
            </div>
            <div className="footer-column">
              <h3>Presentes em</h3>
              <p>
                São Paulo – SP<br />
                Curitiba – PR<br />
                Balneário Camboriú – SC<br />
                Porto Alegre – RS
              </p>
            </div>
            <div className="footer-column">
              <h3>Atendimento</h3>
              <p>Segunda à Sexta: 8h – 18h</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-note">Para atendimentos presenciais, contate a central: 0800 042 0938</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/goldenbrasiloficial/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/goldenbrasiloficial/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.youtube.com/c/GoldenMinera%C3%A7%C3%A3o" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
            <a href="https://www.linkedin.com/company/holding-golden-brasil/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;