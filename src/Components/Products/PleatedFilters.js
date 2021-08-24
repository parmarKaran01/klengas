import React from "react";
import "./BagFilter.css";
import image from "../../assets/images/logo.png";
import mainImage from "../../assets/images/oilAndGas.png";
function PleatedFilters() {
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
            The KGT Polypromax Cartridge filter has absolute removal rating
            enabling removal of contaminations with consistent efficiency for
            critical applications, with option of nominal ratings for less
            critical applications like prefiltration. Polypromax is modified
            Polypro with higher area.
          </p>
          <p>
            Apart from the wide chemical compatibility, the filters are suitable
            for either high flow rate or high viscous liquid, having a high dirt
            holding capacity.
          </p>
          <p>
            The KGT Polypromax cartridge filter is available in various removal
            ratings enabling it to handle a wide range of fluids with a
            considerable dirt holding capacity.
          </p>
        </div>
        <h4>Advantages</h4>
        <div className="product__content">
          <ul>
            <li>
              Due to wide range of pore size selection, a variety of liquids
              from acids to alkalis; from seawater to process water; and lube
              oils to petroleum fluid.
            </li>
            <li>
              Standard dimensions ensures fitment in most standard housings with
              varied length availability. (other dimensions available on
              request)
            </li>
            <li>
              Available in 2.5, 5, 10, 20, 30, 40 inch lengths (Other lengths
              available on request.)
            </li>
            <li>
              All materials of construction are available in 21CFR Compliant
              materials and have passed as per USP class VI Biological tests for
              plastics @ 121°C.
            </li>
            <li>Available in both absolute and nominal ratings</li>
          </ul>
        </div>
        <h4>DIFFERENTIAL PRESSURE DATA</h4>
        <div className="product__content">
          <p>
            For Normal Flow from Outside to Inside for liquids compatible with
            the filter media, the maximum differential pressure is
          </p>
          <p>Polypropylene Medium: 3.4 bar d @ 25 C & 2.0 bar d @80C</p>
        </div>
        <h4>APPLICATIONS</h4>
        <div className='product__content' style={{display:'flex'}}>
            <ul style={{paddingRight:'10%'}}>
            <li>Oil & Gas</li>
            <li>Power Generation</li>
            <li>Process & Waste Water</li>
            </ul>
            <ul>
            <li>Electronics</li>
            <li>Pharmaceuticals</li>
            <li>Food & Beverages</li>
            </ul>
        </div>
      </div>
      <hr></hr>
      <div className='product__details'></div>
    </div>
  );
}

export default PleatedFilters;
