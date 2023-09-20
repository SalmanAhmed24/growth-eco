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
  title: "Suspended Amazon Listing Reinstatement",
  description:
    "Regain Amazon success swiftly with Listing Reinstatement service. Expert appeals and issue resolution propel your products back into the spotlight.",
};
function Service() {
  return (
    <section className="amazon-sec-wrap">
      <BackToTop route={"#home"} />
      <ServiceHeader
        heading1={"Regain Your Amazon Presence with Listing Reinstatement."}
        para1={""}
        headerBG={"/listing-rein-bg.png"}
      />
      <ServiceWhy
        headingMain={"Why do you need "}
        spanMain={"Listing Reinstatement?"}
        mainPara={
          "Got suspended on Amazon and want to encounter listing suspension? We know how daunting it feels. Our Listing Reinstatement service will be your strategic partner in navigating this challenge and restoring your products to the digital shelf. With a strategic approach, we resolve issues and present compelling appeals that reignite your momentum in Amazon’s marketplace."
        }
        mainImg={"/reinstate-inner.png"}
        secImg={"/reinstate-inner-2.png"}
        whyCardsArr={[
          { cardText: "Suspension Resolution" },
          { cardText: "Expert Guidance" },
          { cardText: "Compliance Assurance" },
        ]}
        trustCardsArr={[
          {
            trustInHead: "Proven Track Record",
            trustInPara:
              "Our proven track record of Amazon Listing Reinstatement success speaks for itself.",
          },
          {
            trustInHead: "Experienced Team",
            trustInPara:
              "Handling various aspects of Amazon Listing Reinstatement and providing amazing results.",
          },
          {
            trustInHead: "Tailored Strategies",
            trustInPara:
              "We tailor our strategies to ensure no more compromise on Amazon Listing Reinstatement",
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
          "Our client recently overcame a critical product suspension on Amazon. Our swift resolution and a well-crafted appeal led to full reinstatement, swiftly revitalizing sales and reaffirming brand credibility within a week."
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
        spanText={"Listing Reinstatement services?"}
        paraText={
          "You get compelling appeals, rectify issues, propel your business, and pave your way for renewed sales momentum with our proven reinstatement expertise."
        }
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
      />
      <ScaleComp
        futuraMD={futuraMDBT}
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
        step1={"comprehensive analysis"}
        step2={"issue resolution"}
        step3={"persuasive communication"}
        step4={"follow-up & adaptation"}
        content={
          "We at GrowthEcho take care of your Amazon business product sourcing to enable you to focus more on other business aspects. We research reliable suppliers to get you amazing Amazon products at competitive prices. "
        }
        imgUrl={"/scale-listing.png"}
      />
      <ServiceCards
        cardsArr={[
          {
            cardsH1: "Comprehensive Analysis",
            color: "white",
            cardPara:
              "We conduct a thorough audit of the content, images, and product details to identify the root cause.",
          },
          {
            cardsH1: "Issue Resolution and Plan of Action",
            color: "blue",
            cardPara:
              "Then create a plan of action to address the identified issues and make necessary corrections to craft an appeal that outlines the future actions.",
          },
          {
            cardsH1: "Persuasive Communication",
            color: "white",
            cardPara:
              "We then provide evidence to support our claims. Highlight your commitment to delivering a positive customer experience.",
          },
          {
            cardsH1: "Follow-Up and Adaptation",
            color: "blue",
            cardPara:
              "If further information changes are needed, we promptly address and maintain open communication. And adjust the appeal if necessary.",
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
        question1={"Why was my Amazon listing suspended?"}
        question2={"Can I handle the reinstatement process myself?"}
        question3={"How long does the reinstatement process take?"}
        question4={"What if my appeal is denied?"}
        tab1={
          "Amazon listings can be suspended for various reasons, such as policy violations, inaccurate product information, copyright infringement, or safety concerns. A thorough analysis of the suspension notice can help pinpoint the specific issue."
        }
        tab2={
          "While it's possible to handle the process independently, reinstatement can be complex and time-consuming. Our expertise ensures a strategic approach, accurate issue resolution, and a compelling appeal that maximizes your chances of successful reinstatement."
        }
        tab3={
          "The duration varies based on the complexity of the suspension and the responsiveness of the platform administrators. Our goal is to expedite the process by providing well-crafted appeals and promptly addressing any requests for additional information."
        }
        tab4={
          "In case of an initial denial, we analyze the platform's response, revise the appeal strategy, and continue engaging with administrators. Our tenacity and experience help us navigate multiple stages of appeals if necessary, increasing the likelihood of eventual reinstatement."
        }
      />
    </section>
  );
}

export default Service;
