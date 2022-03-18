import NextLink from 'next/link';
import { Container, Box, Heading, Image, Link, Button } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }} alignItems="center">
          <Box flexGrow={1}>
            <Heading as="h1" variant="page-title">
              Thai Viet Le
            </Heading>
            <p>( ReactJS / NextJS / NodeJS / Golang )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/hotarou.jpeg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1} mt={20}>
          <Paragraph mt={10}>
            Hello, I&apos;m a frontend developer and a blockchain engineer based
            in Danang! I&apos;ve acquired high level experience in web design
            and development knowledge, producing quality work. Here are some of
            my public{' '}
            <NextLink href="/works/project">
              <Link>Projects</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="left" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Porfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
