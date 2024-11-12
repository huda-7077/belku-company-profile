/**
 * This code was generated by Builder.io
 */
import React from "react";
import Header from "./Header";
import WelcomeSection from "./WelcomeSection";
import OurStorySection from "./OurStorySection";
import AchievementsSection from "./AchievementsSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

const NutritionistPage: React.FC = () => {
  return (
    <div className="flex flex-col items-start px-20 mx-auto w-full max-w-[480px] max-md:pl-5">
      <main className="flex overflow-hidden flex-col items-center bg-stone-50">
        <Header />
        <WelcomeSection />
        <OurStorySection />
        <AchievementsSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
};

export default NutritionistPage;
