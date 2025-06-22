"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useStellar } from "../../../contexts/StellarContext";
import apiService from "../../../lib/api";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Link as LinkIcon,
  MoreHorizontal,
  Heart,
  MessageCircle,
  Repeat2,
  Share,
  Bookmark,
} from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  const params = useParams();
  const walletAddress = params.address;
  const { publicKey, isConnected } = useStellar();
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("posts");

  const isOwnProfile = walletAddress === publicKey;

  useEffect(() => {
    const loadUserPosts = async () => {
      if (!walletAddress) return;

      try {
        setLoading(true);
        const response = await apiService.getUserPosts(walletAddress);

        if (response.success) {
          setUserPosts(response.posts || []);
        } else {
          setError(response.message || "Failed to load user posts");
        }
      } catch (error) {
        console.error("Error loading user posts:", error);
        setError("Failed to load user posts");
      } finally {
        setLoading(false);
      }
    };

    loadUserPosts();
  }, [walletAddress]);

  const formatWalletAddress = (address) => {
    if (!address) return "";
    return `${address.substring(0, 6)}...${address.substring(
      address.length - 4
    )}`;
  };

  const formatFullWalletAddress = (address) => {
    if (!address) return "";
    return `${address.substring(0, 10)}...${address.substring(
      address.length - 6
    )}`;
  };

  const getAvatar = (walletAddress) => {
    if (!walletAddress) return "U";
    return walletAddress.charAt(1).toUpperCase();
  };

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

  function PostItem({ post }) {
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
          const response = await apiService.unlikePost(post._id || post.id);
          if (response.success) {
            setIsLiked(false);
            setLikeCount(response.likesCount);
          }
        } else {
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

            {post.image &&
              post.image.trim() &&
              post.image.startsWith("http") && (
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
                <span className="text-sm font-medium">
                  {post.comments || 0}
                </span>
              </button>

              <button className="flex items-center space-x-2 px-3 py-2 rounded-full text-muted hover:text-accent hover:bg-accent/10 transition-colors">
                <Repeat2 className="w-5 h-5" />
                <span className="text-sm font-medium">{post.reposts || 0}</span>
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

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border z-10">
          <div className="flex items-center px-6 py-4">
            <Link href="/">
              <ArrowLeft className="w-6 h-6 text-foreground hover:text-primary cursor-pointer" />
            </Link>
            <div className="ml-6">
              <h1 className="text-xl font-bold text-foreground">
                {formatWalletAddress(walletAddress)}
              </h1>
              <p className="text-sm text-muted">{userPosts.length} posts</p>
            </div>
          </div>
        </div>

        {/* Profile Header */}
        <div className="bg-card border-b border-border">
          {/* Cover Photo */}
          <div className="h-48 bg-gradient-to-r from-primary/20 to-accent/20"></div>

          {/* Profile Info */}
          <div className="px-6 pb-6">
            <div className="flex justify-between items-start -mt-16">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-card flex items-center justify-center">
                <span className="text-white font-bold text-4xl">
                  {getAvatar(walletAddress)}
                </span>
              </div>

              {isOwnProfile && (
                <button className="mt-16 px-6 py-2 border border-border text-foreground rounded-full hover:bg-hover transition-colors">
                  Edit Profile
                </button>
              )}
            </div>

            <div className="mt-4">
              <h2 className="text-2xl font-bold text-foreground">
                {formatWalletAddress(walletAddress)}
              </h2>
              <p className="text-muted">
                {formatFullWalletAddress(walletAddress)}
              </p>

              <p className="text-foreground mt-3">
                Stellar ecosystem enthusiast 🚀
              </p>

              <div className="flex items-center space-x-4 mt-3 text-sm text-muted">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>Stellar Network</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Joined Stellsky</span>
                </div>
              </div>

              <div className="flex items-center space-x-6 mt-4 text-sm">
                <span className="text-foreground">
                  <strong>{userPosts.length}</strong>{" "}
                  <span className="text-muted">Posts</span>
                </span>
                <span className="text-foreground">
                  <strong>0</strong>{" "}
                  <span className="text-muted">Following</span>
                </span>
                <span className="text-foreground">
                  <strong>0</strong>{" "}
                  <span className="text-muted">Followers</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-border bg-card">
          <div className="flex">
            {["posts", "replies", "media", "likes"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 text-center font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? "text-foreground border-b-2 border-primary"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="py-6">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="text-muted mt-2">Loading posts...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-500">{error}</p>
            </div>
          ) : userPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 opacity-50"></div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {isOwnProfile
                  ? "You haven't posted anything yet"
                  : "No posts yet"}
              </h3>
              <p className="text-muted">
                {isOwnProfile
                  ? "Share your first thought on Stellsky!"
                  : "This user hasn't shared anything yet."}
              </p>
            </div>
          ) : (
            <div className="space-y-6 px-6">
              {userPosts.map((post) => (
                <PostItem key={post._id || post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
