import Link from "next/link";
import "./whyCap.scss";
import localFont from "@next/font/local";
import Image from "next/image";
const futuraHv = localFont({
  src: "../../app/fonts/FutuHv.ttf",
  weight: "400",
  style: "normal",
});
const futuraBK = localFont({
  src: "../../app/fonts/FutuBk.ttf",
  weight: "400",
  style: "normal",
});
const futuraMDBT = localFont({
  src: "../../app/fonts/FutuMd.ttf",
  weight: "400",
  style: "normal",
});
const futuraLTBT = localFont({
  src: "../../app/fonts/FuturaLtBT.ttf",
  weight: "400",
  style: "normal",
});
function WhyCap({
  layout,
  mainImg,
  listItems,
  heading,
  headingSec,
  span,
  content,
  arrow,
  url,
}) {
  return (
    <section
      className={
        arrow == 1
          ? "arrow1"
          : arrow == 2
          ? "arrow2"
          : arrow == 3
          ? "arrow3"
          : "arrow4"
      }
    >
      <section
        className={layout == "left" ? "cap-ser-sec left" : "cap-ser-sec right"}
      >
        <div className="cap-img-wrap">
          <img src={`${mainImg}`} className="cap-img" />
        </div>
        <div className="cap-content-wrap">
          <h1 className={futuraHv.className}>{heading}</h1>
          <h1 className={futuraHv.className}>
            <span className={futuraHv.className}> {span} </span>
            {headingSec}
          </h1>
          <p className={futuraLTBT.className}>{content}</p>
          <div className="cus-ser-list">
            {listItems.map((i, ind) => (
              <div key={`${i}${ind}`} className="list-item">
                <Image src={"/ser-rocket.png"} width={24} height={24} />
                <p className={futuraLTBT.className}>{i}</p>
              </div>
            ))}
            <div className="explore-link">
              <Link href={url} className={futuraHv.className}>
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default WhyCap;
