"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { StrKey } from "@stellar/stellar-sdk";

const StellarContext = createContext();

export function StellarProvider({ children }) {
  const [publicKey, setPublicKey] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [manualAddress, setManualAddress] = useState("");
  const [addressError, setAddressError] = useState("");

  // Stellar adresi validasyonu
  const validateStellarAddress = (address) => {
    if (!address || address.trim() === "") {
      return { isValid: false, error: "Please enter an address" };
    }

    if (!address.startsWith("G")) {
      return { isValid: false, error: "Stellar address must start with G" };
    }

    if (address.length !== 56) {
      return { isValid: false, error: "Stellar address must be 56 characters" };
    }

    try {
      const isValid = StrKey.isValidEd25519PublicKey(address);
      if (!isValid) {
        return { isValid: false, error: "Invalid Stellar address format" };
      }
      return { isValid: true, error: "" };
    } catch (error) {
      return { isValid: false, error: "Invalid Stellar address" };
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
    console.log("Wallet connected:", address);
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
    console.log("Wallet disconnected");
  };

  // Check previous connection when page loads
  useEffect(() => {
    const savedKey = localStorage.getItem("stellar_public_key");
    if (savedKey) {
      setPublicKey(savedKey);
      setIsConnected(true);
      console.log("Wallet restored from localStorage:", savedKey);
    }
  }, []);

  // Public key'i kısalt
  const formatPublicKey = (key) => {
    if (!key) return "";
    return `${key.substring(0, 4)}...${key.substring(key.length - 4)}`;
  };

  const value = {
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

  return (
    <StellarContext.Provider value={value}>{children}</StellarContext.Provider>
  );
}

export function useStellar() {
  const context = useContext(StellarContext);
  if (!context) {
    throw new Error("useStellar must be used within a StellarProvider");
  }
  return context;
}
