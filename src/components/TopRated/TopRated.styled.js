import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Heading = styled.h2`
font-weight: 300;
  text-transform: uppercase;
  font-size: 18px;
  @media (min-width: 768px) {
     font-size: 20px;
  }

@media (min-width: 1200px) {
     font-size: 26px;
  }
`;

export const HeaderTopRated = styled.div`
  max-width: 700px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 700px;

  }

  @media (min-width: 1200px) {
    max-width: 750px;
  }
`;

export const TopRatedList = styled.ul`
  max-width: 700px;
  max-height: 600px;
  list-style: none;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: auto;
  &::-webkit-scrollbar {
        display: none; }
  background-color: rgba(255, 255, 255, 0.05);

  @media (min-width: 768px) {
    margin: 20px 0;
    max-width: 700px;
  }

  @media (min-width: 1200px) {
    max-width: 750px;
  }

`;

export const Item = styled.li`
  position: relative;

  > a > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 5px;
    padding: 10px;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.6);

    > img {
      width: 20%;
      height: auto;
      transition: transform 0.3s ease-out;
    }

    > div {
      width: 60%;
      > h3 {
        width: 90%;
        margin-top: 10px;
        text-transform: uppercase;
        font-weight: normal;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
        @media (min-width: 768px) {
          font-size: 18px;
        }

        @media (min-width: 1200px) {
          font-size: 20px;
        }
      }

      > p {
        margin-top: 10px;
        color: rgba(255, 255, 255, 0.4);
      }

      > p:last-child {
        color: rgba(255, 255, 255, 0.6);
        max-height: 50px;
        overflow: auto;
        &::-webkit-scrollbar {
        display: none; }
        font-size: 12px;

        @media (min-width: 1200px) {
          font-size: 14px;
          max-height: 100px;
        }
      }
    }

    &:hover {
      background-image: linear-gradient(
        var(--color-lightBlue) 0%,
        var(--color-pink2) 100%
      );

      > img {
        transform: scale(1.05);
      }
    }
  }
`;

export const Likes = styled.span`
  margin-top: 10px;
  width: 10%;
  display: flex;
  align-items: center;

  gap: 5px;

  > svg {
    fill: yellow;
  }
`;

export const StyledReactPaginate = styled(ReactPaginate)`
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 24px;

  > .btn {
    padding: 5px;

    &:hover {
      box-shadow: var(--color-pink5) 0px 5px, var(--color-pink3) 0px 10px;
    }
  }

  > .page-item-none {
    display: none;
  }
`;
