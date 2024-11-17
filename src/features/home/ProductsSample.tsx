import { Blog } from "@/types/blog";
import { FC } from "react";
import CardSample from "./CardSample";

interface ProductProps {
  products: Blog[];
}

const ProductsSample: FC<ProductProps> = ({ products }) => {
  //   console.log("ini data products: ", products);

  return (
    <section className="mt-10 flex w-full flex-col overflow-hidden rounded-md bg-red-50 p-5">
      <div
        className="flex w-full flex-col items-center px-72 pb-2 text-center max-md:max-w-full md:p-16"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-red-600 md:text-5xl">
          Products
        </h2>
        <p className="mt-2.5 text-lg font-medium leading-7 text-zinc-800 max-md:max-w-full">
          We take pride in offering a diverse range of high-quality, flavorful
          products that cater to your taste preferences and enhance your
          culinary experiences. Our commitment to authenticity and excellence
          ensures that every product brings a touch of joy and satisfaction to
          your meals. 🌶️✨
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 p-2 md:grid-cols-2 md:gap-5 md:p-10">
        {products.map((product, index) => (
          <CardSample key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSample;
