import { Blog } from "@/types/blog";
import { FC } from "react";
import ProductCard from "./ProductCard";

interface ProductProps {
  products: Blog[];
}

const ProductsSection: FC<ProductProps> = ({ products }) => {
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
      <div className="grid grid-cols-1 gap-3 p-2 md:grid-cols-2 md:gap-5 md:p-10">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
