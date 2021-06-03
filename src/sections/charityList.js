/**  @jsxRuntime classic **/
/** @jsx jsx */
import { jsx, Container, Box, Button } from "theme-ui";
import TextFeatureCharity from "components/text-feature-charity";
import Image from "components/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

import Orangutan from "assets/chairties/orangutan.jpg";

const data = {
  title: " Orangutan Charity",
  subTitle: "Charity Projects",
  paragraph: "WHY HAS GLOBALGIVE DECIDED TO SUPPORT THE ORANGUTANS?",
  description: `
  GlobalGive and our community of GlobalGiver's are making an impact with Charitable donations!  
  We support all Charities, but felt it was right to start off by introducing our community to one of the most vitally-critical 
  times for one of the most beloved animals on the planet. As these species of ape are not seen by many of us, it is hard to 
  appreciate the danger they are in.
  It is at a critical point. 
  This is not a joke. 
  Orangutans are also an umbrella species so their survival is not only imperative to the survival of the forest and jungle they 
  live in, but also the tens of thousands of other species that live in the area.     
  Save the Orangutan and it all gets saved.   
  Our first target is to reach 1 million $GGIVE worth of donations. This target would ensure an area of jungle can be sponsored for 
  these amazing animals!   
  All of GlobalGive's donations will be distributed and spent by these charity organisations in a way THEY see fit as they are the 
  professionals that understand the delicate ecosystem.   
  Orangutan Charities not only support the amazing Orangutan, but also support the locals who work within this area and their 
  families. This is also vital as it creates an environment where families can earn money for looking after these animals and
   not join logging and palm oil companies to survive. All of the species within the Jungle are protected by these organisations 
   and we want you to feel free and ENCOURAGE you to donate a few GlobalGive tokens to their wallet directly.   
  To make a donation: copy the Orangutan wallet address below to send your $GGIVE Tokens directly from your $GGIVE wallet
  `,
};

export default function CharityList() {
  const [CopyAddress, setCopyAddress] = useState(false);
  return (
    <section
      sx={{ variant: "section.partner", ...styles.workflow }}
      id="charity"
    >
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeatureCharity
            subTitle={data.subTitle}
            title={data.title}
            paragraph={data.paragraph}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
            titleColor={data.titleColor}
            subTitleColor={data.subTitleColor}
            paragraphColor={data.paragraphColor}
            sx={styles.title}
          />
        </Box>
        <Box
          css={{
            paddingTop: "12rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            "@media screen and (max-width: 775px)": {
              paddingTop: "3rem",
            },
          }}
        >
          <img
            src={Orangutan}
            alt="Globalgive Finance"
            sx={{ height: "80%", width: "80%" }}
          ></img>
        </Box>
      </Container>
      <Container>
        <Box
          css={{
            paddingTop: "12rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            "@media screen and (max-width: 775px)": {
              paddingTop: "3rem",
            },
          }}
        >
          <a rel="noopener noreferrer" sx={styles.borderAnchor}>
            <CopyToClipboard text="0x2f890D1cF6BD533CA0778D8701b002740d0A42aA">
              <Button
                onClick={() => {
                  setCopyAddress(true);
                }}
                variant="outlinePrimary"
                aria-label="Get Started"
                id="contract-address"
              >
                <Container
                  sx={{
                    fontFamily: "Jost",
                    fontWeight: 500,
                    fontSize: "20px",
                    width: "300px",
                    "@media screen and (max-width: 1215px)": {
                      fontSize: "15px",
                      width: "250px",
                    },
                  }}
                  css={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {CopyAddress ? "COPIED" : "Copy Wallet Address"}
                </Container>
              </Button>
            </CopyToClipboard>
          </a>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: ["wrap", null, null, "nowrap"],
    marginTop: "100px",
  },
  title: {},
  contentBox: {
    paddingTop: "5rem",
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
};
