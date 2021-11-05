import styled from "styled-components";
import * as T from "./types";

export const Title = styled.p<T.TitleProps>`
  font: var(--headline2);
  color: ${({ theme, color }) => color && theme.colors[color]};
  text-align: ${({ align }) => align};
`;
