import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../src/components/Header";
import {
  Container,
  Content,
  InputContainer,
  ResultsContainer,
  PrimaryResult,
  SecondaryResult,
} from "../styles/home";

import { Button } from "@mantine/core";

import { Title } from "../src/components/Title";
import { SimpleContainer } from "../src/components/SimpleContainer";

import {
  AiOutlineDollar,
  AiOutlinePercentage,
  AiOutlineFieldTime,
  AiOutlineGold,
} from "react-icons/ai";

import Footer from "../src/components/Footer";
import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import { BouncyInput } from "../src/components/BouncyInput";

const Home: NextPage = () => {
  const { colors } = useContext(ThemeContext);

  const [shouldShowResults, setShouldShowResults] = useState(false);
  const [initialAmount, setInitialAmount] = useState(0);
  const [dailyProfit, setDailyProfit] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [mensalAmount, setMensalAmount] = useState(0);

  const handleSubmit = () => {
    event.preventDefault(); // Don't remove this, as it doesn't redirect the page on submit

    console.log(initialAmount);

    setShouldShowResults(true);
  };

  return (
    <Container>
      <Head>
        <title>PnL Calculator | BouncyTrader</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Calculate your PnL based on daily operations"
        />
      </Head>

      <Header />

      <Content>
        <SimpleContainer>
          <Title>PnL Calculator</Title>
          <InputContainer onSubmit={handleSubmit}>
            <BouncyInput
              label="Initial Investment"
              placeholder="(e.g. $10.30)"
              description="Your first amount invested. Much bigger, much better"
              precision={2}
              icon={<AiOutlineDollar size={20} color={colors.text} />}
              onChange={setInitialAmount}
              required
            />
            <BouncyInput
              id="daily"
              label="Daily Profit"
              placeholder="(e.g. 3.08%)"
              description="Your desired profit for each day of investing"
              precision={2}
              icon={<AiOutlinePercentage size={20} color={colors.text} />}
              onChange={setDailyProfit}
              required
            />
            <BouncyInput
              id="time"
              label="Time Elapsed"
              placeholder="(e.g. 15 days)"
              description="The time that you want to remain investing (in days)"
              icon={<AiOutlineFieldTime size={20} color={colors.text} />}
              onChange={setTimeElapsed}
              required
            />
            <BouncyInput
              id="mensal"
              label="Mensal Investment"
              placeholder="(e.g. $5.15)"
              description="An amount that you want to invest every month"
              precision={2}
              icon={<AiOutlineGold size={20} color={colors.text} />}
              onChange={setMensalAmount}
            />

            <Button
              type="submit"
              style={{
                backgroundColor: colors.primary,
                color: colors.secondaryBackground,
                gridColumn: "span 2",
                minHeight: 50,
              }}
            >
              Calcular
            </Button>
          </InputContainer>
        </SimpleContainer>

        <ResultsContainer
          style={{ display: shouldShowResults ? "flex" : "none" }}
        >
          <h1>In {timeElapsed ? timeElapsed : 0} days you will have got</h1>
          <PrimaryResult>
            ${" "}
            {initialAmount && dailyProfit && timeElapsed
              ? mensalAmount && timeElapsed >= 30
                ? (
                    (mensalAmount *
                      (Math.pow(
                        1 + (dailyProfit / 100) * 30,
                        timeElapsed / 30
                      ) -
                        1)) /
                    (dailyProfit / 100)
                  ).toFixed(2)
                : (
                    initialAmount * Math.pow(1 + dailyProfit / 100, timeElapsed)
                  ).toFixed(2)
              : initialAmount}
          </PrimaryResult>

          <h2>In a month</h2>
          <SecondaryResult>
            ${" "}
            {initialAmount && dailyProfit
              ? (initialAmount * Math.pow(1 + dailyProfit / 100, 30)).toFixed(2)
              : 0}
          </SecondaryResult>
          <h2>In a year</h2>
          <SecondaryResult>
            ${" "}
            {initialAmount && dailyProfit
              ? mensalAmount && timeElapsed >= 30
                ? (
                    (mensalAmount *
                      Math.pow(1 + (dailyProfit / 100) * 30, 12)) /
                    ((dailyProfit / 100) * 30)
                  ).toFixed(2)
                : (
                    initialAmount * Math.pow(1 + dailyProfit / 100, 365)
                  ).toFixed(2)
              : 0}
          </SecondaryResult>
        </ResultsContainer>
      </Content>

      <Footer />
    </Container>
  );
};

export default Home;
