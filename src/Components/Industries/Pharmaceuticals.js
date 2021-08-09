import React from "react";
import mainImage from "./../../assets/images/oilAndGas.png";

function Pharmaceuticals() {
  return (
      <>
        <img src={mainImage} alt="" className="mainImage" />
        <div className='content'>
        <p>
            Pharmaceutical industry served by Klengas encompasses API, bulk drugs,
            formulation & biotech, Large Volume Parentrals / Small Volume Parentrals
            and Water for injection.{" "}
        </p>
        </div>
    </>
  );
}

export default Pharmaceuticals;
