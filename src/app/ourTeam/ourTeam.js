"use client";
import React, { useRef, useState } from "react";
import localFont from "@next/font/local";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "./ourTeam.scss";
import TestSlider from "@/component/sliders/testSlider";
import { Poppins } from "next/font/google";
import BackToTop from "@/component/backToTop";
const poppins = Poppins({
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
// const poppins = localFont({
//   src: "../fonts/FuturaHeavyBT.ttf",
//   weight: "400",
//   style: "normal",
// });
// const futuraBK = localFont({
//   src: "../fonts/FutuBk.ttf",
//   weight: "400",
//   style: "normal",
// });
// const poppins = localFont({
//   src: "../fonts/FutuMd.ttf",
//   weight: "400",
//   style: "normal",
// });
// const poppins = localFont({
//   src: "../fonts/poppins.ttf",
//   weight: "400",
//   style: "normal",
// });
function OurTeam() {
  const sliderSettings = {
    observeParents: true,
    observer: true,
    navigation: true,
  };
  return (
    <section className="our-team">
      <BackToTop route={"#home"} />
      <header className="our-team-header">
        <p className={poppins.className}>
          We are Amazon service-providing company helping amazon seller like you
          scale Amazon business to new heights!
        </p>
        <Link href={"/"} className={`${poppins.className} team-contact`}>
          Contact Us
        </Link>
      </header>
      <section className="our-team-skill">
        <h1 className={poppins.className}>Unleashing our Dynamic Team!</h1>
        <p className={poppins.className}>
          We are a diverse group of passionate individuals committed to
          achieving excellence in Amazon&apos;s business growth. Our team has a
          common goal~ to collaborate and innovate to overcome challenges and
          make a positive impact in the Amazon world. With a wide range of
          skills and expertise, we bring a unique set of perspectives to every
          project we undertake.
        </p>
      </section>
      <section className="team-wrapper">
        <h1 className={poppins.className}>Our Team</h1>
        <p className={poppins.className}>
          Embarking on an Epic Journey of Excellence and Innovation!
        </p>
        <div className="upper-team">
          <div className="team-card">
            <div className="circle-img">
              <Image
                alt="growth eco"
                src={"/mobile-avatar.png"}
                width={123}
                height={123}
                className="mobile-avatar-img"
              />
              <Image
                alt="growth eco"
                src={"/avatar-team.png"}
                width={258}
                height={258}
              />
            </div>
            <h1 className={`${poppins.className} name`}>FARAZ YASIN</h1>
            <p className={poppins.className}>CEO/Founder</p>
          </div>
          <div className="team-card">
            <div className="circle-img">
              <Image
                alt="growth eco"
                src={"/mobile-avatar.png"}
                width={123}
                height={123}
                className="mobile-avatar-img"
              />
              <Image
                alt="growth eco"
                src={"/avatar-team.png"}
                width={258}
                height={258}
              />
            </div>
            <h1 className={`${poppins.className} name`}>FARAZ YASIN</h1>
            <p className={poppins.className}>CEO/Founder</p>
          </div>
        </div>
        <div className="mid-team">
          <div className="team-card">
            <div className="circle-img">
              <Image
                alt="growth eco"
                src={"/mobile-avatar.png"}
                width={123}
                height={123}
                className="mobile-avatar-img"
              />
              <Image
                alt="growth eco"
                src={"/avatar-team.png"}
                width={258}
                height={258}
              />
            </div>
            <h1 className={`${poppins.className} name`}>FARAZ YASIN</h1>
            <p className={poppins.className}>CEO/Founder</p>
          </div>
          <div className="team-card">
            <div className="circle-img">
              <Image
                alt="growth eco"
                src={"/mobile-avatar.png"}
                width={123}
                height={123}
                className="mobile-avatar-img"
              />

              <Image
                alt="growth eco"
                src={"/avatar-team.png"}
                width={258}
                height={258}
              />
            </div>
            <h1 className={`${poppins.className} name`}>FARAZ YASIN</h1>
            <p className={poppins.className}>CEO/Founder</p>
          </div>
          <div className="team-card">
            <div className="circle-img">
              <Image
                alt="growth eco"
                src={"/mobile-avatar.png"}
                width={123}
                height={123}
                className="mobile-avatar-img"
              />

              <Image
                alt="growth eco"
                src={"/avatar-team.png"}
                width={258}
                height={258}
              />
            </div>
            <h1 className={`${poppins.className} name`}>FARAZ YASIN</h1>
            <p className={poppins.className}>CEO/Founder</p>
          </div>
          <div className="team-card">
            <div className="circle-img">
              <Image
                alt="growth eco"
                src={"/mobile-avatar.png"}
                width={123}
                height={123}
                className="mobile-avatar-img"
              />

              <Image
                alt="growth eco"
                src={"/avatar-team.png"}
                width={258}
                height={258}
              />
            </div>
            <h1 className={`${poppins.className} name`}>FARAZ YASIN</h1>
            <p className={poppins.className}>CEO/Founder</p>
          </div>
          <div className="team-card">
            <div className="circle-img">
              <Image
                alt="growth eco"
                src={"/mobile-avatar.png"}
                width={123}
                height={123}
                className="mobile-avatar-img"
              />

              <Image
                alt="growth eco"
                src={"/avatar-team.png"}
                width={258}
                height={258}
              />
            </div>
            <h1 className={`${poppins.className} name`}>FARAZ YASIN</h1>
            <p className={poppins.className}>CEO/Founder</p>
          </div>
          <div className="team-card">
            <div className="circle-img">
              <Image
                alt="growth eco"
                src={"/mobile-avatar.png"}
                width={123}
                height={123}
                className="mobile-avatar-img"
              />

              <Image
                alt="growth eco"
                src={"/avatar-team.png"}
                width={258}
                height={258}
              />
            </div>
            <h1 className={`${poppins.className} name`}>FARAZ YASIN</h1>
            <p className={poppins.className}>CEO/Founder</p>
          </div>
        </div>
        <div className="see-more-wrap">
          <Link className={poppins.className} href={"/"}>
            See More
            <span>
              <Image
                alt="growth eco"
                src={"/forward-arr.png"}
                width={70}
                height={12}
              />
            </span>
          </Link>
        </div>
      </section>
      <TestSlider />
      <div className="arrow-divider">
        <Image
          alt="growth eco"
          src={"/about-arrows.png"}
          width={746}
          height={794}
        />
      </div>
      <section className="team-action-wrap">
        <h1 className={poppins.className}>Our Team In Action</h1>
        <p className={poppins.className}>
          Wonderful group of creative individuals
        </p>
        <Image
          alt="growth eco"
          src={"/team-action.png"}
          width={1413}
          height={799}
        />
      </section>
      <section className="interest">
        <h1 className={poppins.className}>interested in joining our team?</h1>
        <Link href={"/"} className={`${poppins.className} contact-link`}>
          Contact Now
        </Link>
      </section>
    </section>
  );
}

export default OurTeam;
