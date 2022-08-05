import { createRouter } from "./context";
import { z } from "zod";
import sanityClient from "@sanity/client";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
};

const client = sanityClient(config);

const comment = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  image: z.string().url({ message: "Invalid url" }),
  comment: z.string({
    required_error: "Comment is required",
    invalid_type_error: "Comment must be a string",
  }),
  post_id: z.string({
    required_error: "Post id is required",
    invalid_type_error: "Post id must be a string",
  }),
  user_id: z.string({
    required_error: "Post id is required",
    invalid_type_error: "Post id must be a string",
  }),
});

export type CommentDTO = z.infer<typeof comment>;

export const commentRouter = createRouter()
  .mutation("send", {
    input: comment,
    async resolve({ input }) {
      try {
        await client.create({
          _type: "comment",
          post: {
            _type: "reference",
            _ref: input.post_id,
          },
          name: input.name,
          email: input.email,
          image: input.image,
          comment: input.comment,
          user_id: input.user_id,
        });
      } catch (error) {
        console.log(error);
      }
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany();
    },
  });
