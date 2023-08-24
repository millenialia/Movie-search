import { Link } from 'react-router-dom';
import {
  TopRatedList,
  Item,
  Likes,
  Heading,
  StyledReactPaginate,
  HeaderTopRated,
} from './TopRated.styled';

const TopRated = ({
  topRated,
  totalPageTopRated,
  handlePageChange,
  currentPageTopRated,
}) => {
  return (
    <div>
      <HeaderTopRated>
        <Heading>Top rated</Heading>
        <StyledReactPaginate
          activeClassName="active"
          pageClassName="page-item-none"
          breakClassName="page-item-none"
          previousLabel="<"
          nextLabel=">"
          previousClassName="btn"
          nextClassName="btn"
          pageCount={totalPageTopRated}
          onPageChange={handlePageChange}
          forcePage={currentPageTopRated - 1}
        />
      </HeaderTopRated>
      <TopRatedList>
        {topRated.map(({ title, id, poster_path, vote_average, release_date, overview }) => {
          return (
            <Item key={id}>
              <Link to={`/movies/${id}`}>
                <div>
                  {poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt="poster"
                  />
                ) : (
                  <img
                    src={
                      'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
                    }
                    alt="profile"
                  />
                  )}
                  <div>
                    <h3>{title}</h3>
                    <p>{release_date.split('-')[0]}</p>
                    <p>{overview}</p>
                  </div>
                  <Likes>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                    </svg>
                    {vote_average}
                  </Likes>
                </div>
              </Link>
            </Item>
          );
        })}
      </TopRatedList>
    </div>
  );
};

export default TopRated;
