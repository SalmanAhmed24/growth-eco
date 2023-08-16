import Image from "next/image";
import Link from "next/link";
import "./serviceComp.scss";
import SliderSubComp from "./sliderSubComp";
function ServiceCounter({
  futuraHv,
  futuraLTBT,
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
          <h1 className={futuraHv.className}>{headingMain}</h1>
          <p className={futuraLTBT.className}>{paraMain}</p>
        </div>
        <div className="singleItem">
          <h1 className={futuraHv.className}>{headingSub1}</h1>
          <p className={futuraLTBT.className}>{paraSub1}</p>
        </div>
        <div className="singleItem">
          <h1 className={futuraHv.className}>{headingSub2}</h1>
          <p className={futuraLTBT.className}>{paraSub2}</p>
        </div>
      </div>
      <div className="slider-ser-wrap">
        <SliderSubComp />
      </div>
    </section>
  );
}

export default ServiceCounter;
