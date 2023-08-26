import styled from 'styled-components';

export const RecentlyViewedContainer = styled.div`
  max-width: 700px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  @media (min-width: 768px) {
          max-width: 400px;
        }
`;

export const Heading = styled.h2`
font-weight: 300;
  text-transform: uppercase;
  padding: 10px 0;
  font-size: 18px;
  @media (min-width: 768px) {
     font-size: 20px;
  }

@media (min-width: 1200px) {
     font-size: 26px;
  }
`;

export const RecenltyList = styled.ul`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.li`
  min-height: 150px;
  position: relative;
  text-transform: uppercase;

  > a > div {
    display: flex;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    transition: background-image 0.3s ease-out;

    &:hover {
      background-image: linear-gradient(
        var(--color-lightBlue) 0%,
        var(--color-pink2) 100%
      );
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
    background-position: center center;
  }
`;
