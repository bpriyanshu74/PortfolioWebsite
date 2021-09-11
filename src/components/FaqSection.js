import React from "react";
import styled from "styled-components";
import { About } from "../style";
import Toogle from "./toogle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import {fade} from '../animation';

const FaqSection = () => {
  const [element,controls] = useScroll();
  return (
    <Faq variants={fade} ref={element} initial='hidden' animate={controls}>
      <h2>Any Questions? <span>FAQ</span></h2>
      <AnimateSharedLayout>
        <Toogle title='How do I Start?'>


          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, voluptates?</p>
          </div>


        </Toogle>

        <Toogle title='What Products do you offer?'>


          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, voluptates?</p>
          </div>


        </Toogle>

        <Toogle title='Different Payment Methods'>


          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, voluptates?</p>
          </div>


        </Toogle>

        <Toogle title='Daily Schedule'>

          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, voluptates?</p>
          </div>


        </Toogle>
      </AnimateSharedLayout>
    </Faq>
  )
};

const Faq = styled(About)`
  display:block;
  h2{
    padding-bottom: 2rem;
    font-weight:lighter;
  }
  span{
    display:block;
  }
  .faq-line{
    margin:2rem 0rem;
    height:0.2rem;
    background:#cccccc;
    width:100%;
  }
  .question{
    padding:1rem 0rem;
    cursor:pointer;    
  }
  .answer{
    padding:0.7rem 0rem;
    p{
      padding:0.4rem 0rem;
    }
  }
`

export default FaqSection;