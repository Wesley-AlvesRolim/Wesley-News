import Link from "next/link";
import { ReactElement } from "react";

type LayoutProps = { children: ReactElement; title: string };

export function Layout({ children, title }: LayoutProps) {
  return (
    <div className="h-full min-h-screen relative">
      <header className="w-full min-h-72 pt-4 pb-12 bg-black rounded-b-[6.25rem] flex flex-wrap justify-center text-center md:px-32">
        <div className="w-full sm:self-start">
          <Link href="/" passHref>
            <a>
              <img
                className="w-44 h-20 my-8 cursor-pointer"
                width={256}
                height={102}
                src="/Logo.svg"
                alt="Logomarca do site com o texto: 'Wesley News' e que serve para voltar para a paǵina inicial"
              />
            </a>
          </Link>
        </div>
        <h1 className="w-8/12 text-white text-4xl">{title}</h1>
      </header>

      {children}

      <div className="pb-40"></div>
      <footer className="w-full h-28 absolute bottom-0 bg-black flex items-center justify-center">
        <div className="w-4/5 h-4/5 flex items-center flex-wrap">
          <hr className="w-full border-t border-[#ff2147]" />
          <small className="text-white">
            &copy; Copyright 2022, Wesley News
          </small>
        </div>
      </footer>
    </div>
  );
}
