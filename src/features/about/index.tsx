import CompanyHistory from "./CompanyHistory";
import ContactMeSection from "./ContactMeSection";
import HeroSection from "./HeroSection";

const AboutPage = () => {
  return (
    <div className="container mx-auto bg-none p-5">
      <HeroSection />
      <CompanyHistory />
      <ContactMeSection />
    </div>
  );
};

export default AboutPage;
