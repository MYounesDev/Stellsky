"use client";

import {
  HomeIcon,
  MagnifyingGlassIcon,
  BellIcon,
  EnvelopeIcon,
  UserIcon,
  Cog6ToothIcon,
  EllipsisHorizontalIcon,
  WalletIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  CubeIcon,
  BoltIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-montserrat">
      {/* Stellar Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-green-400 rounded-full animate-bounce delay-700"></div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex">
        {/* Left Sidebar */}
        <div className="w-72 border-r border-gray-700/50 min-h-screen p-6 fixed left-0 top-0 bg-gray-950/95 backdrop-blur">
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg relative">
                <span className="text-white font-bold text-xl">⭐</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Stellsky
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  Powered by Stellar
                </span>
              </div>
            </div>

            {/* Wallet Connection */}
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-4 border border-blue-500/20">
              <button className="w-full flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
                <WalletIcon className="w-5 h-5" />
                Connect Wallet
              </button>
              <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
                <span>Network: Stellar</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Live</span>
                </div>
              </div>
            </div>

            {/* Menu */}
            <nav className="space-y-3">
              <a
                href="/"
                className="flex items-center gap-5 p-4 rounded-2xl hover:bg-gray-800/60 transition-all duration-200 group"
              >
                <HomeIcon className="w-6 h-6 group-hover:scale-110 transition-transform group-hover:text-blue-400" />
                <span className="text-lg font-medium group-hover:text-blue-400 transition-colors">
                  Home
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-5 p-4 rounded-2xl hover:bg-gray-800/60 transition-all duration-200 group"
              >
                <MagnifyingGlassIcon className="w-6 h-6 group-hover:scale-110 transition-transform group-hover:text-purple-400" />
                <span className="text-lg font-medium group-hover:text-purple-400 transition-colors">
                  Explore
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-5 p-4 rounded-2xl hover:bg-gray-800/60 transition-all duration-200 group"
              >
                <CubeIcon className="w-6 h-6 group-hover:scale-110 transition-transform group-hover:text-cyan-400" />
                <span className="text-lg font-medium group-hover:text-cyan-400 transition-colors">
                  NFT Gallery
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-5 p-4 rounded-2xl hover:bg-gray-800/60 transition-all duration-200 group"
              >
                <CurrencyDollarIcon className="w-6 h-6 group-hover:scale-110 transition-transform group-hover:text-green-400" />
                <span className="text-lg font-medium group-hover:text-green-400 transition-colors">
                  Stellar Pay
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-5 p-4 rounded-2xl hover:bg-gray-800/60 transition-all duration-200 group"
              >
                <BellIcon className="w-6 h-6 group-hover:scale-110 transition-transform group-hover:text-yellow-400" />
                <span className="text-lg font-medium group-hover:text-yellow-400 transition-colors">
                  Notifications
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-5 p-4 rounded-2xl hover:bg-gray-800/60 transition-all duration-200 group"
              >
                <EnvelopeIcon className="w-6 h-6 group-hover:scale-110 transition-transform group-hover:text-green-400" />
                <span className="text-lg font-medium group-hover:text-green-400 transition-colors">
                  Messages
                </span>
              </a>
              <a
                href="/profile"
                className="flex items-center gap-5 p-4 rounded-2xl hover:bg-gray-800/60 transition-all duration-200 group"
              >
                <UserIcon className="w-6 h-6 group-hover:scale-110 transition-transform group-hover:text-pink-400" />
                <span className="text-lg font-medium group-hover:text-pink-400 transition-colors">
                  Profile
                </span>
              </a>
              <a
                href="/settings"
                className="flex items-center gap-5 p-4 rounded-2xl hover:bg-gray-800/60 transition-all duration-200 group"
              >
                <Cog6ToothIcon className="w-6 h-6 group-hover:scale-110 transition-transform group-hover:text-gray-400" />
                <span className="text-lg font-medium group-hover:text-gray-400 transition-colors">
                  Settings
                </span>
              </a>
            </nav>

            {/* Post Button */}
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 mt-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
              <span className="text-lg relative z-10">Post</span>
            </button>

            {/* User Profile */}
            <div className="mt-auto pt-6 border-t border-gray-700/50">
              <div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-800/60 transition-all duration-200 cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-md relative">
                  <span className="text-white font-bold">U</span>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-100">Username</div>
                  <div className="text-sm text-gray-400 flex items-center gap-1">
                    <span>@username</span>
                    <ShieldCheckIcon className="w-3 h-3 text-blue-400" />
                  </div>
                </div>
                <EllipsisHorizontalIcon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </div>

              {/* Login Button */}
              <div className="mt-4">
                <a
                  href="/login"
                  className="w-full flex items-center justify-center gap-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 rounded-2xl py-3 px-4 text-white transition-all duration-200 hover:scale-105"
                >
                  <UserIcon className="w-5 h-5" />
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 ml-72 mr-96">{children}</div>

        {/* Right Sidebar */}
        <div className="w-96 p-6 fixed right-0 top-0 h-screen overflow-y-auto bg-gray-950/50">
          <div className="space-y-8">
            {/* Search */}
            <div className="bg-gray-800/60 rounded-2xl p-4 border border-gray-700/30 sticky top-6 z-10">
              <div className="flex items-center gap-4">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Stellsky"
                  className="bg-transparent outline-none flex-1 text-white placeholder-gray-400 text-lg focus:placeholder-gray-500"
                />
              </div>
            </div>

            {/* Stellar Network Info */}
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl p-6 border border-blue-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <BoltIcon className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-100">
                  Stellar Network
                </h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Network Status</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400">Operational</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">XLM Price</span>
                  <span className="text-green-400 font-bold">
                    $0.124 (+2.3%)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Daily Volume</span>
                  <span className="text-blue-400 font-bold">$45.2M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Active Validators</span>
                  <span className="text-purple-400 font-bold">156</span>
                </div>
              </div>
            </div>

            {/* Trending */}
            <div className="bg-gray-800/60 rounded-3xl p-6 border border-gray-700/30">
              <h2 className="text-2xl font-bold mb-6 text-gray-100">
                Trending in Web3
              </h2>
              <div className="space-y-4">
                <div className="hover:bg-gray-700/40 p-4 rounded-2xl cursor-pointer transition-all duration-200">
                  <div className="text-sm text-gray-400 font-medium">
                    Trending in DeFi
                  </div>
                  <div className="font-bold text-lg text-blue-400 flex items-center gap-2">
                    #StellarDeFi
                    <BoltIcon className="w-4 h-4" />
                  </div>
                  <div className="text-sm text-gray-400">25.4K posts</div>
                </div>
                <div className="hover:bg-gray-700/40 p-4 rounded-2xl cursor-pointer transition-all duration-200">
                  <div className="text-sm text-gray-400 font-medium">
                    NFT · Trending
                  </div>
                  <div className="font-bold text-lg text-purple-400 flex items-center gap-2">
                    Stellar Dreams
                    <CubeIcon className="w-4 h-4" />
                  </div>
                  <div className="text-sm text-gray-400">12.8K posts</div>
                </div>
                <div className="hover:bg-gray-700/40 p-4 rounded-2xl cursor-pointer transition-all duration-200">
                  <div className="text-sm text-gray-400 font-medium">
                    Web3 · Trending
                  </div>
                  <div className="font-bold text-lg text-green-400 flex items-center gap-2">
                    #XLMPayments
                    <CurrencyDollarIcon className="w-4 h-4" />
                  </div>
                  <div className="text-sm text-gray-400">45.2K posts</div>
                </div>
              </div>
              <button className="text-blue-400 hover:text-blue-300 hover:underline mt-6 font-medium transition-colors">
                Show more
              </button>
            </div>

            {/* Who to follow */}
            <div className="bg-gray-800/60 rounded-3xl p-6 border border-gray-700/30">
              <h2 className="text-2xl font-bold mb-6 text-gray-100">
                Web3 Creators
              </h2>
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-md relative">
                      <span className="text-white font-bold text-sm">SC</span>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                        <ShieldCheckIcon className="w-2 h-2 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-100">
                        Stellar Council
                      </div>
                      <div className="text-gray-400 font-medium">
                        @stellarcouncil
                      </div>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-2xl text-sm transition-all duration-200 hover:scale-105 shadow-md">
                    Follow
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-md relative">
                      <span className="text-white font-bold text-sm">XL</span>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                        <CubeIcon className="w-2 h-2 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-100">
                        XLM News
                      </div>
                      <div className="text-gray-400 font-medium">@xlmnews</div>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-2xl text-sm transition-all duration-200 hover:scale-105 shadow-md">
                    Follow
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-md relative">
                      <span className="text-white font-bold text-sm">DF</span>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                        <ChartPieIcon className="w-2 h-2 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-100">
                        DeFi Pulse
                      </div>
                      <div className="text-gray-400 font-medium">
                        @defipulse
                      </div>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-2xl text-sm transition-all duration-200 hover:scale-105 shadow-md">
                    Follow
                  </button>
                </div>
              </div>
              <button className="text-blue-400 hover:text-blue-300 hover:underline mt-6 font-medium transition-colors">
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
