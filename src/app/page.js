"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import localFont from "@next/font/local";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./global.scss";
import Link from "next/link";
import FAQs from "@/component/faq";
import MobileSlider from "@/component/mobileSlider";
import Testimonials from "@/component/testimonials";
const futuraHv = localFont({
  src: "./fonts/FutuHv.ttf",
  weight: "400",
  style: "normal",
});
const futuraBK = localFont({
  src: "./fonts/FutuBk.ttf",
  weight: "400",
  style: "normal",
});
const futuraMDBT = localFont({
  src: "./fonts/FutuMd.ttf",
  weight: "400",
  style: "normal",
});
const futuraLTBT = localFont({
  src: "./fonts/FuturaLtBT.ttf",
  weight: "400",
  style: "normal",
});
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
};
export default function Home() {
  const [activeLink, setActiveLink] = useState("Branding");
  const handleLinks = (e) => setActiveLink(e.target.innerText);
  console.log("loaded");
  return (
    <main>
      <header className="header-wrap">
        <section className="header-content-wrap">
          <h1 className={futuraHv.className}>
            Your product is your passion, selling it on <span>Amazon</span> is
            ours.
          </h1>
          <h2 className={futuraHv.className}>
            Need It <span>Now</span>?
          </h2>
          <div className={`btnWrap`}>
            <button className={`${futuraHv.className} startBtn`}>
              Start Now
            </button>
          </div>
        </section>
      </header>
      <section className="triangle-bg">
        <div className="compt-wrap">
          <h1 className={futuraHv.className}>
            Facing fierce competition on <span>Amazon</span>?
          </h1>
          <p className={futuraLTBT.className}>
            Our marketing company specializes in helping sellers navigate and
            thrive in highly competitive environments, leveraging targeted
            strategies to boost visibility, attract customers, and stay ahead of
            the competition.
          </p>
          <div className="boost-btn-wrap">
            <button className={futuraHv.className}>
              Boost Your Visibility{" "}
              <span>
                <Image src={"/arrow-r.png"} width={22} height={22} />
              </span>
            </button>
          </div>
        </div>
        <Image
          className="bg-line-img"
          src={"/comp-bg-tic.png"}
          width={1470}
          height={1293}
          layout="responsive"
        />
        <div className="step-wrap">
          <Image
            src={"/vector.png"}
            className="vector-wrap"
            width={830}
            height={275}
            layout="responsive"
          />
          <div className="single-step">
            <Image src={"/step-1.png"} width={100} height={140} />
            <h2 className={futuraHv.className}>Research and Analysis</h2>
            <ul className={futuraBK.className}>
              <li>Analyze demands Identifying</li>
              <li>Competitors</li>
              <li>Examined new trends</li>
            </ul>
          </div>
          <div className="single-step2">
            <h2 className={futuraHv.className}>Strategy Development</h2>
            <ul className={futuraBK.className}>
              <li>Build a strategy</li>
              <li>Turn thoughts into reality</li>
              <li>Execute the plan</li>
            </ul>
            <Image src={"/step-2.png"} width={100} height={140} />
          </div>
          <div className="single-step3">
            <Image src={"/step-3.png"} width={110} height={180} />
            <h2 className={futuraHv.className}>Implementation</h2>
            <ul className={futuraBK.className}>
              <li>Designing materials</li>
              <li>Advertising campaigns</li>
              <li>Optimizing Digital Presence</li>
              <li>Social Media Strategies</li>
            </ul>
          </div>
          <div className="single-step4">
            <h2 className={futuraHv.className}>Monitoring</h2>
            <ul className={futuraBK.className}>
              <li>Analyzing data</li>
              <li>Measuring results</li>
              <li>Key performance</li>
            </ul>
            <Image src={"/step-4.png"} width={100} height={140} />
          </div>
        </div>
        <div className="services-wrap">
          <h1 className={futuraHv.className}>Services</h1>
          <p className={futuraLTBT.className}>
            Our marketing company specializes in helping sellers navigate and
            thrive in highly competitive environments, leveraging targeted
            strategies to boost visibility, attract customers, and stay ahead of
            the competition.
          </p>
          <Image
            className="serv-man"
            width={270}
            height={450}
            src={"/service-bg.png"}
          />
        </div>
      </section>
      <section className="service-card-wrap">
        <Image
          className="ticks"
          src={"/single-arr.png"}
          width={425}
          height={595}
        />
        <div className="card-wrap">
          <div className="card top">
            <Image src={"/card1.png"} width={250} height={100} />
            <h2 className={futuraHv.className}>Amazon product research</h2>
            <p className={futuraBK.className}>
              The Amazon product business model is simple: source products,
              manage storage, and ship to customers. But it&apos;s not always
              easy—especially
            </p>
            <button className={futuraHv.className}>Uncover Within</button>
          </div>
          <div className="card top">
            <Image src={"/card2.png"} width={250} height={100} />
            <h2 className={futuraHv.className}>
              Product Listing and optimization
            </h2>
            <p className={futuraBK.className}>
              ever since Growth Echo launched its Business Acquisition &
              Accelerators, the company has been churning out successful Amazon
              businesses.
            </p>
            <button className={futuraHv.className}>Uncover Within</button>
          </div>
          <div className="card bottom">
            <Image src={"/card-new-3.png"} width={250} height={100} />
            <h2 className={futuraHv.className}>Amazon Advertising</h2>
            <p className={futuraBK.className}>
              our branding professionals craft custom advertising campaigns to
              establish a distinct presence for your product, creating a
              customer-friendly.
            </p>
            <button className={futuraHv.className}>Uncover Within</button>
          </div>
          <div className="card bottom">
            <Image src={"/card4.png"} width={250} height={100} />
            <h2 className={futuraHv.className}>Product Sourcing</h2>
            <p className={futuraBK.className}>
              We are offering leverages cutting-edge strategies and innovative
              techniques to help businesses connect with their target audience,
              drive online visibility.
            </p>
            <button className={futuraHv.className}>Uncover Within</button>
          </div>
        </div>
        <div className="uncover-wrap">
          <button className={futuraHv.className}>Uncover unique fields</button>
          <span>
            <Image src={"/forward-arr.png"} width={134} height={15} />
          </span>
        </div>
      </section>
      <section className="sales-wrap">
        <h1 className={futuraHv.className}>Our Sales</h1>
        <p className={futuraLTBT.className}>
          Growth Echo implemented a customer success program to ensure high
          customer satisfaction and retention rates. Growth Echo implemented a
          customer success program to ensure high.
        </p>
        <Image
          src={"/sales-main.svg"}
          width={1010}
          height={418}
          layout="responsive"
          className="sales-count"
        />
        <Image
          src={"/sales-mobile.png"}
          width={297}
          height={780}
          className="sales-count-mobile"
        />
        <Image
          src={"/arrow-3.png"}
          width={425}
          height={550}
          className="arrow-3"
        />
      </section>
      <section className="clients-wrap">
        <div>
          <h1 className={futuraHv.className}>Our Clients </h1>
          <p className={futuraLTBT.className}>
            Growth Echo implemented a customer success program to ensure high
            customer satisfaction and retention rates.
          </p>
        </div>
        <div className="slider-wrap">
          <Slider
            dots={true}
            slidesPerRow={4}
            slidesToShow={1}
            slidesToScroll={1}
            speed={500}
            infinite={false}
            arrows={false}
            responsive={[
              {
                breakpoint: 575,
                settings: { slidesPerRow: 1, slidesToShow: 1 },
              },
            ]}
            className="home-slider"
          >
            <div className="image-wrapper">
              <Image
                className="slider-img"
                src={"/pic1.png"}
                width={200}
                height={80}
              />
            </div>
            <div className="image-wrapper">
              <Image
                className="slider-img"
                src={"/pic2.png"}
                width={200}
                height={80}
              />
            </div>
            <div className="image-wrapper">
              <Image
                className="slider-img"
                src={"/pic3.png"}
                width={200}
                height={80}
              />
            </div>
            <div className="image-wrapper">
              <Image
                className="slider-img"
                src={"/pic4.png"}
                width={200}
                height={80}
              />
            </div>
            <div className="image-wrapper">
              <Image
                className="slider-img"
                src={"/pic2.png"}
                width={200}
                height={80}
              />
            </div>
            <div className="image-wrapper">
              <Image
                className="slider-img"
                src={"/pic3.png"}
                width={200}
                height={80}
              />
            </div>
            <div className="image-wrapper">
              <Image
                className="slider-img"
                src={"/pic4.png"}
                width={200}
                height={80}
              />
            </div>
          </Slider>
        </div>
      </section>
      <Testimonials heading={true} />
      <section className="case-studies">
        <h1 className={futuraHv.className}>Case Studies</h1>
        <div className="case-links-wrap">
          <ul
            onClick={handleLinks}
            className={`${futuraBK.className} links-ul`}
          >
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
        </div>
        {activeLink == "Branding" ? (
          <div className="case-img-wrap">
            <Image src={"/case-1.png"} width={303} height={387} />
            <Image src={"/case-2.png"} width={303} height={387} />
            <Image src={"/case-3.png"} width={303} height={387} />
          </div>
        ) : null}
        {activeLink == "Campaigns" ? (
          <div className="case-img-wrap">
            <Image src={"/case-3.png"} width={303} height={387} />
            <Image src={"/case-2.png"} width={303} height={387} />
            <Image src={"/case-1.png"} width={303} height={387} />
          </div>
        ) : null}
        {activeLink == "Graphic" ? (
          <div className="case-img-wrap">
            <Image src={"/case-2.png"} width={303} height={387} />
            <Image src={"/case-3.png"} width={303} height={387} />
            <Image src={"/case-1.png"} width={303} height={387} />
          </div>
        ) : null}
        {activeLink == "Digital Marketing" ? (
          <div className="case-img-wrap">
            <Image src={"/case-3.png"} width={303} height={387} />
            <Image src={"/case-1.png"} width={303} height={387} />
            <Image src={"/case-2.png"} width={303} height={387} />
          </div>
        ) : null}
        {activeLink == "Branding" ? (
          <MobileSlider
            images={["/case-1.png", "/case-2.png", "/case-3.png"]}
          />
        ) : null}
        {activeLink == "Campaigns" ? (
          <MobileSlider
            images={["/case-2.png", "/case-3.png", "/case-1.png"]}
          />
        ) : null}
        {activeLink == "Graphic" ? (
          <MobileSlider
            images={["/case-3.png", "/case-1.png", "/case-2.png"]}
          />
        ) : null}
        {activeLink == "Digital Marketing" ? (
          <MobileSlider
            images={["/case-1.png", "/case-3.png", "/case-2.png"]}
          />
        ) : null}
        <div className="case-st-all-btn">
          <Link className={`${futuraBK.className} explore-all`} href={"#"}>
            Explore All
            <span>
              <Image src={"/forward-arr.png"} width={74} height={10} />
            </span>
          </Link>
        </div>
      </section>
      <section className="quote-sec">
        <h1 className={futuraHv.className}>
          Unlock the potential of your Amazon store and transform it into a
          revenue-generating powerhouse
        </h1>
        <div className="quote-btn-wrap">
          <Image src={"/rocket2.png"} width={25} height={25} />
          <button className={futuraHv.className}>Start Now</button>
          <Image src={"/rocket1.png"} width={25} height={25} />
        </div>
      </section>
      <FAQs
        futuraBK={futuraBK}
        futuraMDBT={futuraMDBT}
        futuraLtBT={futuraLTBT}
        futuraHv={futuraHv}
      />
    </main>
  );
}
