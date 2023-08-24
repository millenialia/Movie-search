import { selectRecentlyViewed } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  RecentlyViewedContainer,
  Heading,
  RecenltyList,
  Item,
} from './RecentlyViewed.styled';

export const RecentlyViewed = () => {

  const movies =  useSelector(selectRecentlyViewed)

  return (
    <RecentlyViewedContainer>
      <Heading>Recently Viewed</Heading>
      <RecenltyList>
      {
        movies.map(({ title, id, backdrop }) => {
          return (
            <Item
              key={id}
              $backgroundUrl={`https://image.tmdb.org/t/p/w500${backdrop}`}
            >
              <Link to={`/movies/${id}`}>
                <div>
                  <p>{title}</p>
                </div>
              </Link>
            </Item>
          )
        })
        }
      </RecenltyList>
      </RecentlyViewedContainer>
  )
}
