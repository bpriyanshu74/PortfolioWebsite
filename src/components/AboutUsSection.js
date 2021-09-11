import React from "react";
import home1 from '../img/home1.png';
import { About, Description, Hide, Image } from "../style";
import { motion } from "framer-motion";
import { titleAnim, imgAnim, fade } from "../animation";
import { Link } from "react-router-dom";
import Wave from "./wave";

const AboutUsSection = () => {

  return (
    <About>
      <Description>
        <Hide>
          <motion.h2 variants={titleAnim}>We work to make</motion.h2>
        </Hide>
        <Hide>
          <motion.h2 variants={titleAnim}>your <span>dreams</span> come <br></br>true.</motion.h2>
        </Hide>

        <motion.p variants={fade}>
          Contact us for any Photography or Videography ideas that you have. We have professionals with amazing skills to help you achieve it.
        </motion.p>
        
        <Link to='/contact'>
          <motion.button variants={fade}>            
            Contact Us            
          </motion.button>
        </Link>
        
      </Description>
      <Image>
        <motion.img variants={imgAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  )
}



export default AboutUsSection;