import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Image from "next/image";
function MobileSlider({ images }) {
  return (
    <section className="mobileSlider-con">
      <Swiper
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        modules={[Autoplay]}
        className="mobileCap"
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
