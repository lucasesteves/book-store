import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { Loading, Modal, Title } from "~/components";
import BookImg from "~/assets/img/book.jpg";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "~/store";
import { MOCK_DATA } from "~/store/dashboard/types";
import {
  addRentBook,
  removeRentBook,
  loadingRequest,
} from "~/store/dashboard/actions";
import { DEFAULT_ITEM, timeout } from "~/utils";

const Books: React.FC = () => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState<MOCK_DATA>(DEFAULT_ITEM);
  const [list, setList] = useState<MOCK_DATA[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const { loading, books, search } = useSelector(
    ({ dashboard }: ApplicationState) => dashboard
  );

  useEffect(() => {
    const searchFilter = books.filter(
      (item) => item.title.toLowerCase().indexOf(search) > -1
    );
    setList(searchFilter);
  }, [search]);

  useEffect(() => {
    setList(books);
  }, [books]);

  return (
    <S.Wrapper>
      {books.length > 0 ? (
        list.map((item) => (
          <S.Card
            key={item.id}
            title={item.title}
            description={item.description}
          >
            <S.Button
              variant="outline"
              onClick={() => {
                setSelect(item);
                setModal(true);
              }}
            >
              Detail
            </S.Button>
            <S.Button
              color={item.status !== "avaliable" ? "info" : "primary"}
              onClick={() => {
                dispatch(loadingRequest());
                setSelect(item);
                timeout(() => {
                  dispatch(
                    item.status === "avaliable"
                      ? addRentBook({ ...item, status: "unavaliable" })
                      : removeRentBook({ ...item, status: "avaliable" })
                  );
                  setModal(false);
                });
              }}
            >
              {loading && select.id === item.id ? (
                <Loading />
              ) : item.status === "avaliable" ? (
                "Rent"
              ) : (
                "Give back"
              )}
            </S.Button>
          </S.Card>
        ))
      ) : (
        <Title>There´re no books to show</Title>
      )}

      <Modal
        open={modal}
        title={select.title}
        onClose={() => setModal(false)}
        size="large"
      >
        <S.ModalContent>
          <S.Image src={BookImg} alt={select.title} />
          <S.Title>{select.description}</S.Title>
        </S.ModalContent>
        <S.ModalButton
          color={select.status !== "avaliable" ? "info" : "primary"}
          onClick={() => {
            dispatch(loadingRequest());
            timeout(() => {
              dispatch(
                select.status === "avaliable"
                  ? addRentBook({ ...select, status: "unavaliable" })
                  : removeRentBook({ ...select, status: "avaliable" })
              );
              setModal(false);
            });
          }}
        >
          {loading ? (
            <Loading />
          ) : select.status === "avaliable" ? (
            "Rent"
          ) : (
            "Give back"
          )}
        </S.ModalButton>
      </Modal>
    </S.Wrapper>
  );
};

export default Books;
