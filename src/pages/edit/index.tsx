import React, { useState } from "react";
import * as S from "./styles";
import { Modal } from "~/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const mock = [
  {
    title: "Titulo1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursu",
  },
];

const Create: React.FC = () => {
  const [modal, setModal] = useState({
    add: false,
    edit: false,
    remove: false,
  });
  const [form, setForm] = useState({ title: "", description: "" });

  return (
    <S.Wrapper>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <S.Card
          key={item}
          title={mock[0].title}
          description={mock[0].description}
        >
          <S.Button
            color="info"
            onClick={() => setModal({ ...modal, edit: true })}
          >
            Edit
          </S.Button>
          <S.Button
            variant="outline"
            color="error"
            onClick={() => setModal({ ...modal, remove: true })}
          >
            Delete
          </S.Button>
        </S.Card>
      ))}

      <S.AddButton onClick={() => setModal({ ...modal, add: true })}>
        <FontAwesomeIcon icon={faPlus} />
      </S.AddButton>

      <Modal
        open={modal.add || modal.edit}
        title={modal.add ? "Add Book" : "Edit Book"}
        onClose={() => setModal({ ...modal, add: false, edit: false })}
      >
        <S.Input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, title: event.target.value })
          }
        />

        <S.Input
          type="text"
          placeholder="Description"
          value={form.description}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, description: event.target.value })
          }
        />

        <S.Button
          onClick={() => setModal({ ...modal, add: false, edit: false })}
        >
          Save
        </S.Button>
      </Modal>

      <Modal
        open={modal.remove}
        title="Remove book"
        onClose={() => setModal({ ...modal, remove: false })}
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
          <S.Button
            color="error"
            onClick={() => setModal({ ...modal, remove: false })}
          >
            Confirm
          </S.Button>
        </S.ErrorContent>
      </Modal>
    </S.Wrapper>
  );
};

export default Create;
