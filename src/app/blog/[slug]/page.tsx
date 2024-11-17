// "use client";
// import { FC } from "react";
// import { getEntry } from "@/lib/contentful";
// import { Badge } from "flowbite-react";
// import Image from "next/image";
// import { format } from "date-fns";
// import RichTextRenderer from "@/components/RichTextRenderer";
// import ShareButton from "@/components/ShareButton";

// interface ProfileDetailProps {
//   params: { slug: string };
// }

// const pathUrl: FC<ProfileDetailProps> = async ({ params }) => {
//   const blogs = await getEntry(params.slug);

//   return (
//     <>
//       {blogs?.map((blog) => (
//         <main
//           key={blog.entryId}
//           className="container mx-auto mt-10 max-w-6xl px-4"
//         >
//           <section>
//             <Badge className="mb-2 w-fit" color="success" size="sm">
//               {blog.category}
//             </Badge>
//             <h1 className="mb-2 text-5xl font-semibold">{blog.title}</h1>
//             <div className="mb-2 flex items-center justify-between">
//               <h3>{format(new Date(blog.createdAt), "dd MMMM yyyy")}</h3>
//               <ShareButton />
//             </div>
//             <div className="relative h-[200px] lg:h-[400px]">
//               <Image
//                 className="object-cover w-full h-full"
//                 width={500}
//                 height={500}
//                 src={`https:${blog.thumbnail}`}
//                 alt={blog.thumbnailName}
//                 style={{
//                   objectFit: "cover",
//                   objectPosition: "top",
//                   width: "100%",
//                   height: "100%",
//                 }}
//               />
//             </div>
//           </section>
//           <section className="mt-8">
//             <RichTextRenderer richTextContent={blog.content} />
//           </section>
//         </main>
//       ))}
//     </>
//   );
// };

// export default pathUrl;

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
