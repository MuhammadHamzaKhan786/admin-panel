import { createClient } from 'next-sanity';

// Access the environment variables from process.env
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '', // Ensure to use the public variable
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', // Default to 'production' if not set
  apiVersion: '2023-01-01', // You can set the API version here or use a dynamic one from your env variables
  useCdn: true, // Set to false if statically generating pages, using ISR, or tag-based revalidation
  token: process.env.SANITY_API_TOKEN, // Use the private API token from your environment
});
