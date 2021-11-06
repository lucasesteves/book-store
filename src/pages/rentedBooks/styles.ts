import styled from "styled-components";
import { Card as CardComp, Button as ButtonComp } from "~/components";

export const Wrapper = styled.div`
  padding: 32px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
  overflow: auto;

  @media (max-width: 600px) {
    height: ${({ theme }) => `calc(100vh - ${theme.header.height}px)`};
  }
`;

export const Card = styled(CardComp)`
  margin-right: 12px;
  margin-bottom: 12px;
`;

export const Button = styled(ButtonComp)``;
