import Image from "next/image";
import Link from "next/link";
import "./serviceComp.scss";
function ServiceCards({ futuraHv, futuraLTBT, cardsArr }) {
  return (
    <section className="grow-ser-card-con">
      <div className="grow-ser-card-wrap">
        {cardsArr.map((i, ind) => {
          return (
            <div key={ind} className={`card ${i.color}`}>
              <Image
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
              <h1 className={futuraHv.className}>{i.cardsH1}</h1>
              <p className={futuraLTBT.className}>{i.cardPara}</p>
            </div>
          );
        })}
      </div>
      <div className="grow-btn-link">
        <Link className={`${futuraHv.className} grow-btn-link`} href={"/"}>
          Ready To Grow
          <span>
            <Image src={"/arrow-grow.png"} width={33} height={8} />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default ServiceCards;
