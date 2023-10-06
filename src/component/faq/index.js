"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
import "./index.scss";
import axios from "axios";
import Swal from "sweetalert2";
function FAQs({
  question1,
  question2,
  question3,
  question4,
  tab1,
  tab2,
  tab3,
  tab4,
}) {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: firstName,
      email,
      message,
    };
    axios
      .post("/api/simpleContact", data)
      .then((res) => {
        Swal.fire({
          icon: "success",
          titleText: "Success",
          text: "Thanks for contacting us. We will get back to you as soon as possible.",
          showClass: `${poppins.className}`,
        });
      })
      .catch((err) => console.log(err));
    setEmail("");
    setFirstName("");
    setMessage("");
  };
  return (
    <section className="faqs-main-wrapper">
      <div className="faqs-sec">
        <h1 className={poppins.className}>Frequently Asked Questions</h1>
        <p className={poppins.className}>
          Growth Echo implemented a customer success program to ensure high
          customer satisfaction and retention rates. Growth Echo implemented a
          customer success program to ensure high customer satisfaction and
          retention rates.
        </p>
        <button
          onClick={() => setAccordion("1")}
          className={
            accordion == "1"
              ? `${poppins.className} plusAnim`
              : poppins.className
          }
        >
          {question1}
        </button>

        {accordion == "1" ? <p className={poppins.className}>{tab1}</p> : null}

        <button
          onClick={() => setAccordion("2")}
          className={
            accordion == "2"
              ? `${poppins.className} plusAnim`
              : poppins.className
          }
        >
          {question2}
        </button>
        {accordion == "2" ? <p className={poppins.className}>{tab2}</p> : null}

        <button
          onClick={() => setAccordion("3")}
          className={
            accordion == "3"
              ? `${poppins.className} plusAnim`
              : poppins.className
          }
        >
          {question3}
        </button>
        {accordion == "3" ? <p className={poppins.className}>{tab3}</p> : null}

        <button
          onClick={() => setAccordion("4")}
          className={
            accordion == "4"
              ? `${poppins.className} plusAnim`
              : poppins.className
          }
        >
          {question4}
        </button>
        {accordion == "4" ? <p className={poppins.className}>{tab4}</p> : null}
      </div>
      <div className="form-sec">
        <div className="inner-wrap">
          <h1 className={poppins.className}>Ask a different question</h1>
          <form onSubmit={handleSubmit} className="form-wrap">
            <input
              type={"text"}
              onChange={handleName}
              className={`${poppins.className} input-cus`}
              placeholder="Name"
            />
            <input
              type={"email"}
              onChange={handleEmail}
              className={`${poppins.className} input-cus`}
              placeholder="Email"
            />
            <textarea
              className={`${poppins.className} textarea-cus`}
              rows={5}
              placeholder="Message"
              onChange={handleMessage}
            />
            <input
              type="submit"
              className={`${poppins.className} subBtn`}
              value="Submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
