import { getCollection } from 'astro:content'

export async function getAllProjects() {
  return await getCollection('projects', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true // filter out drafts
  })
}
