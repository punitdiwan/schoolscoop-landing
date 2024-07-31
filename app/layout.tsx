"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { NextUIProvider } from "@nextui-org/react";
import { Metadata } from "next";
import ScrollTop from "../components/Top";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Best school software in Madhya Pradesh</title>
        <meta name="description" content="EduSparsh provides the best school management in MP that helps children, parents, and teachers to stay connected. To transition to the digital world at your school, use this school mobile app." />
        <meta property="og:title" content="Best school software in Madhya Pradesh" />
        <meta property="og:description" content="Best school software in Madhya Pradesh" />
        <meta property="og:url" content="https://www.edusparsh.com" />
        <meta property="og:site_name" content="EduSparsh" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image" content="https://www.edusparsh.com/og-image.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:type" content="website" />
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
