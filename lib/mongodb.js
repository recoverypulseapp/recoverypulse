import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

// If no URI during Vercel build → return a harmless null promise
if (!uri) {
  console.warn("⚠️ MONGODB_URI is missing — skipping MongoDB init during build.");
  clientPromise = Promise.resolve(null);
} else {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
}

export default clientPromise;
