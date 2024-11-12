import NutritionistPage from "@/components/NutritionistPage/NutritionistPage";
import CompanyHistory from "./CompanyHistory";
import HeroSection from "./HeroSection";

const AboutMe = () => {
  return (
    <div className="container mx-auto bg-none p-5">
      <HeroSection />
      <CompanyHistory />
      <NutritionistPage />
    </div>
  );
};

export default AboutMe;
