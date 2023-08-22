import Image from "next/image";
import "./our-journey.scss";
import Link from "next/link";
function OurJourney({ poppins }) {
  return (
    <section className="ourJourney">
      <Image
        alt="growth eco"
        className="downward"
        src={"/slim-line.png"}
        width={141}
        height={1861}
      />
      <Image
        alt="growth eco"
        className="slim-line"
        src={"/slim-line.png"}
        width={141}
        height={1861}
      />
      <section className="journey-wrap">
        <div className="j-info">
          <h1 className={poppins.className}>The journey began in 2017</h1>
          <p className={poppins.className}>
            We envision a marketing website that provides an immersive and
            captivating user experience.Our goal is to create a visually
            appealing and user-friendly interface that engages visitors from the
            moment they land on our site.
          </p>
        </div>
        <div className="j-image-wrap">
          <Image alt="growth eco" src={"/right.png"} width={386} height={288} />
        </div>
      </section>
      <section className="journey-wrap alternate-mobile">
        <div className="j-image-wrap">
          <Image alt="growth eco" src={"/right.png"} width={386} height={288} />
        </div>
        <div className="j-info">
          <h1 className={poppins.className}>The journey began here!</h1>
          <p className={poppins.className}>
            We envision a marketing website that provides an immersive and
            captivating user experience.Our goal is to create a visually
            appealing and user-friendly interface that engages visitors from the
            moment they land on our site.
          </p>
        </div>
      </section>
      <section className="journey-wrap">
        <div className="j-info">
          <h1 className={poppins.className}>The journey began here!</h1>
          <p className={poppins.className}>
            We envision a marketing website that provides an immersive and
            captivating user experience.Our goal is to create a visually
            appealing and user-friendly interface that engages visitors from the
            moment they land on our site.
          </p>
        </div>
        <div className="j-image-wrap">
          <Image alt="growth eco" src={"/right.png"} width={386} height={288} />
        </div>
      </section>
      <section className="journey-wrap alternate-mobile">
        <div className="j-image-wrap">
          <Image alt="growth eco" src={"/right.png"} width={386} height={288} />
        </div>
        <div className="j-info">
          <h1 className={poppins.className}>The journey began here!</h1>
          <p className={poppins.className}>
            We envision a marketing website that provides an immersive and
            captivating user experience.Our goal is to create a visually
            appealing and user-friendly interface that engages visitors from the
            moment they land on our site.
          </p>
        </div>
      </section>
      <section className="last-journey">
        <div className="info-d">
          <h1 className={poppins.className}>And Now</h1>
          <p className={poppins.className}>
            We envision a marketing website that provides an immersive and
            captivating user experience.Our goal is to create a visually
            appealing and user-friendly interface that engages visitors from the
            moment they land on our site.
          </p>
          <Image
            alt="growth eco"
            className="journey-mid-img"
            src={"/journey-mid.png"}
            width={869}
            height={392}
          />
        </div>
        <img src={"/dot-lines.png"} className="dots-line-img" />
      </section>
      <div className="story-btn">
        <Link href={"/"} className={`${poppins.className} story-contact-btn`}>
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default OurJourney;
