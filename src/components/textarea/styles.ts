import styled from "styled-components";

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  font: var(--title);
  border-radius: 12px;
  outline: none;
  border: 2px solid ${({ theme, color }) => color && theme.colors[color]};
  resize: none;
`;
