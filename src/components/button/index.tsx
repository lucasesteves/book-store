import React from "react";
import * as S from "./styles";
import * as T from "./types";

const Button: React.FC<T.ButtonProps> = ({
  variant,
  color,
  children,
  disabled,
  onClick,
  ...props
}: T.ButtonProps) => {
  return (
    <S.Button
      variant={variant}
      color={color}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </S.Button>
  );
};

export default Button;
