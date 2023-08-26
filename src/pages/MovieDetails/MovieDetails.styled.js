import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
margin: 0 auto;
max-width: 1200px;
margin-bottom: 40px;
  padding: 0 16px;
`;

export const Heading = styled.h1`
font-weight: 300;
  text-transform: uppercase;
  font-size: 44px;
  margin-bottom: 13px;
  position: relative;
`;
export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  > div:first-child {
    z-index: 100;
    width: 300px;
    height: 450px;
    margin-top: -180px;
    margin-left: 20px;
    position: relative;
    @media (min-width: 768px) {
      margin-top: -150px;
  }
    > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;

export const MovieInfo = styled.div`
> p {
      max-width: 600px;
      margin-bottom: 40px;
      @media (min-width: 768px) {
        min-height: 80px;
  }
    }
`
export const HeadingSecondary = styled.h2`
font-weight: 300;
  width: 200px;
  margin-bottom: 40px;
  text-transform: uppercase;
  box-shadow:
    var(--color-pink3) 0px 5px,
    var(--color-pink2) 0px 10px;
    font-size: 18px;
  @media (min-width: 768px) {
     font-size: 20px;
  }

@media (min-width: 1200px) {
     font-size: 26px;
  }
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
    background-position: start center;

    z-index: -1;

    transform: skewY(2.2deg);
    transform-origin: 0 0;

    -webkit-backface-visibility: hidden;
  }
`;
export const Details = styled.div`
margin: 10px 0 0 20px;

@media (min-width: 768px) {
      margin: 30px 0 0 50px;
  }

`;
export const Year = styled.h2`
  color: #c7c1ba;
  font-size: 24px;

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
margin: 40px 0;
@media (min-width: 768px) {
    margin: 40px 25px 40px 25px;
  }
`;
export const Link = styled(NavLink)`
  cursor: pointer;
  text-transform: uppercase;
  &.active {
    box-shadow: var(--color-pink5) 0px 5px;
  }
`;
