import Image from "next/image";
import Link from "next/link";
function ServiceWhy({ futuraHv, futuraLTBT }) {
  return (
    <section className="amazon-ser-con">
      <h1 className={futuraHv.className}>
        Why do you need
        <span className={futuraHv.className}>Amazon FBA?</span>
      </h1>
      <div className="amazon-ser-card">
        <div className="image-wrap">
          <Image src={"/amazon-cards-img.png"} width={563} height={429} />
        </div>
        <div className="info-con">
          <p className={futuraLTBT.className}>
            Our marketing company specializes in helping sellers navigate and
            thrive in highly competitive environments, leveraging targeted
            strategies to boost visibility. Our marketing company specializes in
            helping sellers navigate and thrive in highly competitive
            environments, leveraging targeted strategies to boost visibility.
          </p>
          <div className="cards-inner-wrap">
            <div className="inner">
              <p className={futuraHv.className}>Increase Visibility</p>
            </div>
            <div className="inner">
              <p className={futuraHv.className}>Drive More Sales</p>
            </div>
            <div className="inner">
              <p className={futuraHv.className}>Build Brand</p>
            </div>
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
          <h1 className={futuraHv.className}>
            We trusted by over 300+ businesses for a reason
          </h1>
          <div className="inner-img-con-wrap">
            <Image src={"/round-rocket.png"} width={45} height={45} />
            <div className="inner-grow-wrap">
              <h1 className={futuraHv.className}>FBA RESULTS</h1>
              <p className={futuraLTBT.className}>
                Our marketing company specializes in helping sellers navigate.
              </p>
            </div>
          </div>
          <div className="inner-img-con-wrap">
            <Image src={"/round-rocket.png"} width={45} height={45} />
            <div className="inner-grow-wrap">
              <h1 className={futuraHv.className}>CAMPAIGNS</h1>
              <p className={futuraLTBT.className}>
                Our marketing company specializes in helping sellers navigate.
              </p>
            </div>
          </div>
          <div className="inner-img-con-wrap">
            <Image src={"/round-rocket.png"} width={45} height={45} />
            <div className="inner-grow-wrap">
              <h1 className={futuraHv.className}>EXPERT TEAM</h1>
              <p className={futuraLTBT.className}>
                Our marketing company specializes in helping sellers navigate.
              </p>
            </div>
          </div>
          <div className="inner-img-con-wrap">
            <Image src={"/round-rocket.png"} width={45} height={45} />
            <div className="inner-grow-wrap">
              <h1 className={futuraHv.className}>PERFORMANCE GUARANTEE</h1>
              <p className={futuraLTBT.className}>
                Our marketing company specializes in helping sellers navigate.
              </p>
            </div>
          </div>
          <div className="inner-img-con-wrap">
            <Image src={"/round-rocket.png"} width={45} height={45} />
            <div className="inner-grow-wrap">
              <h1 className={futuraHv.className}>Monitoring 24/7</h1>
              <p className={futuraLTBT.className}>
                Our marketing company specializes in helping sellers navigate.
              </p>
            </div>
          </div>
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
