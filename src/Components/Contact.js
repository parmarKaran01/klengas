import React from "react";
import Form from "./Form";
import image1 from "./../assets/images/contact-us.jpg";
import "./Contact.css";
// import Map from "./Map"

function Contact() {
  return (
    <div className="contact">
      <img src={image1} alt="" className="contactImage" />
      <div className="form">
        <div className="contact__content">
          <h2>Get in Touch</h2>
          <div style={{ marginTop: "5vh" }}>
            <p>
              Contact Klengas Tech LLP today if you have a filtration
              application or filtration question!
            </p>
            <p>
              Klengas Tech LLP delivers innovative solutions to address
              end-to-end filtration challenges for the energy market. Our
              solutions improve safety, reliability, productivity and
              ultimately, your profitability.{" "}
            </p>
            <p>
              {" "}
              Get in touch with us to learn more about how we can partner with
              you to solve your filtration challenges. The quickest way to get a
              response is by filling out the form on the right for us to direct
              your request.
            </p>
            <p style={{fontWeight:"600"}}>
              {" "}
              Office Location :
              </p><p>6, Anurag CHSL, Rajaji Path, Dombivli (East),
Thane - 421201, Maharashtra
            </p>
            <p style={{fontWeight:"600"}}>Support Email : </p>
            <p>solutions@klengas.com </p>
          </div>
          {/* <Map /> */}
        </div>
        <div className="contact__form">
          <Form />
          <input type="checkbox" />
          <span className="checkbox">
            {" "}
            I accept that the data submitted will be used to contact me for the
            business intended. I understand and agree to the PRIVACY POLICY
          </span>
          <p></p>
          <button className="submit__btn">SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
