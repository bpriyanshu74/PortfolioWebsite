import React from "react";
import home1 from '../img/home1.png';
import styled from 'styled-components';

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

const About  = styled.div`
  color:white;
  min-height:90vh;
  display: flex;
  align-items: center;
  justify-content: space-space-between;
  padding: 5rem 10rem;
`
const Description = styled.div`
  padding-right: 5rem;
  flex:1;
  h2{
    font-weight: lighter;
  }
`
const Image = styled.div`
  flex:1;
  overflow: hidden;
  img{
    width:100%;
    height: 80vh;
    object-fit: cover;
  }
`
const Hide = styled.div`
  overflow: hidden;
`

export default AboutUsSection;