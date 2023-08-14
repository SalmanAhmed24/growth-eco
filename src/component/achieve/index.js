import Image from "next/image";
import "./style.scss";

function Achieve({ futuraBK, futuraMDBT, futuraLtBT, futuraHv }) {
  return (
    <section className="ach-wrap">
      <h1 className={futuraHv.className}>Our Achievements</h1>
      <p className={futuraLtBT.className}>
        At Growth Echo, our mission is to revolutionize the marketing landscape
        by delivering cutting-edge strategies that drive business growth and
        ignite brand.
      </p>
      <Image src={"/achieve.png"} width={1370} height={350} />
      <img className="mobile-roc" src={"/mobile-roc-ach.png"} />
    </section>
  );
}

export default Achieve;
