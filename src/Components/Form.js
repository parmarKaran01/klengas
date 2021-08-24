import React, { useState } from "react";
import "./Form.css";
function Form() {
  const [other, setOther] = useState(false);
  function handler(value) {
    if (value === "other") {
      setOther(!other);
    } else {
      setOther(false);
    }
  }
  const [uploadFile, setUploadFile] = React.useState();
  const [superHero, setSuperHero] = React.useState();
  const submitForm = (event) => {
    event.preventDefault();

    const dataArray = new FormData();
    dataArray.append("superHeroName", superHero);
    dataArray.append("uploadFile", uploadFile);
  };

  return (
    <div className="main">
      <h6>Full Name: *</h6>
      <input type="text" className="input"></input>
      <h6>Email Address: *</h6>
      <input type="text" className="input"></input>
      <h6>Phone Number: *</h6>
      <input type="text" className="input"></input>
      <h6>Company Name: *</h6>
      <input type="text" className="input"></input>
      <h6>Industry: *</h6>
      <select className="selector" onChange={(e) => handler(e.target.value)}>
        <option value="Oil and Gas">Oil and Gas</option>
        <option value="Chemical">Chemical</option>
        <option value="Refining">Refining</option>
        <option value="Petrochemical">Petrochemical</option>
        <option value="Industrial">Industrial</option>
        <option value="Food and Beverages">Food and Bevarage</option>
        <option value="other">Others</option>
      </select>
      {other ? (
        <input type="text" className="input" placeholder="Other"></input>
      ) : (
        ""
      )}
      <h6>Country: *</h6>
      <input type="text" className="input"></input>
      <h6>What can we help you with today? *</h6>
      <input type="text" className="input"></input>

      <br />
      <input
        type="file"
        style={{ cursor: "pointer" }}
        onChange={(e) => setUploadFile(e.target.files)}
      />
      <br />

      <input type="checkbox" style={{ cursor: "pointer" }} />
      <span className="checkbox">
        {" "}
        I accept that the data submitted will be used to contact me for the
        business intended. I understand and agree to the PRIVACY POLICY
      </span>
      <p></p>
      <button className="submit__btn" onSubmit={submitForm}>
        SUBMIT
      </button>
    </div>
  );
}

export default Form;
