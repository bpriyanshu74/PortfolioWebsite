import React from "react";
import styled from "styled-components";
import { About, Description} from "../style";

const FaqSection = () => {
  return(
    <Faq>
        <h2>Any Questions? <span>FAQ</span></h2>
        <div className="question">
          <h4>How do I Start?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, voluptates?</p>
          </div>
        </div>
        <div className="faq-line"></div>

        <div className="question">
          <h4>What Products do you offer?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, voluptates?</p>
          </div>
        </div>
        <div className="faq-line"></div>

        <div className="question">
          <h4>Different Payment Methods</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, voluptates?</p>
          </div>
        </div>
        <div className="faq-line"></div>

        <div className="question">
          <h4>Daily Schedule</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, voluptates?</p>
          </div>
        </div>
        <div className="faq-line"></div>
      
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