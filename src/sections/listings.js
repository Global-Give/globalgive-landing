/**  @jsxRuntime classic **/
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Button, Box } from "theme-ui";
import SectionHeader from "components/section-header";
import ImageBtnFeature from "components/image-btn-feature";
import { useState } from "react";
import Coinsbit from "assets/latestNews/coinsbit.png";
import Pancakeswap from "assets/latestNews/Pancakeswap.png";
import Coingecko from "assets/latestNews/coingecko.png";

const data = [
  {
    logoImage: Coinsbit,
    logoDescription: "Coinsbit logo",
    btnName: "Register to Coinsbit",
    btnURL: "https://coinsbit.io/register",
  },
  {
    logoImage: Coingecko,
    logoDescription: "Coingecko logo",
    btnName: "Access Coingecko",
    btnURL: "https://www.coingecko.com/en/coins/globalgive",
  },
  {
    logoImage: Pancakeswap,
    logoDescription: "Pancakeswap logo",
    btnName: "Access Pancakeswap",
    btnURL: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x60e9880daef10e960da3c45b076dbdac4f111edf",
  },
];
export default function Listings() {
  
  return (
    <section
      sx={{ variant: "section.listings", ...styles.workflow }}
      id="listings"
    >
      <Container sx={{ paddingTop: "20px" }}>
        <SectionHeader title="Listings" />
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
