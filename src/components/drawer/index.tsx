import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import * as T from "./types";
import {
  faSignOutAlt,
  faBookOpen,
  faPen,
  faBook,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { logoutRequest } from "~/store/login/actions";
import { currentPageRequest, searchBook } from "~/store/dashboard/actions";
import { ApplicationState } from "~/store";

const Drawer: React.FC<T.DrawerProps> = ({
  size = "default",
  onClose,
}: T.DrawerProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { name } = useSelector(({ login }: ApplicationState) => login);
  const { currentPage, search } = useSelector(
    ({ dashboard }: ApplicationState) => dashboard
  );

  const handleClick = (route: string) => {
    dispatch(currentPageRequest(route));
    history.push(`/${route}`);
  };

  return (
    <S.Wrapper size={size}>
      <S.Head>
        <S.FontAwesomeIconBack icon={faArrowLeft} onClick={onClose} />
        <S.Title align="center">{`Books: Hi, ${name}`}</S.Title>
      </S.Head>

      <S.Input
        type="text"
        placeholder="search book"
        value={search}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(searchBook(event.target.value.toLowerCase()));
        }}
      />
      <S.Menu>
        <S.MenuItem
          selected={currentPage === "books"}
          onClick={() => handleClick("books")}
        >
          <S.FontAwesomeIcon icon={faBook} />
          Books
        </S.MenuItem>
        <S.MenuItem
          selected={currentPage === "edit"}
          onClick={() => handleClick("edit")}
        >
          <S.FontAwesomeIcon icon={faPen} />
          Edit Book
        </S.MenuItem>
        <S.MenuItem
          selected={currentPage === "rented-books"}
          onClick={() => handleClick("rented-books")}
        >
          <S.FontAwesomeIcon icon={faBookOpen} />
          Rented Book
        </S.MenuItem>
      </S.Menu>

      <S.Exit>
        <S.MenuItem
          onClick={() => {
            dispatch(logoutRequest());
          }}
        >
          <S.FontAwesomeIcon icon={faSignOutAlt} />
          Sair
        </S.MenuItem>
      </S.Exit>
    </S.Wrapper>
  );
};

export default Drawer;
