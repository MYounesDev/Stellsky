"use client";

import { useStellar } from "../hooks/useStellar";
import {
  Search,
  Bell,
  MessageCircle,
  User,
  LogOut,
  Wallet,
  Check,
} from "lucide-react";
import { useState } from "react";

export default function Header() {
  const {
    isConnected,
    publicKey,
    disconnectWallet,
    formatPublicKey,
    manualAddress,
    addressError,
    connectWithAddress,
    handleAddressChange,
  } = useStellar();

  const [showManualInput, setShowManualInput] = useState(false);

  const handleManualConnect = () => {
    const success = connectWithAddress(manualAddress);
    if (success) {
      setShowManualInput(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Sol taraf - Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Stellsky
              </h1>
            </div>
          </div>

          {/* Orta - Arama çubuğu */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
              <input
                type="text"
                placeholder="Ara..."
                className="w-full bg-background border border-border rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Sağ taraf - Navigasyon */}
          <div className="flex items-center space-x-4">
            {isConnected ? (
              <>
                {/* Bildirimler */}
                <button className="p-2 hover:bg-background rounded-full transition-colors relative">
                  <Bell className="w-5 h-5 text-muted" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"></span>
                </button>

                {/* Mesajlar */}
                <button className="p-2 hover:bg-background rounded-full transition-colors">
                  <MessageCircle className="w-5 h-5 text-muted" />
                </button>

                {/* Kullanıcı menüsü */}
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 bg-background px-3 py-2 rounded-full">
                    <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <User className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium">
                      {formatPublicKey(publicKey)}
                    </span>
                  </div>

                  <button
                    onClick={disconnectWallet}
                    className="p-2 hover:bg-background rounded-full transition-colors text-muted hover:text-foreground"
                    title="Çıkış Yap"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3 relative">
                {!showManualInput ? (
                  <button
                    onClick={() => setShowManualInput(true)}
                    className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center space-x-2"
                  >
                    <Wallet className="w-4 h-4" />
                    <span>Cüzdan Bağla</span>
                  </button>
                ) : (
                  <div className="flex items-center space-x-2 bg-background p-2 rounded-full border border-border">
                    <input
                      type="text"
                      value={manualAddress}
                      onChange={(e) => handleAddressChange(e.target.value)}
                      placeholder="Stellar adresinizi girin (G...)"
                      className="bg-transparent text-foreground placeholder-muted border-none outline-none text-sm w-64"
                    />

                    <button
                      onClick={handleManualConnect}
                      disabled={!manualAddress.trim()}
                      className="bg-primary text-white p-1 rounded-full hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      title="Bağlan"
                    >
                      <Check className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => {
                        setShowManualInput(false);
                        handleAddressChange("");
                      }}
                      className="text-muted hover:text-foreground p-1 rounded-full transition-colors"
                      title="İptal"
                    >
                      <LogOut className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {addressError && (
                  <div className="absolute top-full right-0 mt-2 bg-red-500 text-white text-xs px-3 py-1 rounded-lg z-10">
                    {addressError}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
