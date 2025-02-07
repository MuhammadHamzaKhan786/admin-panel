import { createClient } from '@sanity/client';

// Access the environment variables from process.env
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', // Default to 'production' if not set
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, 
  useCdn: false, // Set to false if statically generating pages
  token: process.env.SANITY_API_TOKEN, // Use the private API token from your environment
});
