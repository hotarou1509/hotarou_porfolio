import { createRouter } from "./context";
import { z } from "zod";

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
    async resolve({ ctx, input }) {
      try {
        return await ctx.prisma.comment.create({
          data: {
            name: input.name,
            email: input.email,
            image: input.image,
            comment: input.comment,
            user_id: input.user_id,
            post_id: input.post_id,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  })
  .mutation("delete", {
    input: z.object({
      id: z.string({
        required_error: "Post id is required",
        invalid_type_error: "Post id must be a string",
      }),
    }),
    async resolve({ ctx, input }) {
      try {
        return await ctx.prisma.comment.delete({
          where: { id: input.id },
        });
      } catch (error) {
        console.log(error);
      }
    },
  })
  .query("getAll", {
    input: z.object({
      post_id: z.string({
        required_error: "Post id is required",
        invalid_type_error: "Post id must be a string",
      }),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.comment.findMany({
        where: { post_id: input.post_id },
      });
    },
  });
