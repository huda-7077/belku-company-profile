import NutritionistApp from "@/components/NutritionistComponents/NutritionistApp";
import HomePage from "@/features/home/HomePage";
import { getEntries } from "@/lib/contentful";

export default async function Home() {
  const blogs = await getEntries();
  if (!blogs) {
    return;
  }
  return (
    <main className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500">
      <HomePage blogs={blogs} />
      <NutritionistApp />
    </main>
  );
}
