import React from "react";
import * as S from "./styles";
import * as T from "./types";

const Textarea: React.FC<T.TextareaProps> = ({
  value,
  placeholder,
  color = "primary",
  onChange,
  ...props
}: T.TextareaProps) => {
  return (
    <S.Textarea
      rows={5}
      color={color}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
  );
};

export default Textarea;
