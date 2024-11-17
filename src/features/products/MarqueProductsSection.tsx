import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const spicyImages = Array.from(
  { length: 30 },
  (_, index) => `/assets/Belku-${index + 1}.webp`,
);

const firstRow = spicyImages.slice(0, spicyImages.length / 2);
const secondRow = spicyImages.slice(spicyImages.length / 2);

const SpicyCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl",
        "bg-orange-50 hover:bg-orange-100", // Light theme
        "dark:bg-orange-900 dark:hover:bg-orange-800", // Dark theme
      )}
    >
      <div className="relative h-[300px] w-full">
        <Image
          src={img}
          alt="Spicy Dish"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          priority={true} // Optional: Prioritize image loading
        />
      </div>
    </figure>
  );
};

const MarqueeProductsSection = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-orange-50 dark:bg-orange-900 md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((img, index) => (
          <SpicyCard key={index} img={img} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((img, index) => (
          <SpicyCard key={index} img={img} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-orange-50 dark:from-orange-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-orange-50 dark:from-orange-900"></div>
    </div>
  );
};

export default MarqueeProductsSection;
