import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;

  justify-content: space-between;
  align-items: center;

  gap: 2.5rem;

  background-color: ${(props) => props.theme.colors.background};
  background-size: cover;

  color: ${(props) => props.theme.colors.text};
`;

export const SimpleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  align-items: center;

  background: ${(props) => props.theme.colors.secondaryBackground};

  padding: 1rem 0.5rem;
  border-radius: 2.5rem;

  max-width: 50%;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;

  justify-content: center;

  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;

  gap: 1.5rem;
`;
