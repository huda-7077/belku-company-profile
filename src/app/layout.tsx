import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavbarComp from "@/components/NavbarComp";

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

export const metadata: Metadata = {
  title: "Sambal Keluarga Utama",
  description: "Sambal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-none"
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarComp />
        {children}
      </body>
    </html>
  );
}
