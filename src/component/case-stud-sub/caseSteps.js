import Image from "next/image";
import "./header.scss";
function CaseSteps({ poppins }) {
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
            <h1>Overview</h1>
            <p>
              We were contacted by a multinational consumer personal healthcare
              brand to help manage their Amazon Vendor Central account. Our
              client had only achieved 8% growth in year-over-year sales.
            </p>
          </div>
          <div className="step1-img">
            <Image
              alt="growth eco"
              className="img-steps"
              src={"/case-step-inner-1.png"}
              width={296}
              height={196}
            />
          </div>
        </div>
        <div className="step2-wrap">
          <div className="step2-img">
            <Image
              className="img-steps"
              src={"/case-step-inner-2.png"}
              width={296}
              height={196}
            />
          </div>
          <div className="step2-content">
            <h1>Goals</h1>
            <ul className={`goals-ul`}>
              <li>Make top selling product best seller within its category.</li>
              <li>Expand sales through Amazon Marketing Services Campaigns.</li>
            </ul>
          </div>
        </div>
        <div className="step3-wrap">
          <div className="step3-content">
            <h1>Challenge</h1>
            <p>
              Our challenge was to identify the best opportunities for growth
              within the product category. As a large corporation, there was a
              huge catalog of products to focus on.
            </p>
          </div>
          <div className="step3-img">
            <Image
              className="img-steps"
              src={"/case-step-inner-3.png"}
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
              src={"/case-step-inner-4.png"}
              width={296}
              height={377}
            />
          </div>
          <div className="step4-content">
            <h1>Actions</h1>
            <ul className={`goals-ul`}>
              <li>
                Executed thorough market analysis to identify immediate areas
                for growth
              </li>
              <li>
                Cleaned up Amazon catalog to reduce duplicates and take
                advantage of opportunities
              </li>
              <li>
                Performed in-depth keyword research into each product category
              </li>
              <li>
                Introduced SEO content into frontend and backend of listings
              </li>
            </ul>
          </div>
        </div>
        <div className="step5-wrap">
          <div className="step5-content">
            <h1>Results</h1>
            <ul className={`goals-ul-right`}>
              <li>
                Top selling product is now a best seller with 30,000+ units
                shipped through first 6 month of 2017
              </li>
              <li>
                Advertising campaigns that have generate more than $275,000 in
                additional sales at 20.83% ACOS
              </li>
              <li>Increased market share from 28.3% to</li>
            </ul>
          </div>
          <div className="step5-img">
            <Image
              alt="growth eco"
              className="img-steps"
              src={"/case-step-inner-5.png"}
              width={296}
              height={337}
            />
          </div>
        </div>
      </section>
      <div className="last-step">
        <h1>Statistics</h1>
        <ul>
          <li>
            Our client was extremely satisfied with the results we were achieved
            in such a short time period. The strategy we implemented for them
            allowed them to hit all their business’s goals for Amazon in 2017 by
            May. We are now partnered with this client to launch them on Amazon
            marketplaces in Europe.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default CaseSteps;
