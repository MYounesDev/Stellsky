"use client";

import { useStellar } from "../contexts/StellarContext";
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
    <header className="h-16 bg-background/80 backdrop-blur-xl border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Sol boşluk */}
        <div className="w-20"></div>

        {/* Center - Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Stellsky
          </h1>
        </div>

        {/* Sağ taraf - Giriş */}
        <div className="w-80 flex justify-end">
          {isConnected ? (
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-hover rounded-full transition-colors relative">
                <Bell className="w-5 h-5 text-muted" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"></span>
              </button>

              <div className="flex items-center space-x-2 bg-card border border-border px-3 py-2 rounded-full">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-xs">
                    {formatPublicKey(publicKey).charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm font-medium text-foreground">
                  {formatPublicKey(publicKey)}
                </span>
              </div>

              <button
                onClick={disconnectWallet}
                className="p-2 hover:bg-hover rounded-full transition-colors text-muted hover:text-red-500"
                title="Çıkış Yap"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-3 relative">
              {!showManualInput ? (
                <button
                  onClick={() => setShowManualInput(true)}
                  className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center space-x-2"
                >
                  <Wallet className="w-4 h-4" />
                  <span>Sign In</span>
                </button>
              ) : (
                <div className="flex items-center space-x-2 bg-card border border-border p-2 rounded-full">
                  <input
                    type="text"
                    value={manualAddress}
                    onChange={(e) => handleAddressChange(e.target.value)}
                    placeholder="Stellar adresinizi girin (G...)"
                    className="bg-transparent text-foreground placeholder-muted border-none outline-none text-sm w-48"
                  />

                  <button
                    onClick={handleManualConnect}
                    disabled={!manualAddress.trim()}
                    className="bg-primary text-white p-1.5 rounded-full hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    title="Bağlan"
                  >
                    <Check className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      setShowManualInput(false);
                      handleAddressChange("");
                    }}
                    className="text-muted hover:text-foreground p-1.5 rounded-full transition-colors"
                    title="İptal"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              )}

              {addressError && (
                <div className="absolute top-full right-0 mt-2 bg-red-500 text-white text-xs px-3 py-2 rounded-xl z-10">
                  {addressError}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
