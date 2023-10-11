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
  title:
    "Grow your Amazon with Done for You Amazon Account Management Services",
  description:
    "Outsource your Amazon account management service for improved sales & growth. Expert team to optimize, manage, and grow your Amazon accounts to do for you",
};
function Service() {
  return (
    <section className="amazon-sec-wrap">
      <BackToTop route={"#home"} />
      <ServiceHeader
        heading1={
          "Taking day-to-day operations off your shoulders so you can focus on other business aspects"
        }
        para1={""}
        headerBG={"/done-amazon-bg-header.png"}
      />
      <ServiceWhy
        headingMain={"Why do you need done for you "}
        spanMain={"Amazon account management services?"}
        mainPara={
          "Our done-for-you Amazon account management service helps you get rid of worries of day-to-day operations while making tons of money. Whether it’s product research or inventory sourcing, we keep expertise in doing it all with a proven strategy"
        }
        mainImg={"/amazon-done-inner-1.png"}
        secImg={"/amazon-done-inner-2.png"}
        whyCardsArr={[
          { cardText: "Time-saving Expertise" },
          { cardText: "Sales and Profit Growth" },
          { cardText: "Proven Strategies" },
        ]}
        trustHeading={
          "Trusted by 100+ business owners for done-for-you Amazon account management services"
        }
        trustCardsArr={[
          {
            trustInHead: "Proven Track Record",
            trustInPara:
              "Our proven track record of Amazon account management success speaks for itself.",
          },
          {
            trustInHead: "Experienced Team",
            trustInPara:
              "Handling various aspects of account management, providing reliable and effective solutions.",
          },
          {
            trustInHead: "Tailored Strategies",
            trustInPara:
              "We tailor our strategies ensuring personalized and effective account management.",
          },
          {
            trustInHead: "Transparent Communication",
            trustInPara:
              "We keep our clients informed about the progress of their accounts, building a strong foundation of trust.",
          },
        ]}
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
      />
      <ServiceCounter
        headingMain={"Case Study"}
        paraMain={
          "Within three months, our client experienced a significant boost in product visibility, resulting in a 35% increase in sales and a large rise in customer reviews. With our data-driven approach, their Amazon business achieved a 45% return on its advertising investment, driving business growth on the Amazon platform."
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
        spanText={"Amazon Business?"}
        paraText={
          "Our experienced team handles all aspects of your Amazon account, leveraging their expertise to optimize listings, manage inventory, and design successful advertising campaigns, to scale your business to new heights"
        }
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
      />
      <ScaleComp
        futuraMD={futuraMDBT}
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
        step1={"product research"}
        step2={"listing optimization"}
        step3={"inventory sourcing"}
        step4={"advertising campaigns"}
        content={
          "We at GrowthEcho take care of everything your Amazon business needs to be successful. Starting with product research in the competitive market, then optimizing the listings to make you at the top, sourcing the inventory, and setting up the advertising campaign to get your Amazon business to new heights."
        }
        imgUrl={"/scale-amazon-done.png"}
      />
      <ServiceCards
        cardsArr={[
          {
            cardsH1: "Product Research",
            color: "white",
            cardPara:
              "We conduct thorough product research to identify high-demand, lucrative opportunities that guarantee your success on Amazon.",
          },
          {
            cardsH1: "Optimize Listings",
            color: "blue",
            cardPara:
              "We then optimize listings with targeted keywords, compelling content, and high-quality visuals to drive conversions and boost sales.",
          },
          {
            cardsH1: "Inventory sourcing",
            color: "white",
            cardPara:
              "After that, We use sourcing methods to secure inventory, ensuring a steady supply of high-quality products for your business success",
          },
          {
            cardsH1: "Advertising Campaigns",
            color: "blue",
            cardPara:
              "At the end. we execute high-converting advertising campaigns using data-driven insights and targeted strategies to drive the largest ROI for your business",
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
        question1={"What does 'done for you' Amazon account management mean?"}
        question2={
          "What benefits I will get from 'done for you' Amazon account management services?"
        }
        question3={
          "How do these services optimize product listings and improve visibility?"
        }
        question4={
          "Can 'done for you' Amazon account management services help with inventory management?"
        }
        tab1={
          "'Done for you' Amazon account management refers to a comprehensive service where our team of professionals handles various aspects of your Amazon seller account, including product listings, inventory management, pricing, and advertising, to optimize performance and drive business growth"
        }
        tab2={
          "The benefits include time savings, as our team of Experts handles complex tasks, increased sales and profits through strategic optimization, and access to data-driven insights and proven strategies to boost your store's performance on Amazon."
        }
        tab3={
          "We use relevant keywords, compelling product content, and high-quality images to optimize product listings, improving search rankings and attracting more potential customers to your products."
        }
        tab4={
          "Yes, we ensure efficient inventory management by monitoring stock levels, restocking when necessary, and implementing strategies to avoid stockouts and overstocking, thus ensuring optimal inventory levels for most sales."
        }
      />
    </section>
  );
}

export default Service;
