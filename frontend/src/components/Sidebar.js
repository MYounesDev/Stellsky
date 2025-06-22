"use client";

import {
  Home,
  Search,
  Bell,
  Mail,
  Bookmark,
  User,
  MoreHorizontal,
  TrendingUp,
  Users,
  Settings,
  LogOut,
  Plus,
} from "lucide-react";
import { useStellar } from "../hooks/useStellar";

const navigationItems = [
  { icon: Home, label: "Ana Sayfa", active: true },
  { icon: Search, label: "Keşfet" },
  { icon: Bell, label: "Bildirimler", badge: 3 },
  { icon: Mail, label: "Mesajlar", badge: 12 },
  { icon: Bookmark, label: "Kaydedilenler" },
  { icon: TrendingUp, label: "Trendler" },
  { icon: Users, label: "Topluluklar" },
  { icon: User, label: "Profil" },
  { icon: Settings, label: "Ayarlar" },
];

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
        <TrendingUp className="w-5 h-5 text-primary" />
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
        <TrendingUp className="w-5 h-5 text-primary" />
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
          <Settings className="w-4 h-4 text-muted" />
          <span className="text-sm text-foreground">Hakkında</span>
        </button>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const { isConnected, publicKey, formatPublicKey, disconnectWallet } =
    useStellar();

  return (
    <div className="w-20 h-full bg-background border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-4 flex justify-center">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-lg">S</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2">
        <div className="space-y-2">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-3 rounded-xl cursor-pointer transition-all hover:bg-hover group relative ${
                item.active
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:text-primary"
              }`}
              title={item.label}
            >
              <div className="relative">
                <item.icon className="w-6 h-6" />
                {item.badge && (
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Tooltip */}
              <div className="absolute left-full ml-3 px-3 py-2 bg-card border border-border rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 whitespace-nowrap">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Post Button */}
        <div className="mt-8">
          <button
            className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold p-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center"
            title="Stellsky'la Paylaş"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* User Profile */}
      {isConnected && (
        <div className="p-2 border-t border-border">
          <div className="relative group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
              <span className="text-white font-semibold">
                {formatPublicKey(publicKey).charAt(0).toUpperCase()}
              </span>
            </div>

            {/* User Menu Tooltip */}
            <div className="absolute left-full bottom-0 ml-3 bg-card border border-border rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 min-w-[200px]">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">
                    {formatPublicKey(publicKey).charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {formatPublicKey(publicKey)}
                  </p>
                  <p className="text-xs text-muted">@stellar_user</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={disconnectWallet}
                  className="flex-1 text-red-500 hover:bg-red-500/10 px-2 py-1 rounded text-xs font-medium transition-colors"
                >
                  Çıkış Yap
                </button>
                <button className="p-1 text-muted hover:text-foreground hover:bg-hover rounded transition-colors">
                  <MoreHorizontal className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
