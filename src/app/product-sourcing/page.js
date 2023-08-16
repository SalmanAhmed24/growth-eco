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

function Service() {
  return (
    <section className="amazon-sec-wrap">
      <ServiceHeader
        heading1={"Product Sourcing"}
        para1={"Empowering your brand through product sourcing"}
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
      />
      <ServiceWhy
        headingMain={"Why do you need "}
        spanMain={"Product Sourcing services?"}
        mainPara={
          "To get access to a vast network of suppliers, saving time and costs while ensuring high-quality products meet their specific needs. We optimize the procurement process, enabling your Amazon businesses to focus on core operations and growth."
        }
        whyCardsArr={[
          { cardText: "Market Research" },
          { cardText: "Supplier Vetting" },
          { cardText: "Cost Optimization" },
        ]}
        trustCardsArr={[
          {
            trustInHead: "Proven Track Record",
            trustInPara:
              "Our proven track record of Product Sourcing success speaks for itself.",
          },
          {
            trustInHead: "Experienced Team",
            trustInPara:
              "Handling various aspects of product sourcing, and providing amazing products.",
          },
          {
            trustInHead: "Tailored Strategies",
            trustInPara:
              "We tailor our strategies ensuring no more compromise on product sourcing.",
          },
          {
            trustInHead: "Transparent Communication",
            trustInPara:
              "We keep our clients informed about the progress of their products, building a strong foundation of trust.",
          },
        ]}
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
      />
      <ServiceCounter
        headingMain={"Case Study"}
        paraMain={
          "Our client overcame supply chain inefficiencies by availing our product sourcing service. We identified reliable global suppliers, negotiated contracts, and achieved a 30% increase in on-time deliveries, 20% defect reduction, and 15% cost savings. This optimization enhanced competitiveness and customer satisfaction."
        }
        headingSub1={"600+"}
        paraSub1={
          "600+ satisfied clients that reached their goals with our service!"
        }
        headingSub2={"7 years"}
        paraSub2={
          "Started in 2017, now helping business owners scale their Amazon business with a proven strategy"
        }
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
      />
      <ServiceGrowth
        headingText={"How We Help You Grow Your "}
        spanText={"Amazon Business?"}
        paraText={
          "We find you the best suppliers to ensure access to high-quality products at competitive prices. Save your time and resources by taking the most important task on us and enable you to focus on other scaling your Amazon business "
        }
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
      />
      <ScaleComp
        futuraMD={futuraMDBT}
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
        step1={"market analysis"}
        step2={"supplier research"}
        step3={"inventory management"}
        step4={"customer feedback"}
        content={
          "We at GrowthEcho take care of your Amazon business product sourcing to enable you to focus more on other business aspects. We research reliable suppliers to get you amazing Amazon products at competitive prices. "
        }
      />
      <ServiceCards
        cardsArr={[
          {
            cardsH1: "Market Analysis",
            color: "white",
            cardPara:
              "We conduct a thorough analysis of market trends, customer preferences, and competitor Amazon products to identify profitable niches and high-demand items.",
          },
          {
            cardsH1: "Supplier Research",
            color: "blue",
            cardPara:
              "We then research suppliers and manufacturers to ensure reliability, product quality, and competitive pricing.",
          },
          {
            cardsH1: "Amazon Inventory Management",
            color: "white",
            cardPara:
              "Implement efficient Amazon inventory management practices to maintain optimal stock levels, reduce stockouts, and ensure timely replenishment.",
          },
          {
            cardsH1: "Customer Feedback",
            color: "blue",
            cardPara:
              "Monitor customer feedback and reviews to improve Amazon product quality and address any issues, enhancing your brand reputation and driving repeat sales.",
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
        question1={"What is Amazon product sourcing?"}
        question2={
          "What types of Amazon products can I source through your service?"
        }
        question3={
          "How does Amazon's product sourcing service benefit my business?"
        }
        question4={
          "What are the payment terms and pricing structures for your sourcing service?"
        }
        tab1={
          "Amazon product sourcing refers to the process of finding and acquiring Amazon products that are intended to be sold on the Amazon marketplace. It involves identifying reliable suppliers or manufacturers who offer Amazon products that align with the Amazon seller's business goals and customer demand"
        }
        tab2={
          "Our Amazon product sourcing service caters to various industries and Amazon product categories. Whether you need consumer electronics, fashion accessories, home goods, or any other Amazon products, we can assist you in finding suitable suppliers based on your requirements."
        }
        tab3={
          "Amazon products sourcing services benefit your business by providing access to a wide network of reliable suppliers, saving time and costs, ensuring high-quality Amazon products, and mitigating supply chain risks. They streamline procurement processes, allowing you to focus on core operations and growth."
        }
        tab4={
          "Payment terms and pricing structures may vary based on the nature of the Amazon products, order quantities, and supplier arrangements. Our team will provide transparent pricing information and discuss payment options tailored to your business needs."
        }
      />
    </section>
  );
}

export default Service;
