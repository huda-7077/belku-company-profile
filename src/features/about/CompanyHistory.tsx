"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import useAOS from "@/hooks/useAOS";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const CompanyHistory = () => {
  useAOS();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="flex flex-col items-center bg-gradient-to-br from-red-700 via-red-600 to-red-500 p-8 text-center text-white md:min-h-[100vh]">
      <h1 className="p-4 text-4xl font-bold md:py-20 md:text-5xl lg:text-6xl">
        Company History
      </h1>
      <div className="mt-6 space-y-6 transition-all duration-500 ease-in-out">
        <Card
          className="bg-white/20 p-6 text-justify text-lg text-white md:max-w-[800px] md:text-xl"
          data-aos="fade-up"
        >
          <CardContent>
            Usaha Sambal Keluarga Utama (BELKU) berawal dari kecintaan mendalam
            pemilik terhadap kuliner pedas, khususnya sambal, yang menjadi
            bagian tak terpisahkan dari masakan tradisional Indonesia. Menikmati
            sambal dalam setiap hidangan telah menjadi kebiasaan sehari-hari,
            namun proses menyiapkan sambal segar setiap hari cukup menyita waktu
            dan tenaga. Berangkat dari kebutuhan akan sambal yang praktis,
            pemilik pun terinspirasi untuk menciptakan sambal siap saji yang
            tetap memiliki cita rasa otentik dan daya tahan yang lebih lama.
          </CardContent>
        </Card>
        {isExpanded && (
          <>
            <Card
              className="bg-white/20 p-6 text-justify text-lg text-white md:max-w-[800px] md:text-xl"
              data-aos="fade-up"
            >
              <CardContent>
                Berbagai percobaan dilakukan untuk menemukan resep sambal yang
                lezat dan tahan lama tanpa mengorbankan kualitas dan cita rasa.
                Setelah melalui proses eksperimen dan penyempurnaan resep,
                akhirnya terciptalah sambal khas BELKU yang sesuai dengan selera
                masyarakat. Sambal ini bukan hanya praktis, tetapi juga
                menghadirkan sensasi pedas yang menggugah selera dan cocok untuk
                berbagai hidangan.
              </CardContent>
            </Card>
            <Card
              className="bg-white/20 p-6 text-justify text-lg text-white md:max-w-[800px] md:text-xl"
              data-aos="fade-up"
            >
              <CardContent>
                Pada Desember 2022, BELKU resmi meluncurkan produk pertamanya
                yang diberi nama "Belri," yaitu sambal teri. Sambal ini langsung
                mendapat sambutan hangat dari pasar karena cita rasa pedas
                gurihnya yang unik dan autentik. Keberhasilan Belri mendorong
                BELKU untuk terus berinovasi dan memperkenalkan variasi baru.
                Tak lama kemudian, lahirlah sambal-sambal lainnya seperti
                "Belmi" (Sambal Cumi), "BELKU Original" dengan rasa khas sambal
                tradisional, dan "Belcu" (Sambal Ikan Cue).
              </CardContent>
            </Card>
            <Card
              className="bg-white/20 p-6 text-justify text-lg text-white md:max-w-[800px] md:text-xl"
              data-aos="fade-up"
            >
              <CardContent>
                Dengan beragam pilihan ini, BELKU telah berhasil menarik
                perhatian para pencinta kuliner pedas dan tradisional. Sambal
                Keluarga Utama terus berkomitmen menghadirkan produk sambal
                berkualitas yang tidak hanya praktis tetapi juga memudahkan
                masyarakat menikmati cita rasa sambal nusantara di setiap waktu.
              </CardContent>
            </Card>
          </>
        )}
        <Button
          onClick={handleToggle}
          className="mx-auto mt-4 flex items-center justify-center bg-red-700 px-4 py-2 text-lg font-semibold text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-red-800 focus:outline-none"
        >
          <FaChevronDown
            className={`transform transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </Button>
      </div>
    </section>
  );
};

export default CompanyHistory;
