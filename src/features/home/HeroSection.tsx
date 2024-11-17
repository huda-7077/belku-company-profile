"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchHappyCostumer, Member } from "@/lib/randomuser";

const HeroSection = () => {
  const [teamData, setTeamData] = useState<Member[]>([]);

  // Mengambil data tim dari API
  useEffect(() => {
    const getTeamData = async () => {
      try {
        const data = await fetchHappyCostumer();
        setTeamData(data.costumer);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    getTeamData();
  }, []);

  return (
    <section className="grid min-h-[100vh] grid-cols-1 items-center justify-between gap-10 overflow-hidden bg-gradient-to-r from-orange-400 via-red-200 to-yellow-100 p-5 md:grid-cols-2">
      <div className="col-span-1 flex w-full justify-center overflow-hidden rounded-lg border-4 border-orange-500 shadow-lg">
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
          <div className="border-b-4 border-orange-500 py-2.5 text-3xl font-semibold text-orange-600">
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

        <div className="mt-5 flex flex-wrap gap-5 text-lg font-semibold text-red-800 md:mt-12">
          <button className="rounded-lg border border-red-100 bg-red-100 px-6 py-4 hover:bg-red-300">
            Pesan Sekarang
          </button>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2 md:mt-14">
          <div className="flex items-center gap-2 rounded-full border border-orange-500 bg-orange-100 px-2.5 py-2">
            {teamData.map((member, index) => (
              <div
                key={index}
                className="aspect-square w-[50px] overflow-hidden rounded-full"
              >
                <Image
                  src={member.picture.medium}
                  alt={`Happy customer ${index + 1}`}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            ))}
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
