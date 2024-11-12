"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useAOS from "@/hooks/useAOS";
import { Blog } from "@/types/blog";
import Image from "next/image";
import { FC } from "react";

interface CardSampleProps {
  product: Blog;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);
};

const calculateNewPrice = (price: number) => {
  const increasedPrice = price * 1.1;
  return Math.round(increasedPrice / 1000) * 1000;
};

const CardSample: FC<CardSampleProps> = ({ product }) => {
  const originalPrice = product.price;
  const newPrice = calculateNewPrice(originalPrice);

  useAOS();

  return (
    <div className="p-2">
      <Card
        className="rounded-lg border border-red-500 shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        data-aos="fade-up"
      >
        <CardHeader>
          <div className="relative h-[300px] w-full md:h-[400px]">
            <Image
              src={product.thumbnail}
              alt={product.thumbnailName}
              fill
              className="rounded-t-lg object-cover object-center"
            />
          </div>
        </CardHeader>
        <CardContent className="bg-red-50 p-5">
          <div className="mb-3">
            <Badge
              variant="outline"
              className="rounded-sm bg-red-100 text-red-600"
            >
              Spicy
            </Badge>
          </div>
          <h2 className="my-2 line-clamp-2 text-xl font-bold text-red-800">
            {product.title}
          </h2>
          <p className="line-clamp-4 text-red-700">{product.description}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between bg-red-50 p-5">
          <div className="flex items-center gap-2">
            <span className="text-red-600 line-through">
              {formatCurrency(newPrice)}
            </span>
            <span className="text-lg font-bold text-red-600">
              {formatCurrency(originalPrice)}
            </span>
          </div>
          <Button className="bg-red-600 text-white hover:bg-red-700">
            Buy Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardSample;
