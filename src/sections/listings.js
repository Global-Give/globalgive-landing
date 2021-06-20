/**  @jsxRuntime classic **/
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Button, Box } from "theme-ui";
import SectionHeader from "components/section-header";
import ImageBtnFeature from "components/image-btn-feature";
import { useState } from "react";
import Coinsbit from "assets/latestNews/coinsbit.png";
import Pancakeswap from "assets/latestNews/pancakeswap.png";
import Coingecko from "assets/latestNews/coingecko.png";
import Bogged from 'assets/latestNews/bogged.png'
import Bsc from 'assets/latestNews/bscscan.jpeg'
import BigOne from 'assets/latestNews/bigone.jpeg'
import Blockfolio from 'assets/latestNews/blockfolio.jpeg'
import CoinMarket from 'assets/latestNews/coinmarketcap.jpeg'

const data = [
  {
    logoImage: BigOne,
    logoDescription: "BigONE",
    btnName: "Access BigONE",
    btnURL: "https://big.one/cn/trade/GGIVE-USDT",
  },  
  {
    logoImage: Pancakeswap,
    logoDescription: "Pancakeswap logo",
    btnName: "Access Pancakeswap",
    btnURL: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x60e9880daef10e960da3c45b076dbdac4f111edf",
  },
  {
    logoImage: Coinsbit,
    logoDescription: "Coinsbit logo",
    btnName: "Register to Coinsbit",
    btnURL: "https://coinsbit.io/register",
  },
];

const track = [
  {
    logoImage: Bsc,
    logoDescription: "BSCscan",
    btnName: "Access BSCscan",
    btnURL: "https://bscscan.com/token/0x60e9880daef10e960da3c45b076dbdac4f111edf",
  },
  {
    logoImage: Blockfolio,
    logoDescription: "Blockfolio",
    btnName: "Access Blockfolio",
    btnURL: "https://blockfolio.com/coin/GGIVE",
  },
  {
    logoImage: CoinMarket,
    logoDescription: "CoinMarketCap",
    btnName: "Access CoinMarketCap",
    btnURL: "https://coinmarketcap.com/currencies/globalgive/",
  },
  {
    logoImage: Coingecko,
    logoDescription: "Coingecko logo",
    btnName: "Access Coingecko",
    btnURL: "https://www.coingecko.com/en/coins/globalgive",
  },
  {
    logoImage: Bogged,
    logoDescription: "Bogged",
    btnName: "Access Bogged",
    btnURL: "https://charts.bogged.finance/?token=0x60e9880DAeF10E960dA3c45b076dbdAc4f111Edf",
  },
];
export default function Listings() {
  
  return (
    <section
      sx={{ variant: "section.listings", ...styles.workflow }}
      id="listings"
    >
      <Container sx={{ paddingTop: "20px" }}>
        <SectionHeader title="Track Us On:" />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <ImageBtnFeature
              logoImage={item.logoImage}
              logoDescription={item.logoDescription}
              btnName={item.btnName}
              btnURL={item.btnURL}              
            />
          ))}
        </Grid>
        <SectionHeader title="Buys Us On" />
        <Grid sx={styles.grid}>
          {track.map((item) => (
            <ImageBtnFeature
              logoImage={item.logoImage}
              logoDescription={item.logoDescription}
              btnName={item.btnName}
              btnURL={item.btnURL}          
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    marginBottom: '60px',
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
