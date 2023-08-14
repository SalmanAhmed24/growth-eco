import localFont from "next/font/local";
import Link from "next/link";
import "./service.scss";
import Image from "next/image";
import ServiceHeader from "@/component/serviceComponents/service-header";
import ServiceWhy from "@/component/serviceComponents/service-why";
import ServiceCounter from "@/component/serviceComponents/service-counter";
import ServiceGrowth from "@/component/serviceComponents/service-growth";
import ServiceCards from "@/component/serviceComponents/service-grow-cards";
import FAQs from "@/component/faq";
const futuraHv = localFont({
  src: "../fonts/FuturaHeavyBT.ttf",
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

function Service() {
  return (
    <section className="amazon-sec-wrap">
      <ServiceHeader futuraHv={futuraHv} futuraLTBT={futuraLTBT} />
      <ServiceWhy futuraHv={futuraHv} futuraLTBT={futuraLTBT} />
      <ServiceCounter futuraHv={futuraHv} futuraLTBT={futuraLTBT} />
      <ServiceGrowth futuraHv={futuraHv} futuraLTBT={futuraLTBT} />
      <section className="growth-img">
        <img src={"/scales.png"} />
        {/* <img className="mobileGraph" src={"/mobile-graph.png"} /> */}
        <div className="step-by-step-wrap">
          <h1 className={futuraHv.className}>step by step strategy</h1>
          <p className={futuraLTBT.className}>
            Our marketing company specializes in helping sellers navigate and
            thrive in highly competitive environments, leveraging targeted
            strategies to boost visibility.
          </p>
        </div>
      </section>
      <ServiceCards futuraHv={futuraHv} futuraLTBT={futuraLTBT} />
      <FAQs
        futuraBK={futuraBK}
        futuraHv={futuraHv}
        futuraLtBT={futuraLTBT}
        futuraMDBT={futuraMDBT}
      />
    </section>
  );
}

export default Service;
