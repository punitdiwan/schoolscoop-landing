"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@material-tailwind/react";
import {NextUIProvider} from "@nextui-org/react";
import { Metadata } from 'next';


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Best school software in Madhya Pradesh</title>
        <meta name='description' content='Edusparsh provides the best school management in mp that helps children, parents, teacher to stay connected.' />
      </head>
        <body > <ThemeProvider> <NextUIProvider>{children}</NextUIProvider></ThemeProvider></body>
    </html>
  )
}
