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
        slidesPerView={2}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            grabCursor: true,
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 50,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 150,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 150,
            centeredSlides: true,
          },
          1500: {
            slidesPerView: 2,
            spaceBetween: 150,
            centeredSlides: true,
          },
        }}
        modules={[Pagination, EffectCoverflow]}
        className="mySwiper teamSwipper"
      >
        <SwiperSlide>
          <img src={"/team-slider.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/team-slider.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/team-slider.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/team-slider.png"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
