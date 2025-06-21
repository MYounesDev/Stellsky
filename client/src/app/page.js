"use client";

import MainLayout from "../components/MainLayout";
import {
  PhotoIcon,
  VideoCameraIcon,
  FaceSmileIcon,
  ChatBubbleLeftIcon,
  ArrowPathIcon,
  HeartIcon,
  ShareIcon,
  CubeIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  BoltIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <MainLayout>
      <div className="border-x border-gray-700/50 min-h-screen bg-gray-950/50">
        {/* Header */}
        <div className="sticky top-0 bg-gray-950/90 backdrop-blur-lg border-b border-gray-700/50 p-6 z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-100">Home</h1>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <BoltIcon className="w-4 h-4 text-yellow-400" />
              <span>Stellar Network</span>
            </div>
          </div>
        </div>

        {/* Web3 Stats Banner */}
        <div className="border-b border-gray-700/50 p-6">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-6 border border-blue-500/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Network Stats</h3>
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Live</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">4.7M</div>
                <div className="text-xs text-gray-400">Total Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">892K</div>
                <div className="text-xs text-gray-400">Transactions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">$45.2M</div>
                <div className="text-xs text-gray-400">Total Volume</div>
              </div>
            </div>
          </div>
        </div>

        {/* Create Post */}
        <div className="border-b border-gray-700/50 p-6">
          <div className="flex gap-4">
            <div className="w-14 h-14 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="flex-1">
              <textarea
                placeholder="What's happening in the Stellar ecosystem?"
                className="w-full bg-transparent text-xl placeholder-gray-400 resize-none border-none outline-none leading-relaxed py-3 focus:placeholder-gray-500"
                rows="4"
              />
              <div className="flex justify-between items-center mt-6">
                <div className="flex gap-4">
                  <button className="hover:bg-blue-500/20 p-3 rounded-xl transition-all duration-200 hover:scale-110 group">
                    <PhotoIcon className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="hover:bg-purple-500/20 p-3 rounded-xl transition-all duration-200 hover:scale-110 group">
                    <VideoCameraIcon className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="hover:bg-cyan-500/20 p-3 rounded-xl transition-all duration-200 hover:scale-110 group">
                    <CubeIcon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="hover:bg-green-500/20 p-3 rounded-xl transition-all duration-200 hover:scale-110 group">
                    <CurrencyDollarIcon className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="hover:bg-yellow-500/20 p-3 rounded-xl transition-all duration-200 hover:scale-110 group">
                    <FaceSmileIcon className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
                  <span className="relative z-10">Post</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="divide-y divide-gray-700/30">
          {/* Post 1 - Crypto themed */}
          <a
            href="/post/1"
            className="block p-6 hover:bg-gray-800/30 transition-all duration-200 cursor-pointer"
          >
            <div className="flex gap-4">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 relative">
                <span className="text-white font-bold text-xl">M</span>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <ShieldCheckIcon className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-bold text-gray-100 text-lg">
                    Michael Chen
                  </span>
                  <span className="text-gray-400 font-medium">
                    @michaelchen.stellar
                  </span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-400">2m</span>
                  <div className="flex items-center gap-1 text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                    <CubeIcon className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>
                <p className="text-gray-200 mb-4 leading-relaxed text-lg">
                  Just minted my first NFT on Stellsky! 🚀 The integration with
                  Stellar network is seamless. Can't wait to see what the
                  community creates next! #StellarNFT #Web3Social
                </p>
                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-4 mb-4 border border-blue-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <CubeIcon className="w-5 h-5 text-cyan-400" />
                    <span className="text-white font-semibold">NFT Minted</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Collection: Stellar Dreams #001
                  </div>
                  <div className="text-sm text-green-400">Price: 100 XLM</div>
                </div>
                <div className="flex justify-between max-w-lg text-gray-400">
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-3 hover:text-blue-400 transition-colors p-2 rounded-xl hover:bg-blue-500/10 group"
                  >
                    <ChatBubbleLeftIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">12</span>
                  </button>
                  <button className="flex items-center gap-3 hover:text-green-400 transition-colors p-2 rounded-xl hover:bg-green-500/10 group">
                    <ArrowPathIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">5</span>
                  </button>
                  <button className="flex items-center gap-3 hover:text-red-400 transition-colors p-2 rounded-xl hover:bg-red-500/10 group">
                    <HeartIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">28</span>
                  </button>
                  <button className="flex items-center gap-3 hover:text-blue-400 transition-colors p-2 rounded-xl hover:bg-blue-500/10 group">
                    <ShareIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </a>

          {/* Post 2 - Stellar Pay */}
          <a
            href="/post/2"
            className="block p-6 hover:bg-gray-800/30 transition-all duration-200 cursor-pointer"
          >
            <div className="flex gap-4">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 relative">
                <span className="text-white font-bold text-xl">S</span>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <CurrencyDollarIcon className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-bold text-gray-100 text-lg">
                    Sarah Wilson
                  </span>
                  <span className="text-gray-400 font-medium">
                    @sarahwilson.xlm
                  </span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-400">15m</span>
                  <div className="flex items-center gap-1 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                    <BoltIcon className="w-3 h-3" />
                    <span>Creator</span>
                  </div>
                </div>
                <p className="text-gray-200 mb-4 leading-relaxed text-lg">
                  Just sent 50 XLM to a friend in seconds with near-zero fees!
                  ⚡ This is why I love building on Stellar - fast, cheap, and
                  reliable. The future of payments is here! 💫
                </p>
                <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-2xl p-4 mb-4 border border-green-500/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CurrencyDollarIcon className="w-5 h-5 text-green-400" />
                      <span className="text-white font-semibold">
                        Stellar Payment
                      </span>
                    </div>
                    <div className="text-green-400 font-bold">✓ Confirmed</div>
                  </div>
                  <div className="mt-2 text-sm text-gray-400">
                    Transaction completed in 3.2 seconds
                  </div>
                </div>
                <div className="flex justify-between max-w-lg text-gray-400">
                  <button className="flex items-center gap-3 hover:text-blue-400 transition-colors p-2 rounded-xl hover:bg-blue-500/10 group">
                    <ChatBubbleLeftIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">8</span>
                  </button>
                  <button className="flex items-center gap-3 hover:text-green-400 transition-colors p-2 rounded-xl hover:bg-green-500/10 group">
                    <ArrowPathIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">15</span>
                  </button>
                  <button className="flex items-center gap-3 hover:text-red-400 transition-colors p-2 rounded-xl hover:bg-red-500/10 group">
                    <HeartIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">45</span>
                  </button>
                  <button className="flex items-center gap-3 hover:text-blue-400 transition-colors p-2 rounded-xl hover:bg-blue-500/10 group">
                    <ShareIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </a>

          {/* Post 3 - DeFi */}
          <a
            href="/post/3"
            className="block p-6 hover:bg-gray-800/30 transition-all duration-200 cursor-pointer"
          >
            <div className="flex gap-4">
              <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 relative">
                <span className="text-white font-bold text-xl">A</span>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <ChartPieIcon className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-bold text-gray-100 text-lg">
                    Alex Rodriguez
                  </span>
                  <span className="text-gray-400 font-medium">
                    @alexdev.stellar
                  </span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-400">1h</span>
                  <div className="flex items-center gap-1 text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                    <CubeIcon className="w-3 h-3" />
                    <span>Developer</span>
                  </div>
                </div>
                <p className="text-gray-200 mb-4 leading-relaxed text-lg">
                  Building the next generation of DeFi on Stellsky! 🛠️ Our new
                  AMM protocol just went live on testnet. Excited to see how the
                  community uses it! #DeFi #Stellar #Developers
                </p>
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-4 mb-4 border border-purple-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <GlobeAltIcon className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-semibold">
                      DeFi Protocol Launch
                    </span>
                  </div>
                  <div className="text-sm text-gray-400 mb-1">
                    Automated Market Maker v2.0
                  </div>
                  <div className="text-sm text-purple-400">
                    Status: Live on Testnet
                  </div>
                </div>
                <div className="flex justify-between max-w-lg text-gray-400">
                  <button className="flex items-center gap-3 hover:text-blue-400 transition-colors p-2 rounded-xl hover:bg-blue-500/10 group">
                    <ChatBubbleLeftIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">23</span>
                  </button>
                  <button className="flex items-center gap-3 hover:text-green-400 transition-colors p-2 rounded-xl hover:bg-green-500/10 group">
                    <ArrowPathIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">7</span>
                  </button>
                  <button className="flex items-center gap-3 hover:text-red-400 transition-colors p-2 rounded-xl hover:bg-red-500/10 group">
                    <HeartIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">89</span>
                  </button>
                  <button className="flex items-center gap-3 hover:text-blue-400 transition-colors p-2 rounded-xl hover:bg-blue-500/10 group">
                    <ShareIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </MainLayout>
  );
}
