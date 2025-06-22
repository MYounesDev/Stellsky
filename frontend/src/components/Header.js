"use client";

import { useState } from "react";
import { useStellar } from "../hooks/useStellar";
import {
  Search,
  Bell,
  MessageCircle,
  User,
  LogOut,
  X,
  Wallet,
} from "lucide-react";

export default function Header() {
  const {
    isConnected,
    publicKey,
    connectWallet,
    disconnectWallet,
    isLoading,
    formatPublicKey,
    walletType,
    showManualEntry,
    connectWithManualKey,
    setShowManualEntry,
    isValidStellarAddress,
  } = useStellar();

  const [manualKey, setManualKey] = useState("");
  const [keyError, setKeyError] = useState("");

  const handleManualSubmit = async (e) => {
    e.preventDefault();
    setKeyError("");

    if (!manualKey.trim()) {
      setKeyError("Lütfen bir public key girin");
      return;
    }

    if (!isValidStellarAddress(manualKey)) {
      setKeyError(
        "Geçersiz Stellar public key. G ile başlamalı ve 56 karakter olmalıdır."
      );
      return;
    }

    const success = await connectWithManualKey(manualKey);
    if (success) {
      setManualKey("");
    }
  };

  return (
    <>
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
                      <span className="text-xs text-muted">({walletType})</span>
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
                <button
                  onClick={connectWallet}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <Wallet className="w-4 h-4" />
                  <span>{isLoading ? "Bağlanıyor..." : "Cüzdan Bağla"}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Manual Key Entry Modal */}
      {showManualEntry && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-secondary border border-border rounded-xl p-6 w-full max-w-md animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                Stellar Public Key Girin
              </h3>
              <button
                onClick={() => setShowManualEntry(false)}
                className="p-1 hover:bg-background rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-muted" />
              </button>
            </div>

            <form onSubmit={handleManualSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Stellar Public Key
                </label>
                <input
                  type="text"
                  value={manualKey}
                  onChange={(e) => {
                    setManualKey(e.target.value);
                    setKeyError("");
                  }}
                  placeholder="GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  maxLength={56}
                />
                {keyError && (
                  <p className="text-red-400 text-xs mt-1">{keyError}</p>
                )}
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowManualEntry(false)}
                  className="flex-1 px-4 py-2 border border-border rounded-lg text-muted hover:text-foreground hover:bg-background transition-colors"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Bağlan
                </button>
              </div>
            </form>

            <div className="mt-4 p-3 bg-background rounded-lg">
              <p className="text-xs text-muted leading-relaxed">
                <strong>Bilgi:</strong> xBull Wallet eklentiniz yoksa manuel
                olarak Stellar public key'inizi girebilirsiniz. Bu sadece okuma
                modudur - işlem imzalama için xBull gereklidir.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
