import { useEffect, useState } from "react";
import { Footer } from "../exp-index";
import food from '../assest/food.png'

// import emailjs from "emailjs";

const Contact = () => {


  return (
    <>
      <div>
        <div
          class="section section-padding pb-0 container"
          style={{ color: "black", textAlign: "left", }}
        >
          <div class="">
            <div class="row learts-mb-n30">
              <div
                class="col-md-6 col-12 align-self-center learts-mb-30 mt-5 "
                style={{ marginTop: "150px" }}
              >
                <img
                  src={food}
                  alt=""
                  class="img-fluid "
                />
              </div>
              <div class="col-md-6 col-12  learts-mb-30 ">
                <div className="formContainer" style={{ marginTop: "100px" }}>
                  <h1 class="display-6 mb-4">
                    Contact Us Whether you have a question
                  </h1>
                  <p class="description">We love hearing from you! Please contact us via the email address or phone numbers below.</p>
                  <p><b>Email address: </b><span>Help@wkiimeal.com</span></p>
                  <p>We will respond to your email within 72 hours.</p>
                  <p><span></span></p><br />
                  <p><b>Phone number: </b><span>0771234567</span></p>
                  <div id="suc" className="mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
