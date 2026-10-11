import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SMA Negeri 1 Pamanukan",
  description:
    "Website profil SMA Negeri 1 Pamanukan, Kabupaten Subang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-white text-slate-700 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}