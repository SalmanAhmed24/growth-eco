import Footer from "@/component/footer";
import "./global.scss";
import Navbar from "@/component/navbar/navbar";
import localFont from "@next/font/local";
import Head from "next/head";
import Link from "next/link";
const futuraLTBT = localFont({
  src: "./fonts/FuturaLtBT.ttf",
  weight: "400",
  style: "normal",
});
export const metadata = {
  title: "GrowthEco | Home",
  icons: {
    icon: "/favicon.png",
  },
  description:
    "Full potential to your Amazon business with our powerhouse solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}
        <Footer />
        <div className="copy">
          <p className={futuraLTBT.className}>
            © 2023 by <Link href={"/"}>Growth Echo</Link> All Rights Reserved.
          </p>
          <Link className={futuraLTBT.className} href={"/"}>
            Privacy Policy
          </Link>
        </div>
      </body>
    </html>
  );
}
