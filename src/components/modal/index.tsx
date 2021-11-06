import React from "react";
import * as S from "./styles";
import * as T from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal: React.FC<T.ModalProps> = ({
  open,
  title,
  onClose,
  size = "default",
  children,
  ...props
}: T.ModalProps) => {
  return (
    <S.Wrapper open={open} {...props}>
      <S.Content size={size}>
        <S.HeadContent hasTitle={!!title}>
          <S.Title>{title}</S.Title>
          <S.Icon onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </S.Icon>
        </S.HeadContent>
        {children}
      </S.Content>
    </S.Wrapper>
  );
};

export default Modal;
