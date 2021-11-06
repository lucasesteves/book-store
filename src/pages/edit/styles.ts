import styled from "styled-components";
import {
  Card as CardComp,
  Button as ButtonComp,
  Input as InputComp,
  Textarea as TextareaComp,
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

export const AddButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  bottom: 25px;
  right: 25px;
  z-index: 10;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Input = styled(InputComp)`
  margin-bottom: 14px;
`;

export const Textarea = styled(TextareaComp)`
  margin-bottom: 14px;
`;

export const ErrorMessage = styled.span`
  font: var(--headline2);
  display: flex;
  justify-content: center;
  margin: 28px 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const ErrorContent = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 260px;
  }
`;
