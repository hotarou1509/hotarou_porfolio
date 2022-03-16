import NextLink from 'next/link';
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Hello, I&apos;m a front-end developer and a blockchain engineer based
          in Danang!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Thai Viet Le
            </Heading>
            <p>( ReactJS / NextJS / Golang )</p>
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
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Hello, I&apos;m a frontend developer and blockchain engineer based
            in Danang! I've acquired high level experience in web design and
            development knowledge, producing quality work. Here are some of my
            public{' '}
            <NextLink href="/works/project">
              <Link>Projects</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Porfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1995</BioYear>
            Born in Danang, Vietnam.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Completed the Degree of Electronics and Telecommunication
            Engineering at Military Technical Academy (Hanoi).
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Worked at intX Vietnam as frontend developer and blockchain
            engineer.
          </BioSection>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
