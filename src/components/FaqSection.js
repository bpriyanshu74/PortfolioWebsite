import React from "react";

const FaqSection = () => {
  return(
    <div className='faq'>
        <h2>Any Questions? <span>FAQ</span></h2>
        <div className="question">
          <h3>How do I Start?</h3>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, voluptates?</p>
          </div>
        </div>

        <div className="question">
          <h3>What Products do you offer?</h3>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, voluptates?</p>
          </div>
        </div>

        <div className="question">
          <h3>Different Payment Methods</h3>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, voluptates?</p>
          </div>
        </div>

        <div className="question">
          <h3>Daily Schedule</h3>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, voluptates?</p>
          </div>
        </div>
      
    </div>
  )
};

export default FaqSection;