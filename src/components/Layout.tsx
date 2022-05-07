import Link from "next/link";
import { ReactElement } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

type LayoutProps = { children: ReactElement; title: string };

export function Layout({ children, title }: LayoutProps) {
  return (
    <div className="h-full min-h-screen relative">
      <header className="w-full min-h-72 pt-4 px-4 pb-12 bg-black rounded-b-[6.25rem] flex flex-wrap justify-center text-center md:px-32">
        <div className="w-full flex items-center justify-between sm:self-start">
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
          <ThemeSwitcher />
        </div>
        <h1 className="w-11/12 text-white text-4xl sm:w-8/12">{title}</h1>
      </header>

      {children}

      <div className="pb-40"></div>
      <footer className="w-full h-28 absolute bottom-0 bg-black text-white flex items-center justify-center">
        <div className="w-4/5 h-4/5 flex justify-between items-center flex-wrap">
          <hr className="w-full border-t border-[#ff2147]" />
          <ul className="m-auto flex flex-wrap gap-8 sm:order-2">
            <li title="Meu Github">
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-2 hover:animate-pulse"
                href="https://github.com/Wesley-AlvesRolim"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  height="24"
                  viewBox="0 0 16 16"
                  fill="#e3e9ef"
                  className="rounded-full"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                <span>Github</span>
              </a>
            </li>
            <li title="Meu Linkedin">
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-2 hover:animate-pulse"
                href="https://www.linkedin.com/in/wesley-alves-rolim-2bba1b209/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  height="24"
                  viewBox="0 0 34 34"
                  fill="#e3e9ef"
                  className="rounded-full"
                >
                  <g>
                    <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"></path>
                  </g>
                </svg>
                <span>Linkedin</span>
              </a>
            </li>
          </ul>
          <small className="m-auto">&copy; Copyright 2022, Wesley News</small>
        </div>
      </footer>
    </div>
  );
}
