import React from 'react';
import { motion } from 'framer-motion';
import './DiamondCard.css';

const DiamondCard = ({ contract }) => {
    const { name, description, unityPrice, monthlyPercentage, mediaUrls } = contract;

    // Formatting price
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(unityPrice);

    // Get image or placeholder
    const imageUrl = mediaUrls && mediaUrls.length > 0 ? mediaUrls[0] : 'https://via.placeholder.com/300x200?text=Diamante';

    return (
        <motion.div
            className="diamond-card"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="diamond-card-image-container">
                <img src={imageUrl} alt={name} className="diamond-card-image" />
                <div className="diamond-card-badge">{monthlyPercentage}% Cashback</div>
            </div>

            <div className="diamond-card-content">
                <h3 className="diamond-card-title">{name}</h3>

                <p className="diamond-card-description" title={description}>
                    {description}
                </p>

                <div className="diamond-card-price-section">
                    <span className="diamond-price-label">Valor de Investimento</span>
                    <span className="diamond-price-value">{formattedPrice}</span>
                </div>

                <div className="diamond-card-features">
                    <div className="diamond-feature">
                        <i className="fa-solid fa-calendar-check"></i>
                        <span>12 Meses</span>
                    </div>
                    <div className="diamond-feature">
                        <i className="fa-solid fa-chart-line"></i>
                        <span>{monthlyPercentage}% a.m.</span>
                    </div>
                </div>

                <a href="https://sistema.diamondprime.com.br/" target="_blank" rel="noopener noreferrer">
                    <button className="diamond-card-button">
                        Comprar Agora
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </a>
            </div>
        </motion.div>
    );
};

export default DiamondCard;
