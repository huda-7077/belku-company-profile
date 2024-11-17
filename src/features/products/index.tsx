import ProductImagesSection from "./ProductImagesSection";
import ProductsSection from "./ProductsSection";
import { getEntries } from "@/lib/contentful";

const ProductsPage = async () => {
  const blogs = await getEntries();
  if (!blogs) {
    return;
  }
  return (
    <main>
      <ProductImagesSection />
      <ProductsSection products={blogs} />
    </main>
  );
};

export default ProductsPage;
