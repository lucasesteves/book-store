import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "~/store";
import { removeRentBook, loadingRequest } from "~/store/dashboard/actions";
import { Loading, Title } from "~/components";
import { MOCK_DATA } from "~/store/dashboard/types";
import { DEFAULT_ITEM, timeout } from "~/utils";

const RentedBooks: React.FC = () => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState<MOCK_DATA>(DEFAULT_ITEM);
  const [list, setList] = useState<MOCK_DATA[]>([]);
  const { loading, rentedBooks, search } = useSelector(
    ({ dashboard }: ApplicationState) => dashboard
  );

  useEffect(() => {
    const searchFilter = rentedBooks.filter(
      (item) => item.title.toLowerCase().indexOf(search) > -1
    );
    setList(searchFilter);
  }, [search]);

  useEffect(() => {
    setList(rentedBooks);
  }, [rentedBooks]);

  return (
    <S.Wrapper>
      {rentedBooks.length > 0 ? (
        list.map((item) => (
          <S.Card
            key={item.id}
            title={item.title}
            description={item.description}
          >
            <S.Button
              data-testid="button-back"
              onClick={() => {
                setSelect(item);
                dispatch(loadingRequest());
                timeout(() => {
                  dispatch(removeRentBook({ ...item, status: "avaliable" }));
                });
              }}
            >
              {loading && select.id === item.id ? <Loading /> : "Give back"}
            </S.Button>
          </S.Card>
        ))
      ) : (
        <Title>You don´t have books to show</Title>
      )}
    </S.Wrapper>
  );
};

export default RentedBooks;
