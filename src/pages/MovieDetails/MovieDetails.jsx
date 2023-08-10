import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { fetchMovieDetailsById, fetchSimilarMoviesById } from "../../services/api"
import SimilarSlider from "../../components/SimilarSlider/SimilarSlider"
import { Loader } from "components/Loader/Loader";

import { Heading, MovieContainer, HeadingSecondary, List, Genres, Back, Container, Hero, Details, Year, Likes } from "./MovieDetails.styled";

const MovieDetails = () => {

  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [overview, setOverview] = useState('')
  const [genres, setGenres] = useState([])
  const [poster, setPoster] = useState('')
  const [backdrop, setBackdrop] = useState('')
  const [similarMovies, setSimilarMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const location = useLocation();
  const backPath =  useRef(location.state?.from ?? '/')

const { movieId } = useParams();

  useEffect(() => {

    const fetchMovie = async () => {
    setIsLoading(true);
      try {
        const data = await fetchMovieDetailsById(movieId)
        const title = data.title
        const year = data.release_date.split('-')[0]
        const overview = data.overview
        const genres = data.genres
        const poster = data.poster_path
        const backdrop = data.backdrop_path

        setTitle(title)
        setYear(year)
        setOverview(overview)
        setGenres(genres)
        setBackdrop(backdrop)
        setPoster(poster)
      } catch (error) {
        console.log(error);
      }finally {
        setIsLoading(false)
      }
    }

    const fetchSimilarMovies = async () => {
    setIsLoading(true);
      try {
        const {results} = await fetchSimilarMoviesById(movieId)
        setSimilarMovies(results)
      } catch (error) {
        console.log(error);
      }finally {
        setIsLoading(false)
      }
    }

    fetchMovie()
    fetchSimilarMovies()
  }, [movieId])

  return (

    isLoading ? <Loader /> :
    <div>
      <Container>

          <Back to={backPath.current}>&larr;</Back>

          <Hero $backgroundUrl = {`https://image.tmdb.org/t/p/w500${backdrop}`}>

       <Details>

              <Heading>{title}</Heading>

              <Year>{year}</Year>
         <Likes>109 likes</Likes>

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

            <SimilarSlider movies={similarMovies}
              location={location} />

          </div>
        </MovieContainer>

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
