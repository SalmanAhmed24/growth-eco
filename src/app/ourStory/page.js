"use client";
import SliderAbout from "@/component/aboutSlider";
import Header from "@/component/aboutUsHeader";
import FAQs from "@/component/faq";
import WhoWeAre from "@/component/whoWeAreAbout";
import { Poppins } from "next/font/google";
import localFont from "@next/font/local";
import "./aboutUs.scss";
import Image from "next/image";
import Achieve from "@/component/achieve";
import BackToTop from "@/component/backToTop";
// const futuraHv = localFont({
//   src: "../fonts/FuturaHeavyBT.ttf",
//   weight: "400",
//   style: "normal",
// });
// const futuraBK = localFont({
//   src: "../fonts/FutuBk.ttf",
//   weight: "400",
//   style: "normal",
// });
// const futuraMDBT = localFont({
//   src: "../fonts/FutuMd.ttf",
//   weight: "400",
//   style: "normal",
// });
// const futuraLTBT = localFont({
//   src: "../fonts/FuturaLtBT.ttf",
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
    <section className={`${poppins.className} about-main-wrap`}>
      <BackToTop route={"#home"} />
      <div className={`${poppins.className} content-wrapper`}>
        <h1 className="main-head">Our Story</h1>
        <p>
          It&apos;s an interesting story of the CEO of Growthecho, Faraz Yasin
          in his own words
        </p>
        <p>
          One day, I googled the top 100 countries in the world and was shocked
          to see that neither Pakistani nor even a Muslim exist on that list
        </p>
        <p>I still remember how hard that night was on me</p>
        <p>Couldn&apos;t blink my eyes for a second</p>
        <p>And the other morning,</p>
        <p>Everything changed</p>
        <p>
          I decided to start my own business and be the first to be among those
          hundred representing Muslims and Pakistan as a nation
        </p>
        <p>
          Started researching the product and launched the best one in the
          market.
        </p>
        <p>
          Named the brand “RFAQK” meaning to ask Allah for help over enemies
        </p>
        <p>The company propelled</p>
        <p>All those amazing reviews made me confident and believe in me</p>
        <p>
          And till then, I&apos;ve sold millions of products on Amazon Made $6
          Million in less than a year
        </p>
        <p>
          And now at Growth echo, I am helping other Amazon sellers with my team
          to be successful in the Amazon market.
        </p>
      </div>
      <div className="grow-img-about-wrap">
        <img src="/about-grow.png" alt="about us" />
      </div>
      <div className="team-about-wrap">
        <img src="/about-sub-img.png" alt="about growth eco" />
      </div>
    </section>
  );
}

export default OurStory;
