import Link from "next/link";
import "./who-we-are.scss";
import Image from "next/image";
function WhoWeAre({
  title,
  content,
  imageUrl,
  futuraBK,
  futuraMDBT,
  poppins,
  futuraLtBT,
  futuraHv,
  layout,
  width,
  height,
  link,
  linkFlag,
}) {
  return (
    <main className="main-who-we">
      {layout !== "r" ? (
        <section className="who-we-about">
          <div className="content-wrap">
            <div className="inner-wrap">
              <h1 className={poppins.className}>{title}</h1>
              <p className={poppins.className}>{content}</p>
              {linkFlag ? (
                <Link href={link} className={`${poppins.className} read-more`}>
                  Read More
                </Link>
              ) : null}
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
              <h1 className={poppins.className}>{title}</h1>
              <p className={poppins.className}>{content}</p>
              {linkFlag ? (
                <Link href={link} className={`${poppins.className} read-more`}>
                  Read More
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default WhoWeAre;
