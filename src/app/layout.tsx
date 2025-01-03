import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

const robotoRegular = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--roboto-regular",
  weight: "400",
});
const robotoBold = localFont({
  src: "./fonts/Roboto-Bold.ttf",
  variable: "--roboto-bold",
  weight: "700",
});
const robotoLight = localFont({
  src: "./fonts/Roboto-Light.ttf",
  variable: "--roboto-light",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Tacel",
  description: "Пищевые добавки",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${robotoRegular.variable} 
          ${robotoBold.variable} 
          ${robotoLight.variable} 
          antialiased
        `}
      >
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
