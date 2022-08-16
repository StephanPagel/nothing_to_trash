import React from 'react'
import HeroSection from '../components/HeroSection';
import './home.scss';

export default function home() {
    return (
      <div className="home">
        <HeroSection />
        <button>Starte jetzt!</button>
        
      </div>
    );
}
