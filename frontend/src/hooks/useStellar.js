"use client";

import { useState, useEffect } from "react";

export function useStellar() {
  const [publicKey, setPublicKey] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showManualEntry, setShowManualEntry] = useState(false);

  // xBull Wallet kontrolü
  const checkXBull = () => {
    return typeof window !== "undefined" && window.xBull;
  };

  // Manual key girişi
  const connectWithManualKey = async (inputKey) => {
    if (!inputKey || !isValidStellarAddress(inputKey)) {
      alert(
        "Lütfen geçerli bir Stellar public key girin (G ile başlayan 56 karakter)"
      );
      return false;
    }

    setPublicKey(inputKey);
    setIsConnected(true);
    localStorage.setItem("stellar_public_key", inputKey);
    localStorage.setItem("stellar_wallet_type", "manual");
    setShowManualEntry(false);
    return true;
  };

  // xBull Wallet bağlantısı
  const connectWithXBull = async () => {
    if (!checkXBull()) {
      alert("xBull Wallet eklentisi bulunamadı. Lütfen xBull'u yükleyin.");
      window.open("https://xbull.app/", "_blank");
      return;
    }

    setIsLoading(true);
    try {
      const response = await window.xBull.connect();
      if (response && response.publicKey) {
        setPublicKey(response.publicKey);
        setIsConnected(true);
        localStorage.setItem("stellar_public_key", response.publicKey);
        localStorage.setItem("stellar_wallet_type", "xbull");
      }
    } catch (error) {
      console.error("xBull cüzdan bağlantı hatası:", error);
      alert("xBull cüzdan bağlantısı başarısız oldu.");
    } finally {
      setIsLoading(false);
    }
  };

  // Ana bağlantı fonksiyonu
  const connectWallet = async () => {
    if (checkXBull()) {
      await connectWithXBull();
    } else {
      // xBull yoksa manual giriş göster
      setShowManualEntry(true);
    }
  };

  // İşlem imzalama (sadece xBull için)
  const signTransaction = async (transaction) => {
    try {
      if (checkXBull()) {
        const result = await window.xBull.signTransaction({
          xdr: transaction,
          network: "PUBLIC",
        });
        return result.signedXDR;
      } else {
        throw new Error(
          "İşlem imzalama manuel giriş ile desteklenmiyor. Lütfen xBull Wallet kullanın."
        );
      }
    } catch (error) {
      console.error("İşlem imzalama hatası:", error);
      throw error;
    }
  };

  // Cüzdan bağlantısını kes
  const disconnectWallet = () => {
    setPublicKey(null);
    setIsConnected(false);
    setShowManualEntry(false);
    localStorage.removeItem("stellar_public_key");
    localStorage.removeItem("stellar_wallet_type");
  };

  // Sayfa yüklendiğinde önceki bağlantıyı kontrol et
  useEffect(() => {
    const savedKey = localStorage.getItem("stellar_public_key");
    const walletType = localStorage.getItem("stellar_wallet_type");

    if (savedKey && (walletType === "manual" || walletType === "xbull")) {
      setPublicKey(savedKey);
      setIsConnected(true);
    }
  }, []);

  // Public key'i kısalt
  const formatPublicKey = (key) => {
    if (!key) return "";
    return `${key.substring(0, 4)}...${key.substring(key.length - 4)}`;
  };

  // Cüzdan adresini doğrula (Stellar G ile başlar ve 56 karakter uzunluğunda)
  const isValidStellarAddress = (address) => {
    return address && address.length === 56 && address.startsWith("G");
  };

  // Wallet türünü belirle
  const getWalletType = () => {
    const walletType = localStorage.getItem("stellar_wallet_type");
    if (walletType === "xbull") return "xBull";
    if (walletType === "manual") return "Manuel";
    return "Stellar Cüzdan";
  };

  return {
    publicKey,
    isConnected,
    isLoading,
    showManualEntry,
    connectWallet,
    connectWithManualKey,
    disconnectWallet,
    signTransaction,
    formatPublicKey,
    isValidStellarAddress,
    walletType: getWalletType(),
    setShowManualEntry,
  };
}
