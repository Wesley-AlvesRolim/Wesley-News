import { NextApiRequest, NextApiResponse } from "next";
import { getSeveralNews } from "../../../services/contentful";

export default async function newsPagination(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { limit } = req.query;
  const { items, total } = await getSeveralNews(Number(limit));

  return res.status(200).json({
    items,
    total,
  });
}
