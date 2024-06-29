---
title: 'Example Project'
description: 'This post is an example of a project. Use this to create more projects.'
publishDate: '22 Feb 2023'
updatedDate: 22 Jan 2024
draft: true
demoURL: 'https://jimmyt.dev'
repoURL: 'https://github.com/KaizelZero/Portfolio'
thumbnail:
  src: './coming-soon.png'
  alt: 'Example project thumbnail'
coverImage:
  src: './coming-soon.png'
  alt: 'Example project cover image'
---

```js
title: z.string().max(60),
description: z.string().min(50).max(160),
publishDate: z
  .string()
  .or(z.date())
  .transform((val) => new Date(val)),
updatedDate: z
  .string()
  .optional()
  .transform((str) => (str ? new Date(str) : undefined)),
coverImage: z
  .object({
    src: image(),
    alt: z.string()
  })
  .optional(),
draft: z.boolean().default(false),
demoURL: z.string().optional(),
repoURL: z.string().optional(),
thumbnail: z.string().optional(),
ogImage: z.string().optional()
```
