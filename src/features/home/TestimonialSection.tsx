import Marquee from "@/components/ui/marquee";
import { generateTestimonials } from "@/lib/randomuser";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = async () => {
  const testimonials = await generateTestimonials();

  const rowLength = Math.ceil(testimonials.length / 3);

  const firstRow = testimonials.slice(0, rowLength);
  const secondRow = testimonials.slice(rowLength, rowLength * 2);
  const thirdRow = testimonials.slice(rowLength * 2);

  return (
    <section className="flex w-full flex-col overflow-hidden bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 px-4 py-16 text-white md:min-h-[100vh]">
      <div
        className="mb-10 flex w-full flex-col items-center px-4 pb-2 text-center md:px-16"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-red-800 md:text-5xl">
          Testimonials
        </h2>
        <p className="mt-2.5 text-lg font-medium leading-7 text-red-800 max-md:max-w-full">
          We take pride in offering a diverse range of high-quality, flavorful
          products that cater to your taste preferences and enhance your
          culinary experiences. Our commitment to authenticity and excellence
          ensures that every product brings a touch of joy and satisfaction to
          your meals. 🌶️✨
        </p>
      </div>

      <div
        data-aos="fade-up"
        className="relative flex h-[700px] w-full items-center justify-center overflow-hidden rounded-lg border bg-white shadow-xl"
      >
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((testimonial: Testimonial, index: number) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          vertical
          className="hidden [--duration:10s] md:flex lg:flex"
        >
          {secondRow.map((testimonial: Testimonial, index: number) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          vertical
          className="hidden [--duration:15s] lg:flex"
        >
          {thirdRow.map((testimonial: Testimonial, index: number) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-yellow-300"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-yellow-300"></div>
      </div>
    </section>
  );
};

export default TestimonialSection;
