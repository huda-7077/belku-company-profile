"use client";
import * as React from "react";
import useAOS from "@/hooks/useAOS";
import MarqueeTestimonials from "./MarqueeTestimonialSection";

const TestimonialSection = () => {
  useAOS();

  return (
    // <section className="mt-10 flex w-full flex-col overflow-hidden rounded-md bg-red-100 p-5">
    //   <div
    //     className="flex w-full flex-col items-center px-4 pb-2 text-center md:px-16"
    //     data-aos="fade-up"
    //   >
    //     <h2 className="text-4xl font-bold text-red-700 md:text-5xl">
    //       Testimonials
    //     </h2>
    //     <p className="mt-2.5 text-lg font-medium leading-7 text-gray-800 max-md:max-w-full">
    //       We take pride in offering a diverse range of high-quality, flavorful
    //       products that cater to your taste preferences and enhance your
    //       culinary experiences. Our commitment to authenticity and excellence
    //       ensures that every product brings a touch of joy and satisfaction to
    //       your meals. 🌶️✨
    //     </p>
    //   </div>
    <MarqueeTestimonials />
    // </section>
  );
};

export default TestimonialSection;
