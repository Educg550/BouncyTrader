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
  //background-image: url(/images/background.png);

  color: ${(props) => props.theme.colors.text};
`;

export const Content = styled.div`
  display: flex;
  flex: 1;

  justify-content: center;

  width: 100%;
`;

export const InputContainer = styled.form`
  display: grid;

  grid-template-columns: 50% 50%;

  justify-content: space-between;

  column-gap: 1rem;
  row-gap: 2rem;
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  align-items: center;

  justify-content: center;
`;

export const PrimaryResult = styled.h1`
  color: ${(props) => props.theme.colors.green};
  font-size: 4.5rem;
  width: 100%;
  text-align: center;
  font-family: Poppins;
  font-size: 700;
  margin-top: 0;
`;

export const SecondaryResult = styled.h2`
  color: ${(props) => props.theme.colors.green};
  font-size: 2.25rem;
  width: 100%;
  text-align: center;
  font-family: Poppins;
  font-size: 700;
  margin-top: 0;
`;
