import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import ProductInfo from '../components/ProductInfo/ProductInfo';
import DiamondHistory from '../components/DiamondHistory/DiamondHistory';
import WhyDiamondPrime from '../components/WhyDiamondPrime/WhyDiamondPrime';
import GoldenBrasilHistory from '../components/GoldenBrasilHistory/GoldenBrasilHistory';
import SocialProof from '../components/SocialProof/SocialProof';
import FinalCTA from '../components/FinalCTA/FinalCTA';
import DiamondShowcase from '../components/DiamondShowcase/DiamondShowcase';
import Footer from '../components/Footer/Footer';
import '../App.css';

const Home = () => {
    return (
        <div className="App">
            <Header />

            <div id="hero"><Hero /></div>
            <div id="product-info"><ProductInfo /></div>
            <div id="diamond-history"><DiamondHistory /></div>
            <div id="why-prime"><WhyDiamondPrime /></div>
            <div id="golden-history"><GoldenBrasilHistory /></div>
            {/* --- GARANTA QUE ESTE ID ESTEJA AQUI --- */}
            <div id="social-proof"><SocialProof /></div>
            <div id="final-cta"><FinalCTA /></div>
            <div id="diamond-showcase"><DiamondShowcase /></div>

            <Footer />

            {/* O componente Chat é adicionado aqui para ficar disponível em todo o site */}
        </div>
    );
};

export default Home;
