"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { NextUIProvider } from "@nextui-org/react";
import { Metadata } from "next";
import ScrollTop from "../components/Top";

const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata({ params }) {
//   return {
//     title: "first",
//   }
// }
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Best school software in Madhya Pradesh</title>
        <meta
          name="description"
          content="Edusparsh provides the best school management in mp that helps children, parents, teacher to stay connected. To transition to the digital world at your school, use this school mobile app."
        />
        <link
          rel="canonical"
          href="https://www.edusparsh.com/"
          key="canonical"
        />
      </head>
      <body>
        {" "}
        <ThemeProvider>
          {" "}
          <NextUIProvider>
            {children} <ScrollTop />
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
