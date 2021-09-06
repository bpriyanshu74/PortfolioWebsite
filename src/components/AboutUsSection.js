import React from "react";
import home1 from '../img/home1.png';

const AboutUsSection = () => {
  return(
    <div>
      <div className="description">
        <div className="hide">
          <p>We work to make</p>
        </div>
        <div className="hide">
          <p>your <span>dreams</span> come</p>
        </div>
        <div className="hide">
          <p>true.</p>
        </div>
        <p>
          Contact us for any Photography or Videography ideas that you have. We have professionals with amazing skills to help you achieve it.
        </p>
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