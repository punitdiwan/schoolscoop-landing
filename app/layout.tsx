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
       <!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NLKJ4KFS');</script>
<!-- End Google Tag Manager -->

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
