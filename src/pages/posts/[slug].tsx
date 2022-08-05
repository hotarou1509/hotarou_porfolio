import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import PortableText from "react-portable-text";
import { Post } from ".";
import { sanityClient, urlFor } from "../../../sanity";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { trpc } from "../../utils/trpc";
import { CommentDTO } from "../../server/router/comment";
import { z } from "zod";
import { useRouter } from "next/router";

interface Props {
  post: Post;
}

interface IFormInput {
  post_id: string;
  comment: string;
}

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  image: z.string().url(),
});

const schema = yup
  .object({
    comment: yup.string().required("Pls don't send me an empty comment! 😒"),
  })
  .required();

const PostDetail: NextPage<Props> = ({ post }: Props) => {
  const {
    _id,
    author,
    body,
    description,
    mainImage,
    publishedAt,
    title,
    comments,
  } = post;

  const router = useRouter();

  // User auth handle
  const { data: session } = useSession();

  // Form handle
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  // Send comment handle
  const { mutate } = trpc.useMutation(["comment.send"], {
    onSuccess: () => router.reload(),
  });

  const onSubmit: SubmitHandler<IFormInput> = (formValue) => {
    const user = userSchema.safeParse(session?.user);
    if (user.success) {
      const data: CommentDTO = {
        user_id: user.data.id,
        name: user.data.name,
        email: user.data.email,
        image: user.data.image,
        comment: formValue.comment,
        post_id: _id,
      };
      mutate(data);
    } else {
      alert(user.error);
    }
  };

  return (
    <Container maxW="container.lg">
      <Heading>Blog.</Heading>
      <Heading fontSize={{ base: "50px", lg: "80px" }} py={5}>
        {title}
      </Heading>
      <Flex alignItems="center" pb={10}>
        <Avatar src={urlFor(author.image).url()!} mr={3} />
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
        <Divider />
        <Box py={5}>
          <Box pb={10}>
            <Text>Enjoy this post?</Text>
            <Heading>Leave the comment below!</Heading>
          </Box>
          {session?.user ? (
            <Flex alignItems="center">
              <Avatar
                size="md"
                src={session?.user?.image || "https://bit.ly/broken-link"}
                mr={2}
              />
              <Box>
                <Text mr={2}>{session?.user.name}</Text>
                <Text fontSize="16px" color="gray.500">
                  {session?.user.email}
                </Text>
              </Box>
            </Flex>
          ) : (
            <Text color="gray.500">*You have to sign in to leave comment!</Text>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="comment"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Textarea
                  mt={5}
                  placeholder={"Enter your comment here!"}
                  {...field}
                />
              )}
            />
            <Text color="red.600" py={2} fontSize="18px">
              {errors.comment?.message}
            </Text>
            <Flex justifyContent="end">
              {session?.user ? (
                <Flex>
                  <Button
                    variant="app"
                    type="submit"
                    display={session?.user ? "block" : "none"}
                    mr={3}
                  >
                    Send
                  </Button>
                  <Button
                    variant="app"
                    onClick={(e: any) => {
                      e.preventDefault();
                      signOut();
                    }}
                  >
                    Sign out
                  </Button>
                </Flex>
              ) : (
                <Button
                  variant="app"
                  onClick={(e: any) => {
                    e.preventDefault();
                    signIn("google");
                  }}
                >
                  <FaGoogle />
                  <Text ml={2}>Sign in with Google</Text>
                </Button>
              )}
            </Flex>
          </form>
        </Box>
        {comments && (
          <>
            <Divider />
            <Box py={5}>
              {comments.map((value) => (
                <Flex key={value._id} pb={5}>
                  <Avatar mr={3} size="sm" src={`${value.image}`} />
                  <Box>
                    <Text fontSize="16px" color="gray.500">
                      {value.name}
                    </Text>
                    <Text py={2}>{value.comment}</Text>
                  </Box>
                </Flex>
              ))}
            </Box>
          </>
        )}
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
    'comments':*[_type == "comment" && 
      post._ref == ^._id 
    ] | order(_createdAt desc),
    description,
    mainImage,
    slug,
    body
  }`;

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
