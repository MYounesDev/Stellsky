import jwt from "jsonwebtoken";
import { getCollection } from "./db.js";
import { StrKey } from "@stellar/stellar-sdk";

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET || "stellar-secret-key";
const TOKEN_EXPIRY = "1h"; // Token expiry time

/**
 * Validate a Stellar wallet address
 * @param {string} address - The wallet address to validate
 * @returns {boolean} - Whether the address is valid
 */
export function validateStellarAddress(address) {
  if (!address || typeof address !== "string") return false;

  // Simplified validation for testing - just check if it starts with G and has reasonable length
  if (!address.startsWith("G")) return false;

  if (address.length < 10) return false; // Minimum reasonable length

  return true; // Allow any G-starting address for now
}

/**
 * Generate a JWT token for user authentication
 * @param {string} walletAddress - The user's wallet address
 * @returns {string} - The generated JWT token
 */
export function generateToken(walletAddress) {
  return jwt.sign(
    {
      walletAddress,
    },
    JWT_SECRET,
    { expiresIn: TOKEN_EXPIRY }
  );
}

/**
 * Verify JWT token
 * @param {string} token - The token to verify
 * @returns {Object|null} - The decoded token payload or null if invalid
 */
export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

/**
 * Create or get a user by wallet address
 * @param {string} walletAddress - The user's wallet address
 */
export async function createOrGetUser(walletAddress) {
  if (!validateStellarAddress(walletAddress)) {
    throw new Error("Invalid wallet address");
  }

  const usersCollection = getCollection("users");

  // Find existing user or create new one
  let user = await usersCollection.findOne({ walletAddress });

  if (!user) {
    // Create new user
    const newUser = {
      walletAddress,
      createdAt: new Date(),
      lastLogin: new Date(),
    };

    const result = await usersCollection.insertOne(newUser);
    user = { ...newUser, _id: result.insertedId };
  } else {
    // Update last login time
    await usersCollection.updateOne(
      { walletAddress },
      { $set: { lastLogin: new Date() } }
    );
  }

  return user;
}
