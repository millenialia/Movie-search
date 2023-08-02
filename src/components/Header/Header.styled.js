import styled from "styled-components";
import { NavLink } from "react-router-dom";





export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBox = styled.header`

  padding: 25px 0;
  border-radius: 50px;
  box-shadow: 0px 0px 10px #537FE7;
  background-color: transperent;
  margin:16px auto;

  max-width: 1400px;

  > nav {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;
  }
`;


export const Link = styled(NavLink)`
  padding: 8px 16px;

  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20px;
  color: white;

  &.active {
    color: #537FE7;
  }
`

export const Form = styled.form`


>input{
  width: 200px;
  height: 40px;
  padding-left: 40px;
  border: none;
  border-bottom: 2px solid white;
  font-size: 20px;
  color: white;
  background-color: transparent;
  outline: transparent;

}

>input:focus{
  border: 2px solid white;
}

>button{
   width: 150px;
  height: 40px;
  font-size: 20px;
  color: white;
  background-color: transparent;
border: none;
cursor: pointer;
}
`

