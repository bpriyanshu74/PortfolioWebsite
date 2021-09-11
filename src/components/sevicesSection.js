import React from "react";
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import { About, Description, Image } from "../style";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import {fade} from '../animation';


const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services ref={element} initial='hidden' animate={controls} variants={fade}>
      <Description>
        <h2>High <span>quality</span> service.</h2>

        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
              
            </div>
            <p>Lorem Ipsum is simply dummy text.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
              
            </div>
            <p>Lorem Ipsum is simply dummy text.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
              
            </div>
            <p>Lorem Ipsum is simply dummy text.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={teamwork} alt="team" />
              <h3>Teamwork</h3>              
            </div>
            <p>Lorem Ipsum is simply dummy text.</p>
          </Card>
        </Cards>
      </Description>
      <Image >
        <img src={home2} alt="camera services"></img>
      </Image>
    </Services>
  )
};

const Services = styled(About)`
  
  h2{
    padding-bottom:5rem;
  }
  p{
    width:70%;
    padding:1rem 0rem 2rem 0rem;
  }
  @media (max-width:1020px){
    margin:3rem 0rem;
  }
  
`
const Cards = styled.div`
/* margin-top:5rem; */
  display:flex;
  flex-wrap:wrap;
  @media (max-width:1020px){
    justify-content:center;
    margin:2rem 0rem;
  }
  
`
const Card = styled.div`

  flex-basis:15rem;
  .icon{
    display:flex;
    align-items:center;
  }
  h3{
    background-color:white;
    color:black;
    padding:0.5rem;
    margin-left:0.8rem;
    font-size:0.9rem;
  }
  
`

export default ServicesSection;