import styled from 'styled-components';

export const RecentlyViewedContainer = styled.div`
  margin-left: 20px;
  width: 450px;

`

export const Heading = styled.h2`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 24px;
  padding: 5px 0;
`;

export const RecenltyList = styled.ul`
margin: 20px 0;
display: flex;
flex-direction: column;
gap: 15px;
height: 600px;
overflow: auto;
  &::-webkit-scrollbar {
        display: none; }
    }

`
export const Item = styled.li`
  width: 550px;
  min-height: 150px;
  position: relative;

  > a {
    text-decoration: none;
    color: white;
    >div{
      display: flex;
      padding: 10px 10px;
      background-color: rgba(0, 0, 0, 0.5);
      &:hover {
        background-image: linear-gradient(
          rgba(83, 127, 231, 0.2) 0%,
          rgba(240, 46, 170, 0.2) 100%
        );
      }
    }
  }

  &:before {
    z-index: -1;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    background: url(${props => props.$backgroundUrl}) no-repeat;
    filter: blur(1px) brightness(0.7);
    background-size: cover;
  }

`;
