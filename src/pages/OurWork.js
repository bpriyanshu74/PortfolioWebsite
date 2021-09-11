import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import athlete from '../img/athlete-small.png';
import goodtimes from '../img/goodtimes-small.png';
import racer from '../img/theracer-small.png';
import { motion } from "framer-motion";
import { pageAnimation, imgAnim, fade, lineAnim} from "../animation.js";
import { useScroll } from "../components/useScroll";


const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();

  return (
    <Work variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
      {/* <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Frame4 variants={slider}></Frame4> */}
      <Movie variants={fade} ref={element3} animate={controls3} initial='hidden'>
        <motion.h2 variants={fade}>The Athelete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Link to='/work/the-athlete'>
          <ImgContainer>
            <motion.img variants={imgAnim} src={athlete} alt="the athelete" />
          </ImgContainer>
        </Link>
      </Movie>

      <Movie variants={fade} ref={element} animate={controls} initial='hidden'>
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to='/work/good-times'>
          <ImgContainer>
            <motion.img variants={imgAnim} src={goodtimes} alt="goodtimes" />
          </ImgContainer>
        </Link>
      </Movie>
      <Movie variants={fade} ref={element2} animate={controls2} initial='hidden'>
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to='/work/the-racer'>
          <ImgContainer>
            <motion.img variants={imgAnim} src={racer} alt="the racer" />
          </ImgContainer>
        </Link>
      </Movie>
    </Work>
  )
}

const Work = styled(motion.div)`
  min-height:100vh;
  padding:5rem 10rem;
  @media (max-width:1020px){
    padding:2rem;
  }
`
const Movie = styled(motion.div)`
  padding-bottom:7rem;
  h2{
    padding-bottom:1rem;
  }
  .line{
    height:0.3rem;
    width:100%;
    background: #23d997;
    margin-bottom:2rem;
  }
  img{
    height:70vh;
    width:100%;
    overflow: hidden;
    object-fit: cover;
  }
`
const ImgContainer = styled.div`
  overflow: hidden;
`

// const Frame1 = styled(motion.div)`
//   left:0;
//   top:10%;
//   width:100%;
//   height:100vh;
//   position: fixed;
//   background-color: #cc99ff;
//   z-index:2;
// `
// const Frame2 = styled(Frame1)`
//   background-color: #a9d1f7;
// `
// const Frame3 = styled(Frame1)`
//   background-color: #b4f0a7;
// `
// const Frame4 = styled(Frame1)`
//   background-color: #ffffbf;
// `

export default OurWork;