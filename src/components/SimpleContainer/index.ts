import styled from "styled-components";

export const SimpleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  align-items: center;

  background: ${(props) => props.theme.colors.secondaryBackground};

  padding: 1rem 4rem;
  border-radius: 2.5rem;

  max-width: 50%;
`;
