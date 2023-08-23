import Link from "next/link";
import "./style.scss";
import localFont from "@next/font/local";
import Image from "next/image";
import OurJourney from "@/component/ourJourney";
import { Poppins } from "next/font/google";
import BackToTop from "@/component/backToTop";

// const poppins = localFont({
//   src: "../fonts/FuturaHeavyBT.ttf",
//   weight: "400",
//   style: "normal",
// });
// const poppins = localFont({
//   src: "../fonts/FutuBk.ttf",
//   weight: "400",
//   style: "normal",
// });
// const poppins = localFont({
//   src: "../fonts/FutuMd.ttf",
//   weight: "400",
//   style: "normal",
// });
// const poppins = localFont({
//   src: "../fonts/poppins.ttf",
//   weight: "400",
//   style: "normal",
// });
const poppins = Poppins({
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
function OurStory() {
  return (
    <section className="our-story">
      <BackToTop route={"#home"} />
      <header className="story-header">
        <h1 className={poppins.className}>Our Story</h1>
        <p className={poppins.className}>
          We envision a marketing website that provides an immersive and
          captivating user experience
        </p>
        <Link href={"/"} className={`${poppins.className} story-link`}>
          Contact Us
        </Link>
        <Image
          alt="growth eco"
          src={"/growth-circle.png"}
          width={110}
          height={190}
        />
      </header>
      <OurJourney poppins={poppins} />
    </section>
  );
}

export default OurStory;
