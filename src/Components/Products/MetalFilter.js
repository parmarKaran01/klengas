import React from "react";
import "./BagFilter.css";
import image from "../../assets/images/logo.png";
import mainImage from "../../assets/images/oilAndGas.png";
function MetalFilter() {
  return (
    <div className="products__page">
      <img src={mainImage} alt="" className="mainImage" />
      <div className="product__details">
        <div className="image__section">
          <img src={image} alt="" className="product__image" />
          <img src={image} alt="" className="product__image" />
          <img src={image} alt="" className="product__image" />
          <img src={image} alt="" className="product__image" />
        </div>
        <div className="product__catalogue">
          {" "}
          <a href="https://google.com">Download Catalogue</a>
        </div>
        <h4>About</h4>
        <div className="product__content">
          <p>
            The KGT Wire Mesh Metal Filter cartridge has a rigid pore structure
            enabling removal of particles at higher differential pressures with
            consistent efficiency.
          </p>
          <p>
            Apart from the wide chemical compatibility, the filters are suitable
            for either gas or liquid having a high dirt holding capacity.
          </p>
          <p>
            The KGT Wire Mesh Metal Filter cartridge is available in SS304/SS316
            and SS316L.
          </p>
        </div>
        <h4>Advantages</h4>
        <div className="product__content">
          <ul>
            <li>
              Due to wide range to media selection, a variety of liquids from
              acids to alkalis; from seawater to process water; and in gases
              from air to fuel gas to hot exhaust gases.
            </li>
            <li>
              Standard dimensions of 2.5” outer diameter and 1” internal
              diameter ensures fitment in most standard housings with varied
              length availability. (other dimensions are available on request)
            </li>
            <li>
              Available in 10 / 20 / 30 / 40 / 60 inches length. (Other lengths
              available on request.)
            </li>
            <li>
              Solid internal core ensures optimal strength and withstanding of
              differential pressure.
            </li>
          </ul>
        </div>
        <h4>DIFFERENTIAL PRESSURE DATA</h4>
        <div className="product__content">
          <p>
            For Normal Flow from Outside to Inside for liquids compatible with
            the filter media, the maximum differential pressure is 1.5 bard (22
            psid) @ 75⁰C.
          </p>
        </div>
        <h4>APPLICATIONS</h4>
        <div className="product__content" style={{ display: "flex" }}>
          <ul style={{ paddingRight: "10%" }}>
            <li>Corrosive Fluids</li>
            <li>Steam</li>
          </ul>
          <ul>
            <li>Thermic Fluids</li>
            <li>Amine, Glycol</li>
            <li>High Temperature applications in liquids and gases</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className="product__details">
        <div className="image__section">
          <img src={image} alt="" className="product__image" />
          <img src={image} alt="" className="product__image" />
          <img src={image} alt="" className="product__image" />
          <img src={image} alt="" className="product__image" />
        </div>
        <div className="product__catalogue">
          {" "}
          <a href="https://google.com">Download Catalogue</a>
        </div>
        <h4>About</h4>
        <div className="product__content">
          <p>
            The KGT Powdered Sintered Stainless Steel Filter cartridge has a
            constant pore structure achieved with controlled sintering of SS
            metal powder imparting it mechanical strength and wide range of
            chemical compatibility with consistent efficiency.
          </p>
          <p>
            Apart from the wide chemical compatibility, the filters are suitable
            for either gas or liquid having a high dP holding capacity.
          </p>
          <p>
            The KGT Powdered Sintered Stainless Steel Metal Filter cartridge is
            available in SS304/SS316 and SS316L.
          </p>
        </div>
        <h4>Advantages</h4>
        <div className="product__content">
          <ul>
            <li>
              Due to wide range to media selection, a variety of liquids from
              acids to alkalis; from seawater to process water; and in gases
              from air to fuel gas to hot exhaust gases.
            </li>
            <li>
              Standard dimensions of 2.5” outer diameter and 1” internal
              diameter ensures fitment in most standard housings with varied
              length availability. (other dimensions are available on request)
            </li>
            <li>
              Available in 10 / 20 / 30 / 40 / 60 inches length. (Other lengths
              available on request.)
            </li>
            <li>
              A depth ranging between 2-3.5 mm os sintered stainless steel
              ensures optimal strength to withstand differential pressure.
            </li>
            <li>Available in both absolute and nominal ratings</li>
          </ul>
        </div>
        <h4>DIFFERENTIAL PRESSURE DATA</h4>
        <div className="product__content">
          <p>
            For Normal Flow from Outside to Inside for liquids compatible with
            the filter media, the maximum differential pressure is 1.5 bard (22
            psid) @ 75⁰C.
          </p>
        </div>
        <h4>APPLICATIONS</h4>
        <div className="product__content" style={{ display: "flex" }}>
          <ul style={{ paddingRight: "10%" }}>
            <li>Corrosive Fluids</li>
            <li>Steam</li>
          </ul>
          <ul>
            <li>Thermic Fluids</li>
            <li>Amine, Glycol</li>
            <li>High Temperature applications in liquids and gases</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className="product__details"></div>
    </div>
  );
}

export default MetalFilter;
