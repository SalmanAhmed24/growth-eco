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
  title: "Amazon A+ Enhanced Brand Content Designing Services",
  description:
    "Boost sales with professional Amazon A+ Enhanced Brand Content design services. Engaging, conversion-focused designs to maximize visibility and revenue.",
};
function Service() {
  return (
    <section className="amazon-sec-wrap">
      <BackToTop route={"#home"} />
      <ServiceHeader
        heading1={
          "Boost Your Brand Story with Captivating A+ Enhanced Brand Content!"
        }
        para1={""}
        headerBG={"/amazon-content-bg.png"}
      />
      <ServiceWhy
        headingMain={"Why do you need Amazon "}
        spanMain={"A+ content design services?"}
        mainPara={
          "With creativity and a sprinkle of innovation, we elevate your product listings to a whole new level, attracting customers with eye-catching visuals, compelling storytelling, and informative graphics. Don't just tell your brand's story; show it with a dazzling display of engaging content that mesmerizes, inspires, and ultimately drives customers to click that 'Add to Cart' button without a second thought."
        }
        mainImg={"/amazon-content-inner-1.png"}
        secImg={"/amazon-content-inner-2.png"}
        whyCardsArr={[
          { cardText: "Immersive Brand Storytelling" },
          { cardText: "Stunning Visual Enhancements" },
          { cardText: "Brand Identity Reinforcement" },
        ]}
        trustHeading={
          "Trusted by 100+ business owners for Amazon A+ content design services"
        }
        trustCardsArr={[
          {
            trustInHead: "Visual Storytelling",
            trustInPara:
              "Creating captivating content that tells a powerful story about your brand and products through a combination of stunning images, engaging videos, and informative graphics",
          },
          {
            trustInHead: "Product Presentation",
            trustInPara:
              "Highlighting the unique features and benefits of your products through amazon product photography, making them stand out from the competition and driving higher conversion rates.",
          },
          {
            trustInHead: "Increased Customer Engagement",
            trustInPara:
              "Presenting engaging information, empowering customers to make satisfied purchasing decisions",
          },
          {
            trustInHead: "Measurable Results",
            trustInPara:
              "Having a proven track record of driving increased sales, higher click-through rates, and improved product visibility.",
          },
        ]}
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
      />
      <ServiceCounter
        headingMain={"Case Study"}
        paraMain={
          "Revamping our client’s Amazon listings with captivating Amazon A + content design Services led to a 30% sales surge in the first month. With interactive visuals, persuasive copy, and engaging videos, conversion rates improved by 20% and click-through rates by 25%. Sustained growth followed, with monthly revenue increasing by an average of 15% over six months. A+ Content became a game-changer, elevating their brand as a preferred choice in the competitive market."
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
          "Our experienced team handles all aspects of your Amazon A+ content designs ensuring branded and captivating content that attracts random scrolling audiences to be your loyal customers."
        }
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
      />
      <ScaleComp
        futuraMD={futuraMDBT}
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
        step1={"Research"}
        step2={"Content Creation"}
        step3={"Implementation"}
        step4={"Performance & Monitoring"}
        content={
          "We at GrowthEcho take care of the A+ content your Amazon business needs to be successful. Starting with research in the competitive market, analyzing what’s working and how can we stand out in the crowd. Then design the infographics, images, and put out captivating videos that take your Amazon business to another level."
        }
        imgUrl={"/scale-content.png"}
      />
      <ServiceCards
        cardsArr={[
          {
            cardsH1: "Research and Analysis",
            color: "white",
            cardPara:
              "We conduct in-depth research on your product and identify the unique selling point. We then analyze the successful enhanced branded content that resonates with your niche to drive more sales.",
          },
          {
            cardsH1: "Content Creation",
            color: "blue",
            cardPara:
              "Taking gathered insights into consideration, we craft Amazon A+ content design and videos that demonstrate the product in action and showcase the product’s features and benefits",
          },
          {
            cardsH1: "Tailored Implementation",
            color: "white",
            cardPara:
              "We then add the A+ content to Amazon’s product listing and optimize the content to enhance visibility and searchability using relevant keywords and tags.",
          },
          {
            cardsH1: "Performance Monitoring",
            color: "blue",
            cardPara:
              "We keep our eyes on the performance of A+ content using Amazon’s analytics. Then track metrics with click-through rates, conversion rates, and sales.",
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
        question1={"Can I use Amazon A+ Content for all my products? "}
        question2={"How do I measure the success of my A+ Content? "}
        question3={
          "What is the difference between Amazon A+ Content and Amazon Enhanced Brand Content (EBC)?"
        }
        question4={
          "Can I edit or update my A+ Content after it's been published?"
        }
        tab1={
          "Amazon a + content design is available to professional sellers in the Amazon Brand Registry and vendors enrolled in the Amazon Vendor Central program. While most products are eligible, there are some limitations, and not all categories may have access to this feature. It's essential to check your eligibility and adhere to Amazon's guidelines before using A+ Content."
        }
        tab2={
          "Amazon provides detailed analytics to track the performance of A+ Content. Sellers can monitor metrics like click-through rates, conversion rates, and sales attributed to specific Amazon A+ content design modules. By analyzing these data points, you can understand the effectiveness of your content and make informed decisions on optimization."
        }
        tab3={
          "Amazon A+ Content and Amazon Enhanced Brand Content (EBC) are both enhanced content features, but they have different eligibility requirements and levels of customization. Amazon A+ content design is available to brands enrolled in the Brand Registry and offers more advanced customization options, including interactive elements like videos and comparison charts. EBC, but is available to sellers with registered trademarks and provides a basic enhancement to product descriptions with images and text."
        }
        tab4={
          "Yes, you can edit and update your Amazon A+ content design after it has been published. Amazon allows sellers to make changes to the content as needed. This flexibility is beneficial for refining your content strategy based on customer feedback and performance data. Remember to monitor the impact of your updates to ensure they align with your objectives."
        }
      />
    </section>
  );
}

export default Service;
