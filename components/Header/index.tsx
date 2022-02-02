import React, { useContext } from "react";

import { Container, Logo, IconBox } from "./styles";
import { ActionIcon } from "@mantine/core";

import { ThemeContext } from "styled-components";
import { StackContext } from "../../pages/_app";

import { BsSun, BsMoon } from "react-icons/bs";

export const Header: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);

  const { toggleTheme } = useContext(StackContext);

  return (
    <Container>
      <Logo
        src={title === "dark" ? "images/logo.png" : "images/lightLogo.png"}
      />

      <IconBox>
        <img src="images/github.png" height={50} />
        <ActionIcon
          onClick={() => {
            toggleTheme();
          }}
          variant="outline"
          title="Toggle color theme"
          color={colors.primary}
        >
          {title === "dark" ? (
            <BsSun size={22} color={colors.primary} />
          ) : (
            <BsMoon size={22} color={colors.primary} />
          )}
        </ActionIcon>
      </IconBox>
    </Container>
  );
};
