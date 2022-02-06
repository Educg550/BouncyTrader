import React, { useContext } from "react";

import { Container, Logo, IconBox } from "./styles";
import { ActionIcon } from "@mantine/core";

import { ThemeContext } from "styled-components";
import { StackContext } from "../../pages/_app";

import { BsSun, BsMoon, BsGithub } from "react-icons/bs";

export const Header: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);

  const { toggleTheme } = useContext(StackContext);

  return (
    <Container>
      <Logo
        src={title === "dark" ? "images/logo.png" : "images/lightLogo.png"}
      />

      <IconBox>
        <a href="https://github.com/Educg550/BouncyTrader" target="_blank">
          <BsGithub size={40} />
        </a>

        <ActionIcon
          onClick={() => {
            toggleTheme();
          }}
          variant="transparent"
          title="Toggle color theme"
        >
          {title === "dark" ? (
            <BsSun size={22} color={colors.primary} />
          ) : (
            <BsMoon size={22} color={colors.text} />
          )}
        </ActionIcon>
      </IconBox>
    </Container>
  );
};
