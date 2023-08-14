import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import Image from "next/image";
function SliderAbout({ futuraBK, futuraMDBT, futuraLtBT, futuraHv }) {
  return (
    <section className="slider-about">
      <Slider
        dots={true}
        slidesToShow={1}
        slidesToScroll={1}
        speed={500}
        infinite={false}
        arrows={false}
        responsive={[
          {
            breakpoint: 575,
            settings: { slidesPerRow: 3, slidesToShow: 1 },
          },
          {
            breakpoint: 992,
            settings: { slidesPerRow: 3, slidesToShow: 1 },
          },
        ]}
        className="about-slider"
      >
        <Image src={"/about-1.png"} width={207} height={83} />
        <Image src={"/about-2.png"} width={207} height={83} />
        <Image src={"/about-3.png"} width={207} height={83} />
        <Image src={"/about-4.png"} width={207} height={83} />
        <Image src={"/about-1.png"} width={207} height={83} />
        <Image src={"/about-2.png"} width={207} height={83} />
      </Slider>
      <Image
        src={"/about-arrows.png"}
        width={546}
        height={600}
        className="about-arr"
      />
    </section>
  );
}

export default SliderAbout;
