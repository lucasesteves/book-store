import React, { useState } from "react";
import * as S from "./styles";
import { Drawer } from "~/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface TemplateProps {
  children: React.ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }: TemplateProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <S.Header>
        <S.Title>Books</S.Title>
        <S.Icon onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faBars} />
        </S.Icon>
      </S.Header>
      <S.MobileDrawer open={open} onClick={() => setOpen(false)}>
        <Drawer />
      </S.MobileDrawer>
      <S.Wrapper>
        <S.DrawerContainer>
          <Drawer />
        </S.DrawerContainer>
        <S.Container>{children}</S.Container>
      </S.Wrapper>
    </>
  );
};

export default Template;
