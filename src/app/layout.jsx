import { Comfortaa, Aclonica } from "next/font/google";

import "./globals.css";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  display: "swap",
  weight: ["400", "700"],
});

const aclonica = Aclonica({
    subsets: ["latin"],
    variable: "--font-aclonica",
    display: "swap",
    weight: "400",
  });

export const metadata = {
  title: "Blog de Receitas",
  description:
    "Projeto de um blog de receitas culinárias, consumindo uma API externa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${comfortaa.variable} ${aclonica.variable}`}>
      <body className={comfortaa.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
