import styled from 'styled-components';
import Carousel from 'react-multi-carousel';

export const Heading = styled.h1`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 26px;
`;

export const CarouselStyled = styled(Carousel)`

  margin: 20px 0;
`

export const Item = styled.div`


  width: 580px;
  height: 325px;
  position: relative;
  transition: transform .3s linear;
    &:hover{
      transform: scale(1.03);
    }
  >a{
    >div{
      text-decoration: none;
      color: white;
      >img{
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0.9;
        transition: opacity .2s ease-out;
      }
      >h2{
      text-transform: uppercase;
      position: absolute;
      inset: auto auto 15px 15px;
      transition: inset .3s .3s ease-out;
      font-weight: normal;
      overflow: auto;
      white-space: nowrap;
      &::-webkit-scrollbar {
        display: none; }
    }
    >div{
      position: absolute;
      display: flex;
      justify-content: space-between;
      opacity: 0;
      max-width: 95%;
      transition: opacity .3s ease-out;
      inset: auto auto 15px 15px;
      >span{
        display: flex;
        align-items: center;
        gap: 5px;
          > svg {
          fill: yellow;
  }
      }
    }

    &:hover h2 {
    inset: auto auto 220px 30px;
    transition: inset .3s ease-out;
  }

  &:hover div{
    opacity: 1;
    transition: opacity .5s .1s ease-in;
  }

  &:hover img {
    transition: opacity .3s ease-in;
    opacity: 1;
    filter: blur(1px) brightness(0.5)
  }
      }
    }




`;
