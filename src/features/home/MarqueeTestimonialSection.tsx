import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  highlight: string;
  rating: number;
  image: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Alex Rivera",
    role: "CTO",
    company: "InnovateTech",
    content:
      "The AI-driven analytics have revolutionized our product development cycle.",
    highlight: "Insights are now more accurate and faster than ever.",
    rating: 5,
    image: "/api/placeholder/48/48",
  },
  {
    name: "Samantha Lee",
    role: "Marketing Director",
    company: "NextGen Solutions",
    content:
      "Implementing the customer prediction model has drastically improved our targeting strategy.",
    highlight: "Seeing a 50% increase in conversion rates!",
    rating: 5,
    image: "/api/placeholder/48/48",
  },
  {
    name: "Tom Chen",
    role: "Director of IT",
    company: "HealthTech Solutions",
    content:
      "Implementing AI in our patient care systems has improved patient outcomes significantly.",
    highlight:
      "Technology and healthcare working hand in hand for better health.",
    rating: 5,
    image: "/api/placeholder/48/48",
  },
];

const TestimonialCard = ({
  name,
  role,
  company,
  content,
  highlight,
  rating,
  image,
}: Testimonial) => (
  <figure
    className={cn(
      "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4 shadow-lg",
      "border-gray-300 bg-white dark:border-gray-50/[.1] dark:bg-gray-800",
    )}
  >
    <div className="mb-4 flex items-center gap-4">
      <img
        className="h-12 w-12 rounded-full object-cover"
        src={image}
        alt={name}
      />
      <div>
        <figcaption className="text-lg font-semibold text-gray-800 dark:text-white">
          {name}
        </figcaption>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {role} at {company}
        </p>
      </div>
    </div>
    <blockquote className="mb-3 text-gray-700 dark:text-gray-300">
      {content}
    </blockquote>
    <p className="mb-4 font-medium text-red-500">{highlight}</p>
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300 dark:text-gray-600"
          }`}
        />
      ))}
    </div>
  </figure>
);

export function MarqueeTestimonials() {
  const rowLength = Math.ceil(defaultTestimonials.length / 3);

  const firstRow = defaultTestimonials.slice(0, rowLength);
  const secondRow = defaultTestimonials.slice(rowLength, rowLength * 2);
  const thirdRow = defaultTestimonials.slice(rowLength * 2);

  return (
    <section className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 px-4 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-white drop-shadow-lg">
          🔥 What Our Customers Are Saying 🔥
        </h2>

        <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-white shadow-xl">
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {firstRow.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>
          <Marquee
            pauseOnHover
            vertical
            className="hidden [--duration:15s] md:flex lg:flex"
          >
            {secondRow.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>
          <Marquee
            pauseOnHover
            vertical
            className="hidden [--duration:10s] lg:flex"
          >
            {thirdRow.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-red-500"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-yellow-400"></div>
        </div>
      </div>
    </section>
  );
}

export default MarqueeTestimonials;
