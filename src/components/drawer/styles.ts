import styled from "styled-components";
import { Title as TitleComp, Input as InputComp } from "~/components";
import { FontAwesomeIcon as FontAwesomeIconComp } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  width: 200px;
  padding: 14px;
  border-right: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const Title = styled(TitleComp)`
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Menu = styled.div`
  display: flex;
  height: calc(100vh - 30px - 68px - 60px - 59px);
  flex-direction: column;
`;

export const MenuItem = styled.div`
  font: var(--title);
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 0 10px 10px;
  width: 100%;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
    background: #f1f1f1;
    border-radius: 12px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Exit = styled.div`
  display: flex;
  width: 100%;
  padding-top: 12px;
  flex-direction: row;
  align-items: center;
  border-top: 2px solid ${({ theme }) => theme.colors.white};
`;

export const Input = styled(InputComp)`
  margin-bottom: 12px;
`;

export const FontAwesomeIcon = styled(FontAwesomeIconComp)`
  margin-right: 12px;
`;
