"use client";
import useAOS from "@/hooks/useAOS";

const CompanyOverview = () => {
  useAOS();

  return (
    <section className="mt-10 flex w-full flex-col bg-red-50 p-5">
      <div
        className="flex w-full flex-col p-7 text-center max-md:px-5 md:p-16"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-red-600 md:text-5xl">
          Company Overview
        </h2>
      </div>
      <div className="grid w-full grid-cols-1 gap-8 p-5 text-justify text-lg md:grid-cols-3">
        <div
          className="col-span-1 flex w-full items-start rounded-lg bg-red-100 p-5 shadow-lg transition duration-300 ease-in-out hover:border hover:border-red-600 hover:bg-red-300 hover:font-bold"
          data-aos="fade-up"
        >
          <p className="text-red-800">
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
          className="col-span-1 flex w-full items-start rounded-lg bg-red-100 p-5 shadow-lg transition duration-300 ease-in-out hover:border hover:border-red-600 hover:bg-red-300 hover:font-bold"
          data-aos="fade-up"
        >
          <p className="text-red-800">
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
          className="col-span-1 flex w-full items-start rounded-lg bg-red-100 p-5 shadow-lg transition duration-300 ease-in-out hover:border hover:border-red-600 hover:bg-red-300 hover:font-bold"
          data-aos="fade-up"
        >
          <p className="text-red-800">
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
