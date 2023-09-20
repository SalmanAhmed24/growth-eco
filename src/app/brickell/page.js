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
        caseDeskImg="/brickell.png"
        caseMobileImg="/brickell-mobile.png"
        color="white"
        poppins={poppins}
      />
      <EXESUM
        summary="Launched in 2021, Brickell aimed to provide effective yet natural and organic
        skin, hair, and body care products specially formulated for men's needs. The
        brand's mission was to help men adopt simple skincare and grooming routines
        using high-quality ingredients."
        poppins={poppins}
      />
      <CaseSteps
        overviewPara={
          "Within its first year, Brickell surpassed initial marketplace share and rating goals through optimized product listings, sponsored ads, a generous returns policy, and educating customers on the benefits of natural ingredients and simple routines. The brand is now among the top performers in the men's natural grooming category on Amazon."
        }
        step1Img={"/brickell-1.png"}
        goalsPara={"Brickell's central goals were to:"}
        goalsList={[
          "Capture 5% of the men's natural grooming category on Amazon within 12 months",
          "Achieve a 4.5-star average rating across all products",
        ]}
        step2Img={"/brickell-2.png"}
        chalPara={"  As a new brand, Brickell faced challenges in:"}
        chalList={[
          "Educating male customers unfamiliar with natural skincare",
          " Standing out among competitors with bigger marketing budgets",
          " Ensuring high star ratings early on with limited customer feedback",
          "Optimizing listings and brand visibility on a crowded Amazon Marketplace.",
        ]}
        step3Img={"/brickell-3.png"}
        actionsPara={"We decided to take concrete action. "}
        actionList={[
          "Offering a generous 90-day returns policy to encourage risk-free purchasing",
          "Providing thorough ingredient lists and how-to-use steps on all products",
          "Optimizing product listings, sponsored ads, brand registry, and storefront",
        ]}
        step4Img={"/brickell-4.png"}
        resultPara={"Through these actions, within 12 months We achieved:"}
        resultList={[
          "Target 5% market share in the men's natural grooming category",
          "An average 4.6-star rating across 4 SKUs launched",
          "Strong seller-level metrics like fast shipping times and high positive reviews",
        ]}
        poppins={poppins}
        step5Img={"/brickell-5.png"}
        statsPara={
          "Brickell achieved exceptional customer satisfaction, retaining over 90% of first-time customers who purchased additional products within 3 months of their initial order. Customer reviews noted high rates of seeing results from the natural formulas, with over 80% satisfying feedback."
        }
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

export default SubCase2;
