import React from "react";
import home1 from '../img/home1.png';
import styled from 'styled-components';
import { About, Description, Hide, Image } from "../style";

const AboutUsSection = () => {
  return(
    <About>
      <Description>
        <Hide>
          <h2>We work to make</h2>
        </Hide>
        <Hide>
          <h2>your <span>dreams</span> come <br></br>true.</h2>
        </Hide>
        
        <p>
          Contact us for any Photography or Videography ideas that you have. We have professionals with amazing skills to help you achieve it.
        </p>
        <button>
          Contact Us
        </button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  )
}



export default AboutUsSection;