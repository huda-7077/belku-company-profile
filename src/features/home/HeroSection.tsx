import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 items-center justify-between gap-10 rounded-md bg-red-50 p-5 md:grid-cols-2">
      <div className="col-span-1 flex w-full justify-center overflow-hidden rounded-lg border-4 border-red-500 shadow-lg">
        <Image
          className="h-full w-full duration-100 hover:scale-110"
          src="/Herosection.webp"
          alt="Foto Belku"
          width={600}
          height={600}
        />
      </div>

      <div className="col-span-1 flex flex-col">
        <div className="flex flex-col">
          <div className="border-b-4 border-red-500 py-2.5 text-3xl font-semibold text-red-600">
            Tingkatkan Nafsu Makan 🤤 Anda dengan
          </div>
          <h1 className="mt-4 text-4xl font-bold text-red-700 md:text-6xl">
            Sambal Keluarga Utama (BELKU)
          </h1>
          <p className="mt-5 text-lg font-medium leading-7 text-red-800">
            Sebagai perusahaan kuliner yang berfokus pada sambal goreng kemasan,
            BELKU menghadirkan cita rasa autentik masakan tradisional Indonesia
            dalam kemasan praktis dan siap saji. Dibuat dari bahan-bahan pilihan
            berkualitas, sambal goreng BELKU tak hanya lezat tetapi juga
            menghadirkan sensasi pedas nikmat yang menggugah selera di setiap
            suapan. Dengan beragam varian sambal yang siap dinikmati kapan saja,
            BELKU berkomitmen untuk melestarikan dan memperkenalkan warisan
            kuliner nusantara tanpa repot memasak dari awal.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-5 text-lg font-semibold text-red-800">
          <button className="rounded-lg border border-red-100 bg-red-100 px-6 py-4 hover:bg-red-300">
            Pesan Sekarang
          </button>
        </div>
        <div className="mt-16 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 rounded-full border border-red-500 bg-red-100 px-2.5 py-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c839a4d0aeab5ad9998ec8306818d38bb3ce6ec370c2369ee2786f4aeb4f874?placeholderIfAbsent=true&apiKey=a54b75d57d8041fca68d2ad49ee3043b"
              alt="Happy customer 1"
              className="aspect-square w-[50px] rounded-full object-contain"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4df3be897c943ef6089ea74ba30ef999d7bb147a82290e0b4865754f63e73c9c?placeholderIfAbsent=true&apiKey=a54b75d57d8041fca68d2ad49ee3043b"
              alt="Happy customer 2"
              className="aspect-square w-[50px] rounded-full object-contain"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e553eed193c8aa00c3cdb2e55ce6cd8b57122ee452e191b68cd8659fa4ef630?placeholderIfAbsent=true&apiKey=a54b75d57d8041fca68d2ad49ee3043b"
              alt="Happy customer 3"
              className="aspect-square w-[50px] rounded-full object-contain"
            />
          </div>
          <div className="text-xl font-semibold text-red-700">
            <span className="font-bold text-red-500">430+</span> Happy Customers
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
