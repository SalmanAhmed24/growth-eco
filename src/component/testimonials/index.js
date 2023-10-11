"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import {
  EffectCoverflow,
  Navigation,
  Autoplay,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import localFont from "@next/font/local";
import "../../app/our-expertise/capabilities.scss";
// const futuraHv = localFont({
//   src: "../../app/fonts/FutuHv.ttf",
//   weight: "400",
//   style: "normal",
// });
import Image from "next/image";
// const futuraBK = localFont({
//   src: "../../app/fonts/FutuBk.ttf",
//   weight: "400",
//   style: "normal",
// });
// const futuraMDBT = localFont({
//   src: "../../app/fonts/FutuMd.ttf",
//   weight: "400",
//   style: "normal",
// });
// const futuraLTBT = localFont({
//   src: "../../app/fonts/FuturaLtBT.ttf",
//   weight: "400",
//   style: "normal",
// });
function Testimonials({ heading, sliderArr, poppins }) {
  return (
    <section className="testimonial-wrap">
      {heading ? (
        <h1 className={poppins.className}>What Clients says about us</h1>
      ) : null}
      <Swiper
        spaceBetween={50}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={3}
        // coverflowEffect={{
        //   rotate: 5,
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            grabCursor: true,
            navigation: false,
          },
          575: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
            loop: true,
          },
          1500: {
            slidesPerView: 3,
            spaceBetween: 0,
            loop: true,
          },
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        {sliderArr &&
          sliderArr.map((i, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="card-test">
                  <div className="top-sec">
                    <Image
                      alt="growth eco"
                      className="avatar"
                      src={i.imgUrl}
                      style={{ borderRadius: "50%" }}
                      width={66}
                      height={66}
                    />
                    <div className="top-content-wrap">
                      <h1 className={poppins.className}>{i.name}</h1>
                      <p className={poppins.className}>{i.profession}</p>
                    </div>
                  </div>
                  <Image
                    alt="growth eco"
                    src={i.stars}
                    width={110}
                    className="stars"
                    height={22}
                  />
                  <p className={poppins.className}>{i.testimonial}</p>
                  <Image
                    alt="growth eco"
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
