import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";
// image
import CodingLogo from "@/assets/CodingLarge.png";

export const metadata = {
  title: "Coding Quiz",
  description: "Learn coding via an onlne quiz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-[rgb(48,48,48)] text-white `}>
        <main className="max-w-[900px] w-full m-auto flex flex-col items-center">
          <Image src={CodingLogo} alt="logo" className="w-[280px] mt-8" />
          {children}
        </main>
      </body>
    </html>
  );
}
