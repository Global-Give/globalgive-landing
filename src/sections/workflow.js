/**  @jsxRuntime classic **/
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

import ArrowOdd from 'assets/arrowOdd.png';
import ArrowEven from 'assets/arrowEven.png';

const data = [
  {
    id: 1,
    title: 'April',
    subtitle: 'Phase 1',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
    checks: {
      check1: "Selection and addition of first charities for donations",
      check2: "First donation completed within 30 days of token launch",
      check3: "Apply for price tracking on Coin Market Cap, Coin Gecko, Blockfolio.",
      check4: "Begin application process for exchange listings",
    }
  },
  {
    id: 2,
    title: 'April',
    subtitle: 'Phase 2',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
    checks: {
      check1: "Objective 1",
      check2: "Objective 2",
    }
  },
  {
    id: 3,
    title: 'April',
    subtitle: 'Phase 3',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
    checks: {
      check1: "Objective 1",
      check2: "Objective 2",
      check3: "Objective 3",
    }
  },
  {
    id: 4,
    title: 'April',
    subtitle: 'Phase 4',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
    checks: {
      check1: "Objective 1",
    }
  },
];

export default function WorkFlow() {
  return (
    <section sx={styles.workflow} id="roadmap">
      <Container>
        <SectionHeader
          slogan="Our Vision"
          title="Roadmap"
          isWhite={true}
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.secondTitle}>{item.subtitle}</Text>
                <Box sx={styles.objectiveBox}>
                  {Object.keys(item["checks"]).map((check) => (
                    <Box key={check} sx={styles.objectiveLine}><Text sx={styles.wrapper.objective}>{item["checks"][check]} </Text><div sx={styles.checkBox}></div></Box>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: 'background_secondary',
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    py: [8, null, 9, null, null, 10],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
  grid: {
    marginLeft: "8rem",
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 50px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 75, null, 100],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 200,
      height: 60,
      opacity: 0.3,
    },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
  },

  objectiveBox: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: "column",
  },

  objectiveLine: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: "row",
  },

  checkBox: {
    marginLeft:"5px",
    height: "1rem",
    width: "1rem",
    backgroundColor: "#555",
  },

  wrapper: {
    width: '100%',
    display: 'flex',
    marginLeft: "-6rem",
    flexDirection: 'column',
    alignItems: 'center',
    mt: '-5px',
    title: {
      fontSize: 8,
      color: 'white',
      lineHeight: 1,
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    secondTitle: {
      fontSize: 6,
      fontWeight: 600,
      lineHeight: 2,
      color: '#00D3BA',
      opacity: 0.65,
      pr: [0, null, null, null, null, 5],
    },

    objective: {
      fontSize: 3,
      fontWeight: 600,
      lineHeight: 2,
      color: 'white',
      opacity: 0.65,
      pr: [0, null, null, null, null, 5],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.65,
      pr: [0, null, null, null, null, 5],
    },
  },
};
