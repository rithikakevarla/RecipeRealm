import React from 'react';
import './App.css';
import { Route , Routes } from 'react-router-dom'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureList from './components/FeatureList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/HeroSection" element={<HeroSection/>}/>
        <Route path="/FeatureList" element={<FeatureList/>}/>
      </Routes>
    <Footer/> */}
     <Header />
      <main>
        <HeroSection />
        <FeatureList />
      </main> 
      <Footer />
    </div>
  );
}

export default App;