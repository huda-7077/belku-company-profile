import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { getEntries } from "@/lib/contentful";

const BlogsSection = async () => {
  const blogs = await getEntries();

  return (
    <section className="flex w-full flex-col overflow-hidden bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 p-5">
      <div
        className="flex w-full flex-col items-center px-5 py-10 text-center md:px-16 md:py-16"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-red-100 md:text-5xl">Blogs</h2>
        <p className="mt-4 text-lg font-medium text-red-100 md:max-w-3xl md:text-xl">
          Welcome to the world of sambal! Our sambal collection is a blend of
          spicy and flavorful stories, crafted by food enthusiasts, chefs, and
          true sambal lovers. Here’s what you can discover in our sambal
          universe! 🌶️
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 lg:grid-cols-3">
        {blogs?.map((blog, index) => (
          <Link href={`/${blog.slug}`} key={index} passHref>
            <Card
              data-aos="fade-up"
              className="transform cursor-pointer overflow-hidden transition duration-300 ease-in-out hover:scale-105 hover:border-red-600 hover:bg-red-50 hover:shadow-xl"
            >
              <CardHeader className="relative h-[250px] w-full overflow-hidden md:h-[400px]">
                <div>
                  <Image
                    src={blog.thumbnail}
                    alt={blog.thumbnailName}
                    fill
                    className="transform rounded-t-lg object-cover object-center transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </CardHeader>
              <CardTitle className="mt-4 p-2 text-xl font-semibold text-red-700 md:px-5">
                {blog.title}
              </CardTitle>
              <CardDescription className="text-md p-2 text-red-600 md:px-5">
                {blog.description}
              </CardDescription>
              <CardContent className="mt-4 text-sm text-zinc-700">
                <p>{blog.content}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
