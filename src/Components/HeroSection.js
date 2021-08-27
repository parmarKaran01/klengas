import React from "react";
import HeroCard from "./HeroCard";
import "./HeroSection.css";
import YoutubeVideo from "./YoutubeVideo";

function HeroSection() {
  return (
    <>
      <div className="hero">
        <div className="hero__text">
          <p>
            Klengas Tech LLP is an organisation led by techno-commercial
            personnel with technocrats leading from front having combined
            <span style={{ fontWeight: "800" }}>
              {" "}
              professional experience of over 55 years
            </span>{" "}
            in the filtration and separation, processes and equipments across
            industries. Adept in application engineering, project engineering,
            execution, installation and commissioning and applications
            development. Lead and guide teams to support across geographies by
            providing innovative solutions in various industries segments.
          </p>
          <p>
            We are serving across the industries. Just to illustrate few
            examples:
          </p>
          <p>We are engaged in following services:</p>
          <ol className="list2">
            <li>
              Suggesting solutions to Existing Filtration and Separation related
              problems
            </li>
            <li>
              Suggesting New and appropriate Filtration and Separation Solutions
            </li>
            <li>
              Carrying out Filtration related Surveys and Health Check-ups of
              Filtration Systems
            </li>
          </ol>
        </div>
        <div className="hero__images">
          <HeroCard
            className="hero__card"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPMJoPOtQ0unTfgMiMJjEQEGFY2ITssffLg&usqp=CAU"
            title="Oil And Gas"
            content="Oil & Gas Processing stations separate crude oil, produced water and associated gas from well fluid."
          />
          <HeroCard
            className="hero__card"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPMJoPOtQ0unTfgMiMJjEQEGFY2ITssffLg&usqp=CAU"
            title="Pharmaceuticals"
            content="Pharmaceutical industry served by Klengas encompasses API, bulk drugs, formulation & biotech, Large Volume Parentrals / Small Volume Parentrals and Water for injection."
          />
          <HeroCard
            className="hero__card"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPMJoPOtQ0unTfgMiMJjEQEGFY2ITssffLg&usqp=CAU"
            title="Food and Beverages"
            content="lorem ipsum"
          />
        </div>
        <div className="hero__images">
          <HeroCard
            className="hero__card"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPMJoPOtQ0unTfgMiMJjEQEGFY2ITssffLg&usqp=CAU"
            title="Chemicals"
            content="lorem ipsum"
          />
          <HeroCard
            className="hero__card"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPMJoPOtQ0unTfgMiMJjEQEGFY2ITssffLg&usqp=CAU"
            title="Water Processing"
            content="lorem ipsum"
          />
          <HeroCard
            className="hero__card"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPMJoPOtQ0unTfgMiMJjEQEGFY2ITssffLg&usqp=CAU"
            title="Power Generation"
            content="lorem ipsum"
          />
        </div>
      </div>

      {/* RESPONSIVENESS PENDING */}

      <>
        <h5 className="featured__heading">FEATURED SECTION</h5>
        <div className="featured__section">
          {/* https://www.youtube.com/watch?v=1KmS9DqIBbw */}
          <YoutubeVideo videoId="1KmS9DqIBbw" />
          {/* https://www.youtube.com/watch?v=AL2Nll6B9JU&t=3s */}
          <YoutubeVideo videoId="AL2Nll6B9JU" />
          {/* https://www.youtube.com/watch?v=QAznxTjy0PA */}
          <YoutubeVideo videoId="QAznxTjy0PA" />
        </div>
      </>
    </>
  );
}

export default HeroSection;