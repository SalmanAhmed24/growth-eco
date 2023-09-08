import "./header.scss";
function EXESUM({ poppins }) {
  return (
    <section className={`${poppins.className} exe-sum-wrap`}>
      <h1 className={poppins.className}>Executive Summary</h1>
      <p className={poppins.className}>
        We were contacted by a multinational consumer personal healthcare brand
        to help manage their Amazon Vendor Central account. Our client had only
        achieved 8% growth in year-over-year sales, which was disproportionate
        to growth within the category and on Amazon in general. The audit of
        their account identified specific areas for improvement that we
        prioritized.
      </p>
    </section>
  );
}

export default EXESUM;
