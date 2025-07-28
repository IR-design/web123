import React, { useState, useEffect } from 'react';
import { Menu, X, Wifi } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Wifi className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'}`}>
                Global Enter Network
              </h1>
              <p className={`text-sm ${isScrolled ? 'text-gray-600 dark:text-gray-400' : 'text-blue-100'}`}>
                GEN
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <DarkModeToggle isScrolled={isScrolled} />
            <button
              onClick={() => scrollToSection('home')}
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-white hover:text-blue-200'
              }`}
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-white hover:text-blue-200'
              }`}
            >
              Tentang
            </button>
            <button
              onClick={() => scrollToSection('packages')}
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-white hover:text-blue-200'
              }`}
            >
              Paket
            </button>
            <button
              onClick={() => scrollToSection('coverage')}
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-white hover:text-blue-200'
              }`}
            >
              Jangkauan
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Hubungi Kami
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* Mobile Dark Mode Toggle */}
          <div className="md:hidden ml-2">
            <DarkModeToggle isScrolled={isScrolled} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-left"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-left"
              >
                Tentang
              </button>
              <button
                onClick={() => scrollToSection('packages')}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-left"
              >
                Paket
              </button>
              <button
                onClick={() => scrollToSection('coverage')}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-left"
              >
                Jangkauan
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="mx-4 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-medium"
              >
                Hubungi Kami
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;