
import { fetchTrendingMovies, fetchCategories } from "../../services/api"
import { useEffect, useState } from "react";
import Categories from "components/Categories/Categories";
import { Heading, Container } from "./Home.styled";
import HomeSlider from "../../components/HomeSlider/HomeSlider";




const Home = () => {

  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])


  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const { genres } = await fetchCategories()
        setGenres(genres)
      } catch (error) {
        console.log(error);
      }
    }

    const fetchMovies = async () => {
      try {
        const {results} = await fetchTrendingMovies()

        setMovies(results)
      } catch (error) {
        console.log(error);
      }
    }

    fetchGenres()
    fetchMovies()
  }, []

  )

  return (
    <div>
      <Container>
        <Heading>Trending today</Heading>
        <HomeSlider movies={movies} />
        <Categories genres={genres} />
        </Container>
    </div>
  )
}

export default Home;
