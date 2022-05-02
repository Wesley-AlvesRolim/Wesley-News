import Head from "next/head";
import { Layout } from "../../components/Layout";

const post = {
  id: 1,
  title:
    "Instagram da Nvidia é invadido e usado para anunciar sorteio falso; saiba como se proteger",
  description:
    "Postagens na conta para o Brasil da fabricante de chips prometem placas de vídeo aos seguidores. Empresa alertou no Twitter que conteúdo é fraudulento e informou que tenta resolver a situação.",
  thumbnail: "/background-default.jpeg",
  content: `
    O perfil no Instagram da Nvidia Brasil, fabricante de chips para placas de vídeos, foi invadido e usado para anunciar uma promoção falsa. A empresa afirmou na terça-feira (22) que não é responsável pelo conteúdo e que tenta resolver a situação.

As postagens mais recentes no perfil e nos stories da companhia mostram o que seria o anúncio de um sorteio de placas de vídeo e outros componentes para computador. Para participar, os usuários teriam que seguir outros dois perfis na rede social, que seriam de patrocinadores da Nvidia.

As contas marcadas nas publicações até indicam que são de desenvolvedores da Nvidia, mas não têm relação com a fabricante de chips. Os perfis não usavam fotos reais, nem tinham postagens públicas até a publicação desta reportagem. Ainda assim, cada um deles chegou a mais de 1.500 seguidores.


Golpe no Instagram usa perfil de vítima para anunciar ofertas falsas a seguidores
Sua conta no WhatsApp está protegida? Faça o teste e descubra
Invasores do perfil da Nvidia Brasil no Instagram fizeram postagens sobre sorteio falso — Foto: Reprodução/Instagram
Invasores do perfil da Nvidia Brasil no Instagram fizeram postagens sobre sorteio falso — Foto: Reprodução/Instagram

No Twitter, a empresa esclareceu que sua conta no Instagram foi invadida. "A última postagem que fala de um sorteio de 500 GPU [unidade de processamento gráfico] é fraude! Não cliquem! Estamos trabalhando o mais rápido possível para resolver isso", indica a postagem.

O g1 pediu mais detalhes para a Nvidia, mas não teve retorno até a publicação desta reportagem.



Como se proteger
O anúncio do sorteio falso no perfil da Nvidia parece estar sendo usado apenas para ganhar seguidores no Instagram. Em alguns casos, a invasão a perfis também é usada para induzir usuários a fazerem transferências bancárias para criminosos.

A orientação em situações como essa é desconfiar de contas que passaram a anunciar ofertas de uma hora para outra. Se o perfil for de uma pessoa ou empresa conhecida, o ideal é confirmar se o anúncio é verdadeiro por outros meios, como telefone.

Para evitar que seu perfil seja vitrine para ofertas falsas, a melhor saída é ativar a autenticação em dois fatores. Assim, qualquer novo acesso à conta exigirá, além da senha, um código enviado por outro aplicativo instalado no seu celular.

Veja como ativar a autenticação em duas etapas do Instagram:

Acesse seu perfil ao clicar na foto que aparece no canto inferior direito;
Abra o menu (o ícone de três traços horizontais);
Selecione "Configurações";
Selecione "Segurança";
Escolha o item "Autenticação de dois fatores";
Ative uma das opções disponíveis e siga as instruções do app.
  `,
};

export default function News() {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Head>

      <div className="w-4/5 min-h-[21.5rem] p-14 m-auto">
        <div className="w-full">
          <img
            className="w-full h-[26rem] rounded-[1.875rem] object-cover"
            src={post.thumbnail}
            alt={`Foto de capa da notícia com o título: ${post.title}`}
          />
        </div>
      </div>
    </>
  );
}

News.getLayout = (page) => {
  return <Layout title={post.title}>{page}</Layout>;
};
