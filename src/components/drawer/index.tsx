import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styles";
import {
  faSignOutAlt,
  faBookOpen,
  faPen,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const Drawer: React.FC = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  return (
    <S.Wrapper>
      <S.Title align="center">Books</S.Title>

      <S.Input
        type="text"
        placeholder="search book"
        value={search}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(event.target.value)
        }
      />
      <S.Menu>
        <S.MenuItem onClick={() => history.push("/books")}>
          <S.FontAwesomeIcon icon={faBook} />
          Books
        </S.MenuItem>
        <S.MenuItem onClick={() => history.push("/edit")}>
          <S.FontAwesomeIcon icon={faPen} />
          Edit Book
        </S.MenuItem>
        <S.MenuItem onClick={() => history.push("/rented-books")}>
          <S.FontAwesomeIcon icon={faBookOpen} />
          Rented Book
        </S.MenuItem>
      </S.Menu>

      <S.Exit>
        <S.MenuItem onClick={() => history.push("/")}>
          <S.FontAwesomeIcon icon={faSignOutAlt} />
          Sair
        </S.MenuItem>
      </S.Exit>
    </S.Wrapper>
  );
};

export default Drawer;
