"use client";
import localFont from "next/font/local";
import Link from "next/link";
import "./style.scss";
import Image from "next/image";
import React, { useState } from "react";
import HeaderCase from "@/component/case-stud-sub/header";
import EXESUM from "@/component/case-stud-sub/exe-sum";
import CaseSteps from "@/component/case-stud-sub/caseSteps";
import CaseStudSlider from "@/component/case-stud-sub/case-slider";
import BackToTop from "@/component/backToTop";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
function SubCase() {
  return (
    <section className={`${poppins.className} case-sub-main`}>
      <BackToTop poppins={poppins} route={"#home"} />
      <HeaderCase
        caseStudyNo="Case Study 3"
        caseHeadingMain="RFAQK"
        casePara="In the heart of the USA, Rfaqk, a budding baking kit brand, was born with a mission to spread the joy of baking. However, the path to success was not devoid of challenges."
        caseDeskImg="/rafk.png"
        caseMobileImg="/mobile-sub-case.png"
        rightAlign={true}
        poppins={poppins}
      />
      <EXESUM
        summary="Rfaqk was not an ordinary baking kit brand; it was the ultimate solution
        to bring out the hidden baker in everyone."
        poppins={poppins}
      />
      <CaseSteps
        overviewPara={
          "Within its first years, RFAQk surpassed initial sales and customer satisfaction goals through product innovations, an educational video course, revamped packaging, and responsiveness to feedback. The brand is now among the largest baking kit providers in the United States."
        }
        step1Img={"/case-step1.png"}
        goalsPara={
          "It was designed with the aspiration to help beginner bakers, who were uncertain about their outcomes, to overcome their fears and uncertainties. The brand had a vision - to sell 1 million baking kits, and with their unwavering commitment to quality, they achieved this landmark."
        }
        step2Img={"/case-step2.png"}
        chalPara={
          "The brand faced several hurdles along the way. Beginners were apprehensive about the result of their baking endeavors. The packaging was not up to the mark, making the product less appealing. Moreover, the customers had no idea how to decorate their baked goods."
        }
        step3Img={"/case-step3.png"}
        actionsPara={""}
        actionList={[
          "To help beginners understand the process better, we started numbering the icing tips. It brought clarity to the process and eased the fear of beginners.",
          "The packaging issue was another challenge that needed an immediate solution. We revamped the packaging, making it more aesthetic and attractive.",
          "We removed the turn table bottom issue, which was a major improvement in the kit.",
          "The most notable innovation was the launch of the L-level - a groundbreaking addition that took the baking experience to a whole new level.",
          "To further assist the customers, we launched a video course on baking. This course was designed to guide beginners on how to use the kits efficiently and bake like a pro.",
        ]}
        step4Img={"/case-step4.png"}
        resultList={[
          "Rfaqk became the largest baking kit brand in the USA. Sold envisioned 1 million baking kits, marking a significant milestone in their journey.",
          "Rfaqk’s story is a testament to our dedication, innovation, and relentless efforts to improve. We took the uncertainties of beginner bakers and transformed them into confident baking experiences.",
          "We took the feedback seriously and made necessary improvements. We innovated and added value to their product.",
        ]}
        poppins={poppins}
        step5Img={"/case-step5.png"}
        statsPara={
          "Over 90% of customers who took the video baking course purchased additional kits within 6 months. Feedback also noted that nearly 80% reported feeling much more confident in their baking abilities."
        }
      />
      <CaseStudSlider slide1={"/case-studies-slider.png"} />
      <section className={`business-con`}>
        <h1 className={poppins.className}>Ready to grow your business?</h1>
        <Link href={"/"} className={`${poppins.className} business-contact`}>
          Contact Now
        </Link>
      </section>
    </section>
  );
}

export default SubCase;
