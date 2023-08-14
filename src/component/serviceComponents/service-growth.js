import Image from "next/image";

function ServiceGrowth({ futuraHv, futuraLTBT }) {
  return (
    <section className="service-scale-wrap">
      <h1 className={futuraHv.className}>
        How De We<span>Grow</span>
      </h1>
      <p className={futuraLTBT.className}>
        Our marketing company specializes in helping sellers navigate and thrive
        in highly competitive environments, leveraging targeted strategies to
        boost visibility.
      </p>
    </section>
  );
}

export default ServiceGrowth;
