import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/style.scss";
import Lottie from "react-lottie";
import animation2 from "../lottie/lot-data.json"; //full
import animation1 from "../lottie/lot-data2.json"; //beginning

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDivClicked: true,
    };
  }

  divHandler() {
    console.log("divclicked");
    this.setState({
      isDivClicked: false,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <section className="layout-hero text-left">
            <div className="subheading">
              <hr className="line-landing" />
              <h6 className="intro-sub mt-5">Intro</h6>
            </div>

            <div className="lottie-animation">
              <div className="clickEvent" onClick={this.divHandler.bind(this)}>
                &nbsp;
              </div>
              {this.state.isDivClicked && (
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: animation1,
                  }}
                ></Lottie>
              )}
              {!this.state.isDivClicked && (
                <Lottie
                  options={{
                    loop: false,
                    autoplay: true,
                    animationData: animation2,
                  }}
                ></Lottie>
              )}
            </div>

            <p className="intro-info">
              Fascinated by creating things from scratch <br />
              and transforming ideas into reality.{" "}
            </p>
            <Link className="projects-link" to="projects">
              <h2>VIEW PROJECTS</h2>
            </Link>
          </section>
        </div>
      </div>
    );
  }
}

export default HomePage;
