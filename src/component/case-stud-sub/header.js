import Image from "next/image";
import Link from "next/link";
import "./header.scss";
function HeaderCase({ futuraHv, futuraLTBT }) {
  return (
    <header className="case-sub-header">
      <div className="content-wrap">
        <h1 className={futuraHv.className}>Case Study 1</h1>
        <h2 className={futuraHv.className}>RFAQK</h2>
        <p className={futuraLTBT.className}>
          RFAQK&apos;s Cake Decorating Kit for all skill level solves as
          ever-lasting issue of buying different tools from here and there
        </p>
        <Link href={"/"} className={`${futuraHv.className} visit-web`}>
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
