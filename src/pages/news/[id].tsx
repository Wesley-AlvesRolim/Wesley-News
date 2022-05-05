import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Layout } from "../../components/Layout";
import { getSingleNews } from "../../services/contentful";

const configsRender = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <img
        src={node.data.target.fields.file.url}
        height={node.data.target.fields.file.details.height}
        width={node.data.target.fields.file.details.width}
        alt={node.data.target.fields.title}
      />
    ),
  },
};

export default function News({ news }) {
  return (
    <>
      <Head>
        <title>{news.fields.title}</title>
        <meta name="description" content={news.fields.description} />
        <link
          rel="canonical"
          href={"https://wesley-news.vercel.app/news/" + news.sys.id}
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />

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
      </Head>
      <Layout title={news.fields.title}>
        <div className="w-4/5 min-h-[21.5rem] py-4 m-auto sm:p-14">
          <div className="w-full max-w-4xl m-auto">
            <img
              className="w-full rounded-[1.875rem] object-cover"
              src={news.fields.thumbnail.fields.file.url}
              alt={`Foto de capa da notícia com o título: ${news.fields.title}`}
            />
          </div>

          <div className="mt-5 whitespace-pre-wrap break-words news-content">
            {documentToReactComponents(news.fields.content, configsRender)}
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
