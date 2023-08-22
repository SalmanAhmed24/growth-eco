import Image from "next/image";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

function ServiceGrowth({ headingText, paraText, spanText }) {
  return (
    <section className="service-scale-wrap">
      <h1 className={poppins.className}>
        {headingText}
        <span>{spanText}</span>
      </h1>
      <p className={poppins.className}>{paraText}</p>
    </section>
  );
}

export default ServiceGrowth;
