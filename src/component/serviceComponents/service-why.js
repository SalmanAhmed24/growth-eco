import Image from "next/image";
import Link from "next/link";
function ServiceWhy({
  futuraHv,
  futuraLTBT,
  headingMain,
  spanMain,
  mainPara,
  whyCardsArr,
  trustHeading,
  trustCardsArr,
}) {
  return (
    <section className="amazon-ser-con">
      <h1 className={futuraHv.className}>
        {headingMain}
        <span className={futuraHv.className}>{spanMain}</span>
      </h1>
      <div className="amazon-ser-card">
        <div className="image-wrap">
          <Image src={"/amazon-cards-img.png"} width={563} height={429} />
        </div>
        <div className="info-con">
          <p className={futuraLTBT.className}>{mainPara}</p>
          <div className="cards-inner-wrap">
            {whyCardsArr.map((i, ind) => {
              return (
                <div key={ind} className="inner">
                  <p className={futuraHv.className}>{i.cardText}</p>
                </div>
              );
            })}
          </div>
          <div className="amazon-inner-link">
            <Link href={"/"} className={futuraHv.className}>
              Start Now
            </Link>
          </div>
        </div>
      </div>
      <div className="grow-sec">
        <div className="grow-sec-con">
          <h1 className={futuraHv.className}>{trustHeading}</h1>
          {trustCardsArr.map((i, ind) => {
            return (
              <div key={ind} className="inner-img-con-wrap">
                <Image src={"/round-rocket.png"} width={45} height={45} />
                <div className="inner-grow-wrap">
                  <h1 className={futuraHv.className}>{i.trustInHead}</h1>
                  <p className={futuraLTBT.className}>{i.trustInPara}</p>
                </div>
              </div>
            );
          })}
          <div className="grow-link-wrap">
            <Link href={"/"} className={futuraHv.className}>
              Ready To Grow{" "}
              <Image src={"/arrow-grow.png"} width={32} height={8} />
            </Link>
          </div>
        </div>
        <div className="grow-sec-img">
          <img src={"/amazon-ser-grow.png"} />
        </div>
      </div>
    </section>
  );
}

export default ServiceWhy;
