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
  background-image: url(/images/background.png);

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
  width: 70%;
  display: grid;
  grid-template-columns: 45% 45%;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  align-items: center
`;

export const PrimaryResult = styled.h1`
  color: ${(props) => props.theme.colors.green};
  font-size: 4.5rem;
  width: 100%;
  text-align: center;
  font-family: Poppins;
  font-size: 700;
  margin-top: 0;
`

export const SecondaryResult = styled.h2`
  color: ${(props) => props.theme.colors.green};
  font-size: 2.25rem;
  width: 100%;
  text-align: center;
  font-family: Poppins;
  font-size: 700;
  margin-top: 0;
`