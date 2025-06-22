"use client";

import { useState } from "react";
import { Plus, Hash, Volume2, Settings } from "lucide-react";

const servers = [
  {
    id: "home",
    name: "Stellsky",
    icon: "S",
    color: "from-primary to-accent",
    active: true,
  },
  {
    id: "defi",
    name: "DeFi Hub",
    icon: "D",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "stellar",
    name: "Stellar Dev",
    icon: "⭐",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "nft",
    name: "NFT Space",
    icon: "N",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "trading",
    name: "Trading",
    icon: "📈",
    color: "from-green-500 to-emerald-500",
  },
];

const channels = [
  { id: "general", name: "genel", type: "text" },
  { id: "stellar-chat", name: "stellar-sohbet", type: "text" },
  { id: "announcements", name: "duyurular", type: "text" },
  { id: "voice-general", name: "Genel Sohbet", type: "voice" },
  { id: "voice-trading", name: "Trading Odası", type: "voice" },
];

function ServerIcon({ server, isActive, onClick }) {
  return (
    <div className="relative group mb-2">
      <div
        onClick={() => onClick(server.id)}
        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${
          server.color
        } flex items-center justify-center cursor-pointer transition-all duration-200 hover:rounded-xl ${
          isActive ? "rounded-xl" : ""
        }`}
      >
        <span className="text-white font-bold text-lg">{server.icon}</span>
      </div>

      {/* Active indicator */}
      <div
        className={`absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 bg-white rounded-r transition-all duration-200 ${
          isActive ? "h-8" : "h-0 group-hover:h-4"
        }`}
      />

      {/* Tooltip */}
      <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-background border border-border rounded-lg px-3 py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
        {server.name}
        <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-background border-l border-b border-border rotate-45" />
      </div>
    </div>
  );
}

function ChannelItem({ channel, isActive, onClick }) {
  const Icon = channel.type === "voice" ? Volume2 : Hash;

  return (
    <div
      onClick={() => onClick(channel.id)}
      className={`flex items-center space-x-2 px-2 py-1 mx-2 rounded cursor-pointer transition-colors hover:bg-background/50 ${
        isActive ? "bg-background/30 text-foreground" : "text-muted"
      }`}
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">{channel.name}</span>
    </div>
  );
}

export default function ServerSidebar() {
  const [activeServer, setActiveServer] = useState("home");
  const [activeChannel, setActiveChannel] = useState("general");

  return (
    <div className="flex h-full">
      {/* Server list */}
      <div className="w-18 bg-[#1e1f22] p-3 flex flex-col items-center">
        {servers.map((server) => (
          <ServerIcon
            key={server.id}
            server={server}
            isActive={activeServer === server.id}
            onClick={setActiveServer}
          />
        ))}

        {/* Add server button */}
        <div className="w-12 h-12 bg-background border-2 border-dashed border-muted rounded-2xl flex items-center justify-center cursor-pointer hover:border-primary transition-colors group hover:rounded-xl">
          <Plus className="w-6 h-6 text-muted group-hover:text-primary" />
        </div>
      </div>

      {/* Channel list */}
      <div className="w-60 bg-secondary flex flex-col">
        {/* Server header */}
        <div className="h-16 border-b border-border px-4 flex items-center justify-between">
          <h2 className="font-bold text-foreground">
            {servers.find((s) => s.id === activeServer)?.name}
          </h2>
          <Settings className="w-4 h-4 text-muted hover:text-foreground cursor-pointer" />
        </div>

        {/* Channels */}
        <div className="flex-1 pt-4">
          <div className="px-4 pb-2">
            <h3 className="text-xs font-semibold text-muted uppercase tracking-wide">
              Metin Kanalları
            </h3>
          </div>

          {channels
            .filter((c) => c.type === "text")
            .map((channel) => (
              <ChannelItem
                key={channel.id}
                channel={channel}
                isActive={activeChannel === channel.id}
                onClick={setActiveChannel}
              />
            ))}

          <div className="px-4 py-4">
            <h3 className="text-xs font-semibold text-muted uppercase tracking-wide">
              Ses Kanalları
            </h3>
          </div>

          {channels
            .filter((c) => c.type === "voice")
            .map((channel) => (
              <ChannelItem
                key={channel.id}
                channel={channel}
                isActive={false}
                onClick={setActiveChannel}
              />
            ))}
        </div>

        {/* User panel */}
        <div className="h-14 bg-[#1e1f22] flex items-center px-2 space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-sm">S</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              Stellar User
            </p>
            <p className="text-xs text-muted">Online</p>
          </div>
          <Settings className="w-4 h-4 text-muted hover:text-foreground cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
