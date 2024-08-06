import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Coupon from "./components/coupon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LIV A LITTO",
  description: "Your one stop shop for everything relaxation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        {/* <Coupon /> */}

        {children}

        {/* <Footer /> */}
      </body>
    </html>
  );
}
