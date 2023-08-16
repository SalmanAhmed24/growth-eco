import "./serviceComp.scss";
import Image from "next/image";
import Link from "next/link";
function ServiceHeader({ futuraHv, futuraLTBT, heading1, para1 }) {
  return (
    <header className="header">
      <h1 className={futuraHv.className}>{heading1}</h1>
      <p className={futuraLTBT.className}>{para1}</p>
      <Link href={"/"} className={futuraHv.className}>
        Start Now
      </Link>
      <Image
        alt="growth eco"
        className="amazon-avatar"
        src={"/amazon-ser-header-avatar.png"}
        width={419}
        height={479}
      />
    </header>
  );
}

export default ServiceHeader;
