import Image from "next/image";
import Link from "next/link";
import "./serviceComp.scss";
import SliderSubComp from "./sliderSubComp";
function ServiceCounter({ futuraHv, futuraLTBT }) {
  return (
    <section className="ser-counter">
      <div className="counter-info-wrap">
        <div className="singleItem first">
          <h1 className={futuraHv.className}>Case Studies</h1>
          <p className={futuraLTBT.className}>
            Our marketing company specializes in helping sellers navigate and
            thrive in highly competitive environments, leveraging targeted
            strategies.
          </p>
        </div>
        <div className="singleItem">
          <h1 className={futuraHv.className}>200+</h1>
          <p className={futuraLTBT.className}>
            Successful FBA campaigns across Australia, New Zealand &
            International.
          </p>
        </div>
        <div className="singleItem">
          <h1 className={futuraHv.className}>7</h1>
          <p className={futuraLTBT.className}>
            Years in successful digital marketing, web design & strategic
            business growth.
          </p>
        </div>
      </div>
      <div className="slider-ser-wrap">
        <SliderSubComp />
      </div>
    </section>
  );
}

export default ServiceCounter;
