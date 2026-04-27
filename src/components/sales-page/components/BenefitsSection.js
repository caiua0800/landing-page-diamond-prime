import React from 'react';
import { motion } from 'framer-motion';
import './BenefitsSection.css';

const BenefitsSection = () => {
    const scrollToCatalog = () => {
        const catalog = document.querySelector('.hero-parallax-container');
        if (catalog) {
            catalog.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const benefits = [
        {
            icon: 'fa-solid fa-certificate',
            title: 'Certificação GIA',
            subtitle: 'Padrão Internacional',
            description: 'Cada diamante vem com certificado GIA reconhecido mundialmente, garantindo qualidade e valorização.',
            gradient: 'linear-gradient(135deg, #d4af37, #f2d06b)'
        },
        {
            icon: 'fa-solid fa-percentage',
            title: '2% ao Mês',
            subtitle: 'Garantido em Contrato',
            description: 'Rentabilidade previsível e consistente. Seu patrimônio crescendo de forma segura e transparente.',
            gradient: 'linear-gradient(135deg, #d4af37, #f2d06b)'
        },
        {
            icon: 'fa-solid fa-shield-halved',
            title: 'Segurança Total',
            subtitle: 'Bem Físico e Líquido',
            description: 'Proteção contra desvalorização com a liquidez de um ativo físico de alto valor no mercado.',
            gradient: 'linear-gradient(135deg, #d4af37, #f2d06b)'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="benefits-section">
            <div className="benefits-overlay"></div>

            <motion.div
                className="benefits-content"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <motion.div
                    className="benefits-header"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="benefits-badge">Por que Diamond Prime?</span>
                    <h2>Proteja e Multiplique Seu Patrimônio</h2>
                    <p>Investimento em diamantes com segurança, liquidez e rentabilidade garantida em contrato</p>
                </motion.div>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="benefit-card"
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div
                                className="benefit-icon-wrapper"
                                style={{ background: benefit.gradient }}
                            >
                                <i className={benefit.icon}></i>
                            </div>
                            <h3>{benefit.title}</h3>
                            <div className="benefit-subtitle">{benefit.subtitle}</div>
                            <p>{benefit.description}</p>
                            <div className="benefit-glow" style={{ background: benefit.gradient }}></div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="benefits-cta"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button onClick={scrollToCatalog} className="cta-button-secondary">
                        Ver Catálogo de Diamantes
                    </button>
                    <p className="cta-subtitle">Escolha seu diamante e comece a investir hoje</p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default BenefitsSection;
