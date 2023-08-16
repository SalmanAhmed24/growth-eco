import Link from "next/link";
import "./capabilities.scss";
import localFont from "@next/font/local";
import Image from "next/image";
import WhyCap from "@/component/whyCap";
import Testimonials from "@/component/testimonials";
import FAQs from "@/component/faq";
const futuraHv = localFont({
  src: "../fonts/FutuHv.ttf",
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
        <h1 className={futuraHv.className}>
          Amazon Services to grow your business
        </h1>
        <p className={futuraLTBT.className}>
          With a steadfast commitment to excellence and a customer-centric
          approach, we cater to the needs of our clients, who are wondering how
          to sell products on Amazon and enable them to achieve success!
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
              Proven track record of maximizing profitability
            </p>
            <p className={`${futuraLTBT.className} thin-p`}>
              Proven track record of maximizing profitability
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
            <h1 className={`${futuraLTBT.className} thin-head`}>
              Tailored Solutions
            </h1>

            <h1 className={futuraHv.className}>Tailored Solutions</h1>
            <p className={futuraHv.className}>
              Personalized strategies that align with your brand
            </p>
            <p className={`${futuraLTBT.className} thin-p`}>
              Personalized strategies that align with your brand{" "}
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
              Full-Service Offerings
            </h1>
            <h1 className={futuraHv.className}>Full-Service Offerings</h1>
            <p className={futuraHv.className}>
              Handling your Amazon journey and allowing you to focus on other
              aspects.
            </p>
            <p className={`${futuraLTBT.className} thin-p`}>
              Handling your Amazon journey and allowing you to focus on other
              aspects.{" "}
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
            <h1 className={`${futuraLTBT.className} thin-head`}>
              Proven Results
            </h1>
            <h1 className={futuraHv.className}>Proven Results</h1>
            <p className={futuraHv.className}>
              Helped businesses establish a strong presence on Amazon's
              marketplace.
            </p>
            <p className={`${futuraLTBT.className} thin-p`}>
              Helped businesses establish a strong presence on Amazon's
              marketplace.
            </p>
          </div>
        </div>
      </section>
      <WhyCap
        mainImg={"/cap-ser-img.png"}
        heading={"Done for you Amazon"}
        headingSec={"Services"}
        span={"account management"}
        content={
          "Want to get rid of day-to-day Amazon operations? Our Amazon account management service company specializes in helping Amazon business owners by taking day-to-day operations off your shoulders so you can focus on other crucial business aspects. Done for you Amazon account manager service includes"
        }
        listItems={[
          "a to z Amazon work",
          "Amazon listing optimization",
          "Amazon PPC management services",
          "Amazon inventory management",
        ]}
        layout={"right"}
        arrow={1}
        url={"/done-amazon"}
      />
      <div className="cus-cap-test">
        <Testimonials
          sliderArr={[
            {
              name: "Jhon",
              profession: "",
              testimonial:
                "Game changer! Their Amazon account management took the stress away. Sales soared!",
            },
            {
              name: "Micheal",
              profession: "",
              testimonial:
                "Efficient and effective! Their service boosted our Amazon business, worth every penny.",
            },
            {
              name: "Carlos",
              profession: "",
              testimonial:
                "Highly recommend! Increased sales, optimized listings – our Amazon store thrived under their management.",
            },
          ]}
          heading={false}
        />
      </div>
      <WhyCap
        mainImg={"/cap-ser-img2.png"}
        heading={"Amazon"}
        headingSec={""}
        span={"Advertising "}
        content={
          "At GrowthEcho, we unleash the full potential of your Amazon business through our Amazon Marketing services. We use data-driven strategies and innovative techniques to take your products to the top, ensuring your brand shines in the competition."
        }
        listItems={[
          "Amazon keyword research and ad targeting",
          "Targeting the right audience",
          "maximizing your ROI",
          "Amazon Enhanced brand content A+",
        ]}
        layout={"left"}
        arrow={2}
        url={"/amazon-advertising"}
      />
      <Testimonials
        sliderArr={[
          {
            name: "Ivan",
            profession: "",
            testimonial:
              "GrowthEcho's Amazon Advertising was a game-changer! Our Amazon  sales rank soared with targeted ads and expert strategies.",
          },
          {
            name: "Maria",
            profession: "",
            testimonial:
              "Efficient and effective! GrowthEcho's services optimized our Amazon ads, yielding impressive results and increased visibility.",
          },
          {
            name: "Hans",
            profession: "",
            testimonial:
              "Highly recommend! GrowthEcho's team boosted our Amazon presence, amazon keyword ranking, converting clicks into loyal customers. Excellent service!",
          },
        ]}
        heading={false}
      />
      <WhyCap
        mainImg={"/cap-ser-img3.png"}
        heading={"Amazon"}
        headingSec={"content design"}
        span={"A+"}
        content={
          "At GrowthEcho, we specialize in crafting extraordinary brand narratives through our Enhanced Brand Content A+ services. With a blend of creativity and strategic expertise, we transform your Amazon product listings into captivating brand experiences.It includes:"
        }
        listItems={[
          "Immersive Brand Storytelling",
          "Stunning Visual Enhancements",
          "Brand Identity Reinforcement",
        ]}
        layout={"right"}
        arrow={3}
        url={"/amazon-content"}
      />
      <Testimonials
        sliderArr={[
          {
            name: "Pierre",
            profession: "",
            testimonial:
              "Outstanding Content A+ services by GrowthEcho! Our listings became captivating and drove higher conversions. Top-notch quality!",
          },
          {
            name: "Erik",
            profession: "",
            testimonial:
              "Impressed with GrowthEcho's A+ content! Their creative approach elevated our Amazon listings, attracting more customers than ever.",
          },
          {
            name: "Emily",
            profession: "",
            testimonial:
              "Highly satisfied! GrowthEcho's A+ services made our  Amazon products stand out, leaving a lasting impression on shoppers. Exceptional results!",
          },
        ]}
        heading={false}
      />
      <WhyCap
        mainImg={"/cap-ser-img4.png"}
        heading={""}
        headingSec={"Product"}
        span={"Sourcing"}
        content={
          "At GrowthEcho, we unlock the potential of your Amazon business with our transformative Product Sourcing services. Let us be your strategic partner, uncovering lucrative possibilities and empowering your brand to thrive in a competitive market. Our Amazon Product Sourcing Services include:"
        }
        listItems={[
          "Extensive Market Research",
          "Quality Assurance and Supplier Vetting",
          "Negotiation and Cost Optimization",
        ]}
        layout={"left"}
        arrow={4}
        url={"/product-sourcing"}
      />
      <Testimonials
        sliderArr={[
          {
            name: "Giovanni",
            profession: "",
            testimonial:
              "GrowthEcho's Product Sourcing services were a game-changer! They found us profitable products we couldn't discover ourselves.",
          },
          {
            name: "Nikos",
            profession: "",
            testimonial:
              "Exceptional service! GrowthEcho's Product Sourcing boosted our inventory with high-quality products, increasing sales and profit margins.",
          },
          {
            name: "Sofia",
            profession: "",
            testimonial:
              "Impressive sourcing expertise! GrowthEcho's team delivered top-notch products, expanding our offerings and delighting customers.",
          },
        ]}
        heading={false}
      />
      <WhyCap
        mainImg={"/cap-ser-img.png"}
        heading={"Amazon"}
        headingSec={"Research"}
        span={"Product"}
        content={
          "At GrowthEcho, we redefine the way you do business on Amazon with our game-changing Amazon product research services. We dive deep into data-driven analysis to pinpoint trends, amazon product ranking, consumer preferences, and competitive gaps. Amazon product research services include:"
        }
        listItems={[
          "Data-Driven Market Analysis",
          "Competitive Landscape Evaluation",
          "Niche and Trend Identification",
        ]}
        layout={"right"}
        arrow={4}
        url={"/product-research"}
      />
      <Testimonials
        sliderArr={[
          {
            name: "Ingrid",
            profession: "",
            testimonial:
              "GrowthEcho's product research services were spot-on! They identified profitable products, setting us up for Amazon's success.",
          },
          {
            name: "Jakub",
            profession: "",
            testimonial:
              "Thrilled with the results! GrowthEcho's product research revealed winning products that boosted our sales and ROI.",
          },
          {
            name: "Emma",
            profession: "",
            testimonial:
              "Impressive insights! GrowthEcho's research helped us discover untapped opportunities, optimizing our Amazon product offerings effectively.",
          },
        ]}
        heading={false}
      />
      <WhyCap
        mainImg={"/cap-ser-img2.png"}
        heading={"Amazon Product Listing"}
        headingSec={"Optimization"}
        span={"&"}
        content={
          "We understand the art of storytelling and use persuasive copywriting techniques to showcase your products. We optimize every aspect of your listings from keywords and titles to bullet points and backend search terms. Amazon Product Listing and Optimization service include:"
        }
        listItems={[
          "Compelling Copywriting",
          "Stunning Visuals",
          "Increased Conversions",
        ]}
        layout={"left"}
        arrow={4}
        url={"/amazon-advertising"}
      />
      <Testimonials
        sliderArr={[
          {
            name: "Ekaterina",
            profession: "",
            testimonial:
              "GrowthEcho's product listing services were exceptional! Engaging copy and stunning visuals transformed our listings and drove sales.",
          },
          {
            name: "James",
            profession: "",
            testimonial:
              "Highly recommend! GrowthEcho's optimization elevated our listings, attracting more customers and boosting our Amazon presence.",
          },
          {
            name: "Marie",
            profession: "",
            testimonial:
              "Efficient and effective! GrowthEcho's expertise optimized our listings, resulting in increased conversions and improved visibility on Amazon.",
          },
        ]}
        heading={false}
      />
      <WhyCap
        mainImg={"/cap-ser-img2.png"}
        heading={"Brand"}
        headingSec={""}
        span={"Storefront"}
        content={
          "Elevate Your Brand Experience with Amazon Brand Storefront Services. Our captivating designs and seamless navigation create an immersive shopping journey, building trust and driving conversions. Amazon Brand Storefront service includes:"
        }
        listItems={[
          "Immersive Designs",
          "Trust-Building Experience",
          "Enhanced Navigation",
        ]}
        layout={"right"}
        arrow={4}
        url={"/brand-storefront"}
      />
      <Testimonials
        sliderArr={[
          {
            name: "Mary Johnson",
            profession: "",
            testimonial:
              "GrowthEcho's Brand Storefront was a game-changer! A captivating storefront that showcased our brand and products beautifully.",
          },
          {
            name: "James Williams",
            profession: "",
            testimonial:
              "Impressive design! GrowthEcho's Brand Storefront enhanced our Amazon shopping experience, leaving a lasting impression on customers.",
          },
          {
            name: "Jennifer Brown",
            profession: "",
            testimonial:
              "Highly satisfied! GrowthEcho's Brand Storefront services elevated our brand identity, attracting more shoppers and boosting sales.",
          },
        ]}
        heading={false}
      />
      <WhyCap
        mainImg={"/cap-ser-img4.png"}
        heading={"Listing"}
        headingSec={""}
        span={"Reinstatement"}
        content={
          "Regains Your Amazon Presence with Listing Reinstatement Services. Our expert team resolves suspension issues, ensuring compliance and reinstating your listings. Amazon Listing Reinstatement service includes:"
        }
        listItems={[
          "Suspension Resolution",
          "Expert Guidance",
          "Compliance Assurance",
        ]}
        layout={"left"}
        arrow={4}
        url={"/listing-reinstatement"}
      />
      <Testimonials
        sliderArr={[
          {
            name: "Emily Garcia",
            profession: "",
            testimonial:
              "Incredible service! GrowthEcho's reinstatement services got our Amazon account back on track in no time. Highly recommended!",
          },
          {
            name: "William Davis",
            profession: "",
            testimonial:
              "Life-savers! GrowthEcho's team expertly handled our suspension issues, resulting in a swift account reinstatement. Thank you!",
          },
          {
            name: "Sarah Martinez",
            profession: "",
            testimonial:
              "Reliable and efficient! GrowthEcho's reinstatement services saved our Amazon business from uncertainty, restoring our selling privileges successfully.",
          },
        ]}
        heading={false}
      />
      <WhyCap
        mainImg={"/cap-ser-img4.png"}
        heading={"Account"}
        headingSec={""}
        span={"Suspension"}
        content={
          "Our skilled team analyzes issues, formulates effective plans, and appeals for reinstatement. We provide transparent communication and updates, keeping you informed about the progress every step of the way. Amazon Account Suspension service includes:"
        }
        listItems={[
          "Swift Resolution",
          "Personalized Plans",
          "Transparent Communication",
        ]}
        layout={"right"}
        arrow={4}
        url={"/account-suspension"}
      />
      <Testimonials
        sliderArr={[
          {
            name: "Michael Jones",
            profession: "",
            testimonial:
              "Impressive results! GrowthEcho's account suspension services swiftly resolved our issues, guiding us through the reinstatement process seamlessly.",
          },
          {
            name: "Jessica Davis",
            profession: "",
            testimonial:
              "Expert assistance! GrowthEcho's team navigated the complexities of account suspension and got us back on Amazon successfully.",
          },
          {
            name: "John hans",
            profession: "",
            testimonial:
              "Highly recommend! GrowthEcho's account suspension services brought clarity and expertise, leading to a quick reinstatement. Excellent support!",
          },
        ]}
        heading={false}
      />
      <FAQs
        futuraBK={futuraBK}
        futuraMDBT={futuraMDBT}
        futuraLtBT={futuraLTBT}
        futuraHv={futuraHv}
        question1={"How will GrowthEcho manage my Amazon account?"}
        question2={"How can GrowthEcho services benefit my Amazon business?"}
        question3={
          "What sets your GrowthEcho apart from other Amazon service providers?"
        }
        question4={"How can I get started with your Amazon services?"}
        tab1={
          "GrowthEcho will manage your Amazon account by implementing data-driven strategies, optimizing product listings, running targeted PPC campaigns, and conducting regular performance analysis to ensure the most visibility, sales growth, and success in the competitive marketplace."
        }
        tab2={
          "Our specialized services are designed to drive success in the competitive Amazon marketplace. By leveraging our expertise, you can expect increased visibility, improved product rankings, higher conversion rates, and a stronger brand presence, leading to enhanced sales and profitability."
        }
        tab3={
          "At GrowthEcho, we take pride in our data-driven approach, industry knowledge, and a team of seasoned Amazon experts. Our strategies are proven results, and we adapt to the dynamic Amazon ecosystem, ensuring you stay ahead of the curve and outperform your competition."
        }
        tab4={
          "Getting started is simple! Reach out to us through our contact number given below. We'll schedule a FREE consultation call to understand your specific needs and goals. After assessing your requirements, we'll craft a tailored plan to supercharge your Amazon business and start the journey to success."
        }
      />
    </section>
  );
}

export default Capabilities;
