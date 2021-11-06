import React, { useState } from "react";
import * as S from "./styles";
import * as T from "./types";
import { Drawer } from "~/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { searchBook } from "~/store/dashboard/actions";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "~/store";

const Template: React.FC<T.TemplateProps> = ({ children }: T.TemplateProps) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { search } = useSelector(
    ({ dashboard }: ApplicationState) => dashboard
  );

  return (
    <>
      <S.Header>
        <S.Input
          type="text"
          placeholder="search book"
          value={search}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(searchBook(event.target.value.toLowerCase()));
          }}
        />
        <S.Icon onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faBars} />
        </S.Icon>
      </S.Header>

      <S.MobileDrawer open={open}>
        <Drawer size="large" onClose={() => setOpen(false)} />
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
