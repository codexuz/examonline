// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const speakingCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string()
      
    })
});

const part1Collection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string()
      
    })
});

const part2Collection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string()
      
    })
});

const part3Collection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string()
      
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  speakingideas: speakingCollection,
  part1: part1Collection,
  part2: part2Collection,
  part3: part3Collection
};