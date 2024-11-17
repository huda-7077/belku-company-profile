"use client";
import useAOS from "@/hooks/useAOS";

const CompanyOverview = () => {
  useAOS();

  return (
    <section className="flex h-auto w-full flex-col overflow-hidden bg-gradient-to-r from-red-500 via-red-400 to-red-300 p-5 md:min-h-[100vh]">
      <div
        className="flex w-full flex-col items-center px-5 py-10 text-center md:px-14 md:py-16"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Company Overview
        </h2>
        <p className="mt-4 text-lg font-medium text-zinc-100 md:max-w-3xl md:text-xl">
          A company overview is a brief description that provides insights into
          our company, including the background of its establishment, vision and
          mission, as well as the products or services we offer.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-8 p-5 text-justify text-lg md:grid-cols-3 md:p-14">
        <div
          className="col-span-1 flex w-full items-start rounded-lg bg-red-100 p-5 text-red-800 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-4 hover:border-red-700 hover:bg-red-400 hover:font-bold hover:text-red-100 hover:shadow-xl"
          data-aos="fade-up"
        >
          <p>
            BELKU lahir dari kecintaan pemilik terhadap masakan pedas, khususnya
            sambal, yang telah menjadi bagian penting dari budaya kuliner
            Indonesia. Kebutuhan akan kemudahan dan kepraktisan dalam menyantap
            sambal setiap hari memotivasi pemilik untuk menciptakan sambal siap
            santap yang tahan lama. Setelah melewati berbagai eksperimen,
            lahirlah resep sambal yang memenuhi selera sekaligus dapat disimpan
            dalam waktu yang lebih lama.
          </p>
        </div>
        <div
          className="col-span-1 flex w-full items-start rounded-lg bg-red-100 p-5 text-red-800 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-4 hover:border-red-700 hover:bg-red-400 hover:font-bold hover:text-red-100 hover:shadow-xl"
          data-aos="fade-up"
        >
          <p>
            Pada Desember 2022, BELKU meluncurkan produk pertamanya, yaitu
            "Belri" atau Sambal Teri. Produk ini langsung diminati oleh pasar,
            mendorong BELKU untuk memperluas pilihan sambal dengan varian-varian
            lain, seperti "Belmi" (Sambal Cumi), "BELKU Original", dan "Belcu"
            (Sambal Ikan Cue). Setiap produk diracik dengan kualitas bahan
            terbaik dan proses pembuatan yang higienis, menghadirkan cita rasa
            sambal yang otentik dan nikmat bagi pecinta kuliner Indonesia.
          </p>
        </div>
        <div
          className="col-span-1 flex w-full items-start rounded-lg bg-red-100 p-5 text-red-800 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-4 hover:border-red-700 hover:bg-red-400 hover:font-bold hover:text-red-100 hover:shadow-xl"
          data-aos="fade-up"
        >
          <p>
            BELKU terus berinovasi untuk menghadirkan pengalaman makan sambal
            yang praktis, bercita rasa tinggi, serta membawa aroma dan
            kenikmatan sambal tradisional Indonesia ke setiap rumah tangga dan
            meja makan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
