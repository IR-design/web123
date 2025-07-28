import React from 'react';
import { MapPin, Clock, Users } from 'lucide-react';

const Coverage = () => {
  const coverageAreas = [
    'Cluster Kalita D-1',
    'Cluster Kalita D-2',
    'Cluster Kalita D-3',
    'Cluster Kalita D-4',
    'Cluster Kalita D-5',
    'Cluster Kalita D-6'
  ];

  const stats = [
    {
      icon: MapPin,
      number: '100+',
      label: 'Area Terjangkau',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      number: '1000+',
      label: 'Titik Internet Aktif',
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Support Online',
      color: 'text-green-600'
    }
  ];

  return (
    <section id="coverage" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Area Jangkauan Layanan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Kami melayani berbagai area perumahan dan komplek di sekitar wilayah Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 mx-auto mb-4 ${stat.color} bg-gray-100 rounded-full flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-gray-800 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Wilayah yang Sudah Terjangkau
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {coverageAreas.map((area, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-200">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Area Anda belum terjangkau? Jangan khawatir! Kami terus memperluas 
                jangkauan layanan untuk melayani lebih banyak wilayah.
              </p>
              <a
                href="https://wa.me/6285117246022?text=Halo, saya ingin menanyakan ketersediaan layanan di area saya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Cek Ketersediaan Area
              </a>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Coverage area"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;