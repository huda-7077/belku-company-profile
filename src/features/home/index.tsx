import React from "react";
import HeroSection from "./HeroSection";
import CompanyOverview from "./CompanyOverview";

import ProductsSample from "./ProductsSample";

import { getEntries } from "@/lib/contentful";
import TestimonialSection from "./TestimonialSection";
import BlogsSection from "./BlogsSection";

const HomePage = async () => {
  const blogs = await getEntries();
  if (!blogs) {
    return;
  }
  return (
    <main>
      <HeroSection />
      <CompanyOverview />
      <ProductsSample products={blogs} />
      <BlogsSection />
      <TestimonialSection />
    </main>
  );
};

export default HomePage;
