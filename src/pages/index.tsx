import Head from "next/head";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { HighlightNews } from "../components/HighlightNews";
import { Loading } from "../components/Loading";
import { NewsList } from "../components/NewsList";

export default function Home() {
  const [newsTotal, setNewsTotal] = useState(0);
  const [newsGroup, setNewsGroup] = useState([]);
  const [highlightNews, ...restOfNews] = newsGroup;

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

            <NewsList newsGroup={restOfNews} />

            {newsGroup.length >= newsTotal ? (
              ""
            ) : (
              <div className="mt-12">
                <button
                  title="Botão responsável por carregar mais notícias"
                  type="button"
                  className="block w-full max-w-[15rem] m-auto p-2 bg-[#a8001c] text-white font-bold hover:brightness-125 transition-colors"
                  onClick={() => getNews(newsGroup.length + 4)}
                >
                  Mostrar mais notícias
                </button>
              </div>
            )}
          </>
        ) : (
          <Loading />
        )}
      </main>
    </>
  );
}

Home.getLayout = (page) => {
  return <Layout title="Últimas notícias">{page}</Layout>;
};
