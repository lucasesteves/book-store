import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { Loading, Modal, Title } from "~/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  addBook,
  editBook,
  removeBook,
  loadingRequest,
} from "~/store/dashboard/actions";
import { ApplicationState } from "~/store";
import { MOCK_DATA } from "~/store/dashboard/types";
import { DEFAULT_ITEM, timeout } from "~/utils";

const Create: React.FC = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState({
    add: false,
    edit: false,
    remove: false,
  });
  const [form, setForm] = useState<MOCK_DATA>(DEFAULT_ITEM);
  const [list, setList] = useState<MOCK_DATA[]>([]);
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

  const handleNewBook = () => {
    dispatch(loadingRequest());
    timeout(() => {
      dispatch(
        modal.add
          ? addBook({ ...form, id: uuidv4(), status: "avaliable" })
          : editBook({ ...form })
      );
      setForm(DEFAULT_ITEM);
      setModal({ ...modal, add: false, edit: false });
    });
  };

  const handleRemove = () => {
    dispatch(loadingRequest());
    timeout(() => {
      dispatch(removeBook(form.id));
      setForm(DEFAULT_ITEM);
      setModal({ ...modal, remove: false });
    });
  };

  return (
    <S.Wrapper>
      {books.length > 0 ? (
        list.map((item) => (
          <S.Card
            key={item.id}
            title={item.title}
            description={item.description}
          >
            {item.status === "avaliable" ? (
              <>
                <S.Button
                  color="info"
                  onClick={() => {
                    setForm(item);
                    setModal({ ...modal, edit: true });
                  }}
                >
                  Edit
                </S.Button>
                <S.Button
                  variant="outline"
                  color="error"
                  onClick={() => {
                    setForm(item);
                    setModal({ ...modal, remove: true });
                  }}
                >
                  Delete
                </S.Button>
              </>
            ) : (
              <S.WarningMessage>This book can´t be edited</S.WarningMessage>
            )}
          </S.Card>
        ))
      ) : (
        <Title>No books to show</Title>
      )}

      <S.AddButton
        data-testid="addBook"
        onClick={() => setModal({ ...modal, add: true })}
      >
        <FontAwesomeIcon icon={faPlus} />
      </S.AddButton>

      <Modal
        open={modal.add || modal.edit}
        title={modal.add ? "Add Book" : "Edit Book"}
        onClose={() => {
          setForm(DEFAULT_ITEM);
          setModal({ ...modal, add: false, edit: false });
        }}
      >
        <S.Input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, title: event.target.value })
          }
        />

        <S.Textarea
          placeholder="Description"
          value={form.description}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setForm({ ...form, description: event.target.value })
          }
        />

        <S.Button
          disabled={!form.title || !form.description}
          onClick={handleNewBook}
        >
          {loading ? <Loading /> : modal.add ? "Save" : "Edit"}
        </S.Button>
      </Modal>

      <Modal
        open={modal.remove}
        title="Remove book"
        onClose={() => {
          setForm(DEFAULT_ITEM);
          setModal({ ...modal, remove: false });
        }}
      >
        <S.ErrorMessage>Do you really want delete this book?</S.ErrorMessage>
        <S.ErrorContent>
          <S.Button
            variant="outline"
            color="info"
            onClick={() => setModal({ ...modal, remove: false })}
          >
            Cancel
          </S.Button>
          <S.Button color="error" onClick={handleRemove}>
            {loading ? <Loading /> : "Confirm"}
          </S.Button>
        </S.ErrorContent>
      </Modal>
    </S.Wrapper>
  );
};

export default Create;
