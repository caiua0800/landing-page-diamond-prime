import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

import goldenLogo from '../../img/logo-golden-ouro2.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para rolagem suave com offset
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false); 
  };

  const menuLinks = [
    { title: 'História', id: 'diamond-history' },
    { title: 'Diferenciais', id: 'why-prime' },
    { title: 'Golden Brasil', id: 'golden-history' },
    { title: 'Resultados', id: 'social-proof' }
  ];

  // Variantes para a animação em cascata do menu mobile
  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header className="header-section-fixed">
      <nav className="header-container">
        
        <a href="#hero" className="header-brand-link" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
          <img src={goldenLogo} alt="Golden Brasil Logo" className="header-logo" />
          <div className="brand-text">
            <span>Diamond Prime</span>
            <small>by Golden Brasil</small>
          </div>
        </a>

        <div className="header-right-content">
          <ul className="nav-links-desktop">
            {menuLinks.map(link => (
              <li key={link.id}>
                <button onClick={() => scrollToSection(link.id)}>{link.title}</button>
              </li>
            ))}
          </ul>
          <button className="header-cta-secondary" onClick={() => scrollToSection('final-cta')}>
            Fale Conosco
          </button>
        </div>

        <button className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span><span></span><span></span>
        </button>

        <AnimatePresence>
          {isMenuOpen && (
             <motion.div
              className="nav-mobile-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.ul 
                className="nav-links-mobile"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
              >
                {menuLinks.map(link => (
                  <motion.li key={link.id} variants={mobileLinkVariants}>
                    <button onClick={() => scrollToSection(link.id)}>{link.title}</button>
                  </motion.li>
                ))}
                <motion.li variants={mobileLinkVariants}>
                  <button className="header-cta-secondary mobile" onClick={() => scrollToSection('final-cta')}>
                    Fale Conosco
                  </button>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;