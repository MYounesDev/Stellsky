import { validateStellarAddress, generateToken, createOrGetUser } from '../utils/auth.js';

/**
 * Handle wallet-based login
 */
export async function login(req, res) {
  try {
    const { walletAddress } = req.body;
    
    if (!walletAddress) {
      return res.status(400).json({
        success: false,
        message: 'Wallet address is required'
      });
    }
    
    if (!validateStellarAddress(walletAddress)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid wallet address format'
      });
    }
    
    // Create or get user
    const user = await createOrGetUser(walletAddress);
    
    // Generate JWT token
    const token = generateToken(walletAddress);
    
    return res.status(200).json({
      success: true,
      token,
      user: {
        walletAddress: user.walletAddress,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error during authentication'
    });
  }
}

/**
 * Check if user is authenticated
 */
export async function isAuthenticated(req, res) {
  // The auth middleware has already verified the token
  // If we reach this point, the user is authenticated
  return res.status(200).json({
    success: true,
    message: 'Authenticated',
    token: true,
    user: {
      walletAddress: req.user.walletAddress
    }
  });
} 