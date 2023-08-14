import "./serviceComp.scss";
import Image from "next/image";
import Link from "next/link";
function ServiceHeader({ futuraHv, futuraLTBT }) {
  return (
    <header className="header">
      <h1 className={futuraHv.className}>amazon FBA</h1>
      <p className={futuraLTBT.className}>
        Our marketing company specializes in helping sellers navigate and thrive
        in highly competitive environments, leveraging targeted strategies to
        boost visibility.
      </p>
      <Link href={"/"} className={futuraHv.className}>
        Start Now
      </Link>
      <Image
        className="amazon-avatar"
        src={"/amazon-ser-header-avatar.png"}
        width={419}
        height={479}
      />
    </header>
  );
}

export default ServiceHeader;
