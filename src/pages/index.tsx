import { GetServerSideProps } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { HighlightNews } from "../components/HighlightNews";
import { NewsCard } from "../components/NewsCard";
import { getSeveralNews } from "../services/contentful";

export default function Home({ severalNews: severalNewsByProps }) {
  const [highlightNews, ...severalNews] = severalNewsByProps;
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

      <main>
        <HighlightNews news={highlightNews} />

        <div className="max-w-[80%] m-auto mt-4 flex flex-wrap justify-center gap-16">
          {severalNews.map((news) => (
            <NewsCard key={news.sys.id} news={news} />
          ))}
        </div>
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
