"use client";

import {
  TrendingUp as Trending,
  Users,
  Star,
  Settings,
  Info,
} from "lucide-react";

const trendingTopics = [
  { topic: "#Stellar", posts: "2.4K" },
  { topic: "#DeFi", posts: "1.8K" },
  { topic: "#Web3", posts: "3.2K" },
  { topic: "#Blockchain", posts: "896" },
  { topic: "#Stellsky", posts: "542" },
];

const suggestedUsers = [
  { id: 1, address: "GABC...XYZ1", followers: "12.5K" },
  { id: 2, address: "GDEF...ABC2", followers: "8.3K" },
  { id: 3, address: "GHIJ...DEF3", followers: "5.1K" },
];

function TrendingCard() {
  return (
    <div className="bg-secondary border border-border rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Trending className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-foreground">Gündem</h3>
      </div>

      <div className="space-y-3">
        {trendingTopics.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 hover:bg-background rounded-lg transition-colors cursor-pointer"
          >
            <div>
              <p className="font-medium text-primary">{item.topic}</p>
              <p className="text-sm text-muted">{item.posts} gönderi</p>
            </div>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse-custom"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SuggestedUsers() {
  return (
    <div className="bg-secondary border border-border rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Users className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-foreground">Önerilen Kullanıcılar</h3>
      </div>

      <div className="space-y-4">
        {suggestedUsers.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-xs">
                  {user.address.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">
                  {user.address}
                </p>
                <p className="text-xs text-muted">{user.followers} takipçi</p>
              </div>
            </div>

            <button className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors">
              Takip Et
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuickStats() {
  return (
    <div className="bg-secondary border border-border rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Star className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-foreground">İstatistikler</h3>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-muted text-sm">Toplam Kullanıcı</span>
          <span className="font-semibold text-foreground">24.8K</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted text-sm">Günlük Aktif</span>
          <span className="font-semibold text-foreground">3.2K</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted text-sm">Toplam Post</span>
          <span className="font-semibold text-foreground">158K</span>
        </div>
        <div className="w-full bg-border rounded-full h-2 mt-4">
          <div
            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
            style={{ width: "68%" }}
          ></div>
        </div>
        <p className="text-xs text-muted text-center">Ağ Aktivitesi</p>
      </div>
    </div>
  );
}

function QuickActions() {
  return (
    <div className="bg-secondary border border-border rounded-xl p-6">
      <h3 className="font-semibold text-foreground mb-4">Hızlı Erişim</h3>

      <div className="space-y-2">
        <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-background rounded-lg transition-colors">
          <Settings className="w-4 h-4 text-muted" />
          <span className="text-sm text-foreground">Ayarlar</span>
        </button>

        <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-background rounded-lg transition-colors">
          <Info className="w-4 h-4 text-muted" />
          <span className="text-sm text-foreground">Hakkında</span>
        </button>
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="w-80 space-y-6 animate-fadeIn">
      <TrendingCard />
      <SuggestedUsers />
      <QuickStats />
      <QuickActions />

      {/* Footer */}
      <div className="text-center py-6">
        <p className="text-xs text-muted">
          © 2024 Stellsky. Web3 sosyal medya platformu.
        </p>
        <div className="flex items-center justify-center space-x-1 mt-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse-custom"></div>
          <span className="text-xs text-muted">Stellar Network</span>
        </div>
      </div>
    </div>
  );
}
