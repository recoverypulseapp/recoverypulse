import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

// Prevent crash during Vercel build
if (!uri) {
  console.warn("⚠️ MONGODB_URI is missing — skipping MongoDB init during build.");
  // Return a dummy object so build doesn't fail
  export const clientPromise = Promise.resolve(null);
  return;
}

const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
