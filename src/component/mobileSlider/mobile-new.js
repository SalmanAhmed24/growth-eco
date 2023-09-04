import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import Image from "next/image";
function SliderMobileNew({ images }) {
  return (
    <section className="slider-about">
      <Slider
        dots={false}
        autoplay={true}
        autoplaySpeed={2500}
        infinite={true}
        slidesPerRow={1}
        slidesToShow={1}
        arrows={false}
        responsive={[
          {
            breakpoint: 320,
            settings: { slidesPerRow: 1, slidesToShow: 1 },
          },
          {
            breakpoint: 575,
            settings: { slidesPerRow: 1, slidesToShow: 1 },
          },
        ]}
        className="about-slider"
      >
        {images.map((i) => {
          return (
            <Image key={i} alt="growth eco" src={i} width={303} height={387} />
          );
        })}
      </Slider>
    </section>
  );
}

export default SliderMobileNew;
