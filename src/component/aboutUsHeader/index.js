import Link from "next/link";
import "./header.scss";
import Image from "next/image";
function Header({ futuraBK, futuraMDBT, futuraLtBT, futuraHv }) {
  return (
    <header className="header-about">
      <h1 className={futuraHv.className}>
        Your <span>Marketing Superheroes:</span>
      </h1>
      <h1 className={futuraHv.className}>Igniting Growth, Inspiring Impact!</h1>
      <p className={futuraLtBT.className}>
        Our marketing company specializes in helping sellers navigate and thrive
        in highly competitive environments, leveraging targeted strategies to
        boost visibility.
      </p>
      <Link href="/" className={`${futuraHv.className} header-about-a`}>
        Start Now
      </Link>
      <Image src={"/about-header.png"} width={570} height={200} />
    </header>
  );
}

export default Header;
