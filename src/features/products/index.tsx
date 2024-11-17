import HeroSection from "./HeroSection";
import ProductsSection from "./ProductsSection";
import { getEntries } from "@/lib/contentful";

const ProductsPage = async () => {
  const blogs = await getEntries();
  if (!blogs) {
    return;
  }
  return (
    <main>
      <HeroSection />
      <ProductsSection products={blogs} />
    </main>
  );
};

export default ProductsPage;
