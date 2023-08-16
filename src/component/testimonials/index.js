"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import localFont from "@next/font/local";
import "../../app/capabilities/capabilities.scss";
const futuraHv = localFont({
  src: "../../app/fonts/FutuHv.ttf",
  weight: "400",
  style: "normal",
});
import Image from "next/image";
const futuraBK = localFont({
  src: "../../app/fonts/FutuBk.ttf",
  weight: "400",
  style: "normal",
});
const futuraMDBT = localFont({
  src: "../../app/fonts/FutuMd.ttf",
  weight: "400",
  style: "normal",
});
const futuraLTBT = localFont({
  src: "../../app/fonts/FuturaLtBT.ttf",
  weight: "400",
  style: "normal",
});
function Testimonials({ heading, sliderArr }) {
  console.log("thi is arr", sliderArr);
  return (
    <section className="testimonial-wrap">
      {heading ? (
        <h1 className={futuraHv.className}>What Clients says about us</h1>
      ) : null}
      <Swiper
        spaceBetween={150}
        loop={false}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 5,
        }}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            grabCursor: true,
            zoom: false,
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 50,
            centeredSlides: true,
            zoom: false,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 150,
            centeredSlides: true,
            zoom: false,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 150,
            centeredSlides: true,
            zoom: false,
          },
          1500: {
            slidesPerView: 3,
            spaceBetween: 150,
            centeredSlides: true,
            zoom: false,
          },
        }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        {sliderArr &&
          sliderArr.map((i, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="card-test">
                  <div className="top-sec">
                    <Image
                      className="avatar"
                      src={"/avatar.png"}
                      width={66}
                      height={66}
                    />
                    <div className="top-content-wrap">
                      <h1 className={futuraHv.className}>{i.name}</h1>
                      <p className={futuraLTBT.className}>{i.profession}</p>
                    </div>
                  </div>
                  <Image src={"/stars.png"} width={110} height={22} />
                  <p className={futuraLTBT.className}>{i.testimonial}</p>
                  <Image
                    className="test-down"
                    src={"/test-down.png"}
                    width={337}
                    height={190}
                  />
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
