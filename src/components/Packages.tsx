import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      name: 'Standard A',
      speed: '10',
      price: '150.000',
      originalPrice: '200.000',
      discount: '25%',
      features: [
        'Ideal untuk rumah dan apartemen',
        'Kecepatan tinggi untuk kebutuhan sehari-hari',
        'Cocok untuk browsing, YouTube, & chat',
        'Streaming video lancar'
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Standard B',
      speed: '20',
      price: '200.000',
      originalPrice: '275.000',
      discount: '27%',
      features: [
        'Ideal untuk rumah dan apartemen',
        'Kecepatan dasar dengan kualitas baik',
        'Kecepatan lebih tinggi',
        'Streaming, game call, & belajar online lancar'
      ],
      popular: true,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Business',
      speed: '30',
      price: '265.000',
      originalPrice: '350.000',
      discount: '24%',
      features: [
        'Cocok untuk rumah, usaha kecil-menengah',
        'Kecepatan lebih tinggi untuk beban kerja',
        'Zoom, upload file, dan multitasking Aman'
      ],
      popular: false,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Premium',
      speed: '50',
      price: '300.000',
      originalPrice: '400.000',
      discount: '25%',
      features: [
        'Untuk rumah, perusahaan besar & area umum',
        'Kecepatan super cepat untuk lalu lintas internet yang padat',
        'Streaming, streaming, dan berbagi bareng'
      ],
      popular: false,
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'VIP',
      speed: '100',
      price: '500.000',
      originalPrice: '650.000',
      discount: '23%',
      features: [
        'Untuk rumah tangga modern dengan beban maksimal',
        'Kecepatan streaming maksimal',
        'Streaming 4K, main game, upload video tanpa ngelag'
      ],
      popular: false,
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Pilih Paket yang Tepat untuk Anda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dapatkan kecepatan internet yang sesuai dengan kebutuhan dan budget Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative group ${pkg.popular ? 'lg:scale-105' : ''}`}>
              {/* Discount Badge */}
              <div className="absolute -top-3 -right-3 z-10">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  -{pkg.discount}
                </div>
              </div>
              
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Terpopuler
                </div>
              )}
              
              <div className={`h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 ${
                pkg.popular ? 'ring-2 ring-purple-500' : ''
              }`}>
                <div className={`bg-gradient-to-r ${pkg.color} p-6 rounded-t-2xl text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                    <Zap className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">{pkg.speed}</div>
                    <div className="text-sm opacity-90">Mbps</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-center mb-6">
                    {/* Original Price (Crossed Out) */}
                    <div className="text-lg text-gray-400 line-through mb-1">
                      Rp {pkg.originalPrice}
                    </div>
                    {/* Discounted Price */}
                    <div className="text-3xl font-bold text-gray-800">
                      Rp {pkg.price}
                    </div>
                    <div className="text-gray-600">/bulan</div>
                    {/* Savings Amount */}
                    <div className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold mt-2">
                      Hemat Rp {(parseInt(pkg.originalPrice.replace('.', '')) - parseInt(pkg.price.replace('.', ''))).toLocaleString('id-ID')}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={`https://wa.me/6285117246022?text=Halo, saya tertarik dengan paket ${pkg.name} ${pkg.speed} Mbps`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-xl font-semibold text-center transition-all duration-200 transform hover:scale-105 block ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    Pilih Paket
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Limited Time Offer Banner */}
        <div className="mt-12 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 rounded-2xl p-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 animate-pulse">
              🔥 PROMO TERBATAS! 🔥
            </h3>
            <p className="text-lg md:text-xl mb-6">
              Dapatkan diskon hingga <span className="text-yellow-300 font-bold text-2xl">27%</span> untuk semua paket!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                <span className="text-sm">Berlaku sampai akhir bulan</span>
              </div>
              <a
                href="https://wa.me/6285117246022?text=Halo, saya tertarik dengan promo diskon yang sedang berlangsung"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105"
              >
                Klaim Diskon Sekarang!
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Butuh paket khusus atau ada pertanyaan?
          </p>
          <a
            href="https://wa.me/6285117246022"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105"
          >
            Konsultasi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Packages;