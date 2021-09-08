import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import athlete from '../img/athlete-small.png';
import goodtimes from '../img/goodtimes-small.png';
import racer from '../img/theracer-small.png';


const OurWork = () => {
  return(
    <Work>
      <Movie>
        <h2>The Athelete</h2>
        <div className="line"></div>
        <Link>
          <img src={athlete} alt="the athelete" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link>
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link>
          <img src={racer} alt="the racer" />
        </Link>
      </Movie>
    </Work>
  )
}

const Work = styled.div`
  min-height:100vh;
  padding:5rem 10rem;
`
const Movie = styled.div`
  padding-bottom:7rem;
  h2{
    padding-bottom:1rem;
  }
  .line{
    height:0.2rem;
    width:100%;
    background: white;
    margin-bottom:2rem;
  }
  img{
    height:70vh;
    width:100%;
    overflow: hidden;
    object-fit: cover;
  }
`

export default OurWork;