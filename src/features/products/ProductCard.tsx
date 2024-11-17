import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
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

const ProductCard: FC<CardSampleProps> = ({ product }) => {
  const originalPrice = product.price;
  const newPrice = calculateNewPrice(originalPrice);

  return (
    <div className="p-3">
      <Card
        className="overflow-hidden rounded-lg border border-red-600 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-red-700 hover:shadow-2xl"
        data-aos="fade-up"
      >
        <CardHeader className="relative h-[250px] w-full overflow-hidden md:h-[400px]">
          <div>
            <Image
              src={product.thumbnail}
              alt={product.thumbnailName}
              fill
              className="transform rounded-t-lg object-cover object-center transition-transform duration-300 hover:scale-110"
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
          <p className="line-clamp-3 text-red-700">{product.description}</p>
        </CardContent>
        <CardFooter className="flex flex-col items-center justify-between gap-4 bg-red-50 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-red-600 line-through">
              {formatCurrency(newPrice)}
            </span>
            <span className="text-lg font-bold text-red-600">
              {formatCurrency(originalPrice)}
            </span>
          </div>
          <Link href={product.link} passHref>
            <Button className="bg-red-600 text-white hover:bg-red-700">
              Buy Now
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
