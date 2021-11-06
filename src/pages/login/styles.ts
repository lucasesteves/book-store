import styled from "styled-components";
import {
  Input as InputComp,
  Button as ButtonComp,
  Title as TitleComp,
} from "~/components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 400px;
  height: 400px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 3px 8px rgba(42, 42, 42, 0.05),
    0px 2px 1px rgba(42, 42, 42, 0.05);

  @media (max-width: 600px) {
    background: none;
    box-shadow: none;

    button {
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.primary};
    }

    p {
      text-align: center;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Title = styled(TitleComp)`
  font: var(--headline);
  margin-bottom: 32px;
`;

export const Input = styled(InputComp)`
  margin-bottom: 16px;
`;

export const Button = styled(ButtonComp)``;
