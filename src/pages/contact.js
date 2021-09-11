import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation.js";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyle variants={pageAnimation} initial='hidden' animate='show' exit='exit'>

      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get In Touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
        <Social variants={titleAnim}>
          <Circle />
          <h3>Call us</h3>
        </Social>
        </Hide>
        <Hide>
        <Social variants={titleAnim}>
          <Circle />
          <h3>Send a Message</h3>
        </Social>
        </Hide>
        <Hide>
        <Social variants={titleAnim}>
          <Circle />
          <h3>Send a Email</h3>
        </Social>
        </Hide>
        <Hide>
        <Social variants={titleAnim}>
          <Circle />
          <h3>Reach out to our Office</h3>
        </Social>
        </Hide>
        
      </div>
    </ContactStyle>
  )
}

const ContactStyle = styled(motion.div)`
  color:#353535;
  padding:5rem 10rem;
  min-height:90vh;
  @media (max-width:1020px){
    padding:2rem;
  }
`
const Title = styled.div`
  margin-bottom:4rem;
  color:black;
  @media (max-width:1020px){
    margin-top:5rem;
  }
`
const Hide = styled.div`
  overflow: hidden;
`
const Circle = styled(motion.div)`
  height:1rem;
  width:1rem;
  border-radius: 50%;
  background-color: #353535;
`
const Social = styled(motion.div)`
  display: flex;
  align-items:center;
  h3{
    color:#353535;
    margin:1rem;
  }
 
  
`

export default ContactUs;