"use client";

import { useState } from "react";
import { Hash, Send, Plus, Smile, Gift } from "lucide-react";
import { useStellar } from "../hooks/useStellar";

const messages = [
  {
    id: 1,
    user: "CryptoMaster",
    avatar: "C",
    color: "from-blue-500 to-blue-600",
    timestamp: "Today 14:32",
    content: "Stellar network's latest update is truly impressive! 🚀",
  },
  {
    id: 2,
    user: "BlockchainDev",
    avatar: "B",
    color: "from-green-500 to-green-600",
    timestamp: "Today 14:35",
    content: "Working on new DeFi protocols. Planning to share on Stellsky.",
  },
  {
    id: 3,
    user: "StellarFan",
    avatar: "⭐",
    color: "from-yellow-500 to-orange-500",
    timestamp: "Today 14:38",
    content:
      "This platform is amazing! This is the future of decentralized social media.",
  },
  {
    id: 4,
    user: "DeFiExplorer",
    avatar: "D",
    color: "from-purple-500 to-pink-500",
    timestamp: "Today 14:42",
    content: "Is anyone tracking XLM's recent price movements? 📈",
  },
];

function Message({ message }) {
  return (
    <div className="flex space-x-4 p-4 hover:bg-background/30 group">
      <div
        className={`w-10 h-10 rounded-full bg-gradient-to-br ${message.color} flex items-center justify-center flex-shrink-0`}
      >
        <span className="text-white font-bold text-sm">{message.avatar}</span>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline space-x-2 mb-1">
          <span className="font-semibold text-foreground hover:underline cursor-pointer">
            {message.user}
          </span>
          <span className="text-xs text-muted">{message.timestamp}</span>
        </div>
        <p className="text-foreground leading-relaxed">{message.content}</p>
      </div>
    </div>
  );
}

export default function ChatArea() {
  const [newMessage, setNewMessage] = useState("");
  const { isConnected, formatPublicKey, publicKey } = useStellar();

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !isConnected) return;

    // Burada mesaj gönderme logic'i olacak
    console.log("Sending message:", newMessage);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Channel header */}
      <div className="h-16 border-b border-border px-6 flex items-center">
        <Hash className="w-6 h-6 text-muted mr-2" />
        <h1 className="text-xl font-bold text-foreground">genel</h1>
        <div className="ml-4 text-sm text-muted">
          General chat channel for Stellsky community
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="py-4">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
      </div>

      {/* Message input */}
      <div className="p-4">
        {isConnected ? (
          <form onSubmit={handleSendMessage} className="relative">
            <div className="bg-secondary rounded-lg border border-border">
              <div className="flex items-end p-4">
                <button
                  type="button"
                  className="p-2 text-muted hover:text-foreground transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>

                <div className="flex-1 mx-2">
                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Send message to #general channel"
                    className="w-full bg-transparent text-foreground placeholder-muted resize-none border-none outline-none max-h-32"
                    rows="1"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage(e);
                      }
                    }}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="p-2 text-muted hover:text-foreground transition-colors"
                  >
                    <Gift className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    className="p-2 text-muted hover:text-foreground transition-colors"
                  >
                    <Smile className="w-5 h-5" />
                  </button>
                  <button
                    type="submit"
                    disabled={!newMessage.trim()}
                    className="p-2 text-primary hover:text-primary-dark transition-colors disabled:text-muted disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <div className="bg-secondary rounded-lg border border-border p-4 text-center">
            <p className="text-muted mb-2">
              Mesaj göndermek için Stellar cüzdanınızı bağlamanız gerekiyor
            </p>
            <p className="text-xs text-muted">
              Sağ üst köşedeki "Cüzdan Bağla" butonunu kullanın
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
