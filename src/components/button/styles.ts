import styled from "styled-components";
import * as T from "./types";

export const Button = styled.button<T.ButtonProps>`
  padding: 12px 14px;
  width: 100%;
  background: ${({ variant, color = "primary", theme }) =>
    variant === "outline" ? "transparent" : theme.colors[color]};
  border: ${({ variant, color = "primary", theme }) =>
    variant === "outline" ? `1px solid ${theme.colors[color]}` : "none"};
  color: ${({ variant, color = "primary", theme }) =>
    variant === "outline" ? theme.colors[color] : theme.colors.white};
  border-radius: 12px;
  cursor: pointer;
  font: var(--title);
`;
