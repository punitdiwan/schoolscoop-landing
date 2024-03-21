"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@material-tailwind/react";
import {NextUIProvider} from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body > <ThemeProvider> <NextUIProvider>{children}</NextUIProvider></ThemeProvider></body>
    </html>
  )
}
