import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
function ServiceWhy({
  headingMain,
  spanMain,
  mainPara,
  whyCardsArr,
  trustHeading,
  trustCardsArr,
  mainImg,
  secImg,
}) {
  return (
    <section className="amazon-ser-con">
      <h1 className={poppins.className}>
        {headingMain}
        <span className={poppins.className}>{spanMain}</span>
      </h1>
      <div className="amazon-ser-card">
        <div className="image-wrap">
          <Image alt="growth eco" src={mainImg} width={563} height={429} />
        </div>
        <div className="info-con">
          <p className={poppins.className}>{mainPara}</p>
          <div className="cards-inner-wrap">
            {whyCardsArr.map((i, ind) => {
              return (
                <div key={ind} className="inner">
                  <p className={poppins.className}>{i.cardText}</p>
                </div>
              );
            })}
          </div>
          <div className="amazon-inner-link">
            <Link href={"/contact-us"} className={poppins.className}>
              Start Now
            </Link>
          </div>
        </div>
      </div>
      <div className="grow-sec">
        <div className="grow-sec-con">
          <h1 className={poppins.className}>{trustHeading}</h1>
          {trustCardsArr.map((i, ind) => {
            return (
              <div key={ind} className="inner-img-con-wrap">
                <Image
                  alt="growth eco"
                  src={"/round-rocket.png"}
                  width={45}
                  height={45}
                />
                <div className="inner-grow-wrap">
                  <h1 className={poppins.className}>{i.trustInHead}</h1>
                  <p className={poppins.className}>{i.trustInPara}</p>
                </div>
              </div>
            );
          })}
          <div className="grow-link-wrap">
            <Link href={"/contact-us"} className={poppins.className}>
              Ready To Grow{" "}
              <Image
                alt="growth eco"
                src={"/arrow-grow.png"}
                width={32}
                height={8}
              />
            </Link>
          </div>
        </div>
        <div className="grow-sec-img">
          <img src={secImg} />
        </div>
      </div>
    </section>
  );
}

export default ServiceWhy;
