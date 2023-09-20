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
  title: "Amazon Product Listing and Optimization",
  description:
    "Boost sales on Amazon with expert product listing optimization. Increase visibility, attract buyers, and drive growth for your Amazon business.",
};
function Service() {
  return (
    <section className="amazon-sec-wrap">
      <BackToTop route={"#home"} />
      <ServiceHeader
        heading1={"Amazon Product Listing and Optimization"}
        para1={"From listing your products to scaling your business!"}
        headerBG={"/optimization-listing-bg.png"}
      />
      <ServiceWhy
        headingMain={"Why do you need "}
        spanMain={"Amazon Product Listing and Optimization?"}
        mainPara={
          "You want to maximize visibility, attract buyers, and boost sales…. Right? And to get your hands on all this, you need Amazon product listing and optimization as it improves search rankings, highlights key features, and communicates value effectively, leading to increased conversions and business success."
        }
        mainImg={"/optimization-inner.png"}
        secImg={"/optimization-inner-2.png"}
        whyCardsArr={[
          { cardText: "Compelling Copywriting" },
          { cardText: "Stunning Visuals" },
          { cardText: "Increased Conversions" },
        ]}
        trustHeading={
          "Trusted by 100+ business owners for Amazon Account Suspension Services"
        }
        trustCardsArr={[
          {
            trustInHead: "Proven Track Record",
            trustInPara:
              "Our proven track record of Amazon Product Listing and Optimization success speaks for itself.",
          },
          {
            trustInHead: "Experienced Team",
            trustInPara:
              "Handling various aspects of Amazon Product Listing and Optimization, and providing amazing results.",
          },
          {
            trustInHead: "Tailored Strategies",
            trustInPara:
              "We tailor our strategies to ensure no more compromise on Amazon Product Listing and Optimization",
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
          "We recently helped our client with Amazon Product Listing and Optimization services and got their sales increase by 200%, organic search traffic rose by 150%, and the product became a best-seller in its category. "
        }
        headingSub1={"635+"}
        heading2Count={635}
        paraSub1={
          "635+ happy clients who got their Amazon Product Listing and Optimization done."
        }
        headingSub2={"7 years"}
        paraSub2={
          "Started in 2017, now helping business owners list and optimize their products on Amazon"
        }
        headingSub3={"3490+"}
        heading3Count={3490}
        paraSub3={
          "Successfully listed and optimized 3490+ products on Amazon stores and made them grow"
        }
      />
      <ServiceGrowth
        headingText={"How We Help You Grow Your Amazon Business Through"}
        spanText={" Product Listing and Optimization?"}
        paraText={
          "We make your Amazon business to success through product listing and optimization. Through compelling content, targeted keywords, and enhanced visuals, we improve visibility and attract more buyers. Our strategic approach maximizes conversions, increases sales, and drives long-term growth for your Amazon venture."
        }
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
      />
      <ScaleComp
        futuraMD={futuraMDBT}
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
        step1={"Market Research"}
        step2={"Listing Optimization"}
        step3={"Marketing & Promotion"}
        step4={"Customer Experience"}
        content={
          "We at GrowthEcho take responsibility for your Amazon business Product Listing and Optimization to get your business more visibility and get more potential buyers."
        }
        imgUrl={"/scale-optimization.png"}
      />
      <ServiceCards
        cardsArr={[
          {
            cardsH1: "Market Research",
            color: "white",
            cardPara:
              "First we Identify profitable product opportunities and understand the competition.",
          },
          {
            cardsH1: "Listing Optimization",
            color: "blue",
            cardPara:
              "Then we move forward with creating compelling listings with relevant keywords and appealing content.",
          },
          {
            cardsH1: "Marketing & Promotion",
            color: "white",
            cardPara:
              "After that, we utilize advertising, social media, and email campaigns to drive traffic.",
          },
          {
            cardsH1: "Customer Experience",
            color: "blue",
            cardPara:
              "And at last, we provide excellent service and get positive reviews for trust and loyalty.",
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
        question1={"How to optimize my product listings?"}
        question2={"How can I drive more traffic to my Amazon listings?"}
        question3={"What is Amazon FBA, and how does it work?"}
        question4={"How can I handle customer inquiries and negative feedback?"}
        tab1={
          "To optimize your product listings, use relevant keywords, write persuasive product titles and bullet points, include high-quality images, and encourage positive reviews from satisfied customers."
        }
        tab2={
          "You can Increase traffic through Amazon advertising, social media marketing, influencer collaborations, email marketing, and search engine optimization (SEO) strategies."
        }
        tab3={
          "Amazon FBA is a program where Amazon stores, picks, packs, and ships your products to customers. It also handles customer service and returns, streamlining the selling process for sellers."
        }
        tab4={
          "Respond to customer inquiries, address concerns professionally, and offer solutions. For negative feedback, try to resolve the issue privately with the customer and consider requesting feedback removal if appropriate."
        }
      />
    </section>
  );
}

export default Service;
