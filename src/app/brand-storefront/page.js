import localFont from "next/font/local";
import Link from "next/link";
import "./service.scss";
import Image from "next/image";
import ServiceHeader from "@/component/serviceComponents/service-header";
import ServiceWhy from "@/component/serviceComponents/service-why";
import ServiceCounter from "@/component/serviceComponents/service-counter";
import ServiceGrowth from "@/component/serviceComponents/service-growth";
import ServiceCards from "@/component/serviceComponents/service-grow-cards";
import FAQs from "@/component/faq";
import ScaleComp from "@/component/scaleComponent/scale";
import BackToTop from "@/component/backToTop";
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
export const metadata = {
  title: "Amazon Storefront for your brand",
  description:
    "Elevate the brand on Amazon with a brand Storefront. Showcase products, tell your story & boost sales. Engage customers like never before",
};
function Service() {
  return (
    <section className="amazon-sec-wrap">
      <BackToTop route={"#home"} />
      <ServiceHeader
        heading1={"Amazon Storefront for your brand"}
        para1={"Grow your brand on Amazon with full potential!"}
        headerBG={"/amazon-brand-header.png"}
      />
      <ServiceWhy
        headingMain={"Why do you need Amazon Product "}
        spanMain={"Listing & Optimization?"}
        mainImg={"/amazon-brand-inner-1.png"}
        secImg={"/amazon-brand-inner-2.png"}
        mainPara={
          "You want your brand to be the powerful launchpad to success. To step out with your unique story and products that add value to your customers’ lives, you don’t have to sell. You have to craft an unforgettable brand narrative and connect with customers on a deeper level."
        }
        whyCardsArr={[
          { cardText: "Immersive Designs" },
          { cardText: "Trust-Building Experience" },
          { cardText: "Enhanced Navigation" },
        ]}
        trustHeading={
          "Trusted by 100+ business owners for Amazon Brand Storefront services"
        }
        trustCardsArr={[
          {
            trustInHead: "Proven Track Record",
            trustInPara:
              "Our proven track record of Amazon Brand Storefront success speaks for itself.",
          },
          {
            trustInHead: "Experienced Team",
            trustInPara:
              "Handling various aspects of Amazon  Brand Storefront, and providing amazing results.",
          },
          {
            trustInHead: "Tailored Strategies",
            trustInPara:
              "We tailor our strategies to ensure no more compromise on Amazon  Brand Storefront",
          },
          {
            trustInHead: "Transparent Communication",
            trustInPara:
              "We keep our clients informed about the progress of their products, building a solid foundation of trust.",
          },
        ]}
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
      />
      <ServiceCounter
        headingMain={"Case Study"}
        paraMain={
          "Through the implementation of an Amazon Brand Storefront, one of our clients saw a 30% increase in sales within three months. Interactive showcase enabled direct customer engagement, resulting in brand loyalty and a boost in online revenue."
        }
        headingSub1={"600+"}
        paraSub1={
          "599+ satisfied clients that reached their milestone of jaw-dropping goals with our amazing service!"
        }
        headingSub2={"7 years"}
        paraSub2={
          "Started in 2017, now helping business owners scale their Amazon business with a proven strategy"
        }
        headingSub3={"250+"}
        paraSub3={
          "250+ always on-time inventory suppliers to meet our clients’ product sourcing requirements"
        }
      />
      <ServiceGrowth
        headingText={
          "How We Help You Grow Your Amazon business through Amazon "
        }
        spanText={"Brand Storefront services?"}
        paraText={
          "We create personalized storefronts that engage customers, boost brand loyalty, and drive sales. Let us elevate your online presence today for unparalleled success in Amazon."
        }
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
      />
      <ScaleComp
        futuraMD={futuraMDBT}
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
        step1={"brand identity"}
        step2={"showcase product"}
        step3={"storefront layout"}
        step4={"post-purchase delight"}
        content={
          "We at GrowthEcho build a dynamic hub for brand engagement, customer loyalty, and revenue growth, solidifying your position as a dominant player in the Amazon marketplace."
        }
        imgUrl={"/scale-brand.png"}
      />
      <ServiceCards
        cardsArr={[
          {
            cardsH1: "Brand Identity",
            color: "white",
            cardPara:
              "First we craft a compelling brand narrative that defines your brand's unique value proposition and core identity.",
          },
          {
            cardsH1: "Showcase Product",
            color: "blue",
            cardPara:
              "Then we curate your product offerings which include high-quality images, detailed descriptions, and engaging videos to showcase each product's features and benefits.",
          },
          {
            cardsH1: "Storefront layout",
            color: "white",
            cardPara:
              "We then design a storefront layout ensuring easy navigation, intuitive menus, and clear calls-to-action.",
          },
          {
            cardsH1: "Post-Purchase Delight",
            color: "blue",
            cardPara:
              "We foster customer engagement through interactive elements such as customer reviews. And encourage social proof by showcasing positive feedback and testimonials",
          },
        ]}
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
      />
      <FAQs
        futuraBK={futuraBK}
        futuraHv={futuraHv}
        futuraLtBT={futuraLTBT}
        futuraMDBT={futuraMDBT}
        question1={"What is an Amazon Brand Storefront?"}
        question2={"How can an Amazon Brand Storefront boost my sales?"}
        question3={
          "Is an Amazon Brand Storefront suitable for all types of businesses?"
        }
        question4={
          "Can I update my Amazon Brand Storefront after it's been created?"
        }
        tab1={
          "An Amazon Brand Storefront is a customizable, branded webpage within Amazon's platform that allows businesses to showcase their products, tell their brand story, and create a unique shopping experience for customers."
        }
        tab2={
          "Amazon Brand Storefront enhances the customer experience by offering an immersive brand experience. By showcasing your products in appealing manner, customers are more likely to spend more time on your storefront, explore your offerings, and make purchases, driving higher sales."
        }
        tab3={
          "Amazon Brand Storefronts are beneficial for a wide range of businesses, from established brands to emerging sellers. Whether you sell a niche product or have a diverse product range, a storefront can help you create a stronger brand presence, connect with customers, and differentiate yourself in the competitive marketplace."
        }
        tab4={
          "Amazon Brand Storefronts are designed to be flexible and adaptable. You can make changes to your storefront's layout, content, images, and products at any time."
        }
      />
    </section>
  );
}

export default Service;
