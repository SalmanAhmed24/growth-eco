import Image from "next/image";

function ServiceGrowth({
  futuraHv,
  futuraLTBT,
  headingText,
  paraText,
  spanText,
}) {
  return (
    <section className="service-scale-wrap">
      <h1 className={futuraHv.className}>
        {headingText}
        <span>{spanText}</span>
      </h1>
      <p className={futuraLTBT.className}>{paraText}</p>
    </section>
  );
}

export default ServiceGrowth;
