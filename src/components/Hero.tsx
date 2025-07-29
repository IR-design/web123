import React from 'react';
import { ArrowRight, Wifi, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToPackages = () => {
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white bg-opacity-10 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-white bg-opacity-10 rounded-full blur-sm animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-white bg-opacity-10 rounded-full blur-sm animate-pulse delay-2000"></div>
      
      <div className="relative container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6">
              <Wifi className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Global Enter Network</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Solusi WiFi Cerdas untuk Kenyamanan Digital di
              <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent"> Perumahan Masa Kini</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Nikmati internet tanpa batas dengan kecepatan tinggi
              <br />
              <span className="text-yellow-400 font-semibold">Mulai dari 100 Ribu-an Saja</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent font-bold text-lg animate-pulse">
                🔥 DISKON HINGGA 27% - Khusus Warga Kalita! 🔥
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={scrollToPackages}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center group"
              >
                Lihat Paket
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="https://wa.me/6285117246022"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
              >
                Konsultasi Gratis
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-blue-100">Cocok untuk rumah & apartemen</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-blue-100">Streaming, gaming, & bekerja</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-20">
              <img
                src="https://www.pexels.com/photo/person-using-macbook-air-38547/"
                alt="Happy family using internet"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">🌐</div>
                  <div className="text-sm text-gray-600">Premium</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;