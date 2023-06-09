import { directus } from './directus';

export async function getPosts() {
  const { data } = await directus.items('posts').readByQuery();
  return data;
}
