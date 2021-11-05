import styled from "styled-components";
import * as T from "./types";

export const Wrapper = styled.div<T.ModalProps>`
  display: ${({ open }) => (open ? "flex" : "none")};
  position: fixed;
  z-index: 30;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.darkOpacity};
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  margin: auto;
  padding: 20px;
  border-radius: 14px;
  width: 600px;
  @media screen and (max-width: 600px) {
    width: calc(100vw - 80px);
  }
`;

export const HeadContent = styled.div<{ hasTitle: boolean }>`
  display: flex;
  justify-content: ${({ hasTitle }) =>
    hasTitle ? "space-between" : "flex-end"};
  margin-bottom: 12px;
`;

export const Title = styled.span`
  font: var(--headline2);
  color: ${({ theme }) => theme.colors.text};
`;

export const Icon = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`;
