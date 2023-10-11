"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import "./style.scss";
const poppins = Poppins({
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
function OurStoryComp() {
  const [email, setEmail] = useState("");
  const handleNewsletter = () => {
    console.log("@@@", email);
  };
  return (
    <section>
      <header className="our-st-con">
        <h1 className={`${poppins.className}`}>
          our mission is to offer you hope and freedom
        </h1>
      </header>
      <section className={`${poppins.className} about-main-wrap`}>
        {/* <BackToTop route={"#home"} /> */}
        <div className={`${poppins.className} content-wrapper`}>
          <h1 className="main-head">Our Story</h1>
          <p>
            It&apos;s an interesting story of the CEO of Growthecho, Faraz Yasin
            in his own words “One day, I googled the top 100 countries in the
            world and was shocked to see that neither Pakistani nor even a
            Muslim exist on that list .I still remember how hard that night was
            on me Couldn&apos;t blink my eyes for a second And the other morning
          </p>
          <p>
            Everything changed I decided to start my own business and be the
            first to be among those hundred representing Muslims and Pakistan as
            a nation Started researching the product and launched the best one
            in the market. Named the brand “RFAQK” meaning to ask Allah for help
            over enemies
          </p>
          <p>
            The company propelled All those amazing reviews made me confident
            and believe in me And till then, I&apos;ve sold millions of products
            on Amazon Made $6 Million in less than a year and now at Growth
            echo, I am helping other Amazon sellers with my team to be
            successful in the Amazon market.
          </p>
          <p className="ceo-name">- Faraz Yasin</p>
          <img src="/our-story-arrows.png" className="story-arrow" />
        </div>
        <div className="grow-img-about-wrap">
          <img src="/about-grow.png" alt="about us" />
        </div>
        <div className="team-about-wrap">
          <img src="/about-sub-img.png" alt="about growth eco" />
        </div>
      </section>
      {/* <section className="news-letter cus-space">
        <h1 className={poppins.className}>
          Subscribe Our Newsletter For Latest Updates
        </h1>
        <input
          type="email"
          placeholder="Email"
          className={`${poppins.className} news-letter-cus`}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className="submit-btn">
          <button
            className={`${poppins.className} news-sub`}
            onClick={handleNewsletter}
          >
            Subscribe!
          </button>
        </div>
      </section> */}
    </section>
  );
}

export default OurStoryComp;
