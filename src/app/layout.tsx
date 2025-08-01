import "@/styles/globals.css";
import "@/styles/portfolio.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer";
import { Noto_Sans_SC } from "next/font/google";
export { metadata } from "./metadata";


const notoSansSC = Noto_Sans_SC({
  subsets: ["latin-ext"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansSC.className} flex flex-col min-h-screen`}>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
      </body>
    </html>
  );
}
