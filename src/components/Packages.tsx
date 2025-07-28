import React from 'react';
import { Check, Zap, Star, Crown } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      name: 'Standard A',
      speed: '10 Mbps',
      originalPrice: 'Rp 200.000',
      price: 'Rp 150.000',
      discount: '25%',
      features: [
        'Kecepatan hingga 10 Mbps',
        'Aktivitas ringan: browsing, YouTube, chatting',
        'Cocok untuk 2-3 perangkat',
        'Stabil untuk penggunaan personal',
        'Support 24/7',
        '🏷️ Best Price untuk penggunaan dasar'
      ],
      icon: Zap,
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Standard B',
      speed: '20 Mbps',
      originalPrice: 'Rp 275.000',
      price: 'Rp 200.000',
      discount: '27%',
      features: [
        'Kecepatan hingga 20 Mbps',
        'Aktivitas sedang: streaming video HD, video call, belajar online',
        'Cocok untuk 4-5 perangkat',
        'Aman untuk kebutuhan WiFi keluarga kecil',
        'Rekomendasi untuk streaming Netflix HD',
        'Support prioritas 24/7',
        '🏷️ **Best Seller**'
      ],
      icon: Star,
      popular: true,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Business',
      speed: '30 Mbps',
      originalPrice: 'Rp 350.000',
      price: 'Rp 275.000',
      discount: '21%',
      features: [
        'Kecepatan hingga 30 Mbps',
        'Streaming FHD, multitasking antar anggota keluarga',
        'Cocok untuk 6-8 perangkat',
        'Work from home optimal',
        'Internet tetap stabil walau digunakan bersama',
        'Lancar untuk Zoom meeting, upload file, multitasking',
        'Support prioritas 24/7',
        'Router premium'
      ],
      icon: Crown,
      popular: false,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Premium',
      speed: '50 Mbps',
      originalPrice: 'Rp 450.000',
      price: 'Rp 350.000',
      discount: '22%',
      features: [
        'Kecepatan hingga 50 Mbps',
        'Unlimited kuota',
        'Cocok untuk 8-10 perangkat',
        'Streaming 4K multiple device',
        'Gaming pro tanpa lag',
        'Stabil meskipun banyak pengguna bersamaan',
        'Router premium',
        '🏷️ High-Performance – Cocok untuk Netflix 4K, YouTube 4K, dan Smart TV'
      ],
      icon: Crown,
      popular: false,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'VIP',
      speed: '100 Mbps',
      originalPrice: 'Rp 650.000',
      price: 'Rp 500.000',
      discount: '23%',
      features: [
        'Kecepatan hingga 100 Mbps',
        'Support WiFi 6 untuk smart home modern',
        'Unlimited perangkat',
        'Ultra HD streaming',
        'Streaming 4K, main game online, upload video — semua tanpa lag',
        'Priority bandwidth',
        'Cocok untuk rumah dengan banyak perangkat & kebutuhan berat',
        'Router enterprise',
        'Static IP available'
      ],
      icon: Crown,
      popular: false,
      color: 'from-pink-500 to-purple-600'
    }
  ];

  const handleOrderPackage = (packageName: string, price: string) => {
    const message = `Halo, saya tertarik dengan paket ${packageName} seharga ${price}/bulan. Mohon informasi lebih lanjut untuk berlangganan.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6285117246022?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="packages" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Pilih Paket Terbaik untuk Keluarga
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Dapatkan koneksi internet super cepat dengan harga terjangkau
          </p>
          <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold text-lg animate-pulse">
            🔥 DISKON HINGGA 27% - PENAWARAN TERBATAS! 🔥
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative group ${pkg.popular ? 'lg:scale-105' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    PALING POPULER
                  </div>
                </div>
              )}
              
              <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 h-full border-2 ${
                pkg.popular ? 'border-yellow-400' : 'border-transparent hover:border-gray-200 dark:hover:border-gray-600'
              }`}>
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${pkg.color} rounded-full flex items-center justify-center`}>
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-gray-800 dark:text-white mb-1">{pkg.speed}</div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-lg text-gray-500 dark:text-gray-400 line-through">{pkg.originalPrice}</span>
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        -{pkg.discount}
                      </span>
                    </div>
                    <div className="text-3xl font-bold text-gray-800 dark:text-white">
                      {pkg.price}
                      <span className="text-lg text-gray-600 dark:text-gray-400 font-normal">/bulan</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleOrderPackage(pkg.name, pkg.price)}
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-800 hover:from-yellow-500 hover:to-orange-600'
                      : `bg-gradient-to-r ${pkg.color} text-white hover:opacity-90`
                  }`}
                >
                  Pilih Paket
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Butuh paket khusus atau ada pertanyaan? Hubungi kami untuk konsultasi gratis!
          </p>
          <a
            href="https://wa.me/6285117246022?text=Halo, saya ingin konsultasi tentang paket internet yang sesuai untuk kebutuhan saya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Packages;