import Link from "next/link";

export function NewsCard({ news }) {
  return (
    <Link href={`/news/${news.sys.id}`} passHref prefetch>
      <a>
        <div className="w-[28.75rem] text-justify  cursor-pointer">
          <img
            className="w-full h-60 mb-[1.25rem] rounded-2xl object-cover hover:opacity-90 hover:scale-105 transition-transform"
            src={news.fields.thumbnail.fields.file.url}
            alt={`Thumbnail da notícia com o título: ${news.fields.title}`}
          />

          <h3 className="mb-[0.625rem] font-bold text-2xl">
            {news.fields.title}
          </h3>
          <span className="text-lg">{news.fields.description}</span>

          <div className="mt-[0.625rem] flex items-center">
            <img
              src="/user-profile.png"
              alt="Photo of jornalist"
              className=" h-12 w-12 mr-4 rounded-full object-cover"
            />
            <div className="text-gray-700 flex flex-col hover:text-gray-800">
              <h3> {news.fields.author.fields.name}</h3>
              <time>
                {new Intl.DateTimeFormat("pt-BR", {
                  dateStyle: "full",
                }).format(new Date(news.sys.createdAt))}
              </time>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
