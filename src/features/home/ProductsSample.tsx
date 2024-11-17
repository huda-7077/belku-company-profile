import { Blog } from "@/types/blog";
import { FC } from "react";
import CardSample from "./CardSample";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProductProps {
  products: Blog[];
}

const ProductsSample: FC<ProductProps> = ({ products }) => {
  const limitedProducts = products.slice(0, 2);

  return (
    <section className="flex w-full flex-col overflow-hidden bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 p-5">
      <div
        className="flex w-full flex-col items-center px-5 py-10 text-center md:px-16 md:py-16"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-red-700 md:text-5xl">
          Products
        </h2>
        <p className="mt-4 text-lg font-medium text-red-700 md:max-w-3xl md:text-xl">
          We take pride in offering a diverse range of high-quality, flavorful
          products that cater to your taste preferences and enhance your
          culinary experiences. Our commitment to authenticity and excellence
          ensures that every product brings a touch of joy and satisfaction to
          your meals. 🌶️✨
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 p-2 md:grid-cols-2 md:gap-8 md:p-10">
        {limitedProducts.map((product, index) => (
          <div
            key={index}
            className="transition-all duration-300 ease-in-out hover:scale-105 hover:rounded-lg hover:bg-red-500 hover:shadow-xl"
          >
            <CardSample product={product} />
          </div>
        ))}
      </div>

      <Link href="/products" className="mt-8 flex justify-center">
        <Button className="h-14 rounded-full border-2 border-red-600 bg-white px-8 py-4 text-lg font-semibold text-red-800 transition-all duration-300 ease-in-out hover:border-red-700 hover:bg-red-600 hover:text-white">
          More Products
        </Button>
      </Link>
    </section>
  );
};

export default ProductsSample;
