import styled from "styled-components";

export const SvgBox = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Svg = styled.svg`
width: 24px;
height: 30px;
stroke: white;
fill: white;
&:hover{
  stroke: var(--color-pink);
  fill: var(--color-pink);
}
`;
