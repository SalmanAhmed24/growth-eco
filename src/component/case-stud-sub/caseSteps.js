import Image from "next/image";
import "./header.scss";
function CaseSteps({
  poppins,
  overviewPara,
  step1Img,
  goalsPara,
  step2Img,
  chalPara,
  step3Img,
  actionsPara,
  actionList,
  step4Img,
  resultPara,
  resultList,
  statsPara,
  step5Img,
}) {
  return (
    <section className={poppins.className}>
      <section className="snake-step-con">
        <Image
          alt="growth eco"
          className="steps-snake"
          src={"/snake-arrow.png"}
          width={150}
          height={1800}
        />
        <div className="step1-wrap">
          <div className="step1-content">
            <h1 className={poppins.className}>Overview</h1>
            <p className={poppins.className}>{overviewPara}</p>
          </div>
          <div className="step1-img">
            <Image
              alt="growth eco"
              className="img-steps"
              src={step1Img}
              width={296}
              height={196}
            />
          </div>
        </div>
        <div className="step2-wrap">
          <div className="step2-img">
            <Image
              className="img-steps"
              src={step2Img}
              width={296}
              height={196}
            />
          </div>
          <div className="step2-content">
            <h1 className={poppins.className}>Goals</h1>
            <p className={`${poppins.className} goals-ul`}>{goalsPara}</p>
          </div>
        </div>
        <div className="step3-wrap">
          <div className="step3-content">
            <h1 className={poppins.className}>Challenge</h1>
            <p className={poppins.className}>{chalPara}</p>
          </div>
          <div className="step3-img">
            <Image
              className="img-steps"
              src={step3Img}
              width={296}
              height={196}
            />
          </div>
        </div>
        <div className="step4-wrap">
          <div className="step4-img">
            <Image
              alt="growth eco"
              className="img-steps"
              src={step4Img}
              width={296}
              height={377}
            />
          </div>
          <div className="step4-content">
            <h1 className={poppins.className}>Actions</h1>
            <p>{actionsPara}</p>
            <ul className={`goals-ul`}>
              {actionList.map((i, ind) => {
                return (
                  <li key={ind} className={poppins.className}>
                    {i}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="step5-wrap">
          <div className="step5-content">
            <h1 className={poppins.className}>Results</h1>
            <ul className={`goals-ul-right`}>
              {resultList.map((i, ind) => {
                return (
                  <li key={ind} className={poppins.className}>
                    {i}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="step5-img">
            <Image
              alt="growth eco"
              className="img-steps"
              src={step5Img}
              width={296}
              height={337}
            />
          </div>
        </div>
      </section>
      <div className="last-step">
        <h1 className={poppins.className}>Statistics</h1>
        <p className={poppins.className}>{statsPara}</p>
      </div>
    </section>
  );
}

export default CaseSteps;
