import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    package: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waMessage = `Halo, saya ${formData.name}%0A` +
      `No HP: ${formData.phone}%0A` +
      `Alamat: ${formData.address}%0A` +
      `Paket yang diminati: ${formData.package}%0A` +
      `Pesan: ${formData.message}`;
    
    window.open(`https://wa.me/6285117246022?text=${waMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Siap untuk berlangganan atau ada pertanyaan? Tim kami siap membantu Anda 24/7
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Informasi Kontak
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">WhatsApp</h4>
                  <p className="text-gray-600 dark:text-gray-300">085117246022</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Telepon</h4>
                  <p className="text-gray-600 dark:text-gray-300">085117246022</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Alamat</h4>
                  <p className="text-gray-600 dark:text-gray-300">Melayani Area RT/RW Sekitar</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Jam Operasional</h4>
                  <p className="text-gray-600 dark:text-gray-300">24/7 (Support Online)</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-4">Hubungi Langsung via WhatsApp</h4>
              <p className="mb-4">
                Dapatkan respons cepat dan konsultasi gratis langsung dari tim kami
              </p>
              <a
                href="https://wa.me/6285117246022"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Formulir Kontak
            </h3>
            
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    No. HP/WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alamat Lengkap
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Paket yang Diminati
                </label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Pilih Paket</option>
                  <option value="Standard A - 10 Mbps">Standard A - 10 Mbps</option>
                  <option value="Standard B - 20 Mbps">Standard B - 20 Mbps</option>
                  <option value="Business - 30 Mbps">Business - 30 Mbps</option>
                  <option value="Premium - 50 Mbps">Premium - 50 Mbps</option>
                  <option value="VIP - 100 Mbps">VIP - 100 Mbps</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan (Opsional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tuliskan pertanyaan atau pesan Anda..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Kirim via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;