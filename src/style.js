import { motion } from 'framer-motion';
import styled from 'styled-components';

export const About  = styled(motion.div)`
  color:white;
  min-height:90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  background-color: #1b1b1b;
  @media (max-width:1020px){
    display: block;
    padding:2rem;
    text-align:center;
  }
  
`
export const Description = styled.div`
  z-index:2;
  padding-right: 5rem;
  width:100%;
  flex:1;
  h2{
    font-weight: lighter;
  }
  @media (max-width:1020px){
      padding:0;
      button{
        margin:2rem 0rem 4rem 0rem;
      }   
  }
`
export const Image = styled.div`
  flex:1;
  overflow: hidden;
  padding-top:-5rem;
  z-index:2;
  img{
   
    width:100%;
    height: 76vh;
    object-fit: cover;
  }
`
export const Hide = styled.div`
  overflow: hidden;
`