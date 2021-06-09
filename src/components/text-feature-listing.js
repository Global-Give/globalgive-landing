/**  @jsxRuntime classic **/
/** @jsx jsx */
import {
  jsx,
  Box,
  Heading,
  Text,
  Button,
  Link,
  Container,
  Grid,
} from "theme-ui";

export default function TextFeatureListing({
  date,
  title,
  description,
  underDescription,
  aditionalImg,
  logoImage,
  logoDescription,
  btnName,
  btnURL,
}) {
  return (
    <Box sx={styles.card}>
      <Grid sx={styles.grid}>
        <Box sx={styles.wrapper}>
          <Text as="p" sx={styles.wrapper.date}>
            {date}
          </Text>
          <Heading as="h3" sx={styles.wrapper.title}>
            {title}
          </Heading>
        </Box>
        <Box
          sx={styles.wrapper}
          css={{ alignItems: "center", justifyContent: "center" }}
        >
          <img src={logoImage} alt={logoDescription} sx={styles.image}></img>
        </Box>
      </Grid>

      {description && (
        <Text as="p" className="description" sx={styles.description}>
          {description}
        </Text>
      )}
      {underDescription && (
        <Text as="p" className="description" sx={styles.description}>
          {underDescription}
        </Text>
      )}
      
    </Box>
  );
}

const styles = {
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
    width: ["100%", "100%"],
    mx: "auto",
    gridTemplateColumns: ["repeat(1,6fr)", null, "repeat(2,6fr)"],
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexShrink: 0,
    width: "100%",
    a: {
      m: ["0 auto", null, null, 0],
    },
  },
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: ["wrap", null, null, "nowrap"],
    marginTop: "100px",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    date: {
      fontSize: "35px",
      color: "#b10c00",
      fontWeight: "500",
    },
    title: {
      fontSize: ["24px", null, "28px", "32px", "36px", "42px", null, "46px"],
      color: "heading",
      lineHeight: [1.35, null, null, 1.3, 1.2],
      fontWeight: "700",
      letterSpacing: "-.5px",
      mb: 5,
    },
    paragraph: {
      fontSize: [0, null, "17px"],
      color: "jungleGreen",
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
    "@media screen and (max-width: 700px)": {
      alignItems: "center",
      justifyContent: "center",
    },
  },
  description: {
    fontSize: ["25px", 3, null, null, null, "25px", null, 4],
    fontWeight: 400,
    lineHeight: [1.9, null, null, 2.1, null, "2.3"],
    color: "text_secondary",
    mb: "5px",
  },
  image: {
    "@media screen and (max-width: 1215px)": {
      height: "65%",
      width: "60%",
    },
  },
  button: {
    height: "76px",
    width: "340px",
    "@media screen and (max-width: 1215px)": {
      height: "70px",
      width: "280px",
    },
  },
};
