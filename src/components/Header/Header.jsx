import { Container, Link, HeaderBox, Form, Navigation, OpenCategories } from './Header.styled';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { WatchListSvg } from '../Svg/WatchList/WatchListSvg'
import { HomeSvg } from '../Svg/Home/HomeSvg'
import { SearchSvg } from '../Svg/Search/Search.jsx'
import { CategoriesSvg } from '../Svg/Categories/CategoriesSvg'
import { useState } from 'react';
import { ModalCategories } from '../ModalCategories/ModalCategories'

export const Header = () => {

  const [inputVisible, setInputVisible] = useState(false)
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();

    if (inputVisible) {
      const query = e.target.query.value.trim();
      if (query === '') {
        setInputVisible(!inputVisible)
        return;
      }
      navigate({
        pathname: '/movies',
        search: `?${createSearchParams({ query })}&${createSearchParams({
          page: 1,
        })}`,
      });
      e.target.reset();
      setInputVisible(!inputVisible)
    } else {
      setInputVisible(!inputVisible)
    }
  };

  const openCategory = () => {
    setIsCategoryOpen(true);
    document.body.classList.add('body-no-scroll');
    };

  const closeCategory = () => {
    setIsCategoryOpen(false);
    document.body.classList.remove('body-no-scroll');
    };

  return (
    <HeaderBox>
      <Container>
        <Navigation>
          <Link to="/" onClick={closeCategory}><HomeSvg/></Link>
          <Link to="/watch-list" onClick={closeCategory}><WatchListSvg/></Link>
          <OpenCategories type='button' onClick={isCategoryOpen? closeCategory : openCategory}><CategoriesSvg/></OpenCategories>
        </Navigation>

        <Form action="movie-search" onSubmit={onSubmit}>
          {inputVisible && <input type="text" name="query" />}
          <button type="submit"><SearchSvg/></button>
        </Form>
      </Container>
      {isCategoryOpen && <ModalCategories closeCategory = {closeCategory} isCategoryOpen = {isCategoryOpen}/>}
    </HeaderBox>
  );
};
