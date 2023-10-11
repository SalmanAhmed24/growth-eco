"use client";
import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import { Poppins } from "next/font/google";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./style.scss";
import axios from "axios";
import { RadioGroup } from "react-rainbow-components";
import Swal from "sweetalert2";
// const Container = styled.div`
//   max-width: 480px;
//   margin: 30px auto;
//   padding: 20px 10px;
//   min-height: 400px;
// `;

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});
function ContactComp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [services, setServices] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const options = [
    { value: "Account Management", label: "Account Management" },
    { value: "Listing Optimization", label: "Listing Optimization" },
    { value: "Product Research", label: "Product Research" },
    { value: "Brand Storefront", label: "Brand Storefront" },
  ];
  const options2 = [
    { value: "Amazon Advertising", label: "Amazon Advertising" },
    { value: "Amazon A+ content", label: "Amazon A+ content" },
    { value: "Product Sourcing", label: "Product Sourcing" },
    { value: "Account Suspension", label: "Account Suspension" },
  ];
  const handleForm = (e) => {
    e.preventDefault();
    const dataObj = {
      firstname,
      lastname,
      email,
      services,
      phone,
      message,
    };
    axios
      .post("/api/contact", dataObj)
      .then((res) =>
        Swal.fire({
          icon: "success",
          titleText: "Success",
          text: "Thanks for contacting us. We will get back to you as soon as possible.",
          showClass: `${poppins.className}`,
        })
      )
      .catch((err) => console.log(err));
  };
  return (
    <section className={`${poppins.className} contact-inner`}>
      <header className="header-wrap-con">
        <div className="inner-content">
          <h1>Contact Us</h1>
          <p>
            Contact us now to take your Amazon business to successful heights!
          </p>
        </div>
        <div className="form-wrap">
          <form className="contact-form" onSubmit={handleForm}>
            <h2>Get in touch!</h2>
            <p>Got a question about Growth Echo?</p>
            <div className="formFieldsWrap">
              <div className="inputPrim">
                <div className="inner-field">
                  <label>First Name*</label>
                  <input
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                    className={`${poppins.className} inp-cus`}
                  />
                </div>
                <div className="inner-field">
                  <label>Last Name*</label>
                  <input
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                    className={`${poppins.className} inp-cus`}
                  />
                </div>
              </div>
              <div className="input-wrap">
                <label>Your Email*</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`${poppins.className} inp-cus`}
                />
              </div>
              <div className="input-wrap">
                <label>Phone No*</label>
                {/* <PhoneInput
                  placeholder="Enter your phone number"
                  onChange={setPhone}
                  className={`${poppins.className} phone-inp`}
                  value={phone}
                  required
                  readOnly={false}
                  
                /> */}
                <PhoneInput
                  country={"pk"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  className={`${poppins.className} phone-inp`}
                />
              </div>
              <div className="inputPrim">
                <div className="inner-field ser">
                  <label>Services*</label>
                  <RadioGroup
                    options={options}
                    value={services}
                    onChange={(e) => setServices(e.target.value)}
                    required
                    className={`${poppins.className} inp-cus no-border`}
                  />
                </div>
                <div className="inner-field ser">
                  <RadioGroup
                    options={options2}
                    value={services}
                    onChange={(e) => setServices(e.target.value)}
                    required
                    className={`${poppins.className} inp-cus no-border`}
                  />
                </div>
              </div>
              <div className="input-wrap">
                <label>Message</label>
                <textarea
                  value={message}
                  rows={3}
                  cols={10}
                  className={`${poppins.className} textarea-cus`}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="btn-wrap">
                <input
                  type="submit"
                  value={"Send Message"}
                  className={`${poppins.className} sendMsg`}
                />
              </div>
            </div>
          </form>
        </div>
      </header>
    </section>
  );
}

export default ContactComp;
