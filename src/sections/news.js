/**  @jsxRuntime classic **/
/** @jsx jsx */
import { jsx, Container, Box, Button, Grid, Heading, Text } from "theme-ui";
import TextFeatureListing from "components/text-feature-listing";
import Image from "components/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import Coinsbit from "assets/latestNews/coinsbitLogo2.png";
import Bitcoin from "assets/latestNews/bitcoin.png";
import Theter from "assets/latestNews/theter.png";
import Eth from "assets/latestNews/ethereum.png";
import Pound from "assets/latestNews/pound.png";

const data = {
  date: "May 26, 2021",
  title: "Coinsbit Listing",
  description:
    "We are pleased to announce that GGIVE token will be available to trade on the Coinsbit exchange",
  underDescription: "Trading $GGIVE will be available with the following pairs",
  logoDescription: "Coinsbit",
  btnName: "Coinsbit",
  btnURL: "https://coinsbit.io/register",
};

export default function News() {
  return (
    <section
      sx={{ variant: "section.partner", ...styles.workflow }}
      id="charity"
    >
      <Container sx={styles.containerBox}>
        <TextFeatureListing
          date={data.date}
          title={data.title}
          partner={data.partner}
          description={data.description}
          underDescription={data.underDescription}
          logoImage={Coinsbit}
          logoDescription={data.logoDescription}
          btnName={data.btnName}
          btnURL={data.btnURL}
        />
        </Container>
        <Container>
        <Grid sx={styles.grid}>
          <Box
            sx={styles.wrapper}
            css={{ alignItems: "center", justifyContent: "center" }}
          >
            <img src={Theter} sx={styles.image}></img>
            <Heading as="h3" sx={styles.wrapper.title}>
              GGIVE / USDT
            </Heading>
          </Box>
          <Box
            sx={styles.wrapper}
            css={{ alignItems: "center", justifyContent: "center" }}
          >
            <img src={Bitcoin} sx={styles.image}></img>
            <Heading as="h3" sx={styles.wrapper.title}>
              GGIVE / BTC
            </Heading>
          </Box>
          <Box
            sx={styles.wrapper}
            css={{ alignItems: "center", justifyContent: "center", marginTop:'30px' }}
          >
            <img src={Eth} sx={styles.image}></img>
            <Heading as="h3" sx={styles.wrapper.title}>
              GGIVE / ETH
            </Heading>
          </Box>
          <Box
            sx={styles.wrapper}
            css={{ alignItems: "center", justifyContent: "center" }}
          >
            <img src={Pound} sx={styles.image}></img>
            <Heading as="h3" sx={styles.wrapper.title}>
              GGIVE / GBP
            </Heading>
          </Box>
        </Grid>
      </Container>
      <Container>
          
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    //alignItems: "center",
    // justifyContent: "center",
    flexWrap: ["wrap", null, null, "nowrap"],
   // marginTop: "100px",
    paddingTop: "5rem",
  },
  contentBox: {
    paddingTop: "5rem",
    marginBottom: "-120px",
    flexShrink: 0,
    px: [0, null, "0px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", 450, 550, "350px", "410px", "685px"],
    pb: ["30px", null, null, 0],
    ".description": {
      pr: [0, null, null, null, 4],
    },
    "@media screen and (max-width: 775px)": {
      marginBottom: "0px",
    },
  },
  grid: {
    marginBottom: "60px",
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      "37px 0",
      null,
      "45px 30px",
      null,
      "50px 30px",
      null,
      "90px 70px",
    ],
    width: ["100%", "100%", "100%", "100%"],
    mx: "auto",
    gridTemplateColumns: ["repeat(1,2fr)", "repeat(2,2fr)", "repeat(3,2fr)","repeat(4,2fr)" ],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    date: {
      fontSize: "35px",
      color: "#008ba9",
    },
    title: {
      fontSize: '20px',
      color: "white",
      lineHeight: [1.35, null, null, 1.3, 1.2],
      fontWeight: "700",
      letterSpacing: "-.5px",
      mb: 5,
      "@media screen and (max-width: 700px)": {
        alignItems: "center",
        justifyContent: "center",
      },
    },
    "@media screen and (max-width: 700px)": {
        alignItems: "center",
        justifyContent: "center",
      },
  },
  image: {
     height:'40px',
     marginBottom:'15px', 
    "@media screen and (max-width: 1215px)": {
      //height: "65%",
      //width: "60%",
    },
  },
};
