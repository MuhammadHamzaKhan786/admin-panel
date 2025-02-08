import { createClient } from '@sanity/client';

const client = createClient({
  projectId: "s8s0q3rr",
  dataset: "production",
  apiVersion: '2025-01-17',
  token:"skf8nrFO0timPrTyX3PXQATROnhiiobyAXHayvWE7tLxrQIBR63GX0BVWzvBSORLwKVJsvpYjwfKWmL9GaJL7pnK40WCT6tQCJS9myJzjFUYWzg1FBbHNhq1JJ4SQqHnsnwxPQSJX7cLdEje3OiagC0XByvkkG5o0CxNaIGCY5WhkMeQkeVv",
  useCdn: false
});

export default client;