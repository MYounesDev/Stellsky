"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  MessageCircle,
  Repeat2,
  Share,
  MoreHorizontal,
} from "lucide-react";

// Sample post data
const samplePosts = [
  {
    id: 1,
    author: "GALP...XYZ9",
    content:
      "Stellar blockchain is truly amazing! Fast transactions and low fees 🚀",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 8,
    reposts: 3,
    liked: false,
  },
  {
    id: 2,
    author: "GDBX...ABC3",
    content:
      "Our new DeFi project will launch on Stellar soon. Thanks for our community's support! 💜",
    timestamp: "4 hours ago",
    likes: 156,
    comments: 32,
    reposts: 18,
    liked: true,
  },
  {
    id: 3,
    author: "GCQR...DEF7",
    content:
      "How should social media experience be in Web3 world? We're shaping the future with Stellsky! 🌟",
    timestamp: "6 hours ago",
    likes: 89,
    comments: 21,
    reposts: 12,
    liked: false,
  },
  {
    id: 4,
    author: "GXYZ...HIJ2",
    content:
      "The power of decentralized social networks! Our data should be under our control. #Web3 #Stellar",
    timestamp: "8 hours ago",
    likes: 73,
    comments: 15,
    reposts: 9,
    liked: true,
  },
];

function PostCard({ post, onLike, onComment, onRepost }) {
  const [isLiked, setIsLiked] = useState(post.liked);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    onLike(post.id, !isLiked);
  };

  return (
    <div className="bg-secondary border border-border rounded-xl p-6 hover:border-primary/30 transition-colors animate-fadeIn">
      <div className="flex space-x-4">
        {/* Profile Picture */}
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white font-medium text-sm">
            {post.author.charAt(0)}
          </span>
        </div>

        {/* Post Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-foreground">{post.author}</span>
              <span className="text-muted text-sm">·</span>
              <span className="text-muted text-sm">{post.timestamp}</span>
            </div>

            <button className="p-1 text-muted hover:text-foreground hover:bg-background rounded-full transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>

          <p className="text-foreground mb-4 leading-relaxed">{post.content}</p>

          {/* Interaction Buttons */}
          <div className="flex items-center justify-between max-w-md">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 p-2 rounded-full transition-colors ${
                isLiked
                  ? "text-red-500 hover:bg-red-500/10"
                  : "text-muted hover:text-red-500 hover:bg-red-500/10"
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
              <span className="text-sm">{likeCount}</span>
            </button>

            <button
              onClick={() => onComment(post.id)}
              className="flex items-center space-x-2 p-2 text-muted hover:text-primary hover:bg-primary/10 rounded-full transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">{post.comments}</span>
            </button>

            <button
              onClick={() => onRepost(post.id)}
              className="flex items-center space-x-2 p-2 text-muted hover:text-accent hover:bg-accent/10 rounded-full transition-colors"
            >
              <Repeat2 className="w-4 h-4" />
              <span className="text-sm">{post.reposts}</span>
            </button>

            <button className="p-2 text-muted hover:text-foreground hover:bg-background rounded-full transition-colors">
              <Share className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulated data loading
    const loadPosts = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setPosts(samplePosts);
      setIsLoading(false);
    };

    loadPosts();
  }, []);

  const handleLike = (postId, liked) => {
    console.log(`Post ${postId} ${liked ? "liked" : "unliked"}`);
  };

  const handleComment = (postId) => {
    console.log(`Comment page will open for post ${postId}`);
  };

  const handleRepost = (postId) => {
    console.log(`Post ${postId} reposted`);
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-secondary border border-border rounded-xl p-6 animate-fadeIn"
          >
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-border rounded-full animate-pulse-custom"></div>
              <div className="flex-1 space-y-3">
                <div className="h-4 bg-border rounded animate-pulse-custom w-1/3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-border rounded animate-pulse-custom"></div>
                  <div className="h-4 bg-border rounded animate-pulse-custom w-5/6"></div>
                </div>
                <div className="flex space-x-6 pt-4">
                  {[1, 2, 3, 4].map((j) => (
                    <div
                      key={j}
                      className="h-4 bg-border rounded animate-pulse-custom w-12"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={handleLike}
          onComment={handleComment}
          onRepost={handleRepost}
        />
      ))}
    </div>
  );
}
