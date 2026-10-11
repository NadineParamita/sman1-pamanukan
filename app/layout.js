import { Merriweather, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const heading = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});
const body = Source_Sans_3({ subsets: ["latin"] });

export const metadata = {
  title: "SMA Negeri 1 Pamanukan",
  description: "Website profil SMA Negeri 1 Pamanukan, Kabupaten Subang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${heading.variable} ${body.className} bg-white text-slate-700 antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}