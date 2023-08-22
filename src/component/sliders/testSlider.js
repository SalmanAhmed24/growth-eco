import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.scss";

// import required modules
import { Pagination, EffectCoverflow } from "swiper/modules";
import Image from "next/image";

export default function TestSlider() {
  return (
    <div className="outer-wrap-slider">
      <Swiper
        pagination={{
          clickable: true,
          // el: 'swiper-pagination',
        }}
        effect={"coverflow"}
        slidesPerView={3}
        centeredSlides={false}
        coverflowEffect={{
          rotate: 50,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true,
            grabCursor: false,
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: false,
          },
          1500: {
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: false,
          },
        }}
        modules={[Pagination, EffectCoverflow]}
        className="mySwiper teamSwipper"
      >
        <SwiperSlide>
          <img alt="growth eco" src={"/team-slider.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="growth eco" src={"/team-slider.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="growth eco" src={"/team-slider.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="growth eco" src={"/team-slider.png"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
