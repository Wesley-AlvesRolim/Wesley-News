import Link from "next/link";
import { ReactElement } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type LayoutProps = { children: ReactElement; title: string };

export function Layout({ children, title }: LayoutProps) {
  return (
    <div className="h-full min-h-screen relative">
      <Header title={title} />

      {children}

      <div className="pb-40"></div>
      <Footer />
    </div>
  );
}
