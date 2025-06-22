"use client";

import { useState } from "react";
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
import { useStellar } from "../contexts/StellarContext";
import PostModal from "./PostModal";

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

// Twitter benzeri Posts
const posts = [
  {
    id: 1,
    user: "StellarMaster",
    username: "@stellarmaster",
    avatar: "S",
    color: "from-primary to-accent",
    time: "2s",
    content:
      "Stellar blockchain ecosystem is growing every day! New DeFi protocols and NFT projects keep coming. 🚀✨",
    image: null,
    likes: 124,
    comments: 28,
    reposts: 45,
    bookmarks: 12,
    liked: false,
    verified: true,
  },
  {
    id: 2,
    user: "CryptoAnalyst",
    username: "@cryptoanalyst",
    avatar: "C",
    color: "from-blue-500 to-blue-600",
    time: "5m",
    content:
      "My XLM price analysis: Technical indicators are giving positive signals. MACD at intersection point. 📈\n\n#StellarLumens #XLM #TechnicalAnalysis",
    image: null,
    likes: 89,
    comments: 15,
    reposts: 23,
    bookmarks: 7,
    liked: true,
    verified: false,
  },
  {
    id: 3,
    user: "NFTCollector",
    username: "@nftcollector",
    avatar: "N",
    color: "from-purple-500 to-pink-500",
    time: "15m",
    content:
      "My NFT collection on Stellar Network is growing! Amazing artists are emerging from the community. 🎨",
    image:
      "https://via.placeholder.com/500x300/8b5cf6/ffffff?text=NFT+Collection",
    likes: 256,
    comments: 42,
    reposts: 67,
    bookmarks: 34,
    liked: false,
    verified: true,
  },
];

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
  const [isLiked, setIsLiked] = useState(post.liked);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all">
      <div className="flex space-x-4">
        <div
          className={`w-12 h-12 bg-gradient-to-br ${post.color} rounded-full flex items-center justify-center flex-shrink-0`}
        >
          <span className="text-white font-bold">{post.avatar}</span>
        </div>

        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-3">
            <span className="font-semibold text-foreground hover:underline cursor-pointer">
              {post.user}
            </span>
            {post.verified && (
              <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
            <span className="text-muted text-sm">{post.username}</span>
            <span className="text-muted">·</span>
            <span className="text-muted text-sm">{post.time}</span>

            <div className="ml-auto">
              <button className="p-2 text-muted hover:text-foreground hover:bg-hover rounded-full transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="text-foreground leading-relaxed mb-4 whitespace-pre-line">
            {post.content}
          </p>

          {post.image && (
            <div className="mb-4 rounded-xl overflow-hidden">
              <img
                src={post.image}
                alt="Post image"
                className="w-full h-64 object-cover"
              />
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-colors hover:bg-red-500/10 ${
                isLiked ? "text-red-500" : "text-muted hover:text-red-500"
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
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

function CreatePost() {
  const [postContent, setPostContent] = useState("");
  const { isConnected, formatPublicKey, publicKey } = useStellar();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!postContent.trim() || !isConnected) return;

    console.log("Posting:", postContent);
    setPostContent("");
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
                disabled={!postContent.trim()}
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default function MainFeed() {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

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

      {/* Create Post */}
      <CreatePost />

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>

      {/* Post Modal */}
      <PostModal
        isOpen={isPostModalOpen}
        onClose={() => setIsPostModalOpen(false)}
      />
    </div>
  );
}
