import "./serviceComp.scss";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
function ServiceHeader({ heading1, para1, headerBG }) {
  return (
    <header
      className="header"
      style={{
        backgroundImage: `url(${headerBG})`,
      }}
    >
      <h1 className={poppins.className}>{heading1}</h1>
      <p className={poppins.className}>{para1}</p>
      <Link href={"/contact-us"} className={poppins.className}>
        Start Now
      </Link>
      {/* <Image
        alt="growth eco"
        className="amazon-avatar"
        src={"/amazon-ser-header-avatar.png"}
        width={419}
        height={479}
      /> */}
    </header>
  );
}

export default ServiceHeader;
