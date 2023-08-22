import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingMovies, fetchCategories, fetchTopRated } from "redux/operations";
import { selectTrendingMovies, selectCategories, selectTopRated, selectTopRatedTotalPages } from "redux/selectors";

import Categories from "components/Categories/Categories";
import { Container, HomeBox } from "./Home.styled";
import HomeSlider from "../../components/HomeSlider/HomeSlider";

import TopRated from "components/TopRated/TopRated";

const Home = () => {

  const [currentPageTopRated, setCurrentPageTopRated] = useState(1)

  const movies = useSelector(selectTrendingMovies)
  const genres = useSelector(selectCategories)
  const topRated = useSelector(selectTopRated)
  const totalPageTopRated = useSelector(selectTopRatedTotalPages)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchTrendingMovies())
    dispatch(fetchCategories())
    dispatch(fetchTopRated(currentPageTopRated))
  }, [dispatch, currentPageTopRated])

  const handlePageChange = (selectedPage) => {
    const chosenPage = selectedPage.selected + 1

    setCurrentPageTopRated(chosenPage);
    console.log(currentPageTopRated);
  };

  return (
    <div>
      <Container>
        <Categories genres={genres} />
        <HomeSlider movies={movies} />
        <HomeBox>
          <TopRated
            topRated={topRated}
            handlePageChange={handlePageChange}
            totalPageTopRated={totalPageTopRated}
            currentPageTopRated={currentPageTopRated}
          ></TopRated>
        </HomeBox>
        </Container>
    </div>
  )
}

export default Home;
