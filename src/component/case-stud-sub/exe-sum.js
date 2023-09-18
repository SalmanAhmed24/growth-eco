import "./header.scss";
function EXESUM({ poppins, summary }) {
  return (
    <section className={`${poppins.className} exe-sum-wrap`}>
      <h1 className={poppins.className}>Executive Summary</h1>
      <p className={poppins.className}>{summary}</p>
    </section>
  );
}

export default EXESUM;
