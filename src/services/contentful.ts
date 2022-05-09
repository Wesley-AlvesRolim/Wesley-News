import * as contentful from "contentful";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_API_KEY,
});

export const getSeveralNews = async (limit: number) => {
  const { items, total } = await client.getEntries({
    content_type: "news",
    limit,
  });
  return { items, total };
};

export const getSingleNews = async (newsId: string) => {
  const singleNews = await client.getEntry(newsId);
  return singleNews;
};
