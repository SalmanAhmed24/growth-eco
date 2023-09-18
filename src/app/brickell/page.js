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
  style: ["normal"],
  subsets: ["latin"],
});
function SubCase2() {
  return (
    <section className={`${poppins.className} case-sub-main`}>
      <BackToTop poppins={poppins} route={"#home"} />
      <HeaderCase
        caseStudyNo="Case Study 2"
        caseHeadingMain="Brickell"
        casePara="Brickell launched on Amazon with a mission to make high-quality skincare effortless for men. Starting with just three essential products—a face wash, moisturizer, and lip balm—the brand aimed to empower customers through education and accessibility."
        caseDeskImg="/brickell-bg-header.svg"
        caseMobileImg="/brickell-bg-header.svg"
        poppins={poppins}
      />
      <EXESUM
        summary="Rfaqk was not an ordinary baking kit brand; it was the ultimate solution
        to bring out the hidden baker in everyone."
        poppins={poppins}
      />
      <CaseSteps
        overviewPara={
          "We were contacted by a multinational consumer personal healthcare brand to help manage their Amazon Vendor Central account. Our client had only achieved 8% growth in year-over-year sales."
        }
        step1Img={"/case-step-inner-1.png"}
        goalsPara={
          "It was designed with the aspiration to help beginner bakers, who were uncertain about their outcomes, to overcome their fears and uncertainties. The brand had a vision - to sell 1 million baking kits, and with their unwavering commitment to quality, they achieved this landmark."
        }
        step2Img={"/case-step-inner-2.png"}
        chalPara={
          "The brand faced several hurdles along the way. Beginners were apprehensive about the result of their baking endeavors. The packaging was not up to the mark, making the product less appealing. Moreover, the customers had no idea how to decorate their baked goods."
        }
        step3Img={"/case-step-inner-3.png"}
        actionsPara={"We decided to take concrete action. "}
        actionList={[
          "To help beginners understand the process better, we started numbering the icing tips. It brought clarity to the process and eased the fear of beginners.",
          "The packaging issue was another challenge that needed an immediate solution. We revamped the packaging, making it more aesthetic and attractive.",
          "We removed the turn table bottom issue, which was a major improvement in the kit.",
          "The most notable innovation was the launch of the L-level - a groundbreaking addition that took the baking experience to a whole new level.",
          "To further assist the customers, we launched a video course on baking. This course was designed to guide beginners on how to use the kits efficiently and bake like a pro.",
        ]}
        step4Img={"/case-step-inner-4.png"}
        resultList={[
          "Rfaqk became the largest baking kit brand in the USA. Sold envisioned 1 million baking kits, marking a significant milestone in their journey.",
          "Rfaqk’s story is a testament to our dedication, innovation, and relentless efforts to improve. We took the uncertainties of beginner bakers and transformed them into confident baking experiences.",
          "We took the feedback seriously and made necessary improvements. We innovated and added value to their product.",
        ]}
        poppins={poppins}
        step5Img={"/case-step-inner-5.png"}
        statsPara={
          "Our client was extremely satisfied with the results we were achieved in such a short time period. The strategy we implemented for them allowed them to hit all their business’s goals for Amazon in 2017 by May. We are now partnered with this client to launch them on Amazon marketplaces in Europe."
        }
      />
      <CaseStudSlider />
      <section className={`business-con`}>
        <h1 className={poppins.className}>Ready to grow your business?</h1>
        <Link href={"/"} className={`${poppins.className} business-contact`}>
          Contact Now
        </Link>
      </section>
    </section>
  );
}

export default SubCase2;
