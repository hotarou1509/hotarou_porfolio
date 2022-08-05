export default {
  name: "comment",
  type: "document",
  title: "Comment",
  fields: [
    {
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "comment",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "post",
      type: "reference",
      to: [{ type: "post" }],
    },
    {
      name: "user_id",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
