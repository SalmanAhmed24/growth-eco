import Image from "next/image";
import "./footer.scss";
import localFont from "@next/font/local";
const futuraHv = localFont({
  src: "../../app/fonts/FutuHV.ttf",
  weight: "400",
  style: "normal",
});
const futuraBK = localFont({
  src: "../../app/fonts/FutuBk.ttf",
  weight: "400",
  style: "normal",
});
const futuraMDBT = localFont({
  src: "../../app/fonts/FutuMd.ttf",
  weight: "400",
  style: "normal",
});
const futuraLTBT = localFont({
  src: "../../app/fonts/FuturaLtBT.ttf",
  weight: "400",
  style: "normal",
});
function Footer() {
  return (
    <footer className="footer-wrap">
      <Image
        className="logo-footer"
        src={"/f-logo.png"}
        width={134}
        height={64}
      />
      <p className={`${futuraLTBT.className} footer-para`}>
        Growth Echo implemented a customer success program to ensure high
        customer satisfaction and retention rates.
      </p>
      <div className="footer-links-wrap">
        <div className="links-wrap">
          <h1 className={futuraHv.className}>Company</h1>
          <ul className="footer-ul">
            <li className={futuraLTBT.className}>About Us</li>
            <li className={futuraLTBT.className}>Our Team</li>
            <li className={futuraLTBT.className}>Contact Us</li>
            <li className={futuraLTBT.className}>Blog</li>
          </ul>
        </div>
        <div className="links-wrap">
          <h1 className={futuraHv.className}>Services</h1>
          <ul className="footer-ul">
            <li className={futuraLTBT.className}>Amazon FBA</li>
            <li className={futuraLTBT.className}>Branding</li>
            <li className={futuraLTBT.className}>Digital Marketing</li>
          </ul>
        </div>
        <div className="links-wrap">
          <h1 className={futuraHv.className}>Contact</h1>
          <ul className="footer-ul">
            <li className={futuraLTBT.className}>
              #859, Block R1 Phase 2, Johar Town, Lahore, Punjab.
            </li>
            <li className={futuraLTBT.className}>info@growthecho.com</li>
            <li className={futuraLTBT.className}>(+1) 760 350 578</li>
          </ul>
        </div>
        <div className="subscribe-wrap">
          <h1 className={futuraHv.className}>Sign-up to our newsletter</h1>
          <div className="footer-form-wrap">
            <input className={`${futuraMDBT.className} subsInp`} type="email" />
            <button className={`${futuraHv.className} subsBtn`}>Submit</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
