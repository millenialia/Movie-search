import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Heading = styled.h2`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 24px;
`;

export const HeaderTopRated = styled.div`
  width: 750px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TopRatedList = styled.ul`
list-style: none;
margin: 20px 0;
display: flex;
flex-direction: column;
gap: 15px;
height: 600px;
overflow: auto;
background-color: rgba(255, 255, 255, 0.05);
  &::-webkit-scrollbar {
        display: none; }
    }
`;
export const Item = styled.li`
  width: 750px;
  height: 185px;
  position: relative;

  > a {
    text-decoration: none;
    color: white;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 10px;
      border-bottom: .5px solid rgba(255, 255, 255, 0.6);

      >img{
          width: auto;
          height: 180px;
          transition: transform .3s ease-out;
        }

        >div{
          width: 500px;
          >h3{
            margin-top: 10px;
            text-transform: uppercase;
            font-weight: normal;
            overflow: auto;
            white-space: nowrap;
          }
          >p{
            margin-top: 10px;
            font-size: 20px;
            color: rgba(255, 255, 255, 0.4);
          }
          >p:last-child{
            font-size: 14px;
            color: rgba(255, 255, 255, 0.6);
          }
        }

      &:hover {
        background-image: linear-gradient(
          rgba(83, 127, 231, 0.2) 0%,
          rgba(240, 46, 170, 0.2) 100%
        );
        &:hover img {
          transform: scale(1.05)
        }
      }
    }
  }

`;
export const Likes = styled.span`
  margin-left: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  > svg {
    fill: yellow;
  }
`;
export const StyledReactPaginate = styled(ReactPaginate)`
  cursor: pointer;
  list-style: none;
  display: flex;
  gap: 20px;
  font-size: 24px;
  > .btn {
    padding: 5px;
    &:hover {
      box-shadow:
        rgba(240, 46, 170, 0.5) 0px 5px,
        rgba(240, 46, 170, 0.3) 0px 10px;
    }
  }
  > .page-item-none {
    display: none;
  }
`;
