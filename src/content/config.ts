import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      publishedAt: z.date(),
      description: z.string(),
      isPublish: z.boolean(),
      isDraft: z.boolean().default(false),
      image: z.string().url().optional(),
      youtube: z.string().url().optional(),
      ogImage: image()
        .refine((img) => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
    }),
});

export const collections = {
  blog: blogCollection,
};
