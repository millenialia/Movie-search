import { Outlet, useParams, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetailsById, fetchSimilarMovies } from "redux/operations";
import { selectMovieDetails, selectDetailsIsLoading } from "redux/selectors";

import SimilarSlider from "../../components/SimilarSlider/SimilarSlider"
import { Loader } from "components/Loader/Loader";

import { Heading, MovieContainer, HeadingSecondary, List, Genres, Back, Container, Hero, Details, Year, Likes, SimilarMoviesContainer, Link } from "./MovieDetails.styled";

const MovieDetails = () => {

  // const [isLoading, setIsLoading] = useState(false)

  const location = useLocation();
  const backPath = useRef(location.state?.from ?? '/')

  const { movieId } = useParams();

  const isLoading = useSelector(selectDetailsIsLoading)
  const details = useSelector(selectMovieDetails)
  const title = details.title
  const year = details.year
  const overview = details.overview
  const genres = details.genres
  const poster = details.poster
  const backdrop = details.backdrop
  const rating = details.rating
  const similarMovies = details.similarMovies

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovieDetailsById(movieId))
    dispatch(fetchSimilarMovies(movieId))
  },[dispatch, movieId])


  return (

    isLoading ? <Loader /> :
    <div>
      <Container>

          <Back to={backPath.current}>&larr;</Back>

          <Hero $backgroundUrl = {`https://image.tmdb.org/t/p/w500${backdrop}`}>

       <Details>

              <Heading>{title}</Heading>

              <Year>{year}</Year>
              <Likes><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>{rating}</Likes>

            </Details>
            </Hero>



        <MovieContainer>
          {poster ? <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="poster" /> : <img src={'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="poster" />}

          <div>
      <HeadingSecondary>Overview</HeadingSecondary>
      <p>{overview}</p>

      <HeadingSecondary>Genres</HeadingSecondary>
      <Genres>
        {genres.map(({id, name}) =>{
          return (
            <li key={id}>{name}</li>
          )
        })}
            </Genres>


            </div>
          </MovieContainer>

        <SimilarMoviesContainer>
          <SimilarSlider movies={similarMovies} location={location} />
        </SimilarMoviesContainer>

      <List>
        <li>
            <Link to={"cast"}>Cast</Link>
        </li>
        <li>
            <Link to="reviews">Reviews</Link>
        </li>
      </List>

        <Outlet />
        </Container>
    </div>


  )
}

export default MovieDetails;


