import React from "react";
import { Container, ThemeProvider, Box } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import News from "sections/news";

import CharityOfTheMonth from "sections/charityOfTheMonth";

 

export default function IndexPage({ domainName }) {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO
            title="GlobalGive Token - Charity Token"
            domainName={domainName}
          />
          <CharityOfTheMonth/>
          <News/>          
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  return {
    props: {
      domainName: JSON.parse(JSON.stringify(req["headers"]["host"])),
    }, // will be passed to the page component as props
  };
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: ["wrap", null, null, "nowrap"],
    marginTop: "100px",
  },
};
