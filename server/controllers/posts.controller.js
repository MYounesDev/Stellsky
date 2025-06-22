import { ObjectId } from "mongodb";
import { getCollection } from "../utils/db.js";

// Helper function to validate image URL
function isValidImageUrl(url) {
  if (!url || typeof url !== "string") return false;

  // Check if it's a valid HTTP/HTTPS URL
  try {
    const validUrl = new URL(url);
    return validUrl.protocol === "http:" || validUrl.protocol === "https:";
  } catch {
    return false;
  }
}

/**
 * Create a new post
 */
export async function createPost(req, res) {
  try {
    const { text, image } = req.body;
    const walletAddress = req.user.walletAddress;

    if (!text && !image) {
      return res.status(400).json({
        success: false,
        message: "Post content (text or image) is required",
      });
    }

    // Validate image URL if provided
    let validImage = null;
    if (image && image.trim()) {
      if (isValidImageUrl(image.trim())) {
        validImage = image.trim();
      }
      // If invalid image URL provided, we'll just ignore it (don't throw error)
    }

    const postsCollection = getCollection("posts");

    const newPost = {
      walletAddress,
      author: walletAddress, // Keep for backwards compatibility
      text: text || "",
      image: validImage,
      likes: [], // Array of wallet addresses who liked this post
      likesCount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await postsCollection.insertOne(newPost);

    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      post: {
        id: result.insertedId,
        _id: result.insertedId,
        ...newPost,
      },
    });
  } catch (error) {
    console.error("Create post error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while creating post",
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

    const postsCollection = getCollection("posts");

    const posts = await postsCollection
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    const total = await postsCollection.countDocuments();

    return res.status(200).json({
      success: true,
      posts: posts.map((post) => ({
        id: post._id,
        _id: post._id,
        walletAddress: post.walletAddress || post.author,
        author: post.walletAddress || post.author,
        text: post.text,
        image: post.image,
        likes: post.likes || [],
        likesCount: post.likesCount || (post.likes ? post.likes.length : 0),
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      })),
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Get posts error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching posts",
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
        message: "Wallet address is required",
      });
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const postsCollection = getCollection("posts");

    // Search by both walletAddress and author fields for backwards compatibility
    const posts = await postsCollection
      .find({
        $or: [{ walletAddress: walletAddress }, { author: walletAddress }],
      })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    const total = await postsCollection.countDocuments({
      $or: [{ walletAddress: walletAddress }, { author: walletAddress }],
    });

    return res.status(200).json({
      success: true,
      posts: posts.map((post) => ({
        id: post._id,
        _id: post._id,
        walletAddress: post.walletAddress || post.author,
        author: post.walletAddress || post.author,
        text: post.text,
        image: post.image,
        likes: post.likes || [],
        likesCount: post.likesCount || (post.likes ? post.likes.length : 0),
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      })),
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Get user posts error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching user posts",
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
        message: "Invalid post ID format",
      });
    }

    const postsCollection = getCollection("posts");
    const post = await postsCollection.findOne({ _id: new ObjectId(id) });

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    return res.status(200).json({
      success: true,
      post: {
        id: post._id,
        _id: post._id,
        walletAddress: post.walletAddress || post.author,
        author: post.walletAddress || post.author,
        text: post.text,
        image: post.image,
        likes: post.likes || [],
        likesCount: post.likesCount || (post.likes ? post.likes.length : 0),
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      },
    });
  } catch (error) {
    console.error("Get post error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching post",
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
        message: "Invalid post ID format",
      });
    }

    const postsCollection = getCollection("posts");

    // Find post and verify ownership
    const post = await postsCollection.findOne({ _id: new ObjectId(id) });

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    // Check if the user is the author (check both fields for backwards compatibility)
    const postAuthor = post.walletAddress || post.author;
    if (postAuthor !== walletAddress) {
      return res.status(403).json({
        success: false,
        message: "You can only delete your own posts",
      });
    }

    // Delete the post
    await postsCollection.deleteOne({ _id: new ObjectId(id) });

    return res.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Delete post error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while deleting post",
    });
  }
}

/**
 * Clean invalid image fields (admin function)
 */
export async function cleanInvalidImages(req, res) {
  try {
    const postsCollection = getCollection("posts");

    // Find posts with invalid image fields
    const invalidPosts = await postsCollection
      .find({
        image: {
          $exists: true,
          $ne: null,
          $ne: "",
        },
      })
      .toArray();

    let cleanedCount = 0;

    for (const post of invalidPosts) {
      if (post.image && !isValidImageUrl(post.image)) {
        await postsCollection.updateOne(
          { _id: post._id },
          {
            $unset: { image: "" },
            $set: { updatedAt: new Date() },
          }
        );
        cleanedCount++;
      }
    }

    return res.status(200).json({
      success: true,
      message: `Cleaned ${cleanedCount} posts with invalid images`,
      cleanedCount,
    });
  } catch (error) {
    console.error("Clean invalid images error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while cleaning invalid images",
    });
  }
}

/**
 * Like a post
 */
export async function likePost(req, res) {
  try {
    const { id } = req.params;
    const walletAddress = req.user.walletAddress;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid post ID format",
      });
    }

    const postsCollection = getCollection("posts");
    const post = await postsCollection.findOne({ _id: new ObjectId(id) });

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    const likes = post.likes || [];
    const hasLiked = likes.includes(walletAddress);

    if (hasLiked) {
      return res.status(400).json({
        success: false,
        message: "Post already liked",
      });
    }

    // Add like
    const updatedLikes = [...likes, walletAddress];
    await postsCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          likes: updatedLikes,
          likesCount: updatedLikes.length,
          updatedAt: new Date(),
        },
      }
    );

    return res.status(200).json({
      success: true,
      message: "Post liked successfully",
      likesCount: updatedLikes.length,
      hasLiked: true,
    });
  } catch (error) {
    console.error("Like post error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while liking post",
    });
  }
}

/**
 * Unlike a post
 */
export async function unlikePost(req, res) {
  try {
    const { id } = req.params;
    const walletAddress = req.user.walletAddress;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid post ID format",
      });
    }

    const postsCollection = getCollection("posts");
    const post = await postsCollection.findOne({ _id: new ObjectId(id) });

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    const likes = post.likes || [];
    const hasLiked = likes.includes(walletAddress);

    if (!hasLiked) {
      return res.status(400).json({
        success: false,
        message: "Post not liked yet",
      });
    }

    // Remove like
    const updatedLikes = likes.filter((address) => address !== walletAddress);
    await postsCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          likes: updatedLikes,
          likesCount: updatedLikes.length,
          updatedAt: new Date(),
        },
      }
    );

    return res.status(200).json({
      success: true,
      message: "Post unliked successfully",
      likesCount: updatedLikes.length,
      hasLiked: false,
    });
  } catch (error) {
    console.error("Unlike post error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while unliking post",
    });
  }
}
