/**  @jsxRuntime classic **/
/** @jsx jsx */
import { jsx, Box, Button, Link } from "theme-ui";

export default function ImageBtnFeature({
  logoImage,
  logoDescription,
  btnName,
  btnURL = "#",
}) {
  return (
    <Box sx={styles.card}>
      {btnName && (
        <Link href={btnURL} variant="default">
          <Button variant="imgButton" aria-label={btnName} sx={styles.button}>
            <img src={logoImage} alt={logoDescription} sx={styles.image}></img>
          </Button>
        </Link>
      )}
    </Box>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:'20px',
    "@media screen and (max-width: 1340px)": {
      paddingLeft:'30px',
    },
    height: '76px'
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
