import Image from "next/image";
import Link from "next/link";
import "./header.scss";
function HeaderCase({ poppins }) {
  return (
    <header className="case-sub-header">
      <div className={`${poppins.className} content-wrap`}>
        <h1>Case Study 1</h1>
        <h2>RFAQK</h2>
        <p>
          RFAQK&apos;s Cake Decorating Kit for all skill level solves as
          ever-lasting issue of buying different tools from here and there
        </p>
        <Link href={"/"} className={`visit-web`}>
          VISIT WEBSITE
        </Link>
      </div>
      <Image
        alt="growth eco"
        src={"/case-sub-header.png"}
        className="header-img"
        width={1528}
        height={500}
      />
    </header>
  );
}

export default HeaderCase;
