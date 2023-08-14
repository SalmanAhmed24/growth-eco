import Image from "next/image";
import Link from "next/link";
import "./serviceComp.scss";
function ServiceCards({ futuraHv, futuraLTBT }) {
  return (
    <section className="grow-ser-card-con">
      <div className="grow-ser-card-wrap">
        <div className="card blue">
          <Image
            className="count-img"
            src={"/amazon-ser-grow-card.png"}
            width={86}
            height={86}
          />
          <h1 className={futuraHv.className}>START</h1>
          <p className={futuraLTBT.className}>
            Our marketing company specializes in helping sellers navigate and
            thrive in highly competitive environments, leveraging targeted
            strategies to boost visibility.
          </p>
        </div>
        <div className="card white">
          <Image
            className="count-img"
            src={"/amazon-ser-grow-card2.png"}
            width={86}
            height={86}
          />
          <h1 className={futuraHv.className}>GROWTH</h1>
          <p className={futuraLTBT.className}>
            Our marketing company specializes in helping sellers navigate and
            thrive in highly competitive environments, leveraging targeted
            strategies to boost visibility.
          </p>
        </div>
        <div className="card blue">
          <Image
            className="count-img"
            src={"/amazon-ser-grow-card3.png"}
            width={86}
            height={86}
          />
          <h1 className={futuraHv.className}>SCALE</h1>
          <p className={futuraLTBT.className}>
            Our marketing company specializes in helping sellers navigate and
            thrive in highly competitive environments, leveraging targeted
            strategies to boost visibility.
          </p>
        </div>
        <div className="card white">
          <Image
            className="count-img"
            src={"/amazon-ser-grow-card4.png"}
            width={86}
            height={86}
          />
          <h1 className={futuraHv.className}>MATURE</h1>
          <p className={futuraLTBT.className}>
            Our marketing company specializes in helping sellers navigate and
            thrive in highly competitive environments, leveraging targeted
            strategies to boost visibility.
          </p>
        </div>
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
