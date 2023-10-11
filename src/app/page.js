"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import localFont from "@next/font/local";
import { Poppins } from "next/font/google";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./global.scss";
import Link from "next/link";
import FAQs from "@/component/faq";
import MobileSlider from "@/component/mobileSlider";
import Testimonials from "@/component/testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import BackToTop from "@/component/backToTop";
import { useRouter } from "next/navigation";
import SliderMobileNew from "@/component/mobileSlider/mobile-new";
import Head from "next/head";
const poppins = Poppins({
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
};
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    AOS.init();
    router.refresh();
  }, []);
  const [activeLink, setActiveLink] = useState("Branding");
  const handleLinks = (e) => setActiveLink(e.target.innerText);
  return (
    <main>
      <Head>
        <title>GrowthEco | Home</title>
        <meta
          name="description"
          content="Full potential to your Amazon business with our powerhouse solutions"
          key="desc"
        />
      </Head>
      <BackToTop route={"#home"} />
      <header className="header-wrap">
        <img src="/final-home-bg.png" className="headerImg" alt="home-bg" />
        <section
          data-aos="fade-right"
          data-aos-offset="00"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="header-content-wrap"
        >
          <h1 className={poppins.className}>
            Full potential to your Amazon business with our powerhouse solutions
          </h1>
          {/* <h2 className={poppins.className}>
            Need It <span>Now</span>?
          </h2> */}
          <div className={`btnWrap`}>
            <button
              onClick={() => router.push("/contact-us")}
              className={`${poppins.className} startBtn`}
            >
              Contact Us
            </button>
          </div>
        </section>
      </header>
      <section className="triangle-bg">
        <div className="compt-wrap">
          <h1 className={poppins.className}>
            Ready to conquer Amazon&apos;s <span>fierce competition</span>?
          </h1>
          <p className={poppins.className}>
            Supercharge your business to skyrocket profits and amplify
            visibility without draining your budget on PPC. Contact us and
            triumph in the Amazon marketplace today.
          </p>
          <div className="boost-btn-wrap">
            <button
              onClick={() => router.push("/contact-us")}
              className={poppins.className}
            >
              Boost Your Visibility
              <span>
                <Image
                  alt="growth eco"
                  src={"/arrow-r.png"}
                  width={22}
                  height={22}
                />
              </span>
            </button>
          </div>
        </div>
        <Image
          alt="growth eco"
          className="bg-line-img"
          src={"/tick-svg.svg"}
          width={1470}
          height={1293}
          layout="responsive"
        />
        <div className="step-wrap">
          <img
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            alt="growth eco"
            src={"/vector.png"}
            className="vector-wrap"
            // width={830}
            // height={275}
            // layout="responsive"
          />
          <div
            className="single-step"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img alt="growth eco" src={"/scale-step1.svg"} />
            <h2 className={poppins.className}>Research and Analysis</h2>
            <ul className={poppins.className}>
              <li>Analyze demands Identifying</li>
              <li>Competitors</li>
              <li>Examined new trends</li>
            </ul>
          </div>
          <div
            className="single-step2"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="150"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h2 className={poppins.className}>Strategy Development</h2>
            <ul className={poppins.className}>
              <li>Build a strategy</li>
              <li>Turn thoughts into reality</li>
              <li>Execute the plan</li>
            </ul>
            <img alt="growth eco" src={"/scale-step2.svg"} />
          </div>
          <div
            className="single-step3"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img alt="growth eco" src={"/scale-step3.svg"} />
            <h2 className={poppins.className}>Implementation</h2>
            <ul className={poppins.className}>
              <li>Designing materials</li>
              <li>Advertising campaigns</li>
              <li>Optimizing Digital Presence</li>
              <li>Social Media Strategies</li>
            </ul>
          </div>
          <div
            className="single-step4"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="250"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h2 className={poppins.className}>Monitoring</h2>
            <ul className={poppins.className}>
              <li>Analyzing data</li>
              <li>Measuring results</li>
              <li>Key performance</li>
            </ul>
            <img alt="growth eco" src={"/scale-step5.svg"} />
          </div>
        </div>
        <div className="step-wrap-mobile">
          <Image
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src={"/mobile-home-vector.png"}
            width={310}
            height={850}
            className="home-vector-mob"
          />
          <div
            className="single-step-mob"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="150"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img alt="growth eco" src={"/mob-scale-step1.png"} />
            <h2 className={poppins.className}>Research and Analysis</h2>
            <ul className={poppins.className}>
              <li>Analyze demands Identifying</li>
              <li>Competitors</li>
              <li>Examined new trends</li>
            </ul>
          </div>
          <div className="single-step-mob2">
            <img
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              alt="growth eco"
              src={"/mob-scale-step2.png"}
            />
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="st-2-div"
            >
              <h2 className={poppins.className}>Strategy Development</h2>
              <ul className={poppins.className}>
                <li>Build a strategy</li>
                <li>Turn thoughts into reality</li>
                <li>Execute the plan</li>
              </ul>
            </div>
          </div>
          <div
            className="single-step-mob3"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="st-2-div">
              <h2 className={poppins.className}>Implementation</h2>
              <ul className={poppins.className}>
                <li>Designing materials</li>
                <li>Advertising campaigns</li>
                <li>Optimizing Digital Presence</li>
                <li>Social Media Strategies</li>
              </ul>
            </div>
            <img alt="growth eco" src={"/mob-scale-step3.png"} />
          </div>
          <div
            className="single-step-mob4"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="150"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="st-2-div">
              <h2 className={poppins.className}>Monitoring</h2>
              <ul className={poppins.className}>
                <li>Analyzing data</li>
                <li>Measuring results</li>
                <li>Key performance</li>
              </ul>
            </div>
            <img alt="growth eco" src={"/mob-scale-step4.png"} />
          </div>
        </div>
        <div className="services-wrap">
          <h1 className={poppins.className}>Services</h1>
          <p className={poppins.className}>
            Every business is unique, and we get along with you as a team to
            understand your business module and deliver a wide range of services
            tailored to your business needs that keep you ahead of the
            competition.
          </p>
          <Image
            alt="growth eco"
            className="serv-man"
            width={270}
            height={450}
            src={"/service-bg.png"}
          />
        </div>
      </section>
      <section className="service-card-wrap">
        <Image
          alt="growth eco"
          className="ticks"
          src={"/single-arr.png"}
          width={425}
          height={595}
        />
        <div className="card-wrap">
          <div className="card top">
            <Image
              alt="growth eco"
              src={"/card1.png"}
              width={250}
              height={100}
            />
            <h2 className={poppins.className}>Amazon product research</h2>
            <p className={poppins.className}>
              GrowthEcho dives deep into market trends, competitor analysis, and
              customer preferences to identify winning products that will
              skyrocket your sales on Amazon. Let us handle your Amazon Product
              Research with our expert team!
            </p>
            <button
              className={poppins.className}
              onClick={() => router.push("/product-research")}
            >
              Uncover Within
            </button>
          </div>
          <div className="card top">
            <Image
              alt="growth eco"
              src={"/card2.png"}
              width={250}
              height={100}
            />
            <h2 className={poppins.className}>
              Product Listing and optimization
            </h2>
            <p className={poppins.className}>
              We&apos;ll craft compelling listings that captivate customers,
              boost rankings, and drive more sales, giving your Amazon business
              the edge it needs to thrive. Stand out from the crowd with our
              expert Product Listing and Optimization service!
            </p>
            <button
              className={poppins.className}
              onClick={() => router.push("/listing-optimization")}
            >
              Uncover Within
            </button>
          </div>
          <div className="card bottom">
            <Image
              alt="growth eco"
              src={"/card-new-3.png"}
              width={250}
              height={100}
            />
            <h2 className={poppins.className}>Amazon Advertising</h2>
            <p className={poppins.className}>
              Let Us Supercharge Your Business on the World&apos;s Largest
              Marketplace. We create ad strategies, inform ad spend decisions
              with competitive spend data, and design ads that hook the random
              scrolling audience and convert them into favorite customers.
            </p>
            <button
              className={poppins.className}
              onClick={() => router.push("/amazon-advertising")}
            >
              Uncover Within
            </button>
          </div>
          <div className="card bottom">
            <Image
              alt="growth eco"
              src={"/card4.png"}
              width={250}
              height={100}
            />
            <h2 className={poppins.className}>Product Sourcing</h2>
            <p className={poppins.className}>
              From finding the hottest products to negotiating the best deals,
              our experienced team will ensure you have a steady supply of
              high-demand items to boost your sales. Let&apos;s start sourcing
              success together!
            </p>
            <button
              className={poppins.className}
              onClick={() => router.push("/product-sourcing")}
            >
              Uncover Within
            </button>
          </div>
        </div>
        <div className="uncover-wrap">
          <button
            className={poppins.className}
            onClick={() => router.push("/our-expertise")}
          >
            Uncover unique fields
          </button>
          <span>
            <Image
              alt="growth eco"
              src={"/forward-arr.png"}
              width={134}
              height={15}
            />
          </span>
        </div>
      </section>
      <section className="sales-wrap">
        <h1 className={poppins.className}>Our Sales</h1>
        <p className={poppins.className}>
          Unlock the full potential of your Amazon business with our top-notch
          services, maximizing sales and boosting your success on the
          world&apos;s largest online marketplace.
        </p>
        <Image
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          alt="growth eco"
          src={"/sales-main.svg"}
          width={1010}
          height={418}
          // layout="responsive"
          className="sales-count"
        />
        <Image
          alt="growth eco"
          src={"/sales-mobile-new.png"}
          width={297}
          height={780}
          className="sales-count-mobile"
        />
        <Image
          alt="growth eco"
          src={"/arrow-3.png"}
          width={425}
          height={550}
          className="arrow-3"
        />
      </section>
      <section className="clients-wrap">
        <div>
          <h1 className={poppins.className}>Our Clients </h1>
          <p className={poppins.className}>
            Our clients rave about our Amazon service provider company, praising
            us for the game-changing strategies, exceptional results, and
            unparalleled support that have transformed their businesses and left
            them speechless!
          </p>
        </div>
        <div className="slider-wrap">
          <Slider
            dots={true}
            slidesPerRow={3}
            slidesToShow={1}
            slidesToScroll={1}
            speed={500}
            infinite={true}
            arrows={false}
            autoplay={true}
            autoplaySpeed={1500}
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
                alt="growth eco"
                className="slider-img"
                src={"/client-1.png"}
                width={200}
                height={100}
              />
            </div>
            <div className="image-wrapper">
              <Image
                alt="growth eco"
                className="slider-img"
                src={"/client-2.png"}
                width={200}
                height={100}
              />
            </div>
            <div className="image-wrapper">
              <Image
                alt="growth eco"
                className="slider-img"
                src={"/client-3.png"}
                width={200}
                height={100}
              />
            </div>
            <div className="image-wrapper">
              <Image
                alt="growth eco"
                className="slider-img"
                src={"/client-1.png"}
                width={200}
                height={100}
              />
            </div>
            <div className="image-wrapper">
              <Image
                alt="growth eco"
                className="slider-img"
                src={"/client-2.png"}
                width={200}
                height={100}
              />
            </div>
            <div className="image-wrapper">
              <Image
                alt="growth eco"
                className="slider-img"
                src={"/client-3.png"}
                width={200}
                height={100}
              />
            </div>
          </Slider>
        </div>
      </section>
      <Testimonials
        poppins={poppins}
        sliderArr={[
          {
            name: "Sarah James",
            profession: "",
            imgUrl: "/test-ava-4.png",
            stars: "/star-5.png",
            testimonial:
              "Thanks to Growth Echo, my Amazon business reached new heights. Their management services streamlined everything, from listings to ads!",
          },
          {
            name: "Jason Patel",
            profession: "",
            stars: "/star-5.png",
            imgUrl: "/test-ava-2.jpg",
            testimonial:
              "Growth Echo's strategies are gold. My sales tripled within months. Their growth insights are a game-changer for Amazon sellers!",
          },
          {
            name: "Sam Chen",
            profession: "",
            stars: "/stars.png",
            imgUrl: "/test-ava-3.jpg",
            testimonial:
              "Couldn't have managed my Amazon store without Growth Echo. Their expertise is evident – my brand's visibility and profits soared!",
          },
          {
            name: "Michael Rodriguez",
            profession: "",
            imgUrl: "/test-ava-1.jpg",
            stars: "/stars.png",
            testimonial:
              "From inventory to SEO, Growth Echo handled it all. My FBA business is thriving, all thanks to their exceptional growth and management services.",
          },
        ]}
        heading={true}
      />
      <section className="case-studies">
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

        <div className="case-img-wrap">
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
          <div className="case-img-wrap">
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
          <div className="case-img-wrap">
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
          <div className="case-img-wrap">
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

        <SliderMobileNew
          images={[
            { imageUrl: "/case-stud-1.png", link: "/boldify" },
            { imageUrl: "/case-stud-2.png", link: "/brickell" },
            { imageUrl: "/case-stud-3.png", link: "/rfaqk" },
          ]}
        />
        {/* <MobileSlider images={["/case-1.png", "/case-2.png", "/case-3.png"]} /> */}
        {/* {activeLink == "Campaigns" ? (
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
        ) : null} */}
        <div className="case-st-all-btn">
          <Link
            className={`${poppins.className} explore-all`}
            href={"/case-studies"}
          >
            Explore All
            <span>
              <Image
                alt="growth eco"
                src={"/forward-arr.png"}
                width={74}
                height={10}
              />
            </span>
          </Link>
        </div>
      </section>
      <section className="quote-sec">
        <h1 className={poppins.className}>
          Elevate your Amazon business to new heights with our premium services,
          where success meets excellence, and your satisfaction is our greatest
          achievement.
        </h1>
        <div className="quote-btn-wrap">
          <Image alt="growth eco" src={"/rocket2.png"} width={25} height={25} />
          <button
            className={poppins.className}
            onClick={() => router.push("/contact-us")}
          >
            Start Now
          </button>
          <Image alt="growth eco" src={"/rocket1.png"} width={25} height={25} />
        </div>
      </section>
      <FAQs
        poppins={poppins}
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
