import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import { ClerkProvider } from '@clerk/nextjs'
import Head from "next/head"; 
import { Toaster } from "@/components/ui/toaster"

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brivify | Rental Cars Brisbane",
  description: "Website for Rental your favourite car in your favourite City!",
};

export default function RootLayout({ children }: Readonly< { children: React.ReactNode;} >) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
      <link rel="icon" href="/logoWhite.svg" type="image/svg+xml" />
      </head>
      <body className= {outfit.variable}>
      <NextTopLoader color="#000" />
        {children}
        <Toaster />
      </body>
    </html>
    </ClerkProvider>
  );
}
