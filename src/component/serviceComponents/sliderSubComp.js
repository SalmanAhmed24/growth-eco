"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
function SliderSubComp() {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
          // el: 'swiper-pagination',
        }}
        effect={"coverflow"}
        slidesPerView={3}
        centeredSlides={true}
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
            slidesPerView: 2,
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
        modules={[Pagination]}
        className="mySwiper teamSwipper"
      >
        <SwiperSlide>
          <img src={"/amazon-ser-slider.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/amazon-ser-slider2.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/amazon-ser-slider3.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/amazon-ser-slider.png"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderSubComp;
