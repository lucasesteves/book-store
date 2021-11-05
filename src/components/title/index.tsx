import React from "react";
import * as S from "./styles";
import * as T from "./types";

const Title: React.FC<T.TitleProps> = ({
  children,
  align = "left",
  color,
  ...props
}: T.TitleProps) => {
  return (
    <S.Title align={align} color={color} {...props}>
      {children}
    </S.Title>
  );
};

export default Title;
