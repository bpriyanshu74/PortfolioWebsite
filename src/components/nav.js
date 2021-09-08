import react from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>

      <h1><Link to='/'>Capture</Link></h1>
      <ul>
        <li>
          <Link to='/'>
            About Us
          </Link>
        </li>
        <li>
          <Link to='/work'>
            Our Work
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            Contact Us
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  height: 10vh;
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

    #logo{
      font-weight: lighter;
      font-family: "Lobster";
      font-size: 1.3rem;
    }
  
`

export default Nav;