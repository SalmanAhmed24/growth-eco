import "./header.scss";
function EXESUM({ futuraHv, futuraLTBT }) {
  return (
    <section className="exe-sum-wrap">
      <h1 className={futuraHv.className}>Executive Summary</h1>
      <p className={futuraLTBT.className}>
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
