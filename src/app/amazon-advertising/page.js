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
  title: "Increase visibility and boost sales with Amazon Advertising Services",
  description:
    "Drive sales and visibility with Amazon Advertising Services. Reach more customers, increase revenue, and boost your brand's presence on Amazon with Amazon ads.",
};
function Service() {
  return (
    <section className="amazon-sec-wrap">
      <BackToTop route={"#home"} />
      <ServiceHeader
        heading1={
          "Increase visibility and boost sales with Amazon Advertising Services"
        }
        para1={""}
        headerBG={"/advertising-header-img.png"}
      />
      <ServiceWhy
        headingMain={"Why do you need Amazon "}
        spanMain={"Advertising services?"}
        mainImg={"/amazon-adv-inner.png"}
        secImg={"/amazon-adv-inner-2.png"}
        mainPara={
          "By Amazon Advertising, your brand gains visibility and access to a vast, ready-to-buy audience, making your products to the top of search results and relevant product listings. With precise ad targeting and analytics, you can reach your ideal customers, driving traffic to your product pages and converting random scrollers into loyal buyers. "
        }
        whyCardsArr={[
          { cardText: "Unparalleled Reach" },
          { cardText: "Enhanced Brand Visibility" },
          { cardText: "Measurable ROI" },
        ]}
        trustHeading={
          "Trusted by 100+ business owners for Amazon Marketing services"
        }
        trustCardsArr={[
          {
            trustInHead: "Precise Targeting Capabilities",
            trustInPara:
              "Advanced targeting options enable us to focus your ads on specific demographics, interests, and shopping behaviors.",
          },
          {
            trustInHead: "Improved Sales and Conversions",
            trustInPara:
              "By promoting your products, we boost your brand’s visibility in search results and get higher sales and conversions, driving revenue growth for your business.",
          },
          {
            trustInHead: "Enhanced Brand Awareness",
            trustInPara:
              "We create eye-catching, brand-centric campaigns improving brand recognition, and build trust with customers",
          },
          {
            trustInHead: "Flexibility and Budget Control",
            trustInPara:
              "We accommodate businesses of all sizes, allowing you to set your budget for Amazon marketing services and scale up your Amazon advertising efforts as you witness positive outcomes",
          },
        ]}
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
      />
      <ServiceCounter
        headingMain={"Case Study"}
        paraMain={
          "A fashion apparel brand expanded its online presence and drove sales through our Amazon marketing services, they launched targeted sponsored product campaigns and optimized product listings. The result appeared to attract a broader audience and drive a 45% increase in online sales within just three months. "
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
        headingText={"How We Help You Grow Your "}
        spanText={" Amazon Business?"}
        paraText={
          "Our experienced team handles all aspects of your Amazon PPC, leveraging their expertise to optimize listings, manage inventory, and design successful advertising campaigns, to scale your business to new heights"
        }
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
      />
      <ScaleComp
        futuraMD={futuraMDBT}
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
        step1={"Strategy Development "}
        step2={"Ad Campaign Setup"}
        step3={"Compelling Ad Creatives"}
        step4={"Monitoring and optimization"}
        content={
          "With our step-by-step solution, your Amazon business will experience significant growth, increased sales, and improved brand visibility, solidifying your position as a dominant player in the competitive Amazon marketplace"
        }
        imgUrl={"/scale-ads.png"}
      />
      <ServiceCards
        cardsArr={[
          {
            cardsH1: "Strategy Development ",
            color: "white",
            cardPara:
              "We conduct a comprehensive analysis of your Amazon business, your products, and your target audience and develop an advertising strategy according to your business goals and budget.",
          },
          {
            cardsH1: "Ad Campaign Setup",
            color: "blue",
            cardPara:
              "We use advanced targeting capabilities to reach the right customers at the right time. Through Amazon keyword research and audience segmentation, we create targeted sponsored brand campaigns.",
          },
          {
            cardsH1: "Compelling Ad Creatives",
            color: "white",
            cardPara:
              "We create ad creatives that resonate with your target audience and run A/B tests on different ad variations to identify which visuals and messaging yield the highest engagement and conversion rates.",
          },
          {
            cardsH1: "Monitoring and optimization",
            color: "blue",
            cardPara:
              "We monitor the performance of your Amazon PPC campaigns and gain valuable insights into campaign effectiveness, ensuring your advertising dollars are invested wisely.",
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
        question1={
          "What is Amazon Advertising, and how can it benefit my business?"
        }
        question2={
          "How do I choose the right Amazon Advertising campaign type for my products?"
        }
        question3={
          "What is the difference between automatic and manual targeting in Amazon Advertising?"
        }
        question4={
          "How long does it take for Amazon Advertising campaigns to show results?"
        }
        tab1={
          "Amazon Advertising is a platform that allows sellers and brands to promote their products on Amazon. It offers various ad formats, precise targeting options, and analytics to drive sales, enhance brand visibility, and reach a larger customer base."
        }
        tab2={
          "The best campaign type depends on your business goals and the products you offer. Sponsored Products are ideal for promoting individual items, while Sponsored Brands showcase your brand and product portfolio. Sponsored Display Ads target shoppers off-Amazon, and Stores allow you to create a branded storefront for a more immersive shopping experience."
        }
        tab3={
          "Automatic targeting allows Amazon's algorithms to choose relevant keywords for your ads based on your product information. Manual targeting gives you control over the keywords you want to bid on, enabling precise targeting of specific search terms and audience segments."
        }
        tab4={
          "The timeline for seeing results can vary based on factors like campaign type, bid amounts, competition, and product demand. Some campaigns may yield immediate results, while others may require time and Amazon listing optimization to gain traction. It's essential to monitor performance and make adjustments as needed to achieve your desired outcomes"
        }
      />
    </section>
  );
}

export default Service;
