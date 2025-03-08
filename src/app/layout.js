// src/app/layout.js
"use client";

import localFont from "next/font/local";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import "./globals.css";
import { LanguageProvider } from '../context/LanguageContext';
import { metadata } from './siteMetadata'; // Importera metadata

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
