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
function OurTeam() {
  const sliderSettings = {
    observeParents: true,
    observer: true,
    navigation: true,
  };
  return (
    <section className="our-team">
      <header className="our-team-header">
        <p className={futuraLTBT.className}>
          We envision a marketing website that provides an immersive and
          captivating user experience.
        </p>
        <Link href={"/"} className={`${futuraMDBT.className} team-contact`}>
          Contact Us
        </Link>
      </header>
      <section className="our-team-skill">
        <h1 className={futuraHv.className}>Skilled Innovators</h1>
        <p className={futuraLTBT.className}>
          We envision a marketing website that provides an immersive and
          captivating user experience. Our goal is to create a visually
          appealing and user-friendly interface that engages visitors from the
          moment they land on our site. Through intuitive navigation, compelling
          visuals, and interactive elements, we aim to leave a lasting
          impression on our audience.{" "}
        </p>
      </section>
      <section className="team-wrapper">
        <h1 className={futuraHv.className}>Our Team</h1>
        <p className={futuraLTBT.className}>
          We envision a marketing website that provides an immersive and
          captivating user experience.
        </p>
        <div className="upper-team">
          <div className="team-card">
            <div className="circle-img">
              <Image
                src={"/mobile-avatar.png"}
                width={123}
                height={123}
                className="mobile-avatar-img"
              />
              <Image src={"/avatar-team.png"} width={258} height={258} />
            </div>
            <h1 className={`${futuraHv.className} name`}>FARAZ YASIN</h1>
            <p className={futuraHv.className}>CEO/Founder</p>
          </div>
          <div className="team-card">
            <div className="circle-img">
              <Image
                src={"/mobile-avatar.png"}
                width={123}
                height={123}
                className="mobile-avatar-img"
              />
              <Image src={"/avatar-team.png"} width={258} height={258} />
            </div>
            <h1 className={`${futuraHv.className} name`}>FARAZ YASIN</h1>
            <p className={futuraHv.className}>CEO/Founder</p>
          </div>
        </div>
        <div className="mid-team">
          <div className="team-card">
            <div className="circle-img">
              <Image
                src={"/mobile-avatar.png"}
                width={123}
                height={123}
                className="mobile-avatar-img"
              />
              <Image src={"/avatar-team.png"} width={258} height={258} />
            </div>
            <h1 className={`${futuraHv.className} name`}>FARAZ YASIN</h1>
            <p className={futuraHv.className}>CEO/Founder</p>
          </div>
          <div className="team-card">
            <div className="circle-img">
              <Image
                src={"/mobile-avatar.png"}
                width={123}
                height={123}
                className="mobile-avatar-img"
              />

              <Image src={"/avatar-team.png"} width={258} height={258} />
            </div>
            <h1 className={`${futuraHv.className} name`}>FARAZ YASIN</h1>
            <p className={futuraHv.className}>CEO/Founder</p>
          </div>
          <div className="team-card">
            <div className="circle-img">
              <Image
                src={"/mobile-avatar.png"}
                width={123}
                height={123}
                className="mobile-avatar-img"
              />

              <Image src={"/avatar-team.png"} width={258} height={258} />
            </div>
            <h1 className={`${futuraHv.className} name`}>FARAZ YASIN</h1>
            <p className={futuraHv.className}>CEO/Founder</p>
          </div>
          <div className="team-card">
            <div className="circle-img">
              <Image
                src={"/mobile-avatar.png"}
                width={123}
                height={123}
                className="mobile-avatar-img"
              />

              <Image src={"/avatar-team.png"} width={258} height={258} />
            </div>
            <h1 className={`${futuraHv.className} name`}>FARAZ YASIN</h1>
            <p className={futuraHv.className}>CEO/Founder</p>
          </div>
          <div className="team-card">
            <div className="circle-img">
              <Image
                src={"/mobile-avatar.png"}
                width={123}
                height={123}
                className="mobile-avatar-img"
              />

              <Image src={"/avatar-team.png"} width={258} height={258} />
            </div>
            <h1 className={`${futuraHv.className} name`}>FARAZ YASIN</h1>
            <p className={futuraHv.className}>CEO/Founder</p>
          </div>
          <div className="team-card">
            <div className="circle-img">
              <Image
                src={"/mobile-avatar.png"}
                width={123}
                height={123}
                className="mobile-avatar-img"
              />

              <Image src={"/avatar-team.png"} width={258} height={258} />
            </div>
            <h1 className={`${futuraHv.className} name`}>FARAZ YASIN</h1>
            <p className={futuraHv.className}>CEO/Founder</p>
          </div>
        </div>
        <div className="see-more-wrap">
          <Link className={futuraMDBT.className} href={"/"}>
            See More
            <span>
              <Image src={"/forward-arr.png"} width={70} height={12} />
            </span>
          </Link>
        </div>
      </section>
      <TestSlider />
      <div className="arrow-divider">
        <Image src={"/about-arrows.png"} width={746} height={794} />
      </div>
      <section className="team-action-wrap">
        <h1 className={futuraHv.className}>Our Team In Action</h1>
        <p className={futuraLTBT.className}>
          We envision a marketing website that provides an immersive and
          captivating user experience.
        </p>
        <Image src={"/team-action.png"} width={1413} height={799} />
      </section>
      <section className="interest">
        <h1 className={futuraHv.className}>interested in joining our team?</h1>
        <Link href={"/"} className={`${futuraHv.className} contact-link`}>
          Contact Now
        </Link>
      </section>
    </section>
  );
}

export default OurTeam;
