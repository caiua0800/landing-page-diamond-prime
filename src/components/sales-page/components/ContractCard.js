import React from 'react';
import { motion } from 'framer-motion';
import './ContractCard.css';

const ContractCard = ({ contract }) => {
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
            className="contract-card"
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            <div className="card-image-container">
                <img src={imageUrl} alt={name} className="card-image" />
                <div className="card-badge">{monthlyPercentage}% Cashback</div>
            </div>

            <div className="card-content">
                <h3 className="card-title">{name}</h3>
                <p className="card-description" title={description}>
                    {description}
                </p>

                <div className="card-divider"></div>

                <div className="card-price-container">
                    <span className="price-label">Valor de Investimento</span>
                    <span className="price-value">{formattedPrice}</span>
                </div>

                <div className="card-features">
                    <div className="feature">
                        <i className="fa-solid fa-calendar-check"></i>
                        <span>12 Meses</span>
                    </div>
                    <div className="feature">
                        <i className="fa-solid fa-chart-line"></i>
                        <span>{monthlyPercentage}% a.m.</span>
                    </div>
                </div>

                <button className="card-button">
                    Comprar Agora
                </button>
            </div>
        </motion.div>
    );
};

export default ContractCard;
