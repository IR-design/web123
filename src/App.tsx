import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Packages from './components/Packages';
import Coverage from './components/Coverage';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Packages />
      <Coverage />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;