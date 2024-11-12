import { ProductProps } from "@/types/blog";
import { FC } from "react";
import CardSample from "./CardSample";

const ProductsSample: FC<ProductProps> = ({ products }) => {
  //   console.log("ini data products: ", products);

  return (
    <section className="mt-10 flex w-full flex-col bg-red-50 p-5">
      <div className="flex w-full flex-col p-7 text-center max-md:px-5 md:p-16">
        <h2 className="text-4xl font-bold text-red-600 md:text-5xl">
          Products
        </h2>
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
