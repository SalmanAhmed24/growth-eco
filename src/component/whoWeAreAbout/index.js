import Link from "next/link";
import "./who-we-are.scss";
import Image from "next/image";
function WhoWeAre({
  title,
  content,
  imageUrl,
  futuraBK,
  futuraMDBT,
  futuraLtBT,
  futuraHv,
  layout,
  width,
  height,
  link,
}) {
  return (
    <main className="main-who-we">
      {layout !== "r" ? (
        <section className="who-we-about">
          <div className="content-wrap">
            <div className="inner-wrap">
              <h1 className={futuraHv.className}>{title}</h1>
              <p className={futuraLtBT.className}>{content}</p>
              <Link href={"/"} className={`${futuraHv.className} read-more`}>
                Read More
              </Link>
            </div>
          </div>
          <div className="image-wrap">
            <Image
              alt="growth eco"
              src={imageUrl}
              width={width}
              height={height}
            />
          </div>
        </section>
      ) : (
        <section className="who-we-about mobile-layout">
          <div className="image-wrap">
            <Image
              alt="growth eco"
              src={imageUrl}
              width={width}
              height={height}
            />
          </div>
          <div className="content-wrap">
            <div className="inner-wrap">
              <h1 className={futuraHv.className}>{title}</h1>
              <p className={futuraLtBT.className}>{content}</p>
              <Link href={"/"} className={`${futuraHv.className} read-more`}>
                Read More
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default WhoWeAre;
