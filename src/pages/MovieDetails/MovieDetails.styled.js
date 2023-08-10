import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Heading = styled.h1`
  font-weight: 300;
  text-transform: uppercase;
  color: white;
    font-size: 44px;
    margin-bottom: 13px;
    position: relative;
`
export const MovieContainer = styled.div`
margin-top: 20px;
display: flex;
gap: 30px;


>img{
  width: 300px;
  height: 450px;
  margin-top: -150px;
  margin-left: 20px;
  z-index: 1000000000;
      // border-radius: 4px;
}

>div{
  width: 600px;
  >p{
    font-size: 14px;
  }
}
`
export const HeadingSecondary = styled.h2`
font-weight: 300;
`
export const Genres = styled.ul`
list-style: none;
display: flex;
gap: 10px;
padding: 0;
align-items: flex-start;
>li{
  font-size: 14px;
}
`
export const List = styled.ul`
 list-style: none;
display: flex;
font-size: 20px;
gap: 10px;


>li{
  >a{
    text-decoration: none;
    color: #537FE7;
  }
}
`

export const Back = styled(NavLink)`
color: white;
font-size: 35px;
text-decoration: none;
`

export const Hero = styled.div`
  height: 342px;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
  z-index:1;


  &:before{
      content:'';
  width:100%; height:100%;
  position:absolute;
  overflow: hidden;
  top:-55px; left:0;

  background: url(${props => props.$backgroundUrl}) no-repeat;
  filter: blur(3px) brightness(50%);
  background-size: cover;

  z-index:-1;

  transform: skewY(2.2deg);
  transform-origin:0 0;

  //chrome antialias fix
  -webkit-backface-visibility: hidden;
  }
`
export const Details = styled.div`
margin: 30px 0 0 50px;

`
export const Year = styled.h2`
color: #C7C1BA;
    font-size: 23px;
    font-weight: 300;
    margin-bottom: 15px;
`
export const Likes = styled.span`
&:before{
  content: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/icon_like.png");
    position: relative;
    top: 2px;
    padding-right: 7px;
}
`
