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
}) {
  return (
    <header className="case-sub-header">
      <div className={`${poppins.className} content-wrap`}>
        <h1 className={poppins.className}>{caseStudyNo}</h1>
        <h2 className={poppins.className}>{caseHeadingMain}</h2>
        <p className={poppins.className}>{casePara}</p>
        <Link href={"/"} className={`${poppins.className} visit-web`}>
          VISIT WEBSITE
        </Link>
      </div>
      <Image
        alt="growth eco"
        src={caseDeskImg}
        className="header-img"
        width={1528}
        height={500}
      />
      <Image
        alt="growth eco"
        src={caseMobileImg}
        className="header-img-mobile"
        width={359}
        height={500}
      />
    </header>
  );
}

export default HeaderCase;
