import Head from "next/head";
import { Layout } from "../components/Layout";
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
        <div className="min-h-[21.5rem] h-4/5 mt-[-42px] m-auto p-6 rounded-tl-[1.875rem]  bg-white flex flex-wrap-reverse justify-center md:p-14">
          <div className="w-[35.75rem] max-h-80">
            <h2 className="mb-[0.625rem] font-bold text-[#232323] text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p className="text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
              animi quod iure velit corrupti non, quisquam mollitia cum!
              Sapiente nesciunt at quae natus aliquid. Aliquid dolorem quo
              quaerat necessitatibus. Odio.
            </p>

            <div className="mt-[0.625rem] flex items-center">
              <img
                src="/user-profile.png"
                alt="Photo of jornalist"
                className=" h-12 w-12 mr-4 rounded-full object-cover"
              />
              <div className="text-gray-700 flex flex-col">
                <h3>Um jornalista</h3>
                <time>jul 5, 2018</time>
              </div>
            </div>
          </div>

          <div className="w-[35.625rem] max-h-80">
            <img
              className="w-full h-full rounded-[1.25rem] object-cover"
              src="/background-default.jpeg"
              alt="Capa da notícia"
            />
          </div>
        </div>

        <div className="max-w-[80%] m-auto flex flex-wrap justify-center gap-16">
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
