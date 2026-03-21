import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  title: "Melvin Rivera | Full Stack Developer",
  description:
    "Professional portfolio of Melvin René Rivera Machado — Full Stack Developer specialized in Angular, Java, and AWS with 8+ years experience in enterprise solutions.",
  keywords: ["Full Stack Developer", "Angular", "Java", "AWS", "Spring Boot", "El Salvador"],
  authors: [{ name: "Melvin René Rivera Machado" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} scroll-smooth`}>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
