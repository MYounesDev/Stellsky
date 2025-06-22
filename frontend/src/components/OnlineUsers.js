"use client";

import { Crown, Mic, MicOff, Headphones } from "lucide-react";

const onlineUsers = [
  {
    id: 1,
    name: "StellarMaster",
    avatar: "S",
    color: "from-primary to-accent",
    status: "online",
    activity: "Browsing Stellsky",
    role: "admin",
  },
  {
    id: 2,
    name: "CryptoTrader",
    avatar: "C",
    color: "from-blue-500 to-blue-600",
    status: "online",
    activity: "Trading yapıyor",
    role: "member",
  },
  {
    id: 3,
    name: "BlockchainDev",
    avatar: "B",
    color: "from-green-500 to-green-600",
    status: "online",
    activity: "Kod yazıyor",
    role: "member",
  },
  {
    id: 4,
    name: "DeFiExpert",
    avatar: "D",
    color: "from-purple-500 to-pink-500",
    status: "away",
    activity: "Uzakta",
    role: "member",
  },
  {
    id: 5,
    name: "NFTCollector",
    avatar: "N",
    color: "from-yellow-500 to-orange-500",
    status: "dnd",
    activity: "Rahatsız etmeyin",
    role: "member",
  },
];

const voiceUsers = [
  {
    id: 6,
    name: "VoiceUser1",
    avatar: "V",
    color: "from-indigo-500 to-purple-500",
    muted: false,
    deafened: false,
  },
  {
    id: 7,
    name: "VoiceUser2",
    avatar: "U",
    color: "from-pink-500 to-red-500",
    muted: true,
    deafened: false,
  },
];

const statusColors = {
  online: "bg-green-500",
  away: "bg-yellow-500",
  dnd: "bg-red-500",
  offline: "bg-gray-500",
};

function UserItem({ user, isVoice = false }) {
  return (
    <div className="flex items-center space-x-3 px-2 py-1 mx-2 rounded hover:bg-background/30 cursor-pointer group">
      <div className="relative">
        <div
          className={`w-8 h-8 rounded-full bg-gradient-to-br ${user.color} flex items-center justify-center`}
        >
          <span className="text-white font-medium text-sm">{user.avatar}</span>
        </div>
        {!isVoice && (
          <div
            className={`absolute -bottom-1 -right-1 w-3 h-3 ${
              statusColors[user.status]
            } rounded-full border-2 border-secondary`}
          />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-1">
          {user.role === "admin" && (
            <Crown className="w-3 h-3 text-yellow-500" />
          )}
          <span className="text-sm font-medium text-foreground truncate">
            {user.name}
          </span>
        </div>
        {!isVoice && user.activity && (
          <p className="text-xs text-muted truncate">{user.activity}</p>
        )}
      </div>

      {isVoice && (
        <div className="flex items-center space-x-1">
          {user.muted ? (
            <MicOff className="w-4 h-4 text-red-500" />
          ) : (
            <Mic className="w-4 h-4 text-muted" />
          )}
          {user.deafened && <Headphones className="w-4 h-4 text-red-500" />}
        </div>
      )}
    </div>
  );
}

export default function OnlineUsers() {
  const onlineCount = onlineUsers.filter((u) => u.status === "online").length;
  const totalCount = onlineUsers.length;

  return (
    <div className="w-64 bg-secondary h-full flex flex-col">
      {/* Header */}
      <div className="h-16 border-b border-border px-4 flex items-center">
        <h2 className="font-semibold text-foreground">
          Online — {onlineCount}
        </h2>
      </div>

      {/* Online Users */}
      <div className="flex-1 overflow-y-auto">
        <div className="py-4">
          {/* Voice Channel Users */}
          {voiceUsers.length > 0 && (
            <>
              <div className="px-4 pb-2">
                <h3 className="text-xs font-semibold text-muted uppercase tracking-wide">
                  Genel Sohbet — {voiceUsers.length}
                </h3>
              </div>
              {voiceUsers.map((user) => (
                <UserItem key={user.id} user={user} isVoice={true} />
              ))}
              <div className="border-b border-border my-4 mx-2" />
            </>
          )}

          {/* Online Users by Status */}
          {["online", "away", "dnd"].map((status) => {
            const users = onlineUsers.filter((u) => u.status === status);
            if (users.length === 0) return null;

            const statusLabels = {
              online: "Online",
              away: "Uzakta",
              dnd: "Rahatsız Etmeyin",
            };

            return (
              <div key={status} className="mb-4">
                <div className="px-4 pb-2">
                  <h3 className="text-xs font-semibold text-muted uppercase tracking-wide">
                    {statusLabels[status]} — {users.length}
                  </h3>
                </div>
                {users.map((user) => (
                  <UserItem key={user.id} user={user} />
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats */}
      <div className="border-t border-border p-4">
        <div className="text-xs text-muted space-y-1">
          <div className="flex justify-between">
            <span>Toplam Üye:</span>
            <span className="text-foreground font-medium">1,247</span>
          </div>
          <div className="flex justify-between">
            <span>Online:</span>
            <span className="text-green-500 font-medium">{onlineCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
