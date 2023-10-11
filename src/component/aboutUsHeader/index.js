import Link from "next/link";
import "./header.scss";
import Image from "next/image";
function Header({ poppins }) {
  return (
    <header className="header-about">
      <h1 className={poppins.className}>
        Amazon<span> Account Management and Consulting</span>
      </h1>
      <h1 className={poppins.className}>
        Sustainable Growth and Profitability
      </h1>
      <p className={poppins.className}>
        Our marketing company specializes in helping sellers navigate and thrive
        in highly competitive environments, leveraging targeted strategies to
        boost visibility.
      </p>
      <Link
        href="/contact-us"
        className={`${poppins.className} header-about-a`}
      >
        Start Now
      </Link>
    </header>
  );
}

export default Header;
