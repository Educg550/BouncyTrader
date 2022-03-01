import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;

  background-color: ${(props) => props.theme.colors.secondaryBackground};

  padding: 1.5rem 2rem;

  width: 100%;
  max-height: 9.4rem;

  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 5rem;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`;
