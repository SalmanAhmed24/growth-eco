import Link from "next/link";
import "./style.scss";
import localFont from "@next/font/local";
import Image from "next/image";
import OurJourney from "@/component/ourJourney";

const futuraHv = localFont({
  src: "../fonts/FuturaHeavyBT.ttf",
  weight: "400",
  style: "normal",
});
const futuraBK = localFont({
  src: "../fonts/FutuBk.ttf",
  weight: "400",
  style: "normal",
});
const futuraMDBT = localFont({
  src: "../fonts/FutuMd.ttf",
  weight: "400",
  style: "normal",
});
const futuraLTBT = localFont({
  src: "../fonts/FuturaLtBT.ttf",
  weight: "400",
  style: "normal",
});

function OurStory() {
  return (
    <section className="our-story">
      <header className="story-header">
        <h1 className={futuraHv.className}>The Growth Echo</h1>
        <p className={futuraLTBT.className}>
          We envision a marketing website that provides an immersive and
          captivating user experience
        </p>
        <Link href={"/"} className={`${futuraMDBT.className} story-link`}>
          Contact Us
        </Link>
        <Image src={"/growth-circle.png"} width={110} height={190} />
      </header>
      <OurJourney
        futuraBK={futuraBK}
        futuraMDBT={futuraMDBT}
        futuraLtBT={futuraLTBT}
        futuraHv={futuraHv}
      />
    </section>
  );
}

export default OurStory;
