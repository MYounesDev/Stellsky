"use client";

import MainLayout from "../../components/MainLayout";
import {
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  PhotoIcon,
  FaceSmileIcon,
  PlusIcon,
  EllipsisHorizontalIcon,
  PhoneIcon,
  VideoCameraIcon,
  InformationCircleIcon,
  ShieldCheckIcon,
  CubeIcon,
  BoltIcon,
  CheckIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock conversations data
  const conversations = [
    {
      id: 1,
      name: "Sarah Wilson",
      username: "@sarahwilson.xlm",
      avatar: "S",
      avatarBg: "from-green-500 to-blue-500",
      lastMessage: "Hey! Did you see the new Stellar update?",
      timestamp: "2m",
      unread: 2,
      online: true,
      verified: false,
      badge: { text: "Creator", color: "green", icon: BoltIcon },
    },
    {
      id: 2,
      name: "Michael Chen",
      username: "@michaelchen.stellar",
      avatar: "M",
      avatarBg: "from-purple-500 to-pink-500",
      lastMessage: "Thanks for the XLM payment! 🚀",
      timestamp: "15m",
      unread: 0,
      online: true,
      verified: true,
      badge: { text: "Verified", color: "blue", icon: CubeIcon },
    },
    {
      id: 3,
      name: "Alex Rodriguez",
      username: "@alexdev.stellar",
      avatar: "A",
      avatarBg: "from-red-500 to-orange-500",
      lastMessage: "The DeFi protocol looks amazing!",
      timestamp: "1h",
      unread: 0,
      online: false,
      verified: false,
      badge: { text: "Developer", color: "purple", icon: CubeIcon },
    },
    {
      id: 4,
      name: "Emma Davis",
      username: "@emmadavis",
      avatar: "E",
      avatarBg: "from-cyan-500 to-blue-500",
      lastMessage: "Can we collaborate on the NFT project?",
      timestamp: "3h",
      unread: 1,
      online: false,
      verified: false,
      badge: { text: "Artist", color: "pink", icon: CubeIcon },
    },
    {
      id: 5,
      name: "David Kim",
      username: "@davidkim.dev",
      avatar: "D",
      avatarBg: "from-indigo-500 to-purple-500",
      lastMessage: "Great work on the smart contract!",
      timestamp: "1d",
      unread: 0,
      online: false,
      verified: false,
      badge: { text: "Builder", color: "indigo", icon: BoltIcon },
    },
  ];

  // Mock messages data for selected chat
  const messages = {
    1: [
      {
        id: 1,
        sender: "Sarah Wilson",
        content: "Hey Alex! How's the Stellar development going?",
        timestamp: "10:30 AM",
        sent: false,
        type: "text",
      },
      {
        id: 2,
        sender: "You",
        content:
          "Going great! Just finished implementing the new payment system.",
        timestamp: "10:32 AM",
        sent: true,
        type: "text",
      },
      {
        id: 3,
        sender: "Sarah Wilson",
        content: "That's awesome! Can you show me a demo?",
        timestamp: "10:33 AM",
        sent: false,
        type: "text",
      },
      {
        id: 4,
        sender: "You",
        content: "Sure! I'll send you the link to the test environment.",
        timestamp: "10:35 AM",
        sent: true,
        type: "text",
      },
      {
        id: 5,
        sender: "Sarah Wilson",
        content: "Hey! Did you see the new Stellar update?",
        timestamp: "2m ago",
        sent: false,
        type: "text",
      },
    ],
  };

  const currentChat = conversations.find((conv) => conv.id === selectedChat);
  const currentMessages = messages[selectedChat] || [];

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Here you would normally send the message to your backend
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <MainLayout>
      <div className="border-x border-gray-700/50 min-h-screen bg-gray-950/50 flex">
        {/* Conversations List */}
        <div className="w-80 border-r border-gray-700/50 flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-700/50">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-100">Messages</h1>
              <button className="p-2 hover:bg-gray-800/60 rounded-xl transition-all duration-200 hover:scale-105">
                <PlusIcon className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Search */}
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search conversations..."
                className="w-full bg-gray-800/60 border border-gray-600/50 rounded-2xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setSelectedChat(conv.id)}
                className={`p-4 border-b border-gray-700/30 hover:bg-gray-800/40 cursor-pointer transition-all duration-200 ${
                  selectedChat === conv.id ? "bg-gray-800/60" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${conv.avatarBg} rounded-2xl flex items-center justify-center shadow-md relative`}
                    >
                      <span className="text-white font-bold text-lg">
                        {conv.avatar}
                      </span>
                      {conv.verified && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                          <ShieldCheckIcon className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    {conv.online && (
                      <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-950"></div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white truncate">
                          {conv.name}
                        </span>
                        <div
                          className={`flex items-center gap-1 text-xs bg-${conv.badge.color}-500/20 text-${conv.badge.color}-400 px-2 py-0.5 rounded-full`}
                        >
                          <conv.badge.icon className="w-2.5 h-2.5" />
                          <span>{conv.badge.text}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">
                          {conv.timestamp}
                        </span>
                        {conv.unread > 0 && (
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white font-bold">
                              {conv.unread}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm truncate">
                      {conv.lastMessage}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {currentChat ? (
            <>
              {/* Chat Header */}
              <div className="p-6 border-b border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${currentChat.avatarBg} rounded-2xl flex items-center justify-center shadow-md`}
                      >
                        <span className="text-white font-bold text-lg">
                          {currentChat.avatar}
                        </span>
                      </div>
                      {currentChat.online && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-950"></div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-bold text-white">
                          {currentChat.name}
                        </h2>
                        <div
                          className={`flex items-center gap-1 text-xs bg-${currentChat.badge.color}-500/20 text-${currentChat.badge.color}-400 px-2 py-1 rounded-full`}
                        >
                          <currentChat.badge.icon className="w-3 h-3" />
                          <span>{currentChat.badge.text}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {currentChat.username} •{" "}
                        {currentChat.online ? "Online" : "Offline"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-800/60 rounded-xl transition-all duration-200 hover:scale-105">
                      <PhoneIcon className="w-5 h-5 text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-800/60 rounded-xl transition-all duration-200 hover:scale-105">
                      <VideoCameraIcon className="w-5 h-5 text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-800/60 rounded-xl transition-all duration-200 hover:scale-105">
                      <InformationCircleIcon className="w-5 h-5 text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-800/60 rounded-xl transition-all duration-200 hover:scale-105">
                      <EllipsisHorizontalIcon className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {currentMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sent ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.sent
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                          : "bg-gray-800/60 text-gray-100"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">
                        {message.content}
                      </p>
                      <div
                        className={`flex items-center justify-between mt-2 text-xs ${
                          message.sent ? "text-blue-100" : "text-gray-400"
                        }`}
                      >
                        <span>{message.timestamp}</span>
                        {message.sent && (
                          <CheckCircleIcon className="w-4 h-4 text-blue-200" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-6 border-t border-gray-700/50">
                <div className="flex items-center gap-4">
                  <button className="p-2 hover:bg-gray-800/60 rounded-xl transition-all duration-200 hover:scale-105">
                    <PhotoIcon className="w-5 h-5 text-gray-400" />
                  </button>

                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                      placeholder="Type a message..."
                      className="w-full bg-gray-800/60 border border-gray-600/50 rounded-2xl px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-700/60 rounded-xl transition-all duration-200">
                      <FaceSmileIcon className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  <button
                    onClick={sendMessage}
                    disabled={!newMessage.trim()}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <PaperAirplaneIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ChatBubbleLeftRightIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-white mb-2">
                  Select a conversation
                </h2>
                <p className="text-gray-400">
                  Choose a conversation to start messaging
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
