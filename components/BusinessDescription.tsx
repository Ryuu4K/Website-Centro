import React from 'react'

const BusinessDescription = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Tentang Centro Net Cafe</h2>
        <p className="text-lg text-gray-300 mb-4">
          Centro Net Cafe adalah warnet modern yang menyediakan pengalaman internet berkecepatan tinggi dengan suasana yang nyaman. Kami memahami kebutuhan pengguna internet saat ini, baik untuk bermain game, streaming, atau bekerja.
        </p>
        <p className="text-lg text-gray-300 mb-4">
          Fasilitas kami meliputi:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-300 mb-4">
          <li>Komputer high-end dengan spesifikasi gaming</li>
          <li>Koneksi internet fiber optik 1 Gbps</li>
          <li>Ruangan ber-AC dan kedap suara</li>
          <li>Snack dan minuman 24 jam</li>
          <li>Area lounge untuk bersantai</li>
        </ul>
        <p className="text-lg text-gray-300">
          Kunjungi Centro Net Cafe dan nikmati pengalaman online terbaik Anda!
        </p>
      </div>
    </section>
  )
}

export default BusinessDescription

