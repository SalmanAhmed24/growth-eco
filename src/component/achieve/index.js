import Image from "next/image";
import "./style.scss";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Achieve({ futuraBK, futuraMDBT, futuraLtBT, futuraHv, poppins }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="ach-wrap">
      <h1 className={poppins.className}>Our Achievements</h1>
      <p className={poppins.className}>
        GrowthEcho is the world&apos;s Top Branded seller and has grown the
        Amazon business to $6 Million in one year
      </p>
      <Image
        data-aos="fade-right"
        data-aos-offset="00"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="ach-img"
        alt="growth eco"
        src={"/achieve.png"}
        width={1370}
        height={350}
      />
      <img
        data-aos="fade-right"
        data-aos-offset="00"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="mobile-roc"
        src={"/mobile-roc-ach.png"}
      />
    </section>
  );
}

export default Achieve;
