import React from 'react';
import './HeroSection.css'; // You can create this CSS file for hero section styles

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Discover Recipes with Ingredients You Have!</h2>
        <p>Start cooking delicious meals using what's in your kitchen.</p>
        <div className="cta-buttons">
          <a href="/explore" className="btn-primary">Explore Recipes</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
