import Image from "next/image";
import Link from "next/link";
import "./serviceComp.scss";
import SliderSubComp from "./sliderSubComp";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
function ServiceCounter({
  headingMain,
  paraMain,
  headingSub1,
  paraSub1,
  headingSub2,
  paraSub2,
}) {
  return (
    <section className="ser-counter">
      <div className="counter-info-wrap">
        <div className="singleItem first">
          <h1 className={poppins.className}>{headingMain}</h1>
          <p className={poppins.className}>{paraMain}</p>
        </div>
      </div>
      <div className="slider-ser-wrap">
        <div className="singleItem">
          <h1 className={poppins.className}>{headingSub1}</h1>
          <p className={poppins.className}>{paraSub1}</p>
        </div>
        <div className="singleItem">
          <h1 className={poppins.className}>{headingSub2}</h1>
          <p className={poppins.className}>{paraSub2}</p>
        </div>
      </div>
    </section>
  );
}

export default ServiceCounter;
