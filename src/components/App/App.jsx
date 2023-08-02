import { Route, Routes } from "react-router-dom";
import { Header } from "../Header/Header";
import { Home } from "../../pages/Home/Home"
import { Movies } from "../../pages/Movies/Movies"
import { MovieDetails } from "../../pages/MovieDetails/MovieDetails"
import { Reviews } from "../Reviews/Reviews";
import { Cast } from "../Cast/Cast";
import { Container, Link, Main } from "./App.styled";

export const App = () => {
  return (
    <div>

      <Header/>

      <Container>
      <Main>
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route path="/movies" element={<Movies />}/> */}
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}/>
            <Route path="reviews" element={<Reviews />}/>
          </Route>
        </Routes>
      </Main>
      </Container>
      </div>
  )


};
