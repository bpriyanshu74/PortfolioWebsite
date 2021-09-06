import React from "react";
import home1 from '../img/home1.png';

const AboutUsSection = () => {
  return(
    <div>
      <div className="description">
        <div className="hide">
          <h2>We work to make</h2>
        </div>
        <div className="hide">
          <h2>your <span>dreams</span> come</h2>
        </div>
        <div className="hide">
          <p>true.</p>
        </div>
        <h2>
          Contact us for any Photography or Videography ideas that you have. We have professionals with amazing skills to help you achieve it.
        </h2>
        <button>
          Contact Us
        </button>
      </div>
      <div className="image">
        <img src={home1} alt="guy with a camera" />
      </div>
    </div>
  )
}

export default AboutUsSection;