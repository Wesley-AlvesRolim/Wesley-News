import Head from "next/head";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout/";
import { HighlightNews } from "../components/HighlightNews";
import { Loading } from "../components/Loading";
import { NewsList } from "../components/NewsList";
import { MoreNewsButton } from "../components/MoreNewsButton";

export default function Home() {
  const [newsTotal, setNewsTotal] = useState(0);
  const [newsGroup, setNewsGroup] = useState([]);
  const [isLoadingMoreNews, setIsLoadingMoreNews] = useState(false);
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

            {newsGroup.length < newsTotal && (
              <MoreNewsButton
                isLoading={isLoadingMoreNews}
                setIsLoading={setIsLoadingMoreNews}
                onRequestMoreNews={getNews}
                length={newsGroup.length}
              />
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
