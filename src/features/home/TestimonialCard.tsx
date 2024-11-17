import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

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

export default TestimonialCard;
