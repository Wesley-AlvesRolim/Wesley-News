import { ReactElement } from "react";

type LayoutProps = { children: ReactElement; title: string };

export function Layout({ children, title }: LayoutProps) {
  return (
    <div className="h-full min-h-screen relative">
      <header className="w-full h-72 bg-black rounded-b-[6.25rem] pt-40 flex justify-center items-center text-center md:px-32">
        <img
          className="w-44 h-20 absolute left-[10%] top-10 cursor-pointer"
          width={256}
          height={102}
          src="/Logo.svg"
          alt="Logomarca do site com o texto: 'Wesley News'"
        />
        <h1 className="w-8/12 text-white text-4xl">{title}</h1>
      </header>

      {children}

      <footer className="w-full h-28 absolute bottom-0 bg-black flex items-center justify-center">
        <small>&copy; Copyright 2022, Wesley News</small>
      </footer>
    </div>
  );
}
