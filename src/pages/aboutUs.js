import React from "react";
import AboutUsSection from '../components/AboutUsSection.js';
import ServicesSection from '../components/sevicesSection.js';
import FaqSection from "../components/FaqSection.js";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation.js";


const AboutUs = () => {
  return(
    <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit' style={{background:'#1b1b1b'}}>
    <AboutUsSection/>
    <ServicesSection/>
    <FaqSection/>
    </motion.div>
  )
}

export default AboutUs;