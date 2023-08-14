"use client";
import SliderAbout from "@/component/aboutSlider";
import Header from "@/component/aboutUsHeader";
import FAQs from "@/component/faq";
import WhoWeAre from "@/component/whoWeAreAbout";
import localFont from "@next/font/local";
import "./aboutUs.scss";
import Image from "next/image";
import Achieve from "@/component/achieve";
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
function AboutUs() {
  return (
    <section>
      <Header
        futuraBK={futuraBK}
        futuraMDBT={futuraMDBT}
        futuraLtBT={futuraLTBT}
        futuraHv={futuraHv}
      />
      <SliderAbout
        futuraBK={futuraBK}
        futuraMDBT={futuraMDBT}
        futuraLtBT={futuraLTBT}
        futuraHv={futuraHv}
      />
      <section className="who-we-comp">
        <WhoWeAre
          title={"Who we are?"}
          imageUrl={"/who-pic-1.png"}
          futuraBK={futuraBK}
          futuraMDBT={futuraMDBT}
          futuraLtBT={futuraLTBT}
          futuraHv={futuraHv}
          content={
            "At Growth Echo, our mission is to revolutionize the marketing landscape by delivering cutting-edge strategies that drive business growth and ignite brand success. Through a dynamic blend of creativity, data-driven insights, and customer-centric approaches, we empower businesses to thrive in the ever-evolving digital age, leaving a lasting impact on their target audience."
          }
          layout={"l"}
          width={370}
          height={380}
        />
        <WhoWeAre
          title={"Our Mission"}
          imageUrl={"/who-pic-2.png"}
          futuraBK={futuraBK}
          futuraMDBT={futuraMDBT}
          futuraLtBT={futuraLTBT}
          futuraHv={futuraHv}
          content={
            "At Growth Echo, our mission is to revolutionize the marketing landscape by delivering cutting-edge strategies that drive business growth and ignite brand success. Through a dynamic blend of creativity, data-driven insights, and customer-centric approaches, we empower businesses to thrive in the ever-evolving digital age, leaving a lasting impact on their target audience."
          }
          layout={"r"}
          width={370}
          height={380}
        />
        <WhoWeAre
          title={"Our Vision"}
          imageUrl={"/who-pic-3.png"}
          futuraBK={futuraBK}
          futuraMDBT={futuraMDBT}
          futuraLtBT={futuraLTBT}
          futuraHv={futuraHv}
          content={
            "At Growth Echo, our mission is to revolutionize the marketing landscape by delivering cutting-edge strategies that drive business growth and ignite brand success. Through a dynamic blend of creativity, data-driven insights, and customer-centric approaches, we empower businesses to thrive in the ever-evolving digital age, leaving a lasting impact on their target audience."
          }
          layout={"l"}
          width={370}
          height={380}
        />
        <WhoWeAre
          title={"Our Services"}
          imageUrl={"/who-pic-4.png"}
          futuraBK={futuraBK}
          futuraMDBT={futuraMDBT}
          futuraLtBT={futuraLTBT}
          futuraHv={futuraHv}
          content={
            "At Growth Echo, our mission is to revolutionize the marketing landscape by delivering cutting-edge strategies that drive business growth and ignite brand success. Through a dynamic blend of creativity, data-driven insights, and customer-centric approaches, we empower businesses to thrive in the ever-evolving digital age, leaving a lasting impact on their target audience."
          }
          layout={"r"}
          width={370}
          height={380}
        />
        <Image
          className="about-rocket"
          src={"/about-rocket.png"}
          width={1470}
          height={700}
        />
      </section>
      <Achieve
        futuraBK={futuraBK}
        futuraMDBT={futuraMDBT}
        futuraLtBT={futuraLTBT}
        futuraHv={futuraHv}
      />
      <FAQs
        futuraBK={futuraBK}
        futuraMDBT={futuraMDBT}
        futuraLtBT={futuraLTBT}
        futuraHv={futuraHv}
      />
    </section>
  );
}

export default AboutUs;
