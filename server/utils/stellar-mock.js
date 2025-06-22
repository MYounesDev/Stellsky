/**
 * Mock implementation of the Stellar SDK for testing purposes
 * This file provides minimal implementations of the functions we need from the Stellar SDK
 */

export class StrKey {
  /**
   * Simple mock implementation for validating Ed25519 public keys
   * In production, you'd use the actual Stellar SDK
   * 
   * @param {string} publicKey - The public key to validate
   * @returns {boolean} - Whether the key appears to be valid
   */
  static isValidEd25519PublicKey(publicKey) {
    // Basic check: starts with G and is 56 characters
    if (!publicKey || typeof publicKey !== 'string') return false;
    
    if (!publicKey.startsWith('G')) return false;
    
    if (publicKey.length !== 56) return false;
    
    // More thorough validation would be done by the actual library
    // This is just a placeholder
    return true;
  }
}

// Add any other Stellar SDK functionality you need to mock here 