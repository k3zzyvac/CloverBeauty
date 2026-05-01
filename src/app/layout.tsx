import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clover Beauty | Malatya Lüks Güzellik Merkezi",
  description: "Clover Beauty ile özel, ayrıcalıklı ve premium güzellik deneyimi. Malatya'da lazer epilasyon, cilt bakımı ve daha fazlası için en estetik adres.",
  keywords: ["Malatya Güzellik Merkezi", "Lüks Estetik Malatya", "Clover Beauty", "Premium Cilt Bakımı Malatya", "Lazer Epilasyon Malatya"],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${playfair.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
