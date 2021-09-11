import { createGlobalStyle } from "styled-components";

const GlobalStyle  = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    @media (max-width:1700px){
      font-size: 75%;
  }
  }
  body{
    font-family:'Lato', sans-serif;
  }
  button{
    font-family:'Lato', sans-serif;
    font-weight: bold;
    font-size:1.1.rem;
    padding:1rem 2rem;
    background: transparent;
    transition: all 0.5s ease;
    color:white;
    cursor: pointer;
    border:3px solid #23d997;
    &:hover{
      background: #23d997;
      color:white;
    }
  }
    h2{
      font-weight: normal;
      font-size:2.5rem;
    }
    h3{
      color:white;
    }
    h4{
      font-weight: bold;
      font-size:1.3rem;
    }
    span{
      font-weight: bold;
      color:#23d997;
    }
    a{
      font-size: 1.1rem;
    }
    p{
      font-size: 1.1rem;
      padding: 3rem 0rem;
      color:#ccc;
      line-height: 150%;
    }

  
`

export default GlobalStyle;