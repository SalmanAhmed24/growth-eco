"use client";
import React, { useState } from "react";
import "./index.scss";
function FAQs({ futuraBK, futuraMDBT, futuraHv, futuraLtBT }) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [accordion, setAccordion] = useState("0");
  const handleName = (e) => {
    setFirstName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = () => {
    console.log("handle submit");
  };
  return (
    <section className="faqs-main-wrapper">
      <div className="faqs-sec">
        <h1 className={futuraHv.className}>Frequently Asked Questions</h1>
        <p className={futuraLtBT.className}>
          Growth Echo implemented a customer success program to ensure high
          customer satisfaction and retention rates. Growth Echo implemented a
          customer success program to ensure high customer satisfaction and
          retention rates.
        </p>
        <button
          onClick={() => setAccordion("1")}
          className={futuraMDBT.className}
        >
          How can I optimize my product listings on Amazon to increase sales?
        </button>

        {accordion == "1" ? (
          <p className={futuraBK.className}>this is tab 1</p>
        ) : null}

        <button
          onClick={() => setAccordion("2")}
          className={futuraMDBT.className}
        >
          What are some best practices for inventory management on Amazon?
        </button>
        {accordion == "2" ? (
          <p className={futuraBK.className}>this is tab 2</p>
        ) : null}

        <button
          onClick={() => setAccordion("3")}
          className={futuraMDBT.className}
        >
          How can I effectively manage customer reviews and feedback on my
          Amazon products?
        </button>
        {accordion == "3" ? (
          <p className={futuraBK.className}>this is tab 3</p>
        ) : null}

        <button
          onClick={() => setAccordion("4")}
          className={futuraMDBT.className}
        >
          What are some best practices for inventory management on Amazon?
        </button>
        {accordion == "4" ? (
          <p className={futuraBK.className}>this is tab 4</p>
        ) : null}
      </div>
      <div className="form-sec">
        <div className="inner-wrap">
          <h1 className={futuraHv.className}>Ask a different question</h1>
          <form onSubmit={handleSubmit} className="form-wrap">
            <input
              type={"text"}
              onChange={handleName}
              className={`${futuraLtBT.className} input-cus`}
              placeholder="Name"
            />
            <input
              type={"email"}
              onChange={handleEmail}
              className={`${futuraLtBT.className} input-cus`}
              placeholder="Email"
            />
            <textarea
              className={`${futuraLtBT.className} textarea-cus`}
              rows={5}
              placeholder="Message"
              onChange={handleMessage}
            />
            <input
              type="submit"
              className={`${futuraHv.className} subBtn`}
              value="Submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
