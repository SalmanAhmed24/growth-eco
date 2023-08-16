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
            Full potential to your Amazon business with our powerhouse solutions
          </h1>
          <h2 className={futuraHv.className}>
            Need It <span>Now</span>?
          </h2>
          <div className={`btnWrap`}>
            <button className={`${futuraHv.className} startBtn`}>
              Contact Us
            </button>
          </div>
        </section>
      </header>
      <section className="triangle-bg">
        <div className="compt-wrap">
          <h1 className={futuraHv.className}>
            Ready to conquer Amazon&apos;s <span>fierce competition</span>?
          </h1>
          <p className={futuraLTBT.className}>
            Supercharge your business to skyrocket profits and amplify
            visibility without draining your budget on PPC. Contact us and
            triumph in the Amazon marketplace today.
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
            Every business is unique, and we get along with you as a team to
            understand your business module and deliver a wide range of services
            tailored to your business needs that keep you ahead of the
            competition.
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
              GrowthEcho dives deep into market trends, competitor analysis, and
              customer preferences to identify winning products that will
              skyrocket your sales on Amazon." Let us handle your Amazon Product
              Research with our expert team!
            </p>
            <button className={futuraHv.className}>Uncover Within</button>
          </div>
          <div className="card top">
            <Image src={"/card2.png"} width={250} height={100} />
            <h2 className={futuraHv.className}>
              Product Listing and optimization
            </h2>
            <p className={futuraBK.className}>
              We&apos;ll craft compelling listings that captivate customers,
              boost rankings, and drive more sales, giving your Amazon business
              the edge it needs to thrive. Stand out from the crowd with our
              expert Product Listing and Optimization service!
            </p>
            <button className={futuraHv.className}>Uncover Within</button>
          </div>
          <div className="card bottom">
            <Image src={"/card-new-3.png"} width={250} height={100} />
            <h2 className={futuraHv.className}>Amazon Advertising</h2>
            <p className={futuraBK.className}>
              Let Us Supercharge Your Business on the World&apos;s Largest
              Marketplace. We create ad strategies, inform ad spend decisions
              with competitive spend data, and design ads that hook the random
              scrolling audience and convert them into favorite customers.
            </p>
            <button className={futuraHv.className}>Uncover Within</button>
          </div>
          <div className="card bottom">
            <Image src={"/card4.png"} width={250} height={100} />
            <h2 className={futuraHv.className}>Product Sourcing</h2>
            <p className={futuraBK.className}>
              From finding the hottest products to negotiating the best deals,
              our experienced team will ensure you have a steady supply of
              high-demand items to boost your sales. Let&apos;s start sourcing
              success together!
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
          Unlock the full potential of your Amazon business with our top-notch
          services, maximizing sales and boosting your success on the
          world&apos;s largest online marketplace.
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
            Our clients rave about our Amazon service provider company, praising
            us for the game-changing strategies, exceptional results, and
            unparalleled support that have transformed their businesses and left
            them speechless!
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
      <Testimonials
        sliderArr={[
          {
            name: "Ivan",
            profession: "",
            testimonial:
              "GrowthEcho's Amazon Advertising was a game-changer! Our Amazon  sales rank soared with targeted ads and expert strategies.",
          },
          {
            name: "Maria",
            profession: "",
            testimonial:
              "Efficient and effective! GrowthEcho's services optimized our Amazon ads, yielding impressive results and increased visibility.",
          },
          {
            name: "Hans",
            profession: "",
            testimonial:
              "Highly recommend! GrowthEcho's team boosted our Amazon presence, amazon keyword ranking, converting clicks into loyal customers. Excellent service!",
          },
        ]}
        heading={true}
      />
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
          Elevate your Amazon business to new heights with our premium services,
          where success meets excellence, and your satisfaction is our greatest
          achievement.
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
        question1={"How will GrowthEcho manage my Amazon account?"}
        question2={"How can GrowthEcho services benefit my Amazon business?"}
        question3={
          "What sets your GrowthEcho apart from other Amazon service providers?"
        }
        question4={"How can I get started with your Amazon services?"}
        tab1={
          "GrowthEcho will manage your Amazon account by implementing data-driven strategies, optimizing product listings, running targeted PPC campaigns, and conducting regular performance analysis to ensure the most visibility, sales growth, and success in the competitive marketplace."
        }
        tab2={
          "Our specialized services are designed to drive success in the competitive Amazon marketplace. By leveraging our expertise, you can expect increased visibility, improved product rankings, higher conversion rates, and a stronger brand presence, leading to enhanced sales and profitability."
        }
        tab3={
          "At GrowthEcho, we take pride in our data-driven approach, industry knowledge, and a team of seasoned Amazon experts. Our strategies are proven results, and we adapt to the dynamic Amazon ecosystem, ensuring you stay ahead of the curve and outperform your competition."
        }
        tab4={
          "Getting started is simple! Reach out to us through our contact number given below. We'll schedule a FREE consultation call to understand your specific needs and goals. After assessing your requirements, we'll craft a tailored plan to supercharge your Amazon business and start the journey to success."
        }
      />
    </main>
  );
}
