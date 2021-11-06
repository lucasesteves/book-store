import styled from "styled-components";
import {
  Card as CardComp,
  Button as ButtonComp,
  Title as TitleComp,
} from "~/components";

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

export const Button = styled(ButtonComp)`
  margin-bottom: 12px;
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ModalButton = styled(ButtonComp)`
  width: 300px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Title = styled(TitleComp)`
  margin: 24px 0%;
  font: var(--title-light);
`;

export const Image = styled.img`
  width: 300px;
  display: flex;
  justify-content: center;
  height: auto;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
