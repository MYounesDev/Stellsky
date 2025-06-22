"use client";

import { useState } from "react";
import { Image as ImageIcon, Smile, Send, X } from "lucide-react";
import { useStellar } from "../hooks/useStellar";

export default function CreatePost() {
  const { isConnected, formatPublicKey, publicKey } = useStellar();
  const [content, setContent] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim() || !isConnected) return;

    setIsPosting(true);
    try {
      // Here API call will be made
      console.log("Posting:", { content, publicKey });

      // Simulated delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setContent("");
      alert("Post shared successfully!");
    } catch (error) {
      console.error("Post sharing error:", error);
      alert("Error occurred while posting.");
    } finally {
      setIsPosting(false);
    }
  };

  if (!isConnected) {
    return (
      <div className="bg-secondary rounded-xl p-6 border border-border animate-fadeIn">
        <div className="text-center">
          <p className="text-muted mb-4">
            You need to connect your wallet to share posts
          </p>
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full mx-auto opacity-50"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-secondary rounded-xl border border-border animate-fadeIn">
      <form onSubmit={handleSubmit} className="p-6">
        <div className="flex space-x-4">
          {/* Profil resmi */}
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-medium text-sm">
              {formatPublicKey(publicKey).charAt(0)}
            </span>
          </div>

          {/* Post içeriği */}
          <div className="flex-1">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's happening?"
              className="w-full bg-transparent text-foreground placeholder-muted resize-none border-none outline-none text-lg"
              rows="3"
              maxLength="280"
            />

            {/* Karakter sayacı */}
            <div className="flex justify-between items-center mt-4">
              <div className="text-xs text-muted">{content.length}/280</div>

              {content.length > 0 && (
                <button
                  type="button"
                  onClick={() => setContent("")}
                  className="text-muted hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Alt kısım - Araçlar ve Gönder butonu */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <div className="flex items-center space-x-3">
            <button
              type="button"
              className="p-2 text-muted hover:text-primary hover:bg-primary/10 rounded-full transition-colors"
              title="Add photo"
            >
              <ImageIcon className="w-5 h-5" />
            </button>

            <button
              type="button"
              className="p-2 text-muted hover:text-primary hover:bg-primary/10 rounded-full transition-colors"
              title="Add emoji"
            >
              <Smile className="w-5 h-5" />
            </button>
          </div>

          <button
            type="submit"
            disabled={!content.trim() || isPosting}
            className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
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
      </form>
    </div>
  );
}
