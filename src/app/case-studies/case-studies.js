"use client";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Link from "next/link";

import "./style.scss";
import Image from "next/image";
import React, { useState } from "react";
import BackToTop from "@/component/backToTop";
import { useRouter } from "next/navigation";
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
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
function CaseStudies() {
  const [activeLink, setActiveLink] = useState("Branding");
  const handleLinks = (e) => {
    setActiveLink(e.target.innerHTML);
  };
  const router = useRouter();
  return (
    <section className="case-studies-con">
      <BackToTop route={"#home"} />
      <header className="case-studies-header">
        <div className="header-content-wrap">
          <h1 className={poppins.className}>Case Studies</h1>
          <p className={poppins.className}>
            Our marketing company specializes in helping sellers navigate and
            thrive in highly competitive environments, leveraging targeted
            strategies to boost visibility.
          </p>
          <Link
            href={"/contact-us"}
            className={`${poppins.className} headerLink`}
          >
            Start Now
          </Link>
        </div>
      </header>
      <section className="succes-wrap">
        <h1 className={poppins.className}>Building Bridges to Success,</h1>
        <h1 className={`${poppins.className} blue-heading`}>
          One Client at a Time
        </h1>
        <p className={poppins.className}>
          We envision a marketing website that provides an immersive and
          captivating user experience. Our goal is to create a visually
          appealing.
        </p>
        <div className="grow-link-wrap">
          <Link href={"/contact-us"} className={poppins.className}>
            Ready To Grow
            <Image
              alt="growth eco"
              src={"/arrow-grow.png"}
              width={32}
              height={8}
            />
          </Link>
        </div>
      </section>
      <section className="case-studies no-bg">
        <h1 className={poppins.className}>Case Studies</h1>
        {/* <div className="case-links-wrap">
          <ul onClick={handleLinks} className={`${poppins.className} links-ul`}>
            <li className={activeLink == "Branding" ? "activeLinkCS" : ""}>
              Branding
            </li>
            <li className={activeLink == "Campaigns" ? "activeLinkCS" : ""}>
              Campaigns
            </li>
            <li className={activeLink == "Graphic" ? "activeLinkCS" : ""}>
              Graphic
            </li>
            <li
              className={
                activeLink == "Digital Marketing" ? "activeLinkCS" : ""
              }
            >
              Digital Marketing
            </li>
          </ul>
        </div> */}
        <section className="tabs-inner">
          <div className="case-img-wrap page-wrap">
            <Image
              alt="growth eco"
              src={"/case-stud-1.png"}
              width={303}
              height={387}
              onClick={() => router.push("/boldify")}
            />
            <Image
              alt="growth eco"
              src={"/case-stud-2.png"}
              width={303}
              height={387}
              onClick={() => router.push("/brickell")}
            />
            <Image
              alt="growth eco"
              src={"/case-stud-3.png"}
              width={303}
              height={387}
              onClick={() => router.push("/rfaqk")}
            />
          </div>

          {/* {activeLink == "Campaigns" ? (
            <div className="case-img-wrap page-wrap">
              <Image
                alt="growth eco"
                src={"/case-3.png"}
                width={303}
                height={387}
              />
              <Image
                alt="growth eco"
                src={"/case-2.png"}
                width={303}
                height={387}
              />
              <Image
                alt="growth eco"
                src={"/case-1.png"}
                width={303}
                height={387}
              />
            </div>
          ) : null}
          {activeLink == "Graphic" ? (
            <div className="case-img-wrap page-wrap">
              <Image
                alt="growth eco"
                src={"/case-2.png"}
                width={303}
                height={387}
              />
              <Image
                alt="growth eco"
                src={"/case-3.png"}
                width={303}
                height={387}
              />
              <Image
                alt="growth eco"
                src={"/case-1.png"}
                width={303}
                height={387}
              />
            </div>
          ) : null}
          {activeLink == "Digital Marketing" ? (
            <div className="case-img-wrap page-wrap">
              <Image
                alt="growth eco"
                src={"/case-3.png"}
                width={303}
                height={387}
              />
              <Image
                alt="growth eco"
                src={"/case-1.png"}
                width={303}
                height={387}
              />
              <Image
                alt="growth eco"
                src={"/case-2.png"}
                width={303}
                height={387}
              />
            </div>
          ) : null} */}
        </section>
      </section>
    </section>
  );
}

export default CaseStudies;
