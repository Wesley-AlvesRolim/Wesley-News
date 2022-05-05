import Head from "next/head";
import { Layout } from "../components/Layout";
import { HighlightNews } from "../components/HighlightNews";
import { PostCard } from "../components/PostCard";

const posts = [
  {
    id: 1,
    title:
      "Instagram da Nvidia é invadido e usado para anunciar sorteio falso; saiba como se proteger",
    description:
      "Postagens na conta para o Brasil da fabricante de chips prometem placas de vídeo aos seguidores. Empresa alertou no Twitter que conteúdo é fraudulento e informou que tenta resolver a situação.",
    thumbnail: "/background-default.jpeg",
  },
  {
    id: 2,
    title:
      "Instagram da Nvidia é invadido e usado para anunciar sorteio falso; saiba como se proteger",
    description:
      "Postagens na conta para o Brasil da fabricante de chips prometem placas de vídeo aos seguidores. Empresa alertou no Twitter que conteúdo é fraudulento e informou que tenta resolver a situação.",
    thumbnail: "/background-default.jpeg",
  },
  {
    id: 3,
    title:
      "Instagram da Nvidia é invadido e usado para anunciar sorteio falso; saiba como se proteger",
    description:
      "Postagens na conta para o Brasil da fabricante de chips prometem placas de vídeo aos seguidores. Empresa alertou no Twitter que conteúdo é fraudulento e informou que tenta resolver a situação.",
    thumbnail: "/background-default.jpeg",
  },
  {
    id: 4,
    title:
      "Instagram da Nvidia é invadido e usado para anunciar sorteio falso; saiba como se proteger",
    description:
      "Postagens na conta para o Brasil da fabricante de chips prometem placas de vídeo aos seguidores. Empresa alertou no Twitter que conteúdo é fraudulento e informou que tenta resolver a situação.",
    thumbnail: "/background-default.jpeg",
  },
];

export default function Home() {
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
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </>
  );
}

Home.getLayout = (page) => {
  return <Layout title="News">{page}</Layout>;
};
