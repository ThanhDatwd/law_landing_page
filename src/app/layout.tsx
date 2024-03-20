import { ToastContainer } from "react-toastify";

import { ThemeProvider } from "@/providers/ThemeProvider";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css";
import { Metadata } from "next";
import { getStaticURL } from "@/utils/constants";
import Head from "next/head";
import { NextSeo } from "next-seo";

export const metadata: Metadata = {};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <ThemeProvider>
            <ToastContainer theme="dark" />
            <main>{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
