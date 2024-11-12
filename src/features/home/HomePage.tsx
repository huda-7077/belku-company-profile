import React, { FC } from "react";
import HeroSection from "./HeroSection";
import CompanyOverview from "./CompanyOverview";
import { Blog } from "@/types/blog";
import ProductsSample from "./ProductsSample";

interface HomePageProps {
  blogs: Blog[];
}

const HomePage: FC<HomePageProps> = ({ blogs }) => {
  // console.log("ini isi blogs di komponen blog: ", blogs);
  if (!blogs) {
    return;
  }
  return (
    <main className="container mx-auto p-5">
      <HeroSection />
      <CompanyOverview />
      <ProductsSample products={blogs} />
    </main>
  );
};

export default HomePage;
