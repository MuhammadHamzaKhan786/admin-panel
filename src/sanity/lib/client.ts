import { createClient } from '@sanity/client';

// Access the environment variables from process.env
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', // Default to 'production' if not set
  apiVersion:'2025-01-17', 
  useCdn: false, // Set to false if statically generating pages
  token: process.env.SANITY_API_TOKEN || 'skf8nrFO0timPrTyX3PXQATROnhiiobyAXHayvWE7tLxrQIBR63GX0BVWzvBSORLwKVJsvpYjwfKWmL9GaJL7pnK40WCT6tQCJS9myJzjFUYWzg1FBbHNhq1JJ4SQqHnsnwxPQSJX7cLdEje3OiagC0XByvkkG5o0CxNaIGCY5WhkMeQkeVv', // Use the private API token from your environment
});
