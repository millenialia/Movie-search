import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

export const HeaderBox = styled.header`
  box-shadow:
    var(--color-pink4) 0px 5px,
    var(--color-pink3) 0px 10px,
    var(--color-pink2) 0px 15px,
    var(--color-pink1) 0px 20px,
    var(--color-pink05) 0px 25px;

  background-color: transparent;
  margin: 10px auto;
  margin-bottom: 50px;
  max-width: 1400px;

`;

export const Link = styled(NavLink)`
  padding: 8px 16px;

  color: black;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20px;
  // color: white;

  &.active {
    >span{
      >svg{
         stroke: var(--color-pink);
          fill: var(--color-pink);
      }
    }

  }
`;

export const Form = styled.form`
display: flex;
align-items: flex-end;
  > input {
    width: 150px;
    padding: 0 0 5px 20px;
    border: none;
    border-bottom: 1px solid white;
    font-size: 18px;
    background-color: transparent;
    outline: none;
  }

  > input:focus {
    border-bottom: .8px solid var(--color-pink);
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const OpenCategories = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 16px;

  @media (min-width: 1200px) {
    display:none;
  }
`
