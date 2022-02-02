import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  //margin: 2.125rem;

  justify-content: space-between;
  align-items: center;

  gap: 3.5rem;

  background-color: ${(props) => props.theme.colors.background};
  background-size: cover;

  color: ${(props) => props.theme.colors.text};
`;

export const SimpleContainer = styled.div`
  display: flex;
  flex: 1;

  background: ${(props) => props.theme.colors.secondaryBackground};

  padding: 2rem;
  border-radius: 2.5rem;

  max-width: 50%;
`;
