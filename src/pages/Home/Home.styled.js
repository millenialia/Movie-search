import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const HomeBox = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
    @media (min-width: 768px) {
          flex-direction: row;
        }
`;

export const CategoriesBox = styled.div`
  @media (max-width: 1200px) {
          display:none;
        }
`
