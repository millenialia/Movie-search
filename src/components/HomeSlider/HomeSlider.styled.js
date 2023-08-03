import styled from "styled-components";

export const Item = styled.div`

  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  >a{
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
  color: white;
  >img{
    width: 200px;
    border-radius: 5px;
  }

`
