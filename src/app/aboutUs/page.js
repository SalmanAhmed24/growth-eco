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
            "GrowthEcho is an Amazon service-providing company spread globally and grown into World’s top Amazon branded sellers. It was built by two childhood friends, Faraz Yasin, and Shahzaib Khalid, to bring more economic opportunities to the country. They’ve grown their own business to $6 million in one year and now helping other Amazon sellers with the same applied strategies."
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
            "We are on a mission to help existing Amazon sellers grow their businesses and increase their profits by 10-50%. We take day-to-day operations off your shoulders that free your time and energy so that you can invest in other business challenges."
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
            "Our vision is to offer unique strategies for brands to level up their Amazon game and increase profits by 10-50% with little or no effort along with maximizing your visibility & profits by 10-50% without non-converting listings & bleeding on Amazon PPC"
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
            "Every business is unique and we get along with you as a team and provide you with done-for your account management. which includes Amazon product research, Amazon product listing optimization, Amazon Advertising, Product Sourcing, Amazon inventory management, Brand storefront, Enhanced brand content A+, Listing reinstatement, Amazon account management services, and Account Suspension……."
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
          alt="growth eco"
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
        question1={"What kind of service does Growth Echo provide?"}
        question2={"Which industry does Growth Echo cater to?"}
        question3={"Why does Growth Echo provide the best customer service?"}
        question4={"What is the biggest advantage to work with GrowthEcho?"}
        tab1={
          "Growth Echo provides you with Done for your Amazon account management, Amazon product research, Product Listing, and optimization, Amazon Advertising, Product Sourcing, Brand storefront, Enhanced brand content A+, Listing reinstatement, Amazon marketing services, Amazon keyword research, and Account Suspension "
        }
        tab2={
          "Every business is unique and different and to make every Amazon business successful, we get along with you to understand your business and come up with customized strategies according to your Amazon business. From Amazon keyword ranking to Amazon a + content design, we get everything done for you."
        }
        tab3={
          "GrowthEcho is customer-centric and is driven by the core value of 'Customer Obsession'. Our mission is to be the most customer-centric company to expand and grow its service globally."
        }
        tab4={
          "The main service we provide is to take day-to-day management services off your shoulders and increase your profits. So, that you can take care of other business challenges and spend time with your family while making tons of money."
        }
      />
    </section>
  );
}

export default AboutUs;
