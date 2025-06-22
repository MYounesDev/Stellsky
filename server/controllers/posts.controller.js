import { ObjectId } from 'mongodb';
import { getCollection } from '../utils/db.js';

/**
 * Create a new post
 */
export async function createPost(req, res) {
  try {
    const { text, image } = req.body;
    const author = req.user.walletAddress;
    
    if (!text && !image) {
      return res.status(400).json({
        success: false,
        message: 'Post must contain either text or image'
      });
    }
    
    const postsCollection = getCollection('posts');
    
    const newPost = {
      author,
      text: text || '',
      image: image || '',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const result = await postsCollection.insertOne(newPost);
    
    return res.status(201).json({
      success: true,
      post: {
        id: result.insertedId,
        ...newPost
      }
    });
  } catch (error) {
    console.error('Create post error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while creating post'
    });
  }
}

/**
 * Get all posts with pagination
 */
export async function getPosts(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const postsCollection = getCollection('posts');
    
    const posts = await postsCollection
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();
    
    const total = await postsCollection.countDocuments({});
    
    return res.status(200).json({
      success: true,
      posts: posts.map(post => ({
        id: post._id,
        author: post.author,
        text: post.text,
        image: post.image,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt
      })),
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get posts error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while fetching posts'
    });
  }
}

/**
 * Get posts by a specific user
 */
export async function getUserPosts(req, res) {
  try {
    const { walletAddress } = req.params;


    if (!walletAddress) {
      return res.status(400).json({
        success: false,
        message: 'Wallet address is required'
      });
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const postsCollection = getCollection('posts');
    
    const posts = await postsCollection
      .find({ author: walletAddress })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();
    
    const total = await postsCollection.countDocuments({ author: walletAddress });
    
    return res.status(200).json({
      success: true,
      posts: posts.map(post => ({
        id: post._id,
        author: post.author,
        text: post.text,
        image: post.image,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt
      })),
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get user posts error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while fetching user posts'
    });
  }
}

/**
 * Get a single post by ID
 */
export async function getPostById(req, res) {
  try {
    const { id } = req.params;
    
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid post ID format'
      });
    }
    
    const postsCollection = getCollection('posts');
    const post = await postsCollection.findOne({ _id: new ObjectId(id) });
    
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }
    
    return res.status(200).json({
      success: true,
      post: {
        id: post._id,
        author: post.author,
        text: post.text,
        image: post.image,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt
      }
    });
  } catch (error) {
    console.error('Get post error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while fetching post'
    });
  }
}

/**
 * Delete a post (only the author can delete their own post)
 */
export async function deletePost(req, res) {
  try {
    const { id } = req.params;
    const walletAddress = req.user.walletAddress;
    
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid post ID format'
      });
    }
    
    const postsCollection = getCollection('posts');
    
    // Find post and verify ownership
    const post = await postsCollection.findOne({ _id: new ObjectId(id) });
    
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }
    
    // Check if the user is the author
    if (post.author !== walletAddress) {
      return res.status(403).json({
        success: false,
        message: 'You can only delete your own posts'
      });
    }
    
    // Delete the post
    await postsCollection.deleteOne({ _id: new ObjectId(id) });
    
    return res.status(200).json({
      success: true,
      message: 'Post deleted successfully'
    });
  } catch (error) {
    console.error('Delete post error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while deleting post'
    });
  }
} 