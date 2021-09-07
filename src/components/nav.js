import react from "react";
import styled from "styled-components";

const Nav = () => {
  return(
    <StyledNav>
      
      <h1><a href="#" id='logo'>Capture</a></h1>
      <ul>
        <li>
          About Us
        </li>
        <li>
          Our Work
        </li>
        <li>
          Contact Us
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