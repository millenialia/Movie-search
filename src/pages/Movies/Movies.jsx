import { useEffect, useState, Suspense } from "react";
import { Outlet, useSearchParams, useLocation } from "react-router-dom";
import { fetchMovieByName, fetchAllMovies } from "../../services/api"
import MovieList from "components/MovieList/MovieList";

const Movies = () => {

  const [movies, setMovies] = useState([])

  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("query") ?? ""
  const searchGenre = searchParams.get("genre") ?? ""

  const location = useLocation();

  useEffect(() => {


    const fetchMovies = async () => {
      try {
        const { results } = await fetchMovieByName(searchQuery)
        setMovies(results)
      } catch (error) {
        console.log(error);
      }
    }

    const fetchMoviesByGenre = async () => {
      try {
        const {results} = await fetchAllMovies(searchGenre)
        setMovies(results)
      } catch (error) {
        console.log(error);
      }
        }

  if (searchQuery !== '') {
    fetchMovies()
  } else if (searchGenre !== '') {
    fetchMoviesByGenre()
  }
  }, [searchParams, searchQuery, searchGenre])




  return (
    <div>

      <MovieList
          movies={movies}
          searchQuery={searchQuery}
          location={location} />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
    </div>
  )
}

export default Movies;
