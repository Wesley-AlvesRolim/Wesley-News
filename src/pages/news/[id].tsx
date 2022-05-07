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
        <main className="w-4/5 min-h-[21.5rem] py-4 m-auto sm:p-14">
          <div className="w-full max-w-4xl m-auto">
            <img
              className="w-full rounded-[1.875rem] object-cover"
              src={news.fields.thumbnail.fields.file.url}
              alt={`Foto de capa da notícia com o título: ${news.fields.title}`}
            />
          </div>

          <article className="text-black dark:text-white">
            <section className="mt-5 whitespace-pre-wrap break-words news-content">
              {documentToReactComponents(news.fields.content, configsRender)}
            </section>

            <footer className="mt-8 text-gray-700 dark:text-gray-400 flex hover:text-gray-800 dark:hover:text-gray-300 transition-colors">
              <img
                className="w-10 h-10 mr-4 rounded-full"
                src={
                  news.fields.author.fields.image?.fields.file.url
                    ? "https:" + news.fields.author.fields.image.fields.file.url
                    : "/user-profile.png"
                }
                alt={`Foto do autor dessa notícia. Seu nome é: ${news.fields.author.fields.name}`}
              />
              <div className="flex flex-col">
                <h3> {news.fields.author.fields.name}</h3>
                <time>
                  {new Intl.DateTimeFormat("pt-BR", {
                    dateStyle: "full",
                  }).format(new Date(news.sys.createdAt))}
                </time>
              </div>
            </footer>
          </article>
        </main>
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
