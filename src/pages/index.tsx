import Head from "next/head";
import { Layout } from "../components/Layout";

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
        <h1>main</h1>
      </main>
    </>
  );
}

Home.getLayout = (page) => {
  return <Layout title="News">{page}</Layout>;
};
