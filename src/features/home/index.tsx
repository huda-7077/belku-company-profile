import React, { FC } from "react";
import HeroSection from "./HeroSection";
import CompanyOverview from "./CompanyOverview";

import ProductsSample from "./ProductsSample";

import { getEntries } from "@/lib/contentful";
import TestimonialSection from "./TestimonialSection";

const HomePage = async () => {
  // console.log("ini isi blogs di komponen blog: ", blogs);
  const blogs = await getEntries();
  if (!blogs) {
    return;
  }
  return (
    <main className="mx-auto bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 p-7">
      {/* <main className="container mx-auto p-5"> */}
      <HeroSection />
      <CompanyOverview />
      <ProductsSample products={blogs} />

      {/* </main> */}
      <TestimonialSection />
    </main>
  );
};

export default HomePage;