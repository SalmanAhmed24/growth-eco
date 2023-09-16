"use client";
import Image from "next/image";
import Link from "next/link";
import "./serviceComp.scss";
import SliderSubComp from "./sliderSubComp";
import { Poppins } from "next/font/google";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const poppins = Poppins({
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
function ServiceCounter({
  headingMain,
  heading2Count = null,
  heading3Count = null,
  paraMain,
  headingSub1,
  paraSub1,
  headingSub2,
  paraSub2,
  headingSub3,
  paraSub3,
}) {
  const [counterFlag, setCounterFlag] = useState(false);
  return (
    <section className="ser-counter">
      <div className="counter-info-wrap">
        <div className="singleItem first">
          <h1 className={poppins.className}>{headingMain}</h1>
          <p className={poppins.className}>{paraMain}</p>
        </div>
      </div>
      <div className="slider-ser-wrap">
        <ScrollTrigger
          onEnter={() => setCounterFlag(true)}
          onExit={() => setCounterFlag(false)}
          className="card-wrap"
        >
          <div className="singleItem">
            <h1 className={poppins.className}>
              {counterFlag ? (
                <CountUp
                  duration={5}
                  startOnMount={false}
                  end={heading2Count == null ? 600 : heading2Count}
                />
              ) : heading2Count == null ? (
                "600"
              ) : (
                `${heading2Count}`
              )}
            </h1>
            <p className={poppins.className}>{paraSub1}</p>
          </div>
          <div className="singleItem">
            <h1 className={poppins.className}>
              {counterFlag ? (
                <CountUp duration={5} startOnMount={false} end={7} />
              ) : (
                "7"
              )}
            </h1>
            <p className={poppins.className}>{paraSub2}</p>
          </div>
          <div className="singleItem">
            <h1 className={poppins.className}>
              {counterFlag ? (
                <CountUp
                  duration={5}
                  startOnMount={false}
                  end={heading3Count == null ? 250 : heading3Count}
                />
              ) : heading3Count == null ? (
                "250"
              ) : (
                `${heading3Count}`
              )}
            </h1>
            <p className={poppins.className}>{paraSub3}</p>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
}

export default ServiceCounter;
