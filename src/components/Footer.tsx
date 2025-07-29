import React from 'react';
import { Wifi, MessageCircle, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Global Enter Network</h1>
                <p className="text-sm text-gray-400">GEN</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Penyedia layanan internet terpercaya untuk kebutuhan digital keluarga Indonesia. 
              Koneksi cepat, stabil, dan harga terjangkau.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/6285117246022"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#packages" className="hover:text-white transition-colors">Paket Internet</a></li>
              <li><a href="#coverage" className="hover:text-white transition-colors">Area Jangkauan</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>085117246022</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>085117246022</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Melayani Cluster Kalita</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Global Enter Network. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;