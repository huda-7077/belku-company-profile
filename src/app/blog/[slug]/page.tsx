import { FC } from "react";
import { getEntry } from "@/lib/contentful";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import ShareButton from "@/components/ShareButton";

interface ProfileDetailProps {
  params: { slug: string };
}

const pathUrl: FC<ProfileDetailProps> = async ({ params }) => {
  const blogs = await getEntry(params.slug);

  return (
    <>
      {blogs?.map((blog) => (
        <main
          key={blog.entryId}
          className="container mx-auto mt-10 max-w-6xl px-4"
        >
          <section>
            <Badge className="mb-2 w-fit rounded-lg bg-red-600 px-3 py-1 text-white">
              {blog.volume}
            </Badge>
            <h1 className="mb-2 text-5xl font-bold text-red-700">
              {blog.title}
            </h1>
            <div className="mb-2 flex items-center justify-between text-gray-600">
              <ShareButton />
            </div>
            <div className="relative mt-4 h-[200px] border-2 border-red-500 lg:h-[400px]">
              <Image
                className="h-full w-full rounded-lg object-cover"
                width={500}
                height={500}
                src={blog.thumbnail}
                alt={blog.thumbnailName}
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </section>
          <section className="mt-8">{blog.content}</section>
        </main>
      ))}
    </>
  );
};

export default pathUrl;
