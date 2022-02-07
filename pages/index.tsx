import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import {
  Container,
  Content,
  SimpleContainer,
  InputContainer,
  ResultsContainer,
  PrimaryResult,
  SecondaryResult
} from "../styles/home";

import { InputWrapper, NumberInput } from "@mantine/core";

import { Title } from "../components/Title";

import {
  AiOutlineDollar,
  AiOutlinePercentage,
  AiOutlineFieldTime,
  AiOutlineGold,
} from "react-icons/ai";

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

      <Content>
        <SimpleContainer>
          <Title>PnL Calculator</Title>
          <InputContainer>
            <NumberInput
              label="Initial Investment"
              placeholder="(e.g. $10.30)"
              description="Your first amount invested. Much bigger, much better."
              size="md"
              precision={2}
              min={1}
              hideControls={true}
              icon={<AiOutlineDollar size={20} color={colors.text} />}
              required
            />
            <NumberInput
              label="Daily Profit"
              placeholder="(e.g. 3.08%)"
              description="Your desired profit for each day of investing"
              size="md"
              precision={2}
              min={1}
              hideControls={true}
              icon={<AiOutlinePercentage size={20} color={colors.text} />}
              required
            />
            <NumberInput
              label="Time Elapsed"
              placeholder="(e.g. 15 days)"
              description="The time that you want to remain investing"
              size="md"
              precision={2}
              min={1}
              hideControls={true}
              icon={<AiOutlineFieldTime size={20} color={colors.text} />}
              required
            />
            <NumberInput
              label="Mensal Investment"
              placeholder="(e.g. $5.15)"
              description="An amount that you want to invest every month"
              size="md"
              precision={2}
              min={1}
              hideControls={true}
              icon={<AiOutlineGold size={20} color={colors.text} />}
            />
          </InputContainer>
        </SimpleContainer>

        <ResultsContainer>
          <h1>In X days you will have got</h1>
          <PrimaryResult>
            R$ 3.000,00
          </PrimaryResult>

          <h2>In a month</h2>
          <SecondaryResult>
            R$ 2.500,00
          </SecondaryResult>
          <h2>In a year</h2>
          <SecondaryResult>
            R$ 45.000,00
          </SecondaryResult>
        </ResultsContainer>
        
      </Content>

      <Footer />
    </Container>
  );
};

export default Home;
