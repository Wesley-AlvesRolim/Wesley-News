import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { Layout } from "../../components/Layout/";
import { getSingleNews, getSeveralNews } from "../../services/contentful";
import { NewsList } from "../../components/NewsList";

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

export default function News({ currentNews, latestNews }) {
  return (
    <>
      <Head>
        <title>{currentNews.fields.title}</title>
        <meta name="description" content={currentNews.fields.description} />
        <link
          rel="canonical"
          href={"https://wesley-news.vercel.app/news/" + currentNews.sys.id}
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />

        <meta property="og:site_name" content="Wesley news" />
        <meta property="og:title" content={currentNews.fields.title} />
        <meta
          property="og:description"
          content={currentNews.fields.description}
        />
        <meta
          property="og:url"
          content={"https://wesley-news.vercel.app/news/" + currentNews.sys.id}
        />
        <meta
          property="og:image"
          content={"https:" + currentNews.fields.thumbnail.fields.file.url}
        />
        <meta
          property="og:image:width"
          content={
            currentNews.fields.thumbnail.fields?.file.details.image.width ||
            "1200"
          }
        />
        <meta property="og:locale" content="pt-br" />
        <meta property="og:type" content="website" />

        <meta
          property="twitter:url"
          content={"https://wesley-news.vercel.app/news/" + currentNews.sys.id}
        />
        <meta name="twitter:title" content={currentNews.fields.title} />
        <meta
          name="twitter:description"
          content={currentNews.fields.description}
        />
        <meta
          name="twitter:image"
          content={"https:" + currentNews.fields.thumbnail.fields.file.url}
        />
      </Head>
      <Layout title={currentNews.fields.title}>
        <>
          <main className="w-4/5 min-h-[21.5rem] py-4 m-auto sm:p-14">
            <div className="w-full max-w-4xl m-auto">
              <img
                className="w-full rounded-[1.875rem] object-cover"
                src={currentNews.fields.thumbnail.fields.file.url}
                alt={`Foto de capa da notícia com o título: ${currentNews.fields.title}`}
              />
            </div>

            <article className="text-black dark:text-white">
              <section className="mt-5 whitespace-pre-wrap break-words news-content">
                {documentToReactComponents(
                  currentNews.fields.content,
                  configsRender
                )}
              </section>

              <footer className="mt-8 text-gray-700 dark:text-gray-400 flex hover:text-gray-800 dark:hover:text-gray-300 transition-colors">
                <img
                  className="w-10 h-10 mr-4 rounded-full"
                  src={
                    currentNews.fields.author.fields.image?.fields.file.url
                      ? "https:" +
                        currentNews.fields.author.fields.image.fields.file.url
                      : "/user-profile.png"
                  }
                  alt={`Foto do autor dessa notícia. Seu nome é: ${currentNews.fields.author.fields.name}`}
                />
                <div className="flex flex-col">
                  <h3> {currentNews.fields.author.fields.name}</h3>
                  <time>
                    {new Intl.DateTimeFormat("pt-BR", {
                      dateStyle: "full",
                    }).format(new Date(currentNews.sys.createdAt))}
                  </time>
                </div>
              </footer>
            </article>
          </main>
          {latestNews.length > 0 && (
            <div className="text-black dark:text-gray-50 flex flex-col">
              <h2 className="mt-12 font-bold text-3xl self-center">
                Veja também
              </h2>
              <NewsList newsGroup={latestNews} />
            </div>
          )}
        </>
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

  const currentNews = await getSingleNews(id as string);

  const { items } = await getSeveralNews(3);
  const latestNews = [];
  items.forEach((news) => {
    if (news.sys.id !== id) latestNews.push(news);
  });
  if (latestNews.length === 3) latestNews.pop();
  return {
    props: {
      currentNews,
      latestNews,
    },
  };
};
