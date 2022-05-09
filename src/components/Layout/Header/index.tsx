import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

type HeaderProps = { title: string };

export function Header({ title }: HeaderProps) {
  return (
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
  );
}
