import ContactComp from "./contactComp";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});
import "./style.scss";
function ContactUs() {
  return (
    <section>
      <section className="contact-us-wrap">
        <ContactComp />
      </section>
      <section className="address-wrap-con">
        <div className="content-wrap">
          <div className="single-item">
            <img src="/location.png" />
            <div className="icons-wrap">
              <h1 className={`${poppins.className}`}>Location</h1>
              <p className={`${poppins.className}`}>
                #859, Block R1 Phase 2, Johar Town, Lahore, Punjab.
              </p>
            </div>
          </div>
          <div className="single-item">
            <img src="/email.png" />
            <div className="icons-wrap">
              <h1 className={`${poppins.className}`}>Email</h1>
              <p className={`${poppins.className}`}>info@growthecho.com</p>
            </div>
          </div>
          <div className="single-item">
            <img src="/location.png" />
            <div className="icons-wrap">
              <h1 className={`${poppins.className}`}>Phone No</h1>
              <p className={`${poppins.className}`}>(+1) 760 350 578</p>
            </div>
          </div>
        </div>
      </section>
      <section className="subs-sec-con">
        <section className="main-con">
          <div className="cardCon">
            <img src="./wifi.png" alt="" className="iconImg" />
            <div className="card-content">
              <h1 className={`${poppins.className}`}>Chat to Support</h1>
              <p className={`${poppins.className}`}>We&apos;re here to help.</p>
              <a
                className={`${poppins.className}`}
                href="mailto:info@growthecho.com"
              >
                info@growthecho.com
              </a>
            </div>
          </div>
          <div className="main-content-con">
            <h1 className={`${poppins.className}`}>We are here to help</h1>
            <p className={`${poppins.className}`}>
              We are here to help your business thrive on Amazon. Trust our
              knowledge and strategies to move towards success on the platform.
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}

export default ContactUs;
