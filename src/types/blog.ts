export interface Blog {
  entryId: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  thumbnailName: string;
  price: number;
  ingridients: string[];
  volume: number;
  content: any;
}

export interface ProductProps {
  products: Blog[];
}
