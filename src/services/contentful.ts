import * as contentful from "contentful";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_API_KEY,
});

export const getSeveralNews = async () => {
  const { items } = await client.getEntries({
    content_type: "news",
  });
  return items;
};

export const getSingleNews = async (newsId: string) => {
  const singleNews = await client.getEntry(newsId);
  return singleNews;
};
