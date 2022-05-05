import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Layout } from "../../components/Layout";
import { getSingleNews } from "../../services/contentful";

export default function News({ news }) {
  return (
    <>
      <Head>
        <title>{news.fields.title}</title>
        <meta name="description" content={news.fields.description} />
        <meta property="og:site_name" content="Wesley news" />
        <meta property="og:title" content={news.fields.title} />
        <meta property="og:description" content={news.fields.description} />
        <meta
          property="og:url"
          content={"https://wesley-news.vercel.app/news/" + news.sys.id}
        />
        <meta
          property="og:image"
          content={"https:" + news.fields.thumbnail.fields.file.url}
        />
        <meta property="og:locale" content="pt-br" />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Head>
      <Layout title={news.fields.title}>
        <div className="w-4/5 min-h-[21.5rem] p-14 m-auto">
          <div className="w-full">
            <img
              className="w-full h-[26rem] rounded-[1.875rem] object-cover"
              src={news.fields.thumbnail.fields.file.url}
              alt={`Foto de capa da notícia com o título: ${news.fields.title}`}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  const news = await getSingleNews(id as string);
  return {
    props: {
      news,
    },
  };
};
