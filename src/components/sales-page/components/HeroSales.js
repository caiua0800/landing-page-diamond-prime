import React from 'react';
import { motion } from 'framer-motion';
import './HeroSales.css';
import diamondImage from '../../../img/diamond_prime_diamond_02.png';
import goldenLogo from '../../../img/logo-golden-ouro2.png';

const HeroSales = () => {
    const scrollToGrid = () => {
        const gridSection = document.getElementById('contracts-grid');
        if (gridSection) {
            gridSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToFooter = () => {
        const footer = document.querySelector('footer');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToCatalog = () => {
        const catalog = document.querySelector('.hero-parallax-container');
        if (catalog) {
            catalog.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero-sales">
            {/* Simple Header */}
            <motion.header
                className="hero-sales-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="hero-header-content">
                    <div className="hero-header-logo">
                        <img src={goldenLogo} alt="Golden Brasil" />
                        <span>Diamond Prime</span>
                    </div>
                    <nav className="hero-header-nav">
                        <a href="https://www.diamondprime.com.br/" target="_blank" rel="noopener noreferrer">Sobre</a>
                        <a href="#benefits">Vantagens</a>
                        <button onClick={scrollToCatalog} className="hero-nav-link">Catálogo</button>
                        <button onClick={scrollToFooter} className="hero-nav-contact">Contato</button>
                    </nav>
                </div>
            </motion.header>

            <div className="hero-sales-content">
                <motion.div
                    className="hero-sales-text"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="brand-security">
                        <i className="fa-solid fa-shield-halved"></i>
                        <span>Garantia Golden Brasil</span>
                    </div>
                    <span className="hero-badge">Estoque Limitado</span>
                    <h1>Invista na Eternidade</h1>
                    <p>
                        Adquira diamantes certificados internacionalmente e receba
                        <strong> 2% de cashback mensal</strong> garantido em contrato.
                        Segurança, liquidez e valorização em um único ativo.
                    </p>
                    <button onClick={scrollToGrid} className="cta-button-primary">
                        Escolher Meu Diamante
                    </button>
                </motion.div>

                <motion.div
                    className="hero-sales-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img src={diamondImage} alt="Diamante Premium" />
                </motion.div>
            </div>
            <div className="hero-sales-overlay"></div>
        </section>
    );
};

export default HeroSales;
