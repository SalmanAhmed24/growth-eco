import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";
function MobileSlider({ images }) {
  return (
    <section className="mobileSlider-con">
      <Swiper
        spaceBetween={20}
        effect={"coverflow"}
        loop={false}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 5,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {images.map((i) => {
          return (
            <SwiperSlide key={i}>
              <Image alt="growth eco" src={i} width={303} height={387} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default MobileSlider;
