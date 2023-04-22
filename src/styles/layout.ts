import styled from 'styled-components';

export const Container = styled.div`
  max-width: 2000px;
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 90%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 65%;
  }

  @media (min-width: 1025px) {
    width: 50%;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
