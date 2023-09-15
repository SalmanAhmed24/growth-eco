import "./scale.scss";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
function ScaleComp({ step1, step2, step3, step4, content, imgUrl }) {
  return (
    <section className="growth-img">
      <img src={imgUrl} />
      {/* <img className="mobileGraph" src={"/mobile-graph.png"} /> */}
      <div className={`${poppins.className} circle1`}>{step1}</div>
      <div className={`${poppins.className} circle2`}>{step2}</div>
      <div className={`${poppins.className} circle3`}>{step3}</div>
      <div className={`${poppins.className} circle4`}>{step4}</div>
      <div className="step-by-step-wrap">
        <h1 className={poppins.className}>step by step strategy</h1>
        <p className={poppins.className}>{content}</p>
      </div>
    </section>
  );
}

export default ScaleComp;
