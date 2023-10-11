"use client";
import Image from "next/image";
import "./footer.scss";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
const poppins = Poppins({
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
// const futuraHv = localFont({
//   src: "../../app/fonts/FutuHv.ttf",
//   weight: "400",
//   style: "normal",
// });
// const futuraBK = localFont({
//   src: "../../app/fonts/FutuBk.ttf",
//   weight: "400",
//   style: "normal",
// });
// const futuraMDBT = localFont({
//   src: "../../app/fonts/FutuMd.ttf",
//   weight: "400",
//   style: "normal",
// });
// const futuraLTBT = localFont({
//   src: "../../app/fonts/FuturaLtBT.ttf",
//   weight: "400",
//   style: "normal",
// });
function Footer() {
  const [email, setEmail] = useState("");
  const handleNewsletter = (e) => {
    e.preventDefault();
    axios
      .post("/api/newsletter", { email })
      .then((res) => {
        Swal.fire({
          icon: "success",
          titleText: "Success",
          text: "Thanks for contacting us. We will get back to you as soon as possible.",
          showClass: `${poppins.className}`,
        });
        setEmail("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <footer className="footer-wrap">
      <Image
        alt="growth eco"
        className="logo-footer"
        src={"/f-logo.png"}
        width={134}
        height={64}
      />
      <p className={`${poppins.className} footer-para`}>
        Growth Echo implemented a customer success program to ensure high
        customer satisfaction and retention rates.
      </p>
      <div className="footer-links-wrap">
        <div className="links-wrap">
          <h1 className={poppins.className}>Company</h1>
          <div className="footer-ul">
            <Link href={"/"} className={poppins.className}>
              Home
            </Link>
            <Link href={"/about-us"} className={poppins.className}>
              About Us
            </Link>
            <Link href={"/our-story"} className={poppins.className}>
              Our Story
            </Link>
            {/* <Link href={"/ourTeam"} className={poppins.className}>
              Our Team
            </Link> */}
            <Link href={"/our-expertise"} className={poppins.className}>
              Our Expertise
            </Link>
            <Link href={"/case-studies"} className={poppins.className}>
              Case Studies
            </Link>
            {/* <Link href={"/blog"} className={poppins.className}>
              Blog
            </Link> */}
            <Link href={"/contact-us"} className={poppins.className}>
              Contact Us
            </Link>
          </div>
        </div>
        <div className="links-wrap">
          <h1 className={poppins.className}>Services</h1>
          <div className={`${poppins.className} footer-ul`}>
            <Link href={"/account-management"}>Account Management</Link>
            <Link href={"/amazon-advertising"}>Amazon Advertising</Link>
            <Link href={"/listing-optimization"}>Listing Optimization</Link>
            <Link href={"/amazon-a-content"}>Amazon A+ Content</Link>
            <Link href={"/product-research"}>Product Research</Link>
            <Link href={"/product-sourcing"}>Product Sourcing</Link>
            <Link href={"/brand-storefront"}>Brand Storefront</Link>
            <Link href={"/account-suspension"}>Account Suspension</Link>
            <Link href={"/listing-reinstatement"}>Listing Reinstatement</Link>
          </div>
        </div>
        <div className="links-wrap">
          <h1 className={poppins.className}>Contact</h1>
          <div className="address-wrap">
            <p className={poppins.className}>
              #859, Block R1 Phase 2, Johar Town, Lahore, Punjab.
            </p>
            <p className={poppins.className}>info@growthecho.com</p>
            <p className={poppins.className}>(+1) 760 350 578</p>
          </div>
        </div>
        <div className="subscribe-wrap">
          <h1 className={poppins.className}>Sign-up to our newsletter</h1>
          <form onSubmit={handleNewsletter} className="footer-form-wrap">
            <input
              className={`${poppins.className} subsInp`}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <input
              className={`${poppins.className} subsBtn`}
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
