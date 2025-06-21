"use client";

import { useParams } from "next/navigation";
import MainLayout from "../../../components/MainLayout";
import {
  ArrowLeftIcon,
  ChatBubbleLeftIcon,
  ArrowPathIcon,
  HeartIcon,
  ShareIcon,
  EllipsisHorizontalIcon,
  ShieldCheckIcon,
  CubeIcon,
  CurrencyDollarIcon,
  BoltIcon,
  ChartPieIcon,
  GlobeAltIcon,
  PhotoIcon,
  VideoCameraIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";

// Mock data for posts
const postsData = {
  1: {
    id: 1,
    author: {
      name: "Michael Chen",
      username: "@michaelchen.stellar",
      avatar: "M",
      avatarBg: "from-purple-500 to-pink-500",
      verified: true,
      badge: { text: "Verified", color: "blue", icon: CubeIcon },
    },
    timestamp: "2m",
    content:
      "Just minted my first NFT on Stellsky! 🚀 The integration with Stellar network is seamless. Can't wait to see what the community creates next! #StellarNFT #Web3Social",
    attachment: {
      type: "nft",
      title: "NFT Minted",
      description: "Collection: Stellar Dreams #001",
      value: "Price: 100 XLM",
      bg: "from-blue-900/20 to-purple-900/20",
      border: "border-blue-500/20",
      icon: CubeIcon,
      iconColor: "text-cyan-400",
    },
    stats: { comments: 12, retweets: 5, likes: 28 },
  },
  2: {
    id: 2,
    author: {
      name: "Sarah Wilson",
      username: "@sarahwilson.xlm",
      avatar: "S",
      avatarBg: "from-green-500 to-blue-500",
      verified: false,
      badge: { text: "Creator", color: "green", icon: BoltIcon },
    },
    timestamp: "15m",
    content:
      "Just sent 50 XLM to a friend in seconds with near-zero fees! ⚡ This is why I love building on Stellar - fast, cheap, and reliable. The future of payments is here! 💫",
    attachment: {
      type: "payment",
      title: "Stellar Payment",
      description: "Transaction completed in 3.2 seconds",
      value: "✓ Confirmed",
      bg: "from-green-900/20 to-blue-900/20",
      border: "border-green-500/20",
      icon: CurrencyDollarIcon,
      iconColor: "text-green-400",
    },
    stats: { comments: 8, retweets: 15, likes: 45 },
  },
  3: {
    id: 3,
    author: {
      name: "Alex Rodriguez",
      username: "@alexdev.stellar",
      avatar: "A",
      avatarBg: "from-red-500 to-orange-500",
      verified: false,
      badge: { text: "Developer", color: "purple", icon: CubeIcon },
    },
    timestamp: "1h",
    content:
      "Building the next generation of DeFi on Stellsky! 🛠️ Our new AMM protocol just went live on testnet. Excited to see how the community uses it! #DeFi #Stellar #Developers",
    attachment: {
      type: "defi",
      title: "DeFi Protocol Launch",
      description: "Automated Market Maker v2.0",
      value: "Status: Live on Testnet",
      bg: "from-purple-900/20 to-pink-900/20",
      border: "border-purple-500/20",
      icon: GlobeAltIcon,
      iconColor: "text-purple-400",
    },
    stats: { comments: 23, retweets: 7, likes: 89 },
  },
};

// Mock comments data
const commentsData = [
  {
    id: 1,
    author: {
      name: "Emma Davis",
      username: "@emmadavis",
      avatar: "E",
      avatarBg: "from-cyan-500 to-blue-500",
    },
    timestamp: "1m",
    content: "This is amazing! The future of NFTs on Stellar looks bright 🌟",
    stats: { likes: 5, replies: 2 },
  },
  {
    id: 2,
    author: {
      name: "David Kim",
      username: "@davidkim.dev",
      avatar: "D",
      avatarBg: "from-indigo-500 to-purple-500",
    },
    timestamp: "5m",
    content:
      "Stellar's speed and low fees make it perfect for NFTs. Great choice! 🚀",
    stats: { likes: 8, replies: 1 },
  },
];

export default function PostDetail() {
  const params = useParams();
  const postId = params.id;
  const post = postsData[postId];

  if (!post) {
    return (
      <MainLayout>
        <div className="border-x border-gray-700/50 min-h-screen bg-gray-950/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-2">
              Post not found
            </h1>
            <p className="text-gray-400">
              The post you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="border-x border-gray-700/50 min-h-screen bg-gray-950/50">
        {/* Header */}
        <div className="sticky top-0 bg-gray-950/90 backdrop-blur-lg border-b border-gray-700/50 p-6 z-10">
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="p-2 hover:bg-gray-800/60 rounded-xl transition-all duration-200 hover:scale-105"
            >
              <ArrowLeftIcon className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <div>
              <h1 className="text-xl font-bold text-gray-100">Post</h1>
              <p className="text-sm text-gray-400">Thread</p>
            </div>
          </div>
        </div>

        {/* Main Post */}
        <div className="p-6 border-b border-gray-700/50">
          <div className="flex gap-4">
            <div
              className={`w-16 h-16 bg-gradient-to-r ${post.author.avatarBg} rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 relative`}
            >
              <span className="text-white font-bold text-2xl">
                {post.author.avatar}
              </span>
              {post.author.verified && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <ShieldCheckIcon className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-gray-100 text-xl">
                    {post.author.name}
                  </span>
                  <span className="text-gray-400 font-medium">
                    {post.author.username}
                  </span>
                  <div
                    className={`flex items-center gap-1 text-xs bg-${post.author.badge.color}-500/20 text-${post.author.badge.color}-400 px-2 py-1 rounded-full`}
                  >
                    <post.author.badge.icon className="w-3 h-3" />
                    <span>{post.author.badge.text}</span>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-800/60 rounded-xl transition-all duration-200">
                  <EllipsisHorizontalIcon className="w-5 h-5 text-gray-400 hover:text-white" />
                </button>
              </div>

              <p className="text-gray-200 mb-6 leading-relaxed text-xl">
                {post.content}
              </p>

              {/* Attachment */}
              {post.attachment && (
                <div
                  className={`bg-gradient-to-r ${post.attachment.bg} rounded-2xl p-6 mb-6 border ${post.attachment.border}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <post.attachment.icon
                      className={`w-6 h-6 ${post.attachment.iconColor}`}
                    />
                    <span className="text-white font-semibold text-lg">
                      {post.attachment.title}
                    </span>
                  </div>
                  <div className="text-gray-400 mb-2">
                    {post.attachment.description}
                  </div>
                  <div
                    className={`text-${
                      post.attachment.iconColor.split("-")[1]
                    }-400 font-bold`}
                  >
                    {post.attachment.value}
                  </div>
                </div>
              )}

              {/* Timestamp */}
              <div className="text-gray-400 text-lg mb-6">
                {post.timestamp} ·{" "}
                <span className="hover:underline cursor-pointer">
                  Dec 21, 2024
                </span>{" "}
                ·
                <span className="text-blue-400 hover:underline cursor-pointer ml-1">
                  Stellar Network
                </span>
              </div>

              {/* Stats */}
              <div className="flex gap-6 py-4 border-y border-gray-700/50 text-gray-400">
                <div>
                  <span className="font-bold text-white text-lg">
                    {post.stats.comments}
                  </span>
                  <span className="ml-1">Comments</span>
                </div>
                <div>
                  <span className="font-bold text-white text-lg">
                    {post.stats.retweets}
                  </span>
                  <span className="ml-1">Reposts</span>
                </div>
                <div>
                  <span className="font-bold text-white text-lg">
                    {post.stats.likes}
                  </span>
                  <span className="ml-1">Likes</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-around py-4 border-b border-gray-700/50">
                <button className="flex items-center gap-3 hover:text-blue-400 transition-colors p-3 rounded-xl hover:bg-blue-500/10 group">
                  <ChatBubbleLeftIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
                <button className="flex items-center gap-3 hover:text-green-400 transition-colors p-3 rounded-xl hover:bg-green-500/10 group">
                  <ArrowPathIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
                <button className="flex items-center gap-3 hover:text-red-400 transition-colors p-3 rounded-xl hover:bg-red-500/10 group">
                  <HeartIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
                <button className="flex items-center gap-3 hover:text-blue-400 transition-colors p-3 rounded-xl hover:bg-blue-500/10 group">
                  <ShareIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reply Section */}
        <div className="border-b border-gray-700/50 p-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold">U</span>
            </div>
            <div className="flex-1">
              <textarea
                placeholder="Post your reply"
                className="w-full bg-transparent text-lg placeholder-gray-400 resize-none border-none outline-none leading-relaxed py-3 focus:placeholder-gray-500"
                rows="3"
              />
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-4">
                  <button className="hover:bg-blue-500/20 p-2 rounded-xl transition-all duration-200 hover:scale-110 group">
                    <PhotoIcon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="hover:bg-purple-500/20 p-2 rounded-xl transition-all duration-200 hover:scale-110 group">
                    <VideoCameraIcon className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="hover:bg-yellow-500/20 p-2 rounded-xl transition-all duration-200 hover:scale-110 group">
                    <FaceSmileIcon className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
                  <span className="relative z-10">Reply</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Comments */}
        <div className="divide-y divide-gray-700/30">
          {commentsData.map((comment) => (
            <div
              key={comment.id}
              className="p-6 hover:bg-gray-800/30 transition-all duration-200"
            >
              <div className="flex gap-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${comment.author.avatarBg} rounded-2xl flex items-center justify-center shadow-md flex-shrink-0`}
                >
                  <span className="text-white font-bold">
                    {comment.author.avatar}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-bold text-gray-100">
                      {comment.author.name}
                    </span>
                    <span className="text-gray-400 font-medium">
                      {comment.author.username}
                    </span>
                    <span className="text-gray-500">·</span>
                    <span className="text-gray-400">{comment.timestamp}</span>
                  </div>
                  <p className="text-gray-200 mb-3 leading-relaxed">
                    {comment.content}
                  </p>
                  <div className="flex gap-6 text-gray-400">
                    <button className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                      <ChatBubbleLeftIcon className="w-4 h-4" />
                      <span className="text-sm">{comment.stats.replies}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-red-400 transition-colors">
                      <HeartIcon className="w-4 h-4" />
                      <span className="text-sm">{comment.stats.likes}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
