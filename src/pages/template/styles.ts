import styled from "styled-components";
import { Title as TitleComp } from "~/components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 600px) {
    display: initial;
  }
`;

export const Header = styled.div`
  height: 60px;
  background: ${({ theme }) => theme.colors.primary};
  display: none;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 28px;
    box-shadow: 0px 3px 8px rgba(42, 42, 42, 0.05),
      0px 2px 1px rgba(42, 42, 42, 0.05);
  }
`;

export const Icon = styled.div`
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 22px;
  left: 28px;
  cursor: pointer;
`;

export const Container = styled.div`
  width: calc(100vw - 200px);
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const DrawerContainer = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const MobileDrawer = styled.div<{ open: boolean }>`
  height: 100%;
  width: ${({ open }) => (open ? "100%" : "0")};
  background: ${({ theme }) => theme.colors.darkOpacity};
  position: fixed;
  z-index: 300;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const Title = styled(TitleComp)`
  color: ${({ theme }) => theme.colors.white};
`;
