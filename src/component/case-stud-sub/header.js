import Image from "next/image";
import Link from "next/link";
import "./header.scss";
function HeaderCase({
  poppins,
  caseStudyNo,
  caseHeadingMain,
  caseDeskImg,
  caseMobileImg,
  casePara,
  color,
  rightAlign = false,
}) {
  return (
    <header className="case-sub-header">
      <div
        className={
          rightAlign == false
            ? `${poppins.className} content-wrap`
            : `${poppins.className} content-wrap left-align`
        }
      >
        <h1
          style={color == "white" ? { color: "#fff" } : { color: "#000" }}
          className={poppins.className}
        >
          {caseStudyNo}
        </h1>
        <h2
          style={color == "white" ? { color: "#fff" } : { color: "#000" }}
          className={poppins.className}
        >
          {caseHeadingMain}
        </h2>
        <p
          style={color == "white" ? { color: "#fff" } : { color: "#000" }}
          className={poppins.className}
        >
          {casePara}
        </p>
        <Link href={"/"} className={`${poppins.className} visit-web`}>
          VISIT WEBSITE
        </Link>
      </div>
      <img alt="growth eco" src={caseDeskImg} className="header-img" />
      <img alt="growth eco" src={caseMobileImg} className="header-img-mobile" />
    </header>
  );
}

export default HeaderCase;
