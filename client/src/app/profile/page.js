"use client";

import MainLayout from "../../components/MainLayout";
import {
  CalendarDaysIcon,
  MapPinIcon,
  LinkIcon,
  ShieldCheckIcon,
  CubeIcon,
  WalletIcon,
  CurrencyDollarIcon,
  BoltIcon,
  ChatBubbleLeftIcon,
  ArrowPathIcon,
  HeartIcon,
  ShareIcon,
  EllipsisHorizontalIcon,
  CameraIcon,
  PencilIcon,
  ChartBarIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

export default function Profile() {
  return (
    <MainLayout>
      <div className="border-x border-gray-700/50 min-h-screen bg-gray-950/50">
        {/* Profile Header */}
        <div className="relative">
          {/* Cover Photo */}
          <div className="h-48 bg-gradient-to-r from-blue-900 via-purple-900 to-cyan-900 relative overflow-hidden">
            {/* Stellar particles in cover */}
            <div className="absolute inset-0">
              <div className="absolute top-4 left-8 w-1 h-1 bg-blue-300 rounded-full animate-pulse"></div>
              <div className="absolute top-12 right-12 w-2 h-2 bg-purple-300 rounded-full animate-ping"></div>
              <div className="absolute bottom-8 left-16 w-1 h-1 bg-cyan-300 rounded-full animate-bounce"></div>
              <div className="absolute top-8 right-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-300"></div>
              <div className="absolute bottom-12 right-8 w-2 h-2 bg-pink-300 rounded-full animate-ping delay-700"></div>
            </div>

            {/* Edit Cover Button */}
            <button className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800/80 text-white p-2 rounded-xl transition-all duration-200 hover:scale-105">
              <CameraIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Profile Info Section */}
          <div className="px-6 pb-6">
            <div className="flex justify-between items-start -mt-16 mb-4">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-gray-950 relative">
                  <span className="text-white font-bold text-4xl">U</span>
                  {/* Online Status */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center border-4 border-gray-950">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  {/* Edit Profile Picture */}
                  <button className="absolute -bottom-2 -left-2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-xl transition-all duration-200 hover:scale-105 border-2 border-gray-950">
                    <CameraIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-16">
                <button className="bg-gray-800/60 hover:bg-gray-700/60 border border-gray-600/50 text-white font-bold py-2 px-4 rounded-2xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
                  <EllipsisHorizontalIcon className="w-5 h-5" />
                </button>
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-2xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
                  <PencilIcon className="w-4 h-4" />
                  Edit Profile
                </button>
              </div>
            </div>

            {/* User Info */}
            <div className="space-y-4">
              {/* Name and Username */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-white">
                    Alex Rodriguez
                  </h1>
                  <div className="flex items-center gap-1">
                    <ShieldCheckIcon className="w-6 h-6 text-blue-400" />
                    <div className="flex items-center gap-1 text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                      <CubeIcon className="w-3 h-3" />
                      <span>Web3 Verified</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-lg font-medium">
                  @alexdev.stellar
                </p>
              </div>

              {/* Bio */}
              <div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  🚀 Building the future of Web3 social media on Stellar
                  blockchain. DeFi enthusiast, NFT creator, and cosmic explorer.
                  #StellarDev #Web3Builder #DeFi
                </p>
              </div>

              {/* Profile Stats */}
              <div className="flex flex-wrap gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4" />
                  <span>Stellar Network</span>
                </div>
                <div className="flex items-center gap-2">
                  <LinkIcon className="w-4 h-4" />
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    stellardev.space
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDaysIcon className="w-4 h-4" />
                  <span>Joined March 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <WalletIcon className="w-4 h-4" />
                  <span className="text-green-400">Wallet Connected</span>
                </div>
              </div>

              {/* Follow Stats */}
              <div className="flex gap-6">
                <div className="hover:underline cursor-pointer">
                  <span className="font-bold text-white text-lg">1,234</span>
                  <span className="text-gray-400 ml-1">Following</span>
                </div>
                <div className="hover:underline cursor-pointer">
                  <span className="font-bold text-white text-lg">5,678</span>
                  <span className="text-gray-400 ml-1">Followers</span>
                </div>
                <div className="hover:underline cursor-pointer">
                  <span className="font-bold text-white text-lg">89</span>
                  <span className="text-gray-400 ml-1">NFTs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Web3 Portfolio Section */}
        <div className="border-t border-gray-700/50 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Wallet Balance */}
            <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-2xl p-4 border border-green-500/20">
              <div className="flex items-center gap-3 mb-2">
                <CurrencyDollarIcon className="w-6 h-6 text-green-400" />
                <span className="text-white font-semibold">XLM Balance</span>
              </div>
              <div className="text-2xl font-bold text-green-400">
                1,250.50 XLM
              </div>
              <div className="text-sm text-gray-400">≈ $155.06 USD</div>
            </div>

            {/* NFT Count */}
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-4 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-2">
                <CubeIcon className="w-6 h-6 text-purple-400" />
                <span className="text-white font-semibold">NFT Collection</span>
              </div>
              <div className="text-2xl font-bold text-purple-400">89 NFTs</div>
              <div className="text-sm text-gray-400">Across 12 collections</div>
            </div>

            {/* DeFi Stats */}
            <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-4 border border-blue-500/20">
              <div className="flex items-center gap-3 mb-2">
                <ChartBarIcon className="w-6 h-6 text-blue-400" />
                <span className="text-white font-semibold">DeFi Activity</span>
              </div>
              <div className="text-2xl font-bold text-blue-400">$12.5K</div>
              <div className="text-sm text-gray-400">Total Volume</div>
            </div>
          </div>
        </div>

        {/* Profile Tabs */}
        <div className="border-t border-gray-700/50">
          <div className="flex">
            <button className="flex-1 py-4 px-6 text-center border-b-2 border-blue-500 text-blue-400 font-semibold transition-colors">
              Posts
            </button>
            <button className="flex-1 py-4 px-6 text-center border-b-2 border-transparent text-gray-400 hover:text-white font-semibold transition-colors">
              NFTs
            </button>
            <button className="flex-1 py-4 px-6 text-center border-b-2 border-transparent text-gray-400 hover:text-white font-semibold transition-colors">
              Activity
            </button>
            <button className="flex-1 py-4 px-6 text-center border-b-2 border-transparent text-gray-400 hover:text-white font-semibold transition-colors">
              Likes
            </button>
          </div>
        </div>

        {/* User Posts */}
        <div className="divide-y divide-gray-700/30">
          {/* User Post 1 */}
          <div className="p-6 hover:bg-gray-800/30 transition-all duration-200">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
                <span className="text-white font-bold">A</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-bold text-gray-100">
                    Alex Rodriguez
                  </span>
                  <span className="text-gray-400 font-medium">
                    @alexdev.stellar
                  </span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-400">2h</span>
                  <div className="flex items-center gap-1 text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                    <CubeIcon className="w-3 h-3" />
                    <span>Developer</span>
                  </div>
                </div>
                <p className="text-gray-200 mb-4 leading-relaxed">
                  Just deployed a new smart contract on Stellar! 🎉 This one
                  handles automated NFT royalties for creators. The future of
                  digital ownership is here! #StellarDev #SmartContracts
                </p>
                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-4 mb-4 border border-blue-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <GlobeAltIcon className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-semibold">
                      Smart Contract Deployed
                    </span>
                  </div>
                  <div className="text-sm text-gray-400 mb-1">
                    NFT Royalty Manager v1.0
                  </div>
                  <div className="text-sm text-blue-400">
                    Status: Live on Mainnet
                  </div>
                </div>
                <div className="flex justify-between max-w-lg text-gray-400">
                  <button className="flex items-center gap-3 hover:text-blue-400 transition-colors p-2 rounded-xl hover:bg-blue-500/10 group">
                    <ChatBubbleLeftIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">24</span>
                  </button>
                  <button className="flex items-center gap-3 hover:text-green-400 transition-colors p-2 rounded-xl hover:bg-green-500/10 group">
                    <ArrowPathIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">12</span>
                  </button>
                  <button className="flex items-center gap-3 hover:text-red-400 transition-colors p-2 rounded-xl hover:bg-red-500/10 group">
                    <HeartIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">156</span>
                  </button>
                  <button className="flex items-center gap-3 hover:text-blue-400 transition-colors p-2 rounded-xl hover:bg-blue-500/10 group">
                    <ShareIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* User Post 2 */}
          <div className="p-6 hover:bg-gray-800/30 transition-all duration-200">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
                <span className="text-white font-bold">A</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-bold text-gray-100">
                    Alex Rodriguez
                  </span>
                  <span className="text-gray-400 font-medium">
                    @alexdev.stellar
                  </span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-400">1d</span>
                  <div className="flex items-center gap-1 text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                    <CubeIcon className="w-3 h-3" />
                    <span>Developer</span>
                  </div>
                </div>
                <p className="text-gray-200 mb-4 leading-relaxed">
                  GM Web3 builders! 🌅 Working on something exciting for the
                  Stellar ecosystem. Cross-chain NFT bridge coming soon! Can't
                  wait to share more details 🔥
                </p>
                <div className="flex justify-between max-w-lg text-gray-400">
                  <button className="flex items-center gap-3 hover:text-blue-400 transition-colors p-2 rounded-xl hover:bg-blue-500/10 group">
                    <ChatBubbleLeftIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">45</span>
                  </button>
                  <button className="flex items-center gap-3 hover:text-green-400 transition-colors p-2 rounded-xl hover:bg-green-500/10 group">
                    <ArrowPathIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">28</span>
                  </button>
                  <button className="flex items-center gap-3 hover:text-red-400 transition-colors p-2 rounded-xl hover:bg-red-500/10 group">
                    <HeartIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">234</span>
                  </button>
                  <button className="flex items-center gap-3 hover:text-blue-400 transition-colors p-2 rounded-xl hover:bg-blue-500/10 group">
                    <ShareIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
