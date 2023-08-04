import styled from "styled-components";

export const Item = styled.div`

  width: 100px;
  display: flex;
  flex-direction: column;
  gap: 2px;

  >a{
  width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
  color: white;
  font-size: 8px;
  >img{
    width: 80px;
    height: 112px;
    border-radius: 5px;
  }

`
export const HeadingSecondary = styled.h2`
font-weight: 300;
`
