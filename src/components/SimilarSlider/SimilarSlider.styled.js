import styled from 'styled-components';

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

  // color: white;
  font-size: 8px;
  text-transform: uppercase;
  >img{
    width: 80px;
    height: 112px;
    // border-radius: 5px;
  }

`;
export const HeadingSecondary = styled.h2`
font-weight: 300;
  font-size: 26px;
  width: 200px;
  margin-bottom: 40px;
  text-transform: uppercase;
  box-shadow:
    var(--color-pink3) 0px 5px,
    var(--color-pink2) 0px 10px;
`;
