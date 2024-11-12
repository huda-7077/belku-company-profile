import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="mx-auto items-center bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 p-10 text-center">
      <div className="mb-4 md:mb-10">
        <h1 className="text-4xl font-bold text-red-700 md:text-5xl">
          About Me
        </h1>
      </div>
      <div className="relative mx-auto flex h-[400px] w-full justify-center overflow-hidden rounded-lg border-4 border-red-500 shadow-lg md:h-[600px] md:w-full md:max-w-[1000px]">
        <Image
          className="h-full w-full object-cover object-center duration-100 hover:scale-110"
          src="/AboutUs.webp"
          alt="Foto Belku"
          fill
        />
      </div>
    </section>
  );
};

export default HeroSection;
