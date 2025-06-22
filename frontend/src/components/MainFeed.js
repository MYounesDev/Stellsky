"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  MessageCircle,
  Repeat2,
  Share,
  Bookmark,
  MoreHorizontal,
  Plus,
  Play,
} from "lucide-react";
import Link from "next/link";
import { useStellar } from "../contexts/StellarContext";
import PostModal from "./PostModal";
import AIMenu from "./AIMenu";
import apiService from "../lib/api";

// Instagram benzeri Stories
const stories = [
  {
    id: 1,
    user: "Sen",
    avatar: "S",
    color: "from-primary to-accent",
    hasStory: false,
    isAdd: true,
  },
  {
    id: 2,
    user: "CryptoKing",
    avatar: "C",
    color: "from-blue-500 to-blue-600",
    hasStory: true,
  },
  {
    id: 3,
    user: "StellarDev",
    avatar: "⭐",
    color: "from-yellow-500 to-orange-500",
    hasStory: true,
  },
  {
    id: 4,
    user: "DeFiQueen",
    avatar: "D",
    color: "from-pink-500 to-purple-500",
    hasStory: true,
  },
  {
    id: 5,
    user: "NFTArtist",
    avatar: "N",
    color: "from-green-500 to-emerald-500",
    hasStory: true,
  },
];

// Dummy posts array removed - now using backend data

function StoryItem({ story, onAddClick }) {
  return (
    <div
      className="flex flex-col items-center space-y-2 cursor-pointer group"
      onClick={story.isAdd ? onAddClick : undefined}
    >
      <div
        className={`relative ${
          story.hasStory
            ? "p-1 bg-gradient-to-tr from-primary to-accent rounded-full"
            : ""
        }`}
      >
        <div
          className={`w-16 h-16 bg-gradient-to-br ${story.color} rounded-full flex items-center justify-center border-4 border-background`}
        >
          {story.isAdd ? (
            <Plus className="w-6 h-6 text-white" />
          ) : (
            <span className="text-white font-bold">{story.avatar}</span>
          )}
        </div>
        {story.hasStory && (
          <div className="absolute bottom-1 right-1 w-4 h-4 bg-primary rounded-full border-2 border-background flex items-center justify-center">
            <Play className="w-2 h-2 text-white fill-current" />
          </div>
        )}
      </div>
      <span className="text-xs text-muted font-medium truncate w-16 text-center">
        {story.user}
      </span>
    </div>
  );
}

function PostItem({ post }) {
  const { publicKey, isConnected } = useStellar();
  const [isLiked, setIsLiked] = useState(
    post.likes?.includes(publicKey) || false
  );
  const [likeCount, setLikeCount] = useState(post.likesCount || 0);
  const [isLiking, setIsLiking] = useState(false);

  const handleLike = async () => {
    if (!isConnected || isLiking) return;

    setIsLiking(true);
    try {
      if (isLiked) {
        // Unlike
        const response = await apiService.unlikePost(post._id || post.id);
        if (response.success) {
          setIsLiked(false);
          setLikeCount(response.likesCount);
        }
      } else {
        // Like
        const response = await apiService.likePost(post._id || post.id);
        if (response.success) {
          setIsLiked(true);
          setLikeCount(response.likesCount);
        }
      }
    } catch (error) {
      console.error("Error liking/unliking post:", error);
    } finally {
      setIsLiking(false);
    }
  };

  // Format timestamp
  const formatTime = (timestamp) => {
    if (!timestamp) return "now";
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 1) return "now";
    if (diffMins < 60) return `${diffMins}m`;
    if (diffHours < 24) return `${diffHours}h`;
    return `${diffDays}d`;
  };

  // Generate avatar from wallet address
  const getAvatar = (walletAddress) => {
    if (!walletAddress) return "U";
    return walletAddress.charAt(1).toUpperCase();
  };

  // Format wallet address
  const formatWalletAddress = (address) => {
    if (!address) return "";
    return `${address.substring(0, 4)}...${address.substring(
      address.length - 4
    )}`;
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all">
      <div className="flex space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold">
            {getAvatar(post.walletAddress)}
          </span>
        </div>

        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-3">
            <Link href={`/profile/${post.walletAddress}`}>
              <span className="font-semibold text-foreground hover:underline cursor-pointer">
                {formatWalletAddress(post.walletAddress)}
              </span>
            </Link>
            <span className="text-muted">·</span>
            <span className="text-muted text-sm">
              {formatTime(post.createdAt)}
            </span>

            <div className="ml-auto">
              <button className="p-2 text-muted hover:text-foreground hover:bg-hover rounded-full transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="text-foreground leading-relaxed mb-4 whitespace-pre-line">
            {post.text || post.content}
          </p>

          {post.image && post.image.trim() && post.image.startsWith("http") && (
            <div className="mb-4 rounded-xl overflow-hidden">
              <img
                src={post.image}
                alt="Post image"
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleLike}
              disabled={isLiking || !isConnected}
              className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-colors hover:bg-red-500/10 disabled:opacity-50 disabled:cursor-not-allowed ${
                isLiked ? "text-red-500" : "text-muted hover:text-red-500"
              }`}
            >
              <Heart
                className={`w-5 h-5 ${isLiked ? "fill-current" : ""} ${
                  isLiking ? "animate-pulse" : ""
                }`}
              />
              <span className="text-sm font-medium">{likeCount}</span>
            </button>

            <button className="flex items-center space-x-2 px-3 py-2 rounded-full text-muted hover:text-primary hover:bg-primary/10 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">{post.comments}</span>
            </button>

            <button className="flex items-center space-x-2 px-3 py-2 rounded-full text-muted hover:text-accent hover:bg-accent/10 transition-colors">
              <Repeat2 className="w-5 h-5" />
              <span className="text-sm font-medium">{post.reposts}</span>
            </button>

            <button className="flex items-center space-x-2 px-3 py-2 rounded-full text-muted hover:text-foreground hover:bg-hover transition-colors">
              <Share className="w-5 h-5" />
            </button>

            <button className="p-2 text-muted hover:text-accent hover:bg-accent/10 rounded-full transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CreatePost({ onPostCreated }) {
  const [postContent, setPostContent] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [postError, setPostError] = useState("");
  const { isConnected, formatPublicKey, publicKey } = useStellar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!postContent.trim() || !isConnected || isPosting) return;

    setIsPosting(true);
    setPostError("");

    try {
      const response = await apiService.createPost({
        text: postContent.trim(),
      });

      if (response.success) {
        setPostContent("");
        console.log("Post created successfully:", response.post);
        // Notify parent component to refresh posts
        if (onPostCreated) {
          onPostCreated(response.post);
        }
      } else {
        setPostError(response.message || "Failed to create post");
      }
    } catch (error) {
      console.error("Post creation error:", error);
      setPostError("Failed to create post. Please try again.");
    } finally {
      setIsPosting(false);
    }
  };

  if (!isConnected) {
    return (
      <div className="bg-card border border-border rounded-2xl p-6 text-center">
        <p className="text-muted mb-4">Sign in to post on Stellsky</p>
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto opacity-50"></div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold">
              {formatPublicKey(publicKey).charAt(0).toUpperCase()}
            </span>
          </div>

          <div className="flex-1">
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="What's happening in Stellar ecosystem?"
              className="w-full bg-transparent text-foreground placeholder-muted resize-none border-none outline-none text-lg"
              rows="3"
              maxLength="280"
            />

            <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
              <div className="text-sm text-muted">{postContent.length}/280</div>

              <button
                type="submit"
                disabled={!postContent.trim() || isPosting}
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPosting ? "Posting..." : "Post"}
              </button>
            </div>

            {postError && (
              <div className="mt-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
                {postError}
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default function MainFeed() {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(true);
  const [postsError, setPostsError] = useState("");
  const { isConnected, isLoading } = useStellar();

  // Load posts from backend
  useEffect(() => {
    const loadPosts = async () => {
      // Don't try to load posts if still loading auth or not connected
      if (isLoading || !isConnected) {
        setPostsLoading(false);
        return;
      }

      try {
        setPostsLoading(true);
        const response = await apiService.getPosts(1, 20);

        if (response.success) {
          setPosts(response.posts || []);
        } else {
          setPostsError(response.message || "Failed to load posts");
        }
      } catch (error) {
        console.error("Error loading posts:", error);
        setPostsError("Failed to load posts");
      } finally {
        setPostsLoading(false);
      }
    };

    loadPosts();
  }, [isConnected, isLoading]);

  // Handle new post creation
  const handlePostCreated = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div className="max-w-2xl mx-auto py-6 space-y-6">
      {/* Stories */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {stories.map((story) => (
            <StoryItem
              key={story.id}
              story={story}
              onAddClick={() => setIsPostModalOpen(true)}
            />
          ))}
        </div>
      </div>

      {/* AI Menu */}
      <AIMenu />

      {/* Create Post */}
      <CreatePost onPostCreated={handlePostCreated} />

      {/* Posts Feed */}
      <div className="space-y-6">
        {postsLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="text-muted mt-2">Loading posts...</p>
          </div>
        ) : postsError ? (
          <div className="text-center py-8">
            <p className="text-red-500">{postsError}</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted">No posts available</p>
            <p className="text-sm text-muted mt-1">
              Be the first to share something!
            </p>
          </div>
        ) : (
          posts.map((post) => (
            <PostItem key={post._id || post.id} post={post} />
          ))
        )}
      </div>

      {/* Post Modal */}
      <PostModal
        isOpen={isPostModalOpen}
        onClose={() => setIsPostModalOpen(false)}
        onPostCreated={handlePostCreated}
      />
    </div>
  );
}
