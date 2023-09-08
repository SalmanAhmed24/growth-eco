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

// const futuraHv = localFont({
//   src: "../fonts/FuturaHeavyBT.ttf",
//   weight: "400",
//   style: "normal",
// });
// const futuraBK = localFont({
//   src: "../fonts/FutuBk.ttf",
//   weight: "400",
//   style: "normal",
// });
// const futuraMDBT = localFont({
//   src: "../fonts/FutuMd.ttf",
//   weight: "400",
//   style: "normal",
// });
// const futuraLTBT = localFont({
//   src: "../fonts/FuturaLtBT.ttf",
//   weight: "400",
//   style: "normal",
// });
const poppins = Poppins({
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
});
function SubCase() {
  return (
    <section className={`${poppins.className} case-sub-main`}>
      <BackToTop poppins={poppins} route={"#home"} />
      <HeaderCase poppins={poppins} />
      <EXESUM poppins={poppins} />
      <CaseSteps poppins={poppins} />
      <CaseStudSlider />
      <section className={`${poppins.className} business-con`}>
        <h1 className={poppins.className}>Ready to grow your business?</h1>
        <Link href={"/"} className={`business-contact`}>
          Contact Now
        </Link>
      </section>
    </section>
  );
}

export default SubCase;
