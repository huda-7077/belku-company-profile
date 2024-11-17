"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const HeaderSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  );

  const slogans = [
    { text: "#Belmi - Sambal Cumi", color: "bg-red-500 text-white" },
    { text: "#Belgi - Sambal Original", color: "bg-yellow-500 text-black" },
    { text: "#Belcu - Sambal Ikan Cue", color: "bg-red-600 text-white" },
    { text: "#Belri - Sambal Ikan Teri", color: "bg-orange-500 text-white" },
    { text: "Rasakan Pedasnya!🌶️🌶️🌶️", color: "bg-red-600 text-white" },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full overflow-hidden will-change-transform"
    >
      <CarouselContent className="flex h-[80px]">
        {slogans.map((slogan, index) => (
          <CarouselItem
            key={index}
            className={`flex h-full w-full items-center justify-center ${slogan.color}`}
          >
            <p className="text-xl font-bold">{slogan.text}</p>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HeaderSection;
