import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 14px;
  border-radius: 16px;
  width: 250px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 8px rgba(42, 42, 42, 0.05),
    0px 2px 1px rgba(42, 42, 42, 0.05);
`;

export const CardImage = styled.img`
  width: 100%;
  margin: 0 auto;
  height: 150px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const CardTitle = styled.span`
  font: var(--title);
  color: ${({ theme }) => theme.colors.text};
  padding: 12px 0;
`;

export const CardDescription = styled.span`
  font: var(--title);
  color: ${({ theme }) => theme.colors.text};
  padding: 12px 0;
`;

export const CardAction = styled.div`
  display: flex;
  flex-direction: column;
`;
