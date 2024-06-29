---
title: 'Unstoppable'
description: 'This project is a Galaga clone. Where the player controls a spaceship and must shoot down enemy ships.'
publishDate: '22 Feb 2023'
updatedDate: 22 Jan 2024
draft: true
demoURL: 'https://kaizelzero.github.io/Unstoppable/'
repoURL: 'https://github.com/KaizelZero/Unstoppable'
thumbnail:
  src: './Unstoppable.png'
  alt: 'Unstoppable project thumbnail'
coverImage:
  src: './Unstoppable.png'
  alt: 'Unstoppable project cover image'
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
