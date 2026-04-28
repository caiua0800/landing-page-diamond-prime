import React from 'react';
import useContracts from './hooks/useContracts';
import HeroSales from './components/HeroSales';
import BenefitsSection from './components/BenefitsSection';
import HeroParallax from './components/HeroParallax';
// import ContractGrid from './components/ContractGrid';
import Footer from '../Footer/Footer';
import './SalesPage.css';
import NewsSection from './components/NewsSection';
import AboutGolden from './components/AboutGolden';

const SalesPage = () => {
    const { contracts, loading, error } = useContracts();

    return (
        <div className="sales-page">
            <HeroSales />

            {/* Benefits Section */}
            <BenefitsSection />

            {/* Show Parallax only when not loading for smooth effect */}
            {!loading && !error && <HeroParallax contracts={contracts} />}
            <NewsSection />
            <AboutGolden />
            <Footer />
        </div>
    );
};

export default SalesPage;
