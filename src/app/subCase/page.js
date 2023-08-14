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
function SubCase() {
  return (
    <section className="case-sub-main">
      <HeaderCase futuraHv={futuraHv} futuraLTBT={futuraLTBT} />
      <EXESUM futuraHv={futuraHv} futuraLTBT={futuraLTBT} />
      <CaseSteps futuraHv={futuraHv} futuraLTBT={futuraLTBT} />
      <CaseStudSlider />
      <section className="business-con">
        <h1 className={futuraHv.className}>Ready to grow your business?</h1>
        <Link href={"/"} className={`${futuraHv.className} business-contact`}>
          Contact Now
        </Link>
      </section>
    </section>
  );
}

export default SubCase;
