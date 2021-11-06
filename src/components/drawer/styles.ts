import styled from "styled-components";
import * as T from "./types";
import { Title as TitleComp, Input as InputComp } from "~/components";
import { FontAwesomeIcon as FontAwesomeIconComp } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div<T.DrawerProps>`
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  width: ${({ size }) => (size === "large" ? "100%" : "200px")};
  padding: 14px;
  border-right: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 32px;
  margin-left: 10px;
`;

export const Title = styled(TitleComp)`
  color: ${({ theme }) => theme.colors.white};
`;

export const Menu = styled.div`
  display: flex;
  height: calc(100vh - 30px - 68px - 60px - 59px);
  flex-direction: column;
`;

export const MenuItem = styled.button<{ selected?: boolean }>`
  font: var(--title);
  outline: none;
  border: none;
  text-align: left;
  color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.white};
  background: ${({ theme, selected }) =>
    selected ? theme.colors.white : "transparent"};
  border-radius: 12px;
  padding: 10px 0 10px 10px;
  width: 100%;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.white};
    /* border-radius: 12px; */
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

  @media (max-width: 600px) {
    display: none;
  }
`;

export const FontAwesomeIcon = styled(FontAwesomeIconComp)`
  margin-right: 12px;
`;

export const FontAwesomeIconBack = styled(FontAwesomeIconComp)`
  display: none;
  @media (max-width: 600px) {
    display: block;
    margin-right: 12px;
  }
`;
