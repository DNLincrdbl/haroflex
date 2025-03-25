import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haroflex - Minőségi műanyag termékek gyártása",
  description: "Minőségi műanyag termékek gyártása és forgalmazása - Haroflex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        
        {/* Pályázat logó */}
        <div className="fixed -bottom-[60px] right-0 z-50 w-[200px] h-[200px] pointer-events-none select-none hidden lg:block">
          <div 
            className="absolute bottom-0 right-0 w-full h-full"
            style={{
              clipPath: 'path("M200 200v-200c-110.457 0-200 89.543-200 200h200z")',
            }}
          >
            <Image
              src="/images/fejl2018.jpg"
              alt="Széchenyi 2020 - Európai Unió"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
        </div>
      </body>
    </html>
  );
}
