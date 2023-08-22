import Image from "next/image";
import "./footer.scss";
import localFont from "@next/font/local";
import { Poppins } from "next/font/google";
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
          <ul className="footer-ul">
            <li className={poppins.className}>About Us</li>
            <li className={poppins.className}>Our Team</li>
            <li className={poppins.className}>Contact Us</li>
            <li className={poppins.className}>Blog</li>
          </ul>
        </div>
        <div className="links-wrap">
          <h1 className={poppins.className}>Services</h1>
          <ul className="footer-ul">
            <li className={poppins.className}>Amazon FBA</li>
            <li className={poppins.className}>Branding</li>
            <li className={poppins.className}>Digital Marketing</li>
          </ul>
        </div>
        <div className="links-wrap">
          <h1 className={poppins.className}>Contact</h1>
          <ul className="footer-ul">
            <li className={poppins.className}>
              #859, Block R1 Phase 2, Johar Town, Lahore, Punjab.
            </li>
            <li className={poppins.className}>info@growthecho.com</li>
            <li className={poppins.className}>(+1) 760 350 578</li>
          </ul>
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
