import styled from "styled-components";




export const List = styled.ul`

padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
column-gap: 50px;
row-gap: 30px;
justify-content: center;
> li{
  width: 120px;

  >a{
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
  color: white;

  }


}

`

export const Button = styled.a`
cursor: pointer;
  display: block;
  padding: 8px 10px;
  text-align: center;
  text-transform: uppercase;
  border: 1px #537FE7 solid;
  border-image: linear-gradient(#537FE7 0%, rgb(240, 46, 170) 100%);
  border-image-slice: 1 1 1 1;
  color: transparent;
  transition: background-image 3s ease-out;

  &:hover{
    background-image: linear-gradient(#537FE7 0%, rgb(240, 46, 170) 100%);
  }

`

