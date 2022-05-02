import { ReactElement } from "react";

type LayoutProps = { children: ReactElement };

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <header>Wesley News</header>

      {children}

      <footer>
        <small>&copy; Copyright 2022, Wesley News</small>
      </footer>
    </>
  );
}
