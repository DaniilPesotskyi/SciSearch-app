import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";
import clsx from "clsx";
import { ToastContainer } from "react-toastify";

import Header from "@/components/common/Header/Header";
import ScrollToTopButton from "@/components/common/ScrollToTopButton/ScrollToTopButton";

import { Providers } from "@/redux/Providers";

const roboto = Roboto({
  weight: ["300", "400"],
  style: "normal",
  subsets: ["cyrillic", "cyrillic-ext"],
});

const openSans = Open_Sans({
  weight: ["500", "600"],
  style: "normal",
  subsets: ["cyrillic", "cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "SciSearch | Домашня сторінка",
  description: "Додаток для пошуку формул онлайн",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="uk">
        <body className={clsx(roboto.className, openSans.className)}>
          <Header />
          {children}
          <ToastContainer position="top-center" />
          <ScrollToTopButton />
        </body>
      </html>
    </Providers>
  );
}
