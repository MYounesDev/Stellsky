"use client";

import { useState, useEffect } from "react";
import { StrKey } from "@stellar/stellar-sdk";

export function useStellar() {
  const [publicKey, setPublicKey] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [manualAddress, setManualAddress] = useState("");
  const [addressError, setAddressError] = useState("");

  // Stellar adresi validasyonu
  const validateStellarAddress = (address) => {
    if (!address || address.trim() === "") {
      return { isValid: false, error: "Lütfen bir adres girin" };
    }

    if (!address.startsWith("G")) {
      return { isValid: false, error: "Stellar adresi G ile başlamalıdır" };
    }

    if (address.length !== 56) {
      return { isValid: false, error: "Stellar adresi 56 karakter olmalıdır" };
    }

    try {
      const isValid = StrKey.isValidEd25519PublicKey(address);
      if (!isValid) {
        return { isValid: false, error: "Geçersiz Stellar adresi formatı" };
      }
      return { isValid: true, error: "" };
    } catch (error) {
      return { isValid: false, error: "Geçersiz Stellar adresi" };
    }
  };

  // Manuel adres girişi
  const connectWithAddress = (address) => {
    const validation = validateStellarAddress(address);

    if (!validation.isValid) {
      setAddressError(validation.error);
      return false;
    }

    setPublicKey(address);
    setIsConnected(true);
    setAddressError("");
    setManualAddress("");
    localStorage.setItem("stellar_public_key", address);
    return true;
  };

  // Manuel adres input değişimi
  const handleAddressChange = (address) => {
    setManualAddress(address);
    if (addressError) {
      setAddressError("");
    }
  };

  // Cüzdan bağlantısını kes
  const disconnectWallet = () => {
    setPublicKey(null);
    setIsConnected(false);
    setManualAddress("");
    setAddressError("");
    localStorage.removeItem("stellar_public_key");
  };

  // Check previous connection when page loads
  useEffect(() => {
    const savedKey = localStorage.getItem("stellar_public_key");
    if (savedKey) {
      setPublicKey(savedKey);
      setIsConnected(true);
    }
  }, []);

  // Public key'i kısalt
  const formatPublicKey = (key) => {
    if (!key) return "";
    return `${key.substring(0, 4)}...${key.substring(key.length - 4)}`;
  };

  return {
    publicKey,
    isConnected,
    isLoading,
    disconnectWallet,
    formatPublicKey,
    // Manuel adres girişi
    manualAddress,
    addressError,
    connectWithAddress,
    handleAddressChange,
    validateStellarAddress,
  };
}
