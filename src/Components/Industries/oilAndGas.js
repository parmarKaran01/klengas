import React from "react";
import mainImage from "./../../assets/images/oilAndGas.png";
import "./oilAndGas.css";

function oilAndGas() {
  return (
    <div className="oil__and__gas">
      <img src={mainImage} alt="" className="mainImage" />
      <div className='gray'>
      <div className="content">
        <p>
          The hydrocarbon industry constitutes of Upstream, Midstream and
          Downstream sectors. Klengas caters to all three sectors for filtration
          and separation needs from Exploration & Production to Oil & Gas
          processing stations to refineries to petrochemicals to fertilizers.{" "}
        </p>
        <p>
          Exploration & Production industry's primary applications are brine
          filtration and lube oil filtration. The brine is used for well
          completion and well work over. For formation protection, filtered
          brine down to 2 micron is a necessity. Along with fresh brine,
          re-circulated brine/produced water treatment is also a major
          application where filtration is pressed in to service. For all lube
          oil / hydraulic oil systems used in the rigs, a robust lube oil
          filtration systems, keeps the hydraulics running for longer times.{" "}
        </p>
        <p>
          Oil & Gas Processing stations separate crude oil, produced water and
          associated gas from well fluid. The crude oil is further purified and
          made transportable to nearest refinery, the natural gas is dried,
          compressed and transported to either consumers or gas injection wells
          for tertiary EOR or Gas Turbine Power Generation plants. These
          stations use filtration for produced water, natural gas filtration,
          glycol filtration, amine filtration, process water and compressed air.{" "}
        </p>
        <p>
          Crude Oil Petroleum Refinery is the largest midstream industry. They
          focus on value generation from crude oil by utilizing the latest
          technologies of hydrocarbon separation. Klengas serves the refining
          applications such as amine sweetening unit, glycol dehydration unit,
          Water treatment plants, sour water treatment unit, diesel hydro
          desulphurization unit, hydro-treating unit etc.{" "}
        </p>
        </div>
        <div className='blue'>
        <h3 style={{textAlign:"center"}}>APPLICATIONS</h3>
        <div className="applications">
        <h5>AMINE SWEETENING (RICH AMINE & LEAN AMINE)</h5>
        <p>
          Amine systems tend to foam due to presence of solids and liquid
          hydrocarbons in the circulating stream. Liquid hydrocarbons are
          removed using activated carbon beds, however, solids need constant
          removal to avoid build-up. Solids lead to foaming in the contactor,
          which in turn leads to carryover of amine and/or reduction in
          processing capacity of contactor. High efficiency and high volume
          filtration products from Klengas can help reduce/eliminate foaming
          from amine systems due to solids.
        </p>
        <h5>SOUR WATER CARBON/ COKE FINES</h5>
        <p>
        Sour water stripper columns have packings which tend to get plugged due to solids and corrosion products from the hydrotreater/DHDS stream. High volume high efficiency filters from Klengas help reduce drastically the solid content in the stripper column thereby allowing to utilize its processing capacity to the maximum.
        </p>
        <h5>FINE PARTICULATES IN PRODUCT / WHITE FUELS FILTRATION / TANK FARM PRODUCT FILTER</h5>
        <p>Suspended solids in the final refinery product/white fuels lead to off-spec product quality during inspection/testing. To eliminate the solids from white fuels, Klengas offers various media depending on compatibility for clarification of white fuels/final products of the refinery prior to despatch. These are utilized in the tank farms/refinery battery limit discharge pumping systems.
        </p>
        <h5>CATALYST BED PROTECTION (DHDS/NHT/DHDT/MERCURY GUARD BED ETC.)</h5>
        <p>Diesel/Naphtha/Kerosene stream prior to hydrotreating/desulphurization have to be cleaned up to avoid solids from plugging the catalyst bed. Klengas designs and caters to these applications with a range of media from polypropylene to polyester to glass fibre in high volume product configuration. 
        </p>
        <h5>FUEL GAS FILTRATION</h5>
        <p>Refinery fuel gas contains pipe scale, rust and associated solids which needs to be removed before that enter the burner system. Due to the need of the hour to reduce SOx and NOx emissions, the burners apertures have reduced, thus requiring higher protection from solids to avoid burner tip erosion/flame distortion. Klengas offers filters in both polypropylene and glass fibre depending on RFG composition.
        </p>
        <h5>REVERSE OSMOSIS GUARD FILTER</h5>
        <p>Reverse Osmosis (RO) membranes manufacturers specify a certain range of inlet SDI levels which need to be maintained to have minimal reject and maximum onstream time before chemical cleaning. The inlet SDI can be maintained using polypropylene depth/pleated filters depending on inlet water quality to be treated. Klengas offers them in both small volume and high volume filtration products for techno-economic optimization.
        </p>
        <h5>COMPRESSED AIR</h5>
        <p>Compressed air used in plants for process sensitive instruments like control valve should be devoid of solids to avoid aperture plugging and improper response to signals resulting on improper opening / closing of valve than needed value. Klengas offers economically designed compressed air filtration solutions having minimal pressure drop and maximum onstream service life.
        </p>
        <h5>RECYCLE GUARD FILTER / COMPRESSOR PROTECTION</h5>
        <p>In hydrotreaters/desulphurization units, the unreacted hydrogen is recycled through a makeup reciprocating compressor, the unreacted hydrogen usually contains solids which end up fouling the inlet and outlet compressor valves. Klengas offers solution for removal of solids from recycle streams using polypropylene pleated filters.
        </p>
        <h5>PLATE HE GUARD FILTER</h5>
        <p>Plate heat exchangers are sensitive to solid contamination. Klengas offers optimal filtration solutions utilizing glass fibre/polypropylene filters sized for the application.
        </p>
        <h5>THERMIC FLUID FILTER</h5>
        <p>Thermic fluid plants are susceptible of solids built up, mostly carbonized products of thermic fluids during the process cycle. Klengas offers high temperature resistance glass fibre filtration solution to remove/reduce the solids from the circulating thermic fluid system.
        </p>
      </div>
      </div>
      </div>
    </div>
  );
}

export default oilAndGas;
