import styled from "styled-components";

export const List = styled.ul`

list-style: none;
display: flex;
flex-wrap: wrap;
column-gap: 5px;
row-gap: 10px;
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

