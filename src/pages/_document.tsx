import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Radio+Canada:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="author" content="Wesley Alves Rolim" />
        <meta name="creator" content="Wesley Alves Rolim DEV" />
        <meta name="copyright" content="Wesley Alves Rolim, Coders Club" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-language" content="pt-br" />
        <link rel="canonical" href="https://wesley-news.vercel.app" />

        <meta property="og:site_name" content="Wesley News" />
        <meta property="og:title" content="Wesley News | Home" />
        <meta
          property="og:description"
          content="Todas as notícias do mundo estarão presentes aqui."
        />
        <meta property="og:url" content="https://wesley-news.vercel.app" />
        <meta
          property="og:image"
          content="https://wesley-news.vercel.app/Logo.svg"
        />
        <meta property="og:locale" content="pt-br" />
        <meta property="og:type" content="website" />
      </Head>
      <body className="bg-white dark:bg-gray-900 transition-colors">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
