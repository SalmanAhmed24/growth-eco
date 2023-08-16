import Image from "next/image";
import "./style.scss";

function Achieve({ futuraBK, futuraMDBT, futuraLtBT, futuraHv }) {
  return (
    <section className="ach-wrap">
      <h1 className={futuraHv.className}>Our Achievements</h1>
      <p className={futuraLtBT.className}>
        GrowthEcho is the world&apos;s Top Branded seller and has grown the
        Amazon business to $6 Million in one year
      </p>
      <Image src={"/achieve.png"} width={1370} height={350} />
      <img className="mobile-roc" src={"/mobile-roc-ach.png"} />
    </section>
  );
}

export default Achieve;
