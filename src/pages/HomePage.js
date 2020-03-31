import React from "react";
import WorkList from "./WorkList";
import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/style.scss";
// import lottie from "lottie-web";
import Lottie from "react-lottie";
import animation from "../lottie/lot-data.json";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    };
  }

  playHandler() {
    console.log("playing");
    this.setState({
      isPlaying: true
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <section className="layout-hero text-left mt-5">
            <h6 className="intro-sub mt-5">–––––– INTRO</h6>
            <div onClick={this.playHandler.bind(this)}>
              <Lottie
                direction={this.state.isPlaying ? 1 : -1}
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: animation
                }}
              ></Lottie>
            </div>
            <p className="intro-info">
              Fascinated by creating things from scratch <br />
              and transforming ideas into reality.{" "}
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default HomePage;
