import React from "react";
import "../sass/style.scss";

const AboutPage = () => (
  <>
    <div className="container layout-about">
      {/* about me */}
      <div className="subheading">
        <hr className="line-about" />
        <h6 className="about-sub ">About</h6>
      </div>
      <br></br>

      {/* about-info */}
      <div className="about-info">
        <h1>
          I’m a product designer <br></br>based in Toronto.
        </h1>
        <p>
          Shortly after graduating in Communication Design, I worked on several
          interesting and meaningful design projects. I had the urge to explore
          more and therefore decided to pursue my degree in Interactive Media
          Management from Sheridan College.
        </p>
      </div>

      {/* experience */}

      <div>
        <hr className="line-experience" />
        <h6 className="experience-sub"> Experience </h6>
      </div>
      <section className="moreinfo">
        <div className="experienceContent">
          {/* experience 1 */}

          <div className="experience1">
            <p className="position"> Freelance Designer </p>
            <p className="company">Freelance</p>
            <p className="year"> Jan 2018 - Present </p>
            <img src={require("../images/arrow.svg")} />
          </div>
          {/* <ul class="moreexp content">
            <li>
              <h4>Shopify:</h4> Part of the team of designers for Unite
              conference by Shopify.
            </li>
            <li>
              <h4>Ceridian:</h4> Four month contract with Ceridian as part of
              their design team to work on digital and print design.
            </li>
            <li>
              <h4>Colliers:</h4> Onsite project to design a report with
              Colliers.
            </li>
            <li>
              <h4>Barrett and Welsh:</h4> Worked for various clients including
              Pepsi, TD, and Brampton Transit.
            </li>
            <li>
              <h4>SpinMaster:</h4> Worked on the tags for their brand called
              “Gund” along with some assets for digital screens.{" "}
            </li>
            <p>
              Also worked with various other companies including Ontario Medical
              Association, Moneris and Greeniche{" "}
            </p>
          </ul> */}

          {/* experience 2 */}

          <div className="experience1">
            <p className="position"> Creative Designer </p>
            <p className="company"> EDGE, Sheridan</p>
            <p className="year"> Sept 2019 - Present </p>
            <img src={require("../images/arrow.svg")} />
          </div>
          {/* <p className="moreexp content">
            At EDGE, I help them with their brand identity for their social
            media and print design. I also help startups at the EDGE with their
            branding, posters etc.
          </p> */}

          {/* experience 3 */}

          <div className="experience1">
            <p className="position"> Creative Associate </p>
            <p className="company"> The Nest I/O </p>
            <p className="year">Sept 2016 - Nov 2017 </p>
            <img src={require("../images/arrow.svg")} />
          </div>

          {/* <p className="moreexp content">
            I was responsible for the design outlook of The Nest I/o and P@sha
            which included social media, website design, collateral design, as
            well as helping set up events.
          </p> */}

          {/* experience 3 */}

          <div className="experience1">
            <p className="position"> Graphic Designer </p>
            <p className="company"> Express Tribune</p>
            <p className="year"> Feb 2015 - Aug 2016 </p>
            <img src={require("../images/arrow.svg")} />
          </div>
          {/* 
          <p className="moreexp content">
            {" "}
            Responsibilities included working on the graphics for daily
            newspaper and weekly magazines using InDesign.
          </p> */}
        </div>
      </section>
    </div>
  </>
);

export default AboutPage;
