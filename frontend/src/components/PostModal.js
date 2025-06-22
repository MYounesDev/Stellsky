"use client";

import { useState } from "react";
import {
  X,
  Image as ImageIcon,
  Smile,
  Send,
  Globe,
  Users,
  Lock,
} from "lucide-react";
import { useStellar } from "../contexts/StellarContext";

export default function PostModal({ isOpen, onClose }) {
  const { isConnected, formatPublicKey, publicKey } = useStellar();
  const [content, setContent] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [privacy, setPrivacy] = useState("public"); // public, followers, private
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim() || !isConnected) return;

    setIsPosting(true);
    try {
      // Here API call will be made
      console.log("Posting:", {
        content,
        publicKey,
        privacy,
        image: selectedImage,
      });

      // Simulated delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setContent("");
      setSelectedImage(null);
      setPrivacy("public");
      alert("Post shared successfully!");
      onClose();
    } catch (error) {
      console.error("Post sharing error:", error);
      alert("Error occurred while posting.");
    } finally {
      setIsPosting(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
  };

  const privacyOptions = [
    {
      value: "public",
      label: "Everyone",
      icon: Globe,
      description: "Anyone can see this post",
    },
    {
      value: "followers",
      label: "Followers",
      icon: Users,
      description: "Only your followers can see",
    },
    {
      value: "private",
      label: "Only me",
      icon: Lock,
      description: "Only you can see this post",
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Create Post</h2>
          <button
            onClick={onClose}
            className="p-2 text-muted hover:text-foreground hover:bg-hover rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {!isConnected ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 opacity-50"></div>
              <p className="text-muted mb-4">
                You need to connect your wallet to share posts
              </p>
              <button
                onClick={onClose}
                className="text-primary hover:underline font-medium"
              >
                Close and connect wallet
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* User Info */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">
                    {formatPublicKey(publicKey).charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {formatPublicKey(publicKey)}
                  </p>
                  <div className="flex items-center space-x-2">
                    <select
                      value={privacy}
                      onChange={(e) => setPrivacy(e.target.value)}
                      className="text-sm bg-secondary border border-border rounded-lg px-2 py-1 text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {privacyOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Text Input */}
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What's happening on Stellar?"
                className="w-full bg-transparent text-foreground placeholder-muted resize-none border-none outline-none text-lg min-h-32"
                maxLength="280"
                autoFocus
              />

              {/* Image Preview */}
              {selectedImage && (
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-full max-h-64 object-cover"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 p-1 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Privacy Info */}
              <div className="flex items-center space-x-2 text-sm text-muted">
                {(() => {
                  const option = privacyOptions.find(
                    (opt) => opt.value === privacy
                  );
                  const IconComponent = option.icon;
                  return (
                    <>
                      <IconComponent className="w-4 h-4" />
                      <span>{option.description}</span>
                    </>
                  );
                })()}
              </div>

              {/* Character Count */}
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted">{content.length}/280</div>
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                    content.length > 280
                      ? "border-red-500 text-red-500"
                      : content.length > 240
                      ? "border-yellow-500 text-yellow-500"
                      : "border-primary text-primary"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full ${
                      content.length > 280
                        ? "bg-red-500"
                        : content.length > 240
                        ? "bg-yellow-500"
                        : "bg-primary"
                    }`}
                    style={{
                      transform: `scale(${Math.min(content.length / 280, 1)})`,
                    }}
                  ></div>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        {isConnected && (
          <div className="flex items-center justify-between p-6 border-t border-border">
            <div className="flex items-center space-x-3">
              <label className="p-2 text-muted hover:text-primary hover:bg-primary/10 rounded-full transition-colors cursor-pointer">
                <ImageIcon className="w-5 h-5" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>

              <button
                type="button"
                className="p-2 text-muted hover:text-primary hover:bg-primary/10 rounded-full transition-colors"
                title="Add emoji"
              >
                <Smile className="w-5 h-5" />
              </button>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!content.trim() || content.length > 280 || isPosting}
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {isPosting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Posting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Post</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
