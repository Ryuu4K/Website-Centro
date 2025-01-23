import React from "react";

const VisiMisi = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Bagian Visi */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
              Visi
            </h2>
            <p>
              Menjadi penyedia layanan internet terkemuka di Indonesia yang
              mendukung kebutuhan masyarakat digital dengan kualitas, inovasi,
              dan pelayanan terbaik.
            </p>
          </div>

          {/* Bagian Misi */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
              Misi
            </h2>
            <p>
              1. Menyediakan akses internet berkualitas tinggi yang cepat,
              stabil, dan terjangkau untuk semua kalangan. <br />
              2. Mendukung komunitas gaming dengan perangkat berspesifikasi
              tinggi dan koneksi tanpa hambatan. <br />
              3. Menciptakan ruang yang nyaman dan ramah sebagai tempat belajar,
              bekerja, dan bermain. <br />
              4. Mengembangkan layanan berbasis teknologi modern untuk
              memberikan pengalaman pelanggan yang unggul. <br />
              5. Berkontribusi pada peningkatan literasi digital dan pertumbuhan
              ekonomi masyarakat lokal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
