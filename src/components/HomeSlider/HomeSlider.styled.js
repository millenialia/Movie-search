import styled from "styled-components";


export const Item = styled.div`

  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  >a{
  width: 200px;
  text-decoration: none;
  color: white;
  text-transform: uppercase;

  >img{
    width: 200px;
    height: 300px;
    transition: transform .3s linear;
    &:hover{
      transform: scale(1.03);
    }
    +p{
      overflow: auto;
      white-space: nowrap;
      &::-webkit-scrollbar {
        display: none; }
    }
  }

`
