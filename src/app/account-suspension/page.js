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
        heading1={"Amazon Seller Account Suspension & How to Avoid"}
        para1={"Get your account back with our innovative solution!"}
      />
      <ServiceWhy
        headingMain={"Why do you need an "}
        spanMain={"Account Suspension service?"}
        mainPara={
          "Got your product suspended on Amazon? We help you prevent unauthorized activities and maintain a secure online environment with our robust account suspension service, ensuring user compliance while enhancing trust and user experience."
        }
        whyCardsArr={[
          { cardText: "Swift Resolution" },
          { cardText: "Personalized Plans" },
          { cardText: "Transparent Communication" },
        ]}
        trustHeading={
          "Trusted by 100+ business owners for Amazon Account Suspension Services"
        }
        trustCardsArr={[
          {
            trustInHead: "Proven Track Record",
            trustInPara:
              "Our proven track record of Amazon Account Suspension success speaks for itself.",
          },
          {
            trustInHead: "Experienced Team",
            trustInPara:
              "Handling various aspects of Amazon Account Suspension and providing amazing results.",
          },
          {
            trustInHead: "Tailored Strategies",
            trustInPara:
              "We tailor our strategies to ensure no more compromise on Amazon Account Suspension",
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
          "We helped our client reduce fraudulent activities by 60% on Amazon, resulting in improved customer trust and satisfaction. This swift and targeted action ensured a seamless user experience"
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
        headingText={"How We Help You Grow Your Amazon business through"}
        spanText={" Amazon Account Suspension services?"}
        paraText={
          "Our Amazon Account Suspension services empower your business by addressing policy violations, minimizing downtime, and restoring your selling privileges. With our expertise, you can navigate suspension challenges, ensuring uninterrupted growth and success on the Amazon platform"
        }
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
      />
      <ScaleComp
        futuraMD={futuraMDBT}
        futuraHv={futuraHv}
        futuraLTBT={futuraLTBT}
        step1={"Assessment and Analysis"}
        step2={"Plan of Action Preparation"}
        step3={"Submission and Follow-up"}
        step4={"Preventive Measures & Ongoing Compliance"}
        content={
          "We at GrowthEcho make a strategic approach coupled with clear communication and commitment to compliance that will pave the way for a successful resolution and continued growth on the Amazon platform."
        }
      />
      <ServiceCards
        cardsArr={[
          {
            cardsH1: "Assessment & Analysis",
            color: "white",
            cardPara:
              "We begin by reviewing the suspension notice to identify the exact policy violation. And analyze your account and product listings to pinpoint any potential issues.",
          },
          {
            cardsH1: "Plan of Action Preparation",
            color: "blue",
            cardPara:
              "We then craft a detailed Plan of Action (POA) that addresses the violation, explains the measures you've taken to rectify it, and outlines preventive actions for the future.",
          },
          {
            cardsH1: "Submission and Follow-up",
            color: "white",
            cardPara:
              "After that, we submit your well-structured POA through the designated Amazon Seller Central channel. Then we monitor the response and maintain open communication with Amazon's Seller Performance team. If necessary, we provide additional information to expedite the review process.",
          },
          {
            cardsH1: "Preventive Measures & Ongoing Compliance",
            color: "blue",
            cardPara:
              "Once your account is reinstated, we implement the preventive measures outlined in your POA rigorously. Then we monitor your account's compliance with Amazon's policies, keeping your product listings accurate, customer service top-notch, and staying updated on policy changes to prevent future suspensions.",
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
        question1={"How long it takes to get my account reinstated?"}
        question2={"Can I appeal a denied reinstatement?"}
        question3={"How can I prevent future suspensions?"}
        question4={"Do I need professional help for reinstatement?"}
        tab1={
          "The reinstatement process duration varies depending on factors like the complexity of the violation and the quality of your Plan of Action. It can take a few days to several weeks."
        }
        tab2={
          "Yes, you can submit an appeal if your initial POA is denied. Ensure that your new submission addresses any feedback provided by Amazon and provides additional evidence of your commitment to compliance."
        }
        tab3={
          "Monitor your account health, customer feedback, and product quality. Stay informed about Amazon's policies and guidelines, and address any issues promptly. Regularly review your listings and maintain excellent customer service."
        }
        tab4={
          "While you can draft your own POA, professional help from experts experienced in Amazon account reinstatement can improve your chances of success. They provide insights, expertise, and guidance through the process."
        }
      />
    </section>
  );
}

export default Service;
