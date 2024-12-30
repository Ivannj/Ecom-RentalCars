import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rental Cars Brisbane IvanNJ",
  description: "Website for Rental your favourite car in your favourite City!",
};

export default function RootLayout({ children }: Readonly< { children: React.ReactNode;} >) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className= {outfit.variable}>
      <NextTopLoader color="#000" />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
