import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let database;

export async function connectToDatabase() {
  try {
    await client.connect();
    database = client.db('stellsky');
    console.log('Connected to MongoDB');
    return database;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

export async function getDatabase() {
  if (!database) {
    await connectToDatabase();
  }
  return database;
}

export function getCollection(collectionName) {
  if (!database) {
    throw new Error('Database not connected. Call connectToDatabase first.');
  }
  return database.collection(collectionName);
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  await client.close();
  console.log('MongoDB connection closed');
  process.exit(0);
}); 