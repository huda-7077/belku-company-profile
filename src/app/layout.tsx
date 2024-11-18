import type { Metadata } from "next";
import "./globals.css";
import NavbarComp from "@/components/NavbarComp";
import FooterComp from "@/components/FooterComp";

export const metadata: Metadata = {
  title: "Sambal Keluarga Utama - Sambal Tradisional Indonesia",
  description:
    "Nikmati cita rasa autentik sambal Indonesia dari Sambal Keluarga Utama. Dibuat dengan bahan alami pilihan, sempurna untuk melengkapi hidangan Anda.",
  keywords:
    "sambal, sambal tradisional, sambal Indonesia, sambal pedas, resep sambal, sambal keluarga, sambal alami, makanan pedas, kuliner Indonesia, sambal autentik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-none">
        <NavbarComp />
        {children}
        <FooterComp />
      </body>
    </html>
  );
}
