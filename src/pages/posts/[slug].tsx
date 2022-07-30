import { Box, Container, Flex, Heading, Image } from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import PortableText from "react-portable-text";
import { Post } from ".";
import { sanityClient, urlFor } from "../../../sanity";

interface Props {
  post: Post;
}

const PostDetail: NextPage<Props> = ({ post }: Props) => {
  const { author, body, description, mainImage, publishedAt, title } = post;

  return (
    <Container maxW="container.lg">
      <Heading>Blog.</Heading>
      <Heading fontSize={{ base: "50px", lg: "80px" }} py={5}>
        {title}
      </Heading>
      <Flex alignItems="center" pb={10}>
        <Image
          src={urlFor(author.image).url()!}
          alt="avatar"
          w="40px"
          h="40px"
          borderRadius="full"
          mr={3}
        />
        <Heading variant="section-title">{author.name}</Heading>
      </Flex>
      <Image src={urlFor(mainImage).url()!} alt="cover" cursor="pointer" />
      <Container maxW="container.md" py={10}>
        <Box fontSize="20px" my={5}>
          {new Date(publishedAt).toLocaleString()}
        </Box>
        <Box fontSize="20px" my={5}>
          {description}
        </Box>
        <Box fontSize="20px" my={5}>
          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={body}
            serializers={{
              h1: (props: any) => (
                <h1
                  style={{
                    fontSize: "32px",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                  {...props}
                />
              ),
              h2: (props: any) => (
                <h2
                  style={{
                    fontSize: "28px",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                  {...props}
                />
              ),
              li: ({ children }: any) => <li>{children}</li>,
              link: ({ href, children }: any) => <a href={href}>{children}</a>,
              normal: ({ children }: any) => (
                <p style={{ marginBottom: "20px", textIndent: "40px" }}>
                  {children}
                </p>
              ),
            }}
          />
        </Box>
      </Container>
    </Container>
  );
};

export default PostDetail;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
      _id,
      slug {
        current
      }
  }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  console.log(paths);

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    publishedAt,
    title,
    author-> {
      name,
      image
    },
    description,
    mainImage,
    slug,
    body
  }
  `;
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
