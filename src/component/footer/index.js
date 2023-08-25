import Image from "next/image";
import "./footer.scss";
import localFont from "@next/font/local";
import { Poppins } from "next/font/google";
import Link from "next/link";
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
            <Link href={"/aboutUs"} className={poppins.className}>
              About Us
            </Link>
            <Link href={"/ourStory"} className={poppins.className}>
              Our Story
            </Link>
            <Link href={"/ourTeam"} className={poppins.className}>
              Our Team
            </Link>
            <Link href={"/capabilities"} className={poppins.className}>
              Capabilities
            </Link>
            <Link href={"/case-studies"} className={poppins.className}>
              Case Studies
            </Link>
            <Link href={"/blog"} className={poppins.className}>
              Blog
            </Link>
          </div>
        </div>
        <div className="links-wrap">
          <h1 className={poppins.className}>Services</h1>
          <div className={`${poppins.className} footer-ul`}>
            <Link href={"/product-sourcing"}>Product Sourcing</Link>
            <Link href={"/listing-reinstatement"}>Listing Reinstatement</Link>
            <Link href={"/amazon-advertising"}>Amazon Advertising</Link>
            <Link href={"/amazon-content"}>Amazon Content</Link>
            <Link href={"/done-amazon"}>Amazon Done</Link>
            <Link href={"/product-research"}>Product Research</Link>
            <Link href={"/brand-storefront"}>Brand Storefront</Link>
            <Link href={"/account-suspension"}>Account Suspension</Link>
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
          <div className="footer-form-wrap">
            <input className={`${poppins.className} subsInp`} type="email" />
            <button className={`${poppins.className} subsBtn`}>Submit</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
