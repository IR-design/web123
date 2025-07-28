import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ajip',
      location: 'Perumahan Kalita',
      image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Internet dari GEN sangat stabil dan cepat. Anak-anak bisa sekolah online tanpa gangguan, dan saya bisa work from home dengan lancar.',
      rating: 5
    },
    {
      name: 'Taopik',
      location: 'Perumahan Kalita',
      image: 'https://images.pexels.com/photos/3656852/pexels-photo-3656852.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Pelayanan customer service sangat ramah dan responsif. Ketika ada masalah, langsung ditangani dengan cepat. Recommended!',
      rating: 5
    },
    {
      name: 'Fadly',
      location: 'Perumahan Kalita',
      image: 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Harga terjangkau dengan kualitas internet yang bagus. Cocok untuk keluarga dengan budget terbatas tapi butuh internet cepat.',
      rating: 5
    },
    {
      name: 'Zaka',
      location: 'Perumahan Kalita',
      image: 'https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Instalasi cepat dan mudah. Teknisi profesional dan menjelaskan dengan baik. Sekarang seluruh keluarga bisa internetan bareng.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Apa Kata Pelanggan Kami?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami. Lihat testimoni dari pelanggan yang sudah merasakan layanan GEN
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-2 h-full">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-blue-200 dark:text-blue-400 mb-2" />
                  <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Bergabunglah dengan ribuan pelanggan puas lainnya
          </p>
          <a
            href="https://wa.me/6285117246022?text=Halo, saya tertarik untuk berlangganan internet GEN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;