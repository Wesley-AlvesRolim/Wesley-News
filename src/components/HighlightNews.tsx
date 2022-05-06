import Link from "next/link";
export function HighlightNews({ news }) {
  return (
    <Link href={`/news/${news.sys.id}`} passHref>
      <a>
        <div className="w-4/5 m-auto mt-[-42px] p-6 rounded-tl-[1.875rem]  bg-white flex flex-wrap-reverse justify-center md:p-14 xl:flex-nowrap hover:cursor-pointer">
          <div className="w-[35.75rem] lg:max-h-80">
            <h2 className="mb-[0.625rem] font-bold text-[#232323] text-2xl">
              {news.fields.title}
            </h2>
            <p className="text-lg">{news.fields.description ?? ""}</p>

            <div className="mt-[0.625rem] flex items-center">
              <img
                src={
                  news.fields.author.fields.image.fields.file.url
                    ? "https:" + news.fields.author.fields.image.fields.file.url
                    : "/user-profile.png"
                }
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

          <div className="w-[35.625rem] max-h-80">
            <img
              className="w-full h-full rounded-[1.25rem] object-cover hover:opacity-90 hover:scale-105 transition-transform"
              src={news.fields.thumbnail.fields.file.url}
              alt="Capa da notícia"
            />
          </div>
        </div>
      </a>
    </Link>
  );
}
