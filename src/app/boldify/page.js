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
function SubCase3() {
  return (
    <section className={`${poppins.className} case-sub-main`}>
      <BackToTop poppins={poppins} route={"#home"} />
      <HeaderCase
        caseStudyNo="Case Study 1"
        caseHeadingMain="Boldify"
        casePara="The Boldofy set out to empower men experiencing thinning hair through effective, research-backed products and education."
        caseDeskImg="/boldify.png"
        caseMobileImg="/boldify-mobile.png"
        poppins={poppins}
      />
      <EXESUM
        summary="Boldify was launched on Amazon in 2020 with a vision to provide effective and
        natural hair care solutions for men experiencing hair loss and thinning. The
        brand aimed to help customers take bold steps to address hair issues and
        regain confidence."
        poppins={poppins}
      />
      <CaseSteps
        overviewPara={
          "Within its first year, Boldify surpassed initial sales and ratings goals through social media marketing, improved packaging and branding, educating customers, and offering a generous money-back guarantee. The brand is now among the top hair loss brands on Amazon."
        }
        step1Img={"/boldify-1.png"}
        goalsPara={
          "The brand had the goal to become the #1 hair care brand for baldness on Amazon within 3 years. Specifically, they aimed to:"
        }
        goalsList={[
          "Sell 100,000 units of products in the first year",
          "Achieve a 4.5-star rating on all products",
        ]}
        step2Img={"/boldify-2.png"}
        chalPara={"When Boldify first launched, it faced some key challenges:"}
        chalList={[
          "Educating customers on natural solutions for hair loss that work",
          "Standing out among thousands of similar brands on Amazon",
          "High return rates as customers were unsure if the products would work",
          "Low brand awareness outside of paid Amazon ads.",
        ]}
        step3Img={"/boldify-3.png"}
        actionsPara={
          "To overcome these challenges and meet their goals, We took the following actions:"
        }
        actionList={[
          "Build a social presence with before/after photos",
          "Revamped packaging design and branding for improved visibility",
          " Added detailed ingredient listings and how-to-use guides to products",
          "Offered 100% money-back guarantee for returns within 60 days",
          "Ran Amazon paid campaigns",
        ]}
        step4Img={"/boldify-4.png"}
        resultPara={
          "Due to these efforts, within the first 12 months, Boldify was able to:"
        }
        resultList={[
          "Surpass goal to sell 100,000 units, achieving sales of 125,000 units",
          "Maintain an average 4.6 star rating on all 4 products",
          "Become the #3 hair loss brand on Amazon",
        ]}
        poppins={poppins}
        step5Img={"/boldify-5.png"}
        statsPara={
          "Boldify's customers expressed a high level of satisfaction in the first year, as evidenced by various metrics:"
        }
        statsList={[
          "Over 90% of customers rated the products 4 stars or higher.",
          "The return rate was under 15%, suggesting customers were overwhelmingly pleased enough to keep using the products.",
        ]}
      />
      <CaseStudSlider slide1={"/brickell-slide.png"} />
      <section className={`business-con`}>
        <h1 className={poppins.className}>Ready to grow your business?</h1>
        <Link href={"/"} className={`${poppins.className} business-contact`}>
          Contact Now
        </Link>
      </section>
    </section>
  );
}

export default SubCase3;
