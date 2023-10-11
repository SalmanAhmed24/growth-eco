import Image from "next/image";
import Link from "next/link";
import "./serviceComp.scss";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
function ServiceCards({ cardsArr }) {
  return (
    <section className="grow-ser-card-con">
      <div className="grow-ser-card-wrap">
        {cardsArr.map((i, ind) => {
          return (
            <div key={ind} className={`card ${i.color}`}>
              <Image
                alt="growth eco"
                className="count-img"
                src={`/amazon-ser-grow-card${
                  ind == 0
                    ? ""
                    : ind == 1
                    ? "2"
                    : ind == 2
                    ? "3"
                    : ind == 3
                    ? "4"
                    : ""
                }.png`}
                width={86}
                height={86}
              />
              <Image
                alt="growth eco"
                className="count-img-mobile"
                src={`/mobile-number-${
                  ind == 0
                    ? "1"
                    : ind == 1
                    ? "2"
                    : ind == 2
                    ? "3"
                    : ind == 3
                    ? "4"
                    : ""
                }.png`}
                width={44}
                height={45}
              />
              <h1 className={poppins.className}>{i.cardsH1}</h1>
              <p className={poppins.className}>{i.cardPara}</p>
            </div>
          );
        })}
      </div>
      <div className="grow-btn-link">
        <Link
          className={`${poppins.className} grow-btn-link`}
          href={"/contact-us"}
        >
          Ready To Grow
          <span>
            <Image
              alt="growth eco"
              src={"/arrow-grow.png"}
              width={33}
              height={8}
            />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default ServiceCards;
