import { useEffect, useState, Suspense } from "react";
import { Outlet, useSearchParams, useLocation } from "react-router-dom";
import { fetchMovieByName, fetchAllMovies } from "../../services/api"
import { Loader } from "components/Loader/Loader";
import MovieList from "components/MovieList/MovieList";

const Movies = () => {

  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("query") ?? ""
  const searchGenre = searchParams.get("genre") ?? ""

  const location = useLocation();

  useEffect(() => {


    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const {results} = await fetchMovieByName(searchQuery, currentPage)
        setMovies(results)
        setTotalPages(500)
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false)
      }
    }

    const fetchMoviesByGenre = async () => {
      setIsLoading(true);
      try {
        const {results} = await fetchAllMovies(searchGenre, currentPage)
        setMovies(results)
        setTotalPages(500)
      } catch (error) {
        console.log(error);
      }finally {
        setIsLoading(false)
      }
        }

  if (searchQuery !== '') {
    fetchMovies()
  } else if (searchGenre !== '') {
    fetchMoviesByGenre()
  }
  }, [searchParams, searchQuery, searchGenre, currentPage])

  const handlePageChange = (selectedPage) => {
    const chosenPage = selectedPage.selected + 1
    setCurrentPage(chosenPage)
  };


  return (
    isLoading ? <Loader /> :
    <div>

      <MovieList
        movies={movies}
        searchQuery={searchQuery}
        location={location}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
        currentPage={currentPage}
      />

      <Suspense fallback={<Loader/>}>
        <Outlet />
        </Suspense>
    </div>
  )
}

export default Movies;
