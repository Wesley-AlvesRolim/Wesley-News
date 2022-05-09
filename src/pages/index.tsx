import Head from "next/head";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { HighlightNews } from "../components/HighlightNews";
import { NewsCard } from "../components/NewsCard";
import { getSeveralNews } from "../services/contentful";

export default function Home() {
  const [newsTotal, setNewsTotal] = useState(0);
  const [newsGroup, setNewsGroup] = useState([]);
  const [highlightNews, ...severalNews] = newsGroup;

  async function getNews(limit: number) {
    const { origin } = window.location;
    const response = await fetch(`${origin}/api/newsPagination/${limit}`);
    const { items, total } = await response.json();
    setNewsGroup(items);
    setNewsTotal(total);
  }
  useEffect(() => {
    getNews(5);
  }, []);
  return (
    <>
      <Head>
        <title>Wesley News | Home</title>
        <meta
          name="description"
          content="Todas as notícias do mundo estarão presentes aqui."
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Head>

      <main className="text-black dark:text-gray-50">
        {newsGroup.length > 0 ? (
          <>
            <HighlightNews news={highlightNews} />

            <div className="max-w-[80%] m-auto mt-4 flex flex-wrap justify-center gap-16">
              {severalNews.map((news) => (
                <NewsCard key={news.sys.id} news={news} />
              ))}
            </div>

            {newsGroup.length >= newsTotal ? (
              ""
            ) : (
              <div className="mt-8">
                <button
                  title="Botão responsável por carregar mais notícias"
                  type="button"
                  className="block w-full max-w-[10rem] m-auto p-2 bg-[#a8001c] text-white font-bold hover:brightness-125 transition-colors"
                  onClick={() => getNews(newsGroup.length + 4)}
                >
                  Mais notícias
                </button>
              </div>
            )}
          </>
        ) : (
          "CARREGANDO"
        )}
      </main>
    </>
  );
}

Home.getLayout = (page) => {
  return <Layout title="Últimas notícias">{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const severalNews = await getSeveralNews();

  return {
    props: {
      severalNews,
    },
  };
};
