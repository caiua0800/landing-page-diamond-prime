import React from 'react';
import ContractCard from './ContractCard';
import './ContractGrid.css';

const ContractGrid = ({ contracts, loading, error }) => {
    if (loading) {
        return (
            <div className="contracts-loading">
                <div className="spinner"></div>
                <p>Carregando diamantes exclusivos...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="contracts-error">
                <p>Houve um erro ao carregar os diamantes. Por favor, recarregue a página.</p>
                <button onClick={() => window.location.reload()}>Tentar Novamente</button>
            </div>
        );
    }

    return (
        <section id="contracts-grid" className="contracts-section">
            <div className="section-header">
                <h2>Oportunidades Disponíveis</h2>
                <div className="underline"></div>
                <p>Escolha o contrato ideal para o seu perfil de investimento</p>
            </div>

            <div className="contracts-grid">
                {contracts.map(contract => (
                    <ContractCard key={contract.id} contract={contract} />
                ))}
            </div>
        </section>
    );
};

export default ContractGrid;
