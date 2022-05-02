import Head from "next/head";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wesley News | Home</title>
        <meta
          name="description"
          content="Todas as notícias do mundo estarão presentes aqui."
        />
      </Head>

      <main>
        <h1>main</h1>
      </main>
    </div>
  );
}

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
