import React from 'react';
import useContracts from '../sales-page/hooks/useContracts';
import DiamondCard from './DiamondCard';
import './DiamondShowcase.css';

const DiamondShowcase = () => {
    const { contracts, loading, error } = useContracts();

    // While loading or if error, we might want to just render nothing or a loading state. 
    // Given the context of "below final CTA", showing nothing if empty is safer to avoid layout shifts or ugly errors.
    if (loading || error) return null;

    return (
        <section className="diamond-showcase-section">
            <div className="diamond-showcase-container">
                <div className="diamond-showcase-header">
                    <h2 className="diamond-showcase-title">Nossas Oportunidades Exclusivas</h2>
                    <p className="diamond-showcase-subtitle">
                        Invista em Diamantes e receba 2% de Cashback todo mês na sua conta.
                    </p>
                </div>

                <div className="diamond-grid">
                    {contracts.map(contract => (
                        <DiamondCard key={contract.id} contract={contract} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DiamondShowcase;
