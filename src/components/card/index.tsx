import React from "react";
import * as S from "./styles";
import * as T from "./types";
import BookImg from "~/assets/img/book.jpg";

const Card: React.FC<T.CardProps> = ({
  title,
  description,
  children,
  ...props
}: T.CardProps) => {
  return (
    <S.Wrapper {...props}>
      <S.CardImage src={BookImg} alt={title} />
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardDescription>{description}</S.CardDescription>
      <S.CardAction>{children}</S.CardAction>
    </S.Wrapper>
  );
};

export default Card;
