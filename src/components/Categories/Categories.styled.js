import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 25px;
  justify-content: center;
  margin-bottom: 20px;
  > li {
    width: 120px;
  }
`;

export const Button = styled.a`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  display: block;
  padding: 5px 6px;
  text-align: center;
  text-transform: uppercase;
  border: 1px var(--color-blue) solid;
  border-image: linear-gradient(var(--color-blue) 0%, rgb(240, 46, 170) 100%);
  border-image-slice: 1 1 1 1;
  background-image: transparent;
  transition: all .3s linear;
  box-shadow: var(--color-pink3) 0px 5px, var(--color-pink1) 0px 10px;



   &:hover {
      transform: scale(1.1);
      box-shadow: var(--color-pink4) 0px 5px, var(--color-pink3) 0px 10px, var(--color-pink2) 0px 15px, var(--color-pink1) 0px 20px, var(--color-pink05) 0px 25px;
      background-image: linear-gradient(var(--color-blue) 0%, rgb(240, 46, 170) 100%);
    }
  }

`;
