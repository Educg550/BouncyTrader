import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { Container, SimpleContainer } from "../styles/home";

import { Tabs } from "@mantine/core";

import { AiOutlineCalculator } from "react-icons/ai";
import { VscGraphLine } from "react-icons/vsc";

import Footer from "../components/Footer";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const Home: NextPage = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <Head>
        <title>
          BouncyTrader | PnL calculator based on user's daily operations
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <SimpleContainer>
        <Tabs color="yellow" tabPadding="md">
          <Tabs.Tab
            label="PnL Calculator"
            icon={<AiOutlineCalculator size={36} />}
          >
            CONTEÚDO DA CALCULADORA AQUI
          </Tabs.Tab>
          <Tabs.Tab label="Gráfico" icon={<VscGraphLine size={36} />}>
            CONTEÚDO DO GRÁFICO AQUI (API do TradingView)
          </Tabs.Tab>
          <Tabs.Tab label="N sei kk" icon={<AiOutlineCalculator size={36} />}>
            PODE COLOCAR ALGUMA OUTRA COISA AQ MAS AINDA N SEI OQ GG
          </Tabs.Tab>
        </Tabs>
      </SimpleContainer>

      <Footer />
    </Container>
  );
};

export default Home;
