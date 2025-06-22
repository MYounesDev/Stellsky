"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { StrKey } from "@stellar/stellar-sdk";
import apiService from "../lib/api";

const StellarContext = createContext();

export function StellarProvider({ children }) {
  const [publicKey, setPublicKey] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [manualAddress, setManualAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [user, setUser] = useState(null);

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
  const connectWithAddress = async (address) => {
    const validation = validateStellarAddress(address);

    if (!validation.isValid) {
      setAddressError(validation.error);
      return false;
    }

    setIsLoading(true);

    try {
      // Backend'e login isteği gönder
      const response = await apiService.login(address);

      if (response.success) {
        setPublicKey(address);
        setIsConnected(true);
        setUser(response.user);
        setAddressError("");
        setManualAddress("");
        localStorage.setItem("stellar_public_key", address);
        console.log("Wallet connected:", address);
        return true;
      } else {
        setAddressError(response.message || "Login failed");
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      setAddressError("Failed to connect to server");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Manuel adres input değişimi
  const handleAddressChange = (address) => {
    setManualAddress(address);
    if (addressError) {
      setAddressError("");
    }
  };

  // Cüzdan bağlantısını kes
  const disconnectWallet = async () => {
    try {
      await apiService.logout();
    } catch (error) {
      console.error("Logout error:", error);
    }

    setPublicKey(null);
    setIsConnected(false);
    setUser(null);
    setManualAddress("");
    setAddressError("");
    localStorage.removeItem("stellar_public_key");
    console.log("Wallet disconnected");
  };

  // Check previous connection when page loads
  useEffect(() => {
    const checkAuthStatus = async () => {
      setIsLoading(true);

      try {
        const token = apiService.getToken();
        const savedKey = localStorage.getItem("stellar_public_key");

        if (token && savedKey) {
          // Token'ı doğrula
          const response = await apiService.checkAuth();

          if (response.success) {
            setPublicKey(savedKey);
            setIsConnected(true);
            setUser(response.user);
            console.log("Auth restored from localStorage:", savedKey);
          } else {
            // Token geçersiz, temizle
            localStorage.removeItem("stellar_public_key");
            apiService.removeToken();
          }
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        localStorage.removeItem("stellar_public_key");
        apiService.removeToken();
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
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
    user,
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
