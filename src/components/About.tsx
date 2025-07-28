import React from 'react';
import { Shield, Clock, Users, Headphones } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Keamanan Terjamin',
      description: 'Sistem keamanan berlapis untuk melindungi aktivitas online Anda'
    },
    {
      icon: Clock,
      title: 'Uptime 99.9%',
      description: 'Koneksi stabil 24/7 dengan minimal downtime'
    },
    {
      icon: Users,
      title: 'Untuk Keluarga',
      description: 'Paket yang cocok untuk seluruh anggota keluarga'
    },
    {
      icon: Headphones,
      title: 'Support Responsif',
      description: 'Tim support siap membantu kapan saja Anda membutuhkan'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Mengapa Memilih Global Enter Network?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan layanan internet berkualitas tinggi dengan harga terjangkau 
            untuk memenuhi kebutuhan digital keluarga Indonesia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Bergabunglah dengan Ribuan Pelanggan Puas
              </h3>
              <p className="text-xl text-blue-100 mb-6">
                Dapatkan koneksi internet super cepat dan stabil untuk aktivitas digital 
                keluarga Anda setiap hari
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400">1000+</div>
                  <div className="text-blue-100">Pelanggan Aktif</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400">5★</div>
                  <div className="text-blue-100">Rating Pelanggan</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400">24/7</div>
                  <div className="text-blue-100">Customer Support</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/4790594/pexels-photo-4790594.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Customer support"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;