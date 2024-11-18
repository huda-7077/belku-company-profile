import { createClient, FieldsType } from "contentful";
import { cache } from "react";

interface ResponseEntry {
  sys: { id: string };
  fields: FieldsType;
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONTMENT_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export const getEntries = async () => {
  try {
    const response = await client.getEntries({
      content_type: "belkuBlog",
    });

    const blogs = response.items.map((blog: ResponseEntry) => {
      return {
        entryId: blog.sys.id,
        title: blog.fields.title,
        link: blog.fields.link,
        slug: blog.fields.slug,
        description: blog.fields.description,
        thumbnail: "https:" + blog.fields.thumbnail.fields.file.url,
        thumbnailName: blog.fields.thumbnail.fields.file.fileName,
        price: blog.fields.price,
        ingridients: blog.fields.ingridients,
        volume: blog.fields.volume,
        content: blog.fields.content,
      };
    });

    return blogs;
  } catch (error) {
    console.log(error);
  }
};
export const getEntriesTeam = async () => {
  try {
    const response = await client.getEntries({
      content_type: "belkuTeam",
    });

    const teams = response.items.map((team: ResponseEntry) => {
      return {
        entryId: team.sys.id,
        name: team.fields.name,
        division: team.fields.division,
        description: team.fields.description,
        thumbnail: "https:" + team.fields.image.fields.file.url,
        thumbnailName: team.fields.image.fields.file.fileName,
        role: team.fields.role,
        quotes: team.fields.quotes,
      };
    });

    return teams;
  } catch (error) {
    console.log(error);
  }
};

export const getEntry = cache(async (slug: string) => {
  try {
    const entries = await getEntries();
    const response = entries?.filter((blog) => blog.slug === slug);
    return response;
  } catch (error) {
    console.log(error);
  }
});
