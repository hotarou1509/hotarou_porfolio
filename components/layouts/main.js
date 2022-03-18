import Head from 'next/head';
import Navbar from '../navbar';
import NoSsr from '../no-ssr';
import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import Tokyo from '../tokyo';
//import Kitsune from '../kitsune';

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Thai Viet Le - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.xl" pt={14}>
        <Grid
          mt={20}
          templateRows="repeat(2, 1fr)"
          templateColumns={{ lg: 'repeat(2, 1fr)' }}
          gap={4}
        >
          <GridItem
            rowSpan={2}
            colSpan={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {children}
          </GridItem>
          <GridItem
            rowSpan={2}
            colSpan={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <NoSsr>
              <Tokyo />
            </NoSsr>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Main;
