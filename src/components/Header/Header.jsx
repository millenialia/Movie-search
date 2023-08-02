import { Container, Link, HeaderBox, Form } from "./Header.styled";
import { useSearchParams } from "react-router-dom";

export const Header = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("query") ?? ""

  const onSubmit = (e) => {
    e.preventDefault()
    const query = e.target.query.value
    setSearchParams({query})
    // setQuery(query)
    e.target.reset()
  }

  return (
    <HeaderBox>
      <Container>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>

        <Form action="movie-search" onSubmit={onSubmit}>
        <input type="text" name="query"/>
        <button type="submit">Search</button>
        </Form>

      </Container>
      </HeaderBox>
  )

}
