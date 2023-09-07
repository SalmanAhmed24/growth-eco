import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import Image from "next/image";
function SliderAbout({ futuraBK, futuraMDBT, futuraLtBT, futuraHv, poppins }) {
  return (
    <section className="slider-about">
      <Slider
        dots={true}
        autoplay={true}
        autoplaySpeed={2500}
        infinite={true}
        slidesPerRow={3}
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
          {
            breakpoint: 992,
            settings: { slidesPerRow: 3, slidesToShow: 1 },
          },
        ]}
        className="about-slider"
      >
        <Image alt="growth eco" src={"/about-1.png"} width={207} height={83} />
        <Image alt="growth eco" src={"/about-2.png"} width={207} height={83} />
        <Image alt="growth eco" src={"/about-3.png"} width={207} height={83} />
        <Image alt="growth eco" src={"/about-4.png"} width={207} height={83} />
        <Image alt="growth eco" src={"/about-1.png"} width={207} height={83} />
        <Image alt="growth eco" src={"/about-2.png"} width={207} height={83} />
      </Slider>
      <Image
        alt="growth eco"
        src={"/about-arrows.png"}
        width={546}
        height={600}
        className="about-arr"
      />
    </section>
  );
}

export default SliderAbout;
