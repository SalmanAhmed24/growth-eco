import "./scale.scss";
function ScaleComp({
  futuraHv,
  futuraLTBT,
  futuraMD,
  step1,
  step2,
  step3,
  step4,
  content,
}) {
  return (
    <section className="growth-img">
      <img src={"/scales.png"} />
      {/* <img className="mobileGraph" src={"/mobile-graph.png"} /> */}
      <div className={`${futuraMD.className} circle1`}>{step1}</div>
      <div className={`${futuraMD.className} circle2`}>{step2}</div>
      <div className={`${futuraMD.className} circle3`}>{step3}</div>
      <div className={`${futuraMD.className} circle4`}>{step4}</div>
      <div className="step-by-step-wrap">
        <h1 className={futuraHv.className}>step by step strategy</h1>
        <p className={futuraLTBT.className}>{content}</p>
      </div>
    </section>
  );
}

export default ScaleComp;
