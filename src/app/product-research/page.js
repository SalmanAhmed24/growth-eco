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
  title: "Product Research for Amazon Success",
  description:
    "Supercharge your Amazon business with data-driven Amazon product research services. Uncover profitable niches, win with low-competition products, and boost sales today on Amazon",
};
function Service() {
  return (
    <section className="amazon-sec-wrap">
      <BackToTop route={"#home"} />
      <ServiceHeader
        heading1={"Product Research for Amazon Success"}
        para1={"Redefining the way you do business on Amazon "}
        headerBG={"/done-amazon-bg-header.png"}
      />
      <ServiceWhy
        headingMain={"Why do you need"}
        spanMain={"Product Sourcing services?"}
        mainPara={
          "If you want to scale your Amazon business to successful heights while saving your time and energy, you need experts to source the most profitable products for you in Amazon's competitive marketplace."
        }
        whyCardsArr={[
          { cardText: "Uncover Profitable Niches" },
          { cardText: "Reduce Risk" },
          { cardText: "Increase ROI" },
        ]}
        mainImg={"/amazon-product-inner-1.png"}
        secImg={"/amazon-product-inner-2.png"}
        trustHeading={
          "Trusted by 100+ business owners for Amazon product research services"
        }
        trustCardsArr={[
          {
            trustInHead: "Proven Track Record",
            trustInPara:
              "Our proven track record of Amazon product research success speaks for itself.",
          },
          {
            trustInHead: "Experienced Team",
            trustInPara:
              "Handling various aspects of Amazon product research, and providing amazing results.",
          },
          {
            trustInHead: "Tailored Strategies",
            trustInPara:
              "We tailor our strategies to ensure no more compromise on Amazon product research.",
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
          "We helped a  tech startup utilize Amazon product research services to identify a niche market for smart home devices. Through data-driven analysis, they launched an innovative smart doorbell, capitalizing on low competition and high demand. Within six months, the product achieved a 400% increase in sales, establishing the company as a key player in the smart home industry."
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
        headingText={"How We Help You Grow Your Amazon Business through"}
        spanText={" product research?"}
        paraText={
          "We research the best product in the competitive niche and provide you with the best supplies to ensure high-quality products. We help you save your time and energy so that you can focus on other things needed to scale your business. "
        }
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
      />
      <ScaleComp
        futuraMD={futuraMDBT}
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
        step1={"Market analysis"}
        step2={"product criteria"}
        step3={"competitor research"}
        step4={"validate with samples"}
        content={
          "We at GrowthEcho take care of your Amazon business product research to get you high-quality profitable products to make the best ROI. No more worries about which product to go for and scale your business."
        }
        imgUrl={"/scale-research.png"}
      />
      <ServiceCards
        cardsArr={[
          {
            cardsH1: "Market Analysis",
            color: "white",
            cardPara:
              "We research Amazon's marketplace to identify high-demand product categories and potential niches to assess competition levels and market trends.",
          },
          {
            cardsH1: "Product Criteria",
            color: "blue",
            cardPara:
              "Then we define specific criteria for selecting products, considering factors like sales rank, average rating, and monthly sales volume.",
          },
          {
            cardsH1: "Competitor Research",
            color: "white",
            cardPara:
              "Then we analyze top competitors in your chosen niche to understand their pricing strategies, product features, and customer reviews.",
          },
          {
            cardsH1: "Validate with Samples",
            color: "blue",
            cardPara:
              "We order samples of potential products to assess quality and packaging. Then launch a small batch and gather feedback for further refinement.",
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
        question1={"What is product research on Amazon?"}
        question2={"How does Amazon product research benefit my business?"}
        question3={
          "How can I identify profitable niches and winning products with low competition?"
        }
        question4={
          "What criteria should I consider when selecting products to sell on Amazon?"
        }
        tab1={
          "Amazon product research refers to the process of gathering and analyzing data to identify profitable product opportunities in the Amazon marketplace. It involves using various tools and techniques to assess market demand, competition levels, customer preferences, and other factors that influence a product's potential success on Amazon"
        }
        tab2={
          "Amazon product research benefits your business by helping you uncover profitable niches, identify winning products, and make informed decisions that reduce risks and increase sales."
        }
        tab3={
          "Our Amazon product sourcing service caters to various industries and Amazon product categories. Whether you need consumer electronics, fashion accessories, home goods, or any other Amazon products, we can assist you in finding suitable suppliers based on your requirements."
        }
        tab4={
          "When selecting products to sell on Amazon, consider criteria such as sales potential, demand, competition, profit margins, product quality, and brand-ability. This ensures you choose products that align with your business goals and target audience."
        }
      />
    </section>
  );
}

export default Service;
