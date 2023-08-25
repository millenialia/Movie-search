import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Heading = styled.h1`
  font-weight: 300;
  text-transform: uppercase;
  // color: white;
  font-size: 44px;
  margin-bottom: 13px;
  position: relative;
`;
export const MovieContainer = styled.div`
  display: flex;
  gap: 30px;

  > div:first-child {
    z-index: 10000000;
    width: 300px;
    height: 450px;
    margin-top: -150px;
    margin-left: 20px;
    position: relative;
    > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    >button{
      position: absolute;
      top: 0;
      right: 0;
    }

  }
`;

export const MovieInfo = styled.div`
> p {
      width: 600px;
      margin-bottom: 40px;
      min-height: 80px;
    }
`
export const HeadingSecondary = styled.h2`
  font-weight: 300;
  font-size: 26px;
  width: 200px;
  margin-bottom: 40px;
  text-transform: uppercase;
  box-shadow:
    var(--color-pink3) 0px 5px,
    var(--color-pink2) 0px 10px;
`;
export const Genres = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  padding: 0;
  align-items: flex-start;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  font-size: 20px;
  gap: 10px;
  padding: 0 25px;
`;

export const Back = styled(NavLink)`
  // color: white;
  font-size: 35px;

  transition: all 0.3s linear;
  &:hover {
    color: var(--color-blue);
  }
`;

export const Hero = styled.div`
  height: 342px;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: -55px;
    left: 0;

    background: url(${props => props.$backgroundUrl}) no-repeat;
    filter: blur(3px) brightness(50%);
    background-size: cover;

    z-index: -1;

    transform: skewY(2.2deg);
    transform-origin: 0 0;

    //chrome antialias fix
    -webkit-backface-visibility: hidden;
  }
`;
export const Details = styled.div`
  margin: 30px 0 0 50px;
`;
export const Year = styled.h2`
  color: #c7c1ba;
  font-size: 23px;
  font-weight: 300;
  margin-bottom: 15px;
  margin-left: 15px;
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
export const SimilarMoviesContainer = styled.div`
  padding: 0 25px;
  margin-top: 40px;
`;
export const Link = styled(NavLink)`
  cursor: pointer;

  // color: white;
  text-transform: uppercase;
  &.active {
    box-shadow: var(--color-pink5) 0px 5px;
  }
`;

export const AddRemoveWatchList = styled.button`
background: rgba(0,0,0,0.8);
border: none;
cursor: pointer;
z-index: 10000000000000000000000000;
`
