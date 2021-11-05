import styled from "styled-components";
import * as T from "./types";

export const Input = styled.input<T.color>`
  width: 100%;
  padding: 12px 16px;
  font: var(--title);
  border-radius: 12px;
  outline: none;
  border: 2px solid ${({ theme, color }) => color && theme.colors[color]};
`;
