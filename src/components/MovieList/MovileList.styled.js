import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Heading = styled.h1`
font-weight: 300;
  text-transform: uppercase;
`;

export const List = styled.ul`
  list-style: none;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  row-gap: 25px;
  column-gap: 15px;
  justify-content: center;

  > li {
    width: 250px;
    position: relative;

    > a {
      width: 250px;


      // color: white;
      display: flex;
      flex-direction: column;
      gap: 15px;
      > img {
        width: 250px;
        height: 372px;
      }
      >p{
        padding: 2px;
        overflow: auto;
        white-space: nowrap;
        &::-webkit-scrollbar {
        display: none; }
      }
    }
  }
`;

export const StyledReactPaginate = styled(ReactPaginate)`
  list-style: none;
  display: flex;
  gap: 15px;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  // color: white;
  margin: 50px auto;
  cursor: pointer;
  > .active {
    box-shadow:
      var(--color-pink5) 0px 5px,
      var(--color-pink3) 0px 10px;
    padding: 5px;
  }
`;
