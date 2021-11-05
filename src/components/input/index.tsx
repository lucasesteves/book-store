import React from "react";
import * as S from "./styles";
import * as T from "./types";

const Input: React.FC<T.InputProps> = ({
  placeholder,
  value,
  type,
  color = "primary",
  onChange,
  ...props
}: T.InputProps) => {
  return (
    <S.Input
      placeholder={placeholder}
      type={type}
      color={color}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;
