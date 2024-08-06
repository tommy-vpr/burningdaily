import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Coupon from "./components/coupon";
import SwiperCarousel from "./components/SwiperCarousel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Burning Daily",
  description: "One stop shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className='flex md:hidden'>
            <SwiperCarousel isMobile={true} />
        </div>
        <Header />
        {/* <Coupon /> */}

        {children}

        {/* <Footer /> */}
      </body>
    </html>
  );
}
