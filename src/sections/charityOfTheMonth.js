/**  @jsxRuntime classic **/
/** @jsx jsx */
import {
  jsx,
  Container,
  Box,
  Heading,
  Text,
  Button,
  Link,
  Grid,
} from "theme-ui";
import TextFeatureCharity from "components/text-feature-charity";
import Image from "components/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

import LNADJ from "assets/latestNews/LNADJ.png";

const data = {
  title: " Charity of the month",
  subTitle: "Charity Projects",
  paragraph: "Last Night a DJ Saved my Life",
  description: `Founded in January 2010, LNADJ strives to change the way people view charitable work through innovative campaigns
   & initiatives which connect the global dance music community with charitable action in support of children in crisis. 
   Our aim is to inspire people to be the agent for positive changes in their communities, becoming part of a greater movement 
   in the world. Since its humble beginnings, the foundation has developed through the commitment and passion of generous 
   volunteers along with the support of some key companies & individuals both inside & outside of the dance music industry.
  `,
};

export default function PartnerSection() {
  const [CopyAddress, setCopyAddress] = useState(false);
  return (
    <section
      sx={{ variant: "section.partner", ...styles.workflow }}
      id="charity"
      
    >
      <Container sx={styles.containerBox} css={{marginTop:'150px'}}>
        <Box sx={styles.cardTitle}>
          <Box sx={styles.wrapper}>
            <Heading as="h2" sx={styles.wrapper.title}>
              {data.title}
            </Heading>
            <Text as="p" sx={styles.wrapper.paragraph}>
              {data.paragraph}
            </Text>
          </Box>
        </Box>
      </Container>
      <Container sx={styles.container}>
        <Box sx={styles.logo}>
          <img
            src={LNADJ}
            alt="Globalgive Finance"
            sx={{ height: "60%", width: "60%" }}
          ></img>
        </Box>
        <Box sx={styles.contentBox}>
          <Box sx={styles.card}>
            <Text as="p" className="description" sx={styles.description}>
              {data.description}
            </Text>
          </Box>
        </Box>
      </Container>
      <Container>
        <Grid sx={styles.grid}>
          <Box sx={styles.buttonsBox}>
            <a rel="noopener noreferrer" sx={styles.borderAnchor}>
              <CopyToClipboard text="0x530DD50cf1fAB292DEe6D91e11FC1d3F4Ba26141">
                <Button
                  onClick={() => {
                    setCopyAddress(true);
                  }}
                  variant="outlinePrimary"
                  aria-label="Get Started"
                  id="contract-address"
                >
                  <Container sx={styles.walletBtnContainer}>
                    {CopyAddress ? "COPIED" : "Charity Wallet Address"}
                  </Container>
                </Button>
              </CopyToClipboard>
            </a>
          </Box>
          <Box sx={styles.buttonsBox}>
            <a
              href="https://lastnightadjsavedmylife.enthuse.com/pf/globalgive-charity-crypto-token"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.borderAnchor}
            >
              <Button
                variant="outlinePrimary"
                aria-label="Donate directly(visa card)"
              >
                <Container sx={styles.walletBtnContainer}>
                  Donate directly(visa card)
                </Container>
              </Button>
            </a>
          </Box>
          <Box sx={styles.buttonsBox}>
            <a
              href="https://www.lastnightadjsavedmylife.org/summer-of-love/"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.borderAnchor}
            >
              <Button
                variant="outlinePrimary"
                aria-label="Set for love event"
              >
                <Container sx={styles.walletBtnContainer}>
                  Set for love event
                </Container>
              </Button>
            </a>
          </Box>
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  cardTitle:{
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:'20px',
    "@media screen and (max-width: 1340px)": {
      paddingLeft:'30px',
    }
  },
  logo: {
   paddingTop: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    "@media screen and (max-width: 775px)": {
      paddingTop: "0rem",
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
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: ["wrap", null, null, "nowrap"],
    marginTop: "100px",
  },
  container:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: ["wrap", null, null, "nowrap"],
    marginTop: "50px",
  },
  title: {
    color: "white",
  },
  walletBtnContainer: {
    fontFamily: "Jost",
    fontWeight: 500,
    fontSize: "20px",
    width: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media screen and (max-width: 1215px)": {
      fontSize: "15px",
      width: "250px",
    },
  },
  buttonsBox: {
    paddingTop: "12rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    "@media screen and (max-width: 775px)": {
      paddingTop: "0rem",
      marginLeft:'8px'
    },
  },
  contentBox: {
    paddingTop: "2rem",
    marginBottom: "-120px",
    flexShrink: 0,
    px: [0, null, "30px", 0],
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
  card: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexShrink: 0,
    a: {
      m: ["0 auto", null, null, 0],
    },
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: ["24px", null, "28px", "32px", "36px", "42px", null, "46px"],
      color: "white",
      lineHeight: [1.35, null, null, 1.3, 1.2],
      fontWeight: "700",
      letterSpacing: "-.5px",
      mb: 5,
    },
    paragraph: {
      fontSize: [0, null, "23px"],
      color: "#d5453a",
      letterSpacing: "2px",
      textTransform: "uppercase",
      fontWeight: "700",
      mb: [2, null, null, null, 3],
      lineHeight: 1.6,
    },
    subTitle: {
      fontSize: [0, null, "14px"],
      color: "heading",
      letterSpacing: "2px",
      textTransform: "uppercase",
      fontWeight: "700",
      mb: [2, null, null, null, 3],
      lineHeight: 1.5,
    },
  },
  description: {
    fontSize: ["15px", 2, null, null, null, "17px", null, 3],
    fontWeight: 400,
    lineHeight: [1.85, null, null, 2, null, "2.2"],
    color: "text_secondary",
    mb: "30px",
  },
};
