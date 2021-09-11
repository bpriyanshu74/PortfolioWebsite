import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const {pathname} = useLocation();
  return (
    <StyledNav>

      <h1><Link to='/' id='logo'>Capture</Link></h1>
      <ul>
        <li>
          <Link to='/'>
            1. About Us
            <Line transition={{duration:0.5}} initial={{width:'0%'}} animate={{width: pathname==='/' ? '50%': '0%'}}/>
          </Link>
        </li>
        <li>
          <Link to='/work'>
            2. Our Work
            <Line transition={{duration:0.5}} initial={{width:'0%'}} animate={{width: pathname==='/work' ? '50%': '0%'}}/>
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            3. Contact Us
            <Line transition={{duration:0.5}} initial={{width:'0%'}} animate={{width: pathname==='/contact' ? '50%': '0%'}}/>
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #282828;
  margin:auto;
  padding:1rem 10rem;
    a{
      color:white;
      text-decoration: none;
    }
  
    ul{
    display: flex;
    align-items: center;
    justify-content: center;
    }

    ul li{
    list-style-type:none;
    color:white;
    padding-left:5rem;
    position: relative;
    }
    ul li a {
      font-size:0.9rem;
    }

    #logo{
      font-weight: lighter;
      font-family: 'lobster';
      font-size: 1.3rem;
    }

    @media (max-width:1020px){      
      flex-direction: column;
      padding:1rem 0rem;
      #logo{
        display: inline-block;
           margin:1rem 0rem;    
      }
     ul{ 
       justify-content: space-around;
       width:100%;
       padding:1rem 0rem;
       li{
         padding:0;
       }
      }
    }
  
`;

const Line = styled(motion.div)`
  bottom:-80%;
  left:50%;
  height:0.2rem;
  background:#27d997;
  width:100%;
  position:absolute;
  @media (max-width:1020px){
    left:0%;
  }
`

export default Nav;