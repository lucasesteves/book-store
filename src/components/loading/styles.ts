import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  animation: ${animation} 1.5s infinite;

  color: ${({ theme }) => theme.colors.white};
`;
