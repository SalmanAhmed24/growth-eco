import Link from "next/link";
import "./capabilities.scss";
import localFont from "@next/font/local";
import Image from "next/image";
import WhyCap from "@/component/whyCap";
import Testimonials from "@/component/testimonials";
import FAQs from "@/component/faq";
const futuraHv = localFont({
  src: "../fonts/FutuHV.ttf",
  weight: "400",
  style: "normal",
});
const futuraBK = localFont({
  src: "../fonts/FutuBk.ttf",
  weight: "400",
  style: "normal",
});
const futuraMDBT = localFont({
  src: "../fonts/FutuMd.ttf",
  weight: "400",
  style: "normal",
});
const futuraLTBT = localFont({
  src: "../fonts/FuturaLtBT.ttf",
  weight: "400",
  style: "normal",
});
function Capabilities() {
  return (
    <section className="cap-main-con">
      <header className="cap-header">
        <h1 className={futuraHv.className}>Our Services</h1>
        <p className={futuraLTBT.className}>
          Our marketing company specializes in helping sellers navigate and
          thrive in highly competitive environments, leveraging targeted
          strategies to boost visibility.
        </p>
        <Link href={"/"} className={`${futuraHv.className} cap-start-link`}>
          Start Now
        </Link>
      </header>
      <section className="why-cap">
        <h1 className={futuraHv.className}>Why Choose Growth Echo?</h1>
        <div className="why-cap-card-wrap">
          <div className="card">
            <Image
              src={"/exp-blue.png"}
              width={67}
              height={67}
              className="blue"
            />
            <Image
              src={"/exp-white.png"}
              width={67}
              height={67}
              className="white"
            />
            <h1 className={futuraHv.className}>Expertise</h1>
            <h1 className={`${futuraLTBT.className} thin-head`}>Expertise</h1>
            <p className={futuraHv.className}>
              Our marketing company specializes in helping sellers
            </p>
            <p className={`${futuraLTBT.className} thin-p`}>
              Our marketing company specializes in helping sellers
            </p>
          </div>
          <div className="card card-margin">
            <Image
              src={"/data-blue.png"}
              width={67}
              height={67}
              className="blue"
            />
            <Image
              src={"/data-white.png"}
              width={67}
              height={67}
              className="white"
            />
            <h1 className={`${futuraLTBT.className} thin-head`}>Quality</h1>

            <h1 className={futuraHv.className}>Quality</h1>
            <p className={futuraHv.className}>
              Our marketing company specializes in helping sellers
            </p>
            <p className={`${futuraLTBT.className} thin-p`}>
              Our marketing company specializes in helping sellers
            </p>
          </div>
          <div className="card">
            <Image
              src={"/cus-blue.png"}
              width={67}
              height={67}
              className="blue"
            />
            <Image
              src={"/cus-white.png"}
              width={67}
              height={67}
              className="white"
            />
            <h1 className={`${futuraLTBT.className} thin-head`}>
              Happy Client
            </h1>
            <h1 className={futuraHv.className}>Happy Client</h1>
            <p className={futuraHv.className}>
              Our marketing company specializes in helping sellers
            </p>
            <p className={`${futuraLTBT.className} thin-p`}>
              Our marketing company specializes in helping sellers
            </p>
          </div>
          <div className="card card-margin">
            <Image
              src={"/pod-blue.png"}
              width={67}
              height={67}
              className="blue"
            />
            <Image
              src={"/pod-white.png"}
              width={67}
              height={67}
              className="white"
            />
            <h1 className={`${futuraLTBT.className} thin-head`}>Competitive</h1>
            <h1 className={futuraHv.className}>Competitive</h1>
            <p className={futuraHv.className}>
              Our marketing company specializes in helping sellers
            </p>
            <p className={`${futuraLTBT.className} thin-p`}>
              Our marketing company specializes in helping sellers
            </p>
          </div>
        </div>
      </section>
      <WhyCap
        mainImg={"/cap-ser-img.png"}
        heading={"Amazon"}
        headingSec={"Service"}
        span={"FBA"}
        content={
          "Our marketing company specializes in helping sellers navigate and thrive in highly competitive environments, leveraging targeted strategies to boost visibility. Our marketing company specializes in helping sellers navigate and thrive in highly competitive environments."
        }
        listItems={[
          "Our marketing company specializes",
          "Our marketing company specializes",
          "Our marketing company specializes",
        ]}
        layout={"right"}
        arrow={1}
      />
      <div className="cus-cap-test">
        <Testimonials heading={false} />
      </div>
      <WhyCap
        mainImg={"/cap-ser-img2.png"}
        heading={"Business Acquisition"}
        headingSec={"Accelerators"}
        span={"& "}
        content={
          "Our marketing company specializes in helping sellers navigate and thrive in highly competitive environments, leveraging targeted strategies to boost visibility. Our marketing company specializes in helping sellers navigate and thrive in highly competitive environments."
        }
        listItems={[
          "Our marketing company specializes",
          "Our marketing company specializes",
          "Our marketing company specializes",
        ]}
        layout={"left"}
        arrow={2}
      />
      <Testimonials heading={false} />
      <WhyCap
        mainImg={"/cap-ser-img3.png"}
        heading={""}
        headingSec={""}
        span={"Branding"}
        content={
          "Our marketing company specializes in helping sellers navigate and thrive in highly competitive environments, leveraging targeted strategies to boost visibility. Our marketing company specializes in helping sellers navigate and thrive in highly competitive environments."
        }
        listItems={[
          "Our marketing company specializes",
          "Our marketing company specializes",
          "Our marketing company specializes",
        ]}
        layout={"right"}
        arrow={3}
      />
      <Testimonials heading={false} />
      <WhyCap
        mainImg={"/cap-ser-img4.png"}
        heading={""}
        headingSec={"Marketing"}
        span={"Digital"}
        content={
          "Our marketing company specializes in helping sellers navigate and thrive in highly competitive environments, leveraging targeted strategies to boost visibility. Our marketing company specializes in helping sellers navigate and thrive in highly competitive environments."
        }
        listItems={[
          "Our marketing company specializes",
          "Our marketing company specializes",
          "Our marketing company specializes",
        ]}
        layout={"left"}
        arrow={4}
      />
      <Testimonials heading={false} />
      <FAQs
        futuraBK={futuraBK}
        futuraHv={futuraHv}
        futuraLtBT={futuraLTBT}
        futuraMDBT={futuraMDBT}
      />
    </section>
  );
}

export default Capabilities;
