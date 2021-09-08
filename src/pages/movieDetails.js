import { React, useEffect, useState } from "react";
import { MovieState } from '../components/movieState';
import { useHistory } from "react-router";
import styled from "styled-components";



const MovieDetails = () => {
  const history = useHistory()
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url])
  console.log(movie);


  return (
    <>
    {movie && (
      <Details>
        <Headline>
          <h2>{movie.title}</h2>
          <img src={movie.mainImg} alt="" />
        </Headline>
        <Awards>
          {
            movie.awards.map((award) => (
              <Award title={award.title} description={award.description} key={award.title}/>
            ))
          }
        </Awards>
        <ImageDisplay>
          <img src={movie.secondaryImg} alt="secondary img" />
        </ImageDisplay>
      </Details>
    )}
    </>
  );
}

const Details = styled.div`
  color:white;
`
const Headline = styled.div`
  min-height:90vh;
  position: relative;
  padding-top:20vh;
  h2{
    position: absolute;
    top:10%;
    margin-left:50%;
    transform: translate(-50%, -10%);
  }
  img{
    width:100%;
    height:90vh;
    object-fit: cover;
  }

`
const Awards = styled.div`
  min-height:80vh;
  padding:5rem 10rem;
  display: flex;
  align-items:center;
  justify-content: space-around;
`
const StyledAward = styled.div`
  
  padding:3rem;
  .line{
    margin:1rem 0rem;
    width:100%;
    height:0.2rem;
    background: #23d997;
  }
  p{
    padding:2rem 0rem;
  }
`

const Award = ({title,description}) =>{
  return(
    <StyledAward>
      <h3>{title}</h3>
      <div className='line'></div>
      <p>{description}</p>
    </StyledAward>
  );
};

const ImageDisplay = styled.div`
  min-height:50vh;
  img{
    height:100vh;
    width:100%;
    object-fit:cover;
  }
`;

export default MovieDetails;