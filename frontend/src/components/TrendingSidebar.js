"use client";

import {
  TrendingUp,
  Users,
  Search,
  Sparkles,
  MoreHorizontal,
  Zap,
  Coins,
  Layers,
  Activity,
  Star,
  Rocket,
  Globe,
  BarChart3,
  Target,
  Shield,
} from "lucide-react";

const stellarEcosystem = [
  {
    id: 1,
    name: "XLM Price",
    icon: Star,
    value: "$0.1247",
    change: "+12.4%",
    type: "positive",
    description: "Last 24 hours",
    bgColor: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-500",
  },
  {
    id: 2,
    name: "StellarX Volume",
    icon: BarChart3,
    value: "$2.4M",
    change: "+8.7%",
    type: "positive",
    description: "DEX trading volume",
    bgColor: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    id: 3,
    name: "Active Wallets",
    icon: Shield,
    value: "156K",
    change: "+15.2%",
    type: "positive",
    description: "Daily users",
    bgColor: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500",
  },
  {
    id: 4,
    name: "NFT Collections",
    icon: Layers,
    value: "89",
    change: "+23.1%",
    type: "positive",
    description: "New projects",
    bgColor: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    id: 5,
    name: "Network Performance",
    icon: Activity,
    value: "3.2K TPS",
    change: "+5.8%",
    type: "positive",
    description: "Transaction speed",
    bgColor: "from-indigo-500/20 to-purple-500/20",
    iconColor: "text-indigo-500",
  },
  {
    id: 6,
    name: "Global Reach",
    icon: Globe,
    value: "180+",
    change: "Stable",
    type: "neutral",
    description: "Supported countries",
    bgColor: "from-gray-500/20 to-slate-500/20",
    iconColor: "text-gray-500",
  },
];

const suggestedUsers = [
  {
    id: 1,
    name: "Stellar Foundation",
    username: "@stellarfoundation",
    avatar: "⭐",
    color: "from-yellow-500 to-orange-500",
    followers: "124K",
    verified: true,
    description: "Official Stellar Development Foundation account",
  },
  {
    id: 2,
    name: "Vitalik Buterin",
    username: "@vitalikbuterin",
    avatar: "V",
    color: "from-purple-500 to-pink-500",
    followers: "4.2M",
    verified: true,
    description: "Ethereum co-founder",
  },
  {
    id: 3,
    name: "StellarDev",
    username: "@stellardev",
    avatar: "S",
    color: "from-blue-500 to-cyan-500",
    followers: "89K",
    verified: false,
    description: "Developer in Stellar ecosystem",
  },
];

const liveEvents = [
  {
    id: 1,
    title: "Stellar DevConnect 2024",
    time: "Live now",
    viewers: "2.4K",
    type: "event",
  },
  {
    id: 2,
    title: "XLM Price Analysis",
    time: "15 minutes ago",
    viewers: "856",
    type: "live",
  },
];

function StellarEcosystemCard() {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-2">
          <Rocket className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground text-lg">
            Stellar Ecosystem
          </h3>
        </div>
        <p className="text-sm text-muted mt-1">Live data and statistics</p>
      </div>

      <div className="grid grid-cols-1 gap-3 p-4">
        {stellarEcosystem.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className={`p-4 rounded-xl bg-gradient-to-br ${item.bgColor} border border-border/50 hover:border-border transition-all cursor-pointer group`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className={`p-2 rounded-lg bg-black/20 ${item.iconColor}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted">{item.description}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold text-foreground">{item.value}</p>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      item.type === "positive"
                        ? "text-green-600 bg-green-500/20"
                        : item.type === "negative"
                        ? "text-red-600 bg-red-500/20"
                        : "text-gray-600 bg-gray-500/20"
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 border-t border-border">
        <button className="text-primary hover:underline font-medium flex items-center space-x-1">
          <Target className="w-4 h-4" />
          <span>Detailed analysis</span>
        </button>
      </div>
    </div>
  );
}

function SuggestedFollows() {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-2">
          <Users className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground text-lg">Who to follow</h3>
        </div>
      </div>

      <div className="divide-y divide-border">
        {suggestedUsers.map((user) => (
          <div key={user.id} className="p-4 hover:bg-hover transition-colors">
            <div className="flex items-start space-x-3">
              <div
                className={`w-12 h-12 bg-gradient-to-br ${user.color} rounded-full flex items-center justify-center flex-shrink-0`}
              >
                <span className="text-white font-bold">{user.avatar}</span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-1">
                  <span className="font-semibold text-foreground truncate">
                    {user.name}
                  </span>
                  {user.verified && (
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted">{user.username}</p>
                <p className="text-xs text-muted mt-1 line-clamp-2">
                  {user.description}
                </p>
                <p className="text-xs text-muted mt-1">
                  {user.followers} followers
                </p>
              </div>

              <button className="bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors text-sm">
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-border">
        <button className="text-primary hover:underline font-medium">
          Show more
        </button>
      </div>
    </div>
  );
}

function LiveEvents() {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-accent" />
          <h3 className="font-bold text-foreground text-lg">Live Events</h3>
        </div>
      </div>

      <div className="divide-y divide-border">
        {liveEvents.map((event) => (
          <div
            key={event.id}
            className="p-4 hover:bg-hover transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="font-semibold text-foreground">{event.title}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-muted">{event.time}</span>
                  </div>
                  <span className="text-xs text-muted">·</span>
                  <span className="text-xs text-muted">
                    {event.viewers} viewers
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SearchWidget() {
  return (
    <div className="bg-card border border-border rounded-2xl p-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
        <input
          type="text"
          placeholder="Search Stellsky..."
          className="w-full bg-secondary border border-border rounded-full py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
        />
      </div>
    </div>
  );
}

export default function TrendingSidebar() {
  return (
    <div className="w-80 h-full bg-background p-4 space-y-6 overflow-y-auto">
      <SearchWidget />
      <StellarEcosystemCard />
      <SuggestedFollows />
      <LiveEvents />

      {/* Footer */}
      <div className="text-center py-6">
        <div className="flex flex-wrap gap-2 text-xs text-muted justify-center">
          <button className="hover:underline">About</button>
          <button className="hover:underline">Privacy</button>
          <button className="hover:underline">Terms</button>
          <button className="hover:underline">API</button>
          <button className="hover:underline">Support</button>
        </div>
        <p className="text-xs text-muted mt-2">
          © 2024 Stellsky. Decentralized social media on Stellar Network.
        </p>
      </div>
    </div>
  );
}
