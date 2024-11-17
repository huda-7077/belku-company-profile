import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";

const getRandomImages = (count: number) => {
  const totalImages = 21;
  const selectedIndexes = new Set<number>();

  while (selectedIndexes.size < count) {
    const randomIndex = Math.floor(Math.random() * totalImages) + 1;
    selectedIndexes.add(randomIndex);
  }

  return Array.from(selectedIndexes).map(
    (index) => `/assets/Belku-${index}.webp`,
  );
};

const images = getRandomImages(6);

const ProductImagesSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-red-700 to-red-400 p-10 text-center">
      <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl">
        Product Gallery
      </h1>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.1} inView>
            <div className="relative mb-6 h-64 overflow-hidden rounded-lg shadow-lg md:h-80">
              <Image
                className="object-cover duration-200 hover:scale-110"
                src={imageUrl}
                alt={`Spicy Image ${idx + 1}`}
                fill
              />
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default ProductImagesSection;
