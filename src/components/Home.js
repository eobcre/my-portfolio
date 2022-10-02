import React from "react";
import Header from "./Header";
// Vanta.js
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
// Resume PDF
import PDF from "../dummy.pdf";

// Background - Vanta.js
class Home extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = NET({
      el: this.vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      maxDistance: 24.0,
      color: 0x3fbbff,
    });
  }
  // Remove
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
  render() {
    return (
      <div
        className="h-screen w-screen table-cell align-middle"
        ref={this.vantaRef}
      >
        <main>
          <Header />
          <div className="mx-auto container">
            <div className="text-center md:text-left">
              {/* Title */}
              <h1 className="text-white text-5xl tracking-wide sm:text-7xl font-bold">
                Hi, I'm Emmy.
                <br />
                Web Developer.
              </h1>
              {/* Sub quote */}
              <p className="text-white tracking-wide my-10 md:text-xl">
                {this.props.subquote}
              </p>
              {/* Button */}
              <a href={PDF} target="_blank" rel="noreferrer" className="btn-st">
                {this.props.name}
              </a>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
