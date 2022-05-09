import { NewsCard } from "./NewsCard";

export function NewsList({ newsGroup }) {
  return (
    <div className="max-w-[80%] m-auto mt-4 flex flex-wrap justify-center gap-16">
      {newsGroup.map((news) => (
        <NewsCard key={news.sys.id} news={news} />
      ))}
    </div>
  );
}
