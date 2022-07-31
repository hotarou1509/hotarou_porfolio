import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  Link,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { NextPage } from "next";
import NextLink from "next/link";
import React, { useState } from "react";
import { sanityClient, urlFor } from "../../../sanity";
import Section from "../../components/section";

export interface Post {
  _id: string;
  publishedAt: string;
  author: {
    name: string;
    image: string;
  };
  title: string;
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: [object];
}

interface Props {
  posts: [Post];
}

const HeroPost: React.FC<Post> = (post: Post) => {
  const { publishedAt, author, title, description, mainImage, slug } = post;
  const linkToContent = `/posts/${slug.current}`;
  return (
    <Flex w="100%" direction="column" gap={5} mb={10}>
      <NextLink href={linkToContent}>
        <Image src={urlFor(mainImage).url()!} alt="cover" cursor="pointer" />
      </NextLink>
      <Flex
        w="100%"
        direction={{ base: "column", lg: "row" }}
        gap={10}
        alignItems="baseline"
      >
        <Box w={{ base: "100%", lg: "50%" }}>
          <NextLink href={linkToContent} passHref>
            <Link>
              <Heading>{title}</Heading>
            </Link>
          </NextLink>
          <Text>{new Date(publishedAt).toLocaleString()}</Text>
        </Box>
        <Box w={{ base: "100%", lg: "50%" }}>
          <Text my={5} fontSize="20px">
            {description}
          </Text>
          <Flex alignItems="center">
            <Avatar src={urlFor(author.image).url()!} mr={3} />
            <Heading variant="section-title">{author.name}</Heading>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

const MorePost: React.FC<Post> = (post: Post) => {
  if (post) {
    const { publishedAt, author, title, description, mainImage, slug } = post;
    return (
      <Flex w="100%" direction="column" gap={5}>
        <NextLink href={`/posts/${slug.current}`}>
          <Image src={urlFor(mainImage).url()!} alt="cover" />
        </NextLink>
        <Box w="100%">
          <NextLink href={`/posts/${slug.current}`}>
            <Heading>{title}</Heading>
          </NextLink>
          <Text>{new Date(publishedAt).toLocaleString()}</Text>
        </Box>
        <Text my={{ base: 0, lg: 2 }}>{description}</Text>
        <Flex alignItems="center">
          <Avatar src={urlFor(author.image).url()!} mr={3} />
          <Heading variant="section-title">{author.name}</Heading>
        </Flex>
      </Flex>
    );
  }
  return <Box></Box>;
};

const Posts: NextPage<Props> = ({ posts }: Props) => {
  const [count, setCount] = useState(1);

  const moreStories = posts.slice(count, count + 2);

  return (
    <Container maxW="container.lg" py={8}>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="baseline"
        mb={{ base: 10, lg: 0 }}
      >
        <Heading
          my={{ base: 2, lg: 10 }}
          fontSize={{ base: "60px", lg: "80px" }}
        >
          Blog.
        </Heading>
        <Text fontSize={{ base: "22px", lg: "28px" }}>
          Welcome to Hōtarō&apos;s Blog!
        </Text>
      </Flex>
      <Section delay={0.2}>
        <HeroPost {...posts[0]} />
      </Section>
      <Divider />
      <Heading my={10} fontSize={{ base: "48px", lg: "68px" }}>
        More Stories
      </Heading>
      <Section delay={0.3}>
        <Flex direction={{ base: "column", lg: "row" }} gap={10}>
          {moreStories.length !== 0 ? (
            moreStories.map((post) => {
              return (
                <>
                  <Box w={{ base: "100%", lg: "50%" }}>
                    <MorePost {...post} />
                  </Box>
                  <Divider display={{ base: "block", lg: "none" }} />
                </>
              );
            })
          ) : (
            <Text fontSize={24}>There is no more post yet! 🥲 </Text>
          )}
        </Flex>
      </Section>
      <Flex justifyContent="center" gap={5}>
        <Button
          variant="link"
          onClick={() => setCount(count - 1)}
          isDisabled={count <= 1 ? true : false}
        >
          ⇤ Prev
        </Button>
        <Button
          variant="link"
          onClick={() => setCount(count + 1)}
          isDisabled={count >= moreStories.length - 1 ? true : false}
        >
          Next ⇥
        </Button>
      </Flex>
    </Container>
  );
};

export default Posts;

export const getServerSideProps = async () => {
  const query = `*[_type == 'post'] | order(publishedAt desc){
    _id,
    title,
    author->{
      name,
      image
    },
    description,
    mainImage,
    slug,
    publishedAt,
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
