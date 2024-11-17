import BlurFade from "@/components/ui/blur-fade";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center gap-3 bg-gradient-to-bl from-orange-400 via-yellow-400 to-yellow-200 p-10 py-16 text-center text-red-700 md:min-h-[80vh] md:gap-5 md:p-20 md:py-32">
      <BlurFade delay={0.3} inView>
        <h2 className="text-4xl font-bold md:text-6xl">Hello Everyone 👋</h2>
      </BlurFade>
      <BlurFade delay={0.6} inView>
        <p className="mt-4 text-xl md:text-2xl">
          Welcome to our page, where we share our passion for creating the
          spiciest experiences.
        </p>
      </BlurFade>
      <BlurFade delay={0.9} inView>
        <p className="mt-4 text-xl font-semibold md:text-2xl">
          Here, you’ll also discover the story behind our journey and how it all
          began.
        </p>
      </BlurFade>
      <BlurFade delay={1.2} inView>
        <p className="mt-4 text-xl md:text-2xl">
          Get ready to feel the heat and savor the flavor of our hot and spicy
          creations.
        </p>
      </BlurFade>
      <BlurFade delay={1.5} inView>
        <p className="mt-4 text-xl font-semibold md:text-2xl">
          Let’s dive into the world of bold flavors and fiery adventures!
        </p>
      </BlurFade>
    </section>
  );
};

export default HeroSection;
