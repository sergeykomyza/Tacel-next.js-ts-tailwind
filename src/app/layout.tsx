import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Header from "../components/header/page";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
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
        className={`${robotoRegular.variable} ${robotoBold.variable} antialiased`}
      >
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
