"use client";

import MainLayout from "../../components/MainLayout";
import {
  CurrencyDollarIcon,
  PaperAirplaneIcon,
  QrCodeIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  BoltIcon,
  ShieldCheckIcon,
  CopyIcon,
  EyeIcon,
  EyeSlashIcon,
  WalletIcon,
  GlobeAltIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function StellarPay() {
  const [activeTab, setActiveTab] = useState("send");
  const [showBalance, setShowBalance] = useState(true);
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  // Mock transaction data
  const transactions = [
    {
      id: 1,
      type: "sent",
      amount: "50.00",
      recipient: "sarah@stellar.org",
      timestamp: "2 minutes ago",
      status: "completed",
      fee: "0.001",
      hash: "a1b2c3d4e5f6g7h8i9j0",
    },
    {
      id: 2,
      type: "received",
      amount: "125.50",
      sender: "alex@stellardev.com",
      timestamp: "1 hour ago",
      status: "completed",
      fee: "0.001",
      hash: "z9y8x7w6v5u4t3s2r1q0",
    },
    {
      id: 3,
      type: "sent",
      amount: "25.75",
      recipient: "mike@stellar.net",
      timestamp: "3 hours ago",
      status: "pending",
      fee: "0.001",
      hash: "m5n6o7p8q9r0s1t2u3v4",
    },
  ];

  return (
    <MainLayout>
      <div className="border-x border-gray-700/50 min-h-screen bg-gray-950/50">
        {/* Header */}
        <div className="sticky top-0 bg-gray-950/90 backdrop-blur-lg border-b border-gray-700/50 p-6 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CurrencyDollarIcon className="w-8 h-8 text-green-400" />
              <h1 className="text-2xl font-bold text-gray-100">Stellar Pay</h1>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <BoltIcon className="w-4 h-4 text-yellow-400" />
              <span>Lightning Fast</span>
            </div>
          </div>
        </div>

        {/* Wallet Balance */}
        <div className="p-6 border-b border-gray-700/50">
          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-3xl p-6 border border-green-500/20 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
              <div className="absolute top-4 left-8 w-1 h-1 bg-green-300 rounded-full animate-pulse"></div>
              <div className="absolute top-12 right-12 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
              <div className="absolute bottom-8 left-16 w-1 h-1 bg-cyan-300 rounded-full animate-bounce"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <WalletIcon className="w-6 h-6 text-green-400" />
                  <span className="text-white font-semibold">XLM Balance</span>
                </div>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="p-2 hover:bg-gray-800/60 rounded-xl transition-all duration-200"
                >
                  {showBalance ? (
                    <EyeSlashIcon className="w-5 h-5 text-gray-400" />
                  ) : (
                    <EyeIcon className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>

              <div className="mb-4">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  {showBalance ? "1,250.50 XLM" : "••••••••"}
                </div>
                <div className="text-lg text-gray-300">
                  {showBalance ? "≈ $155.06 USD" : "≈ $•••.••"}
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Connected to Stellar Network</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="w-4 h-4 text-blue-400" />
                  <span>Wallet Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="p-6 border-b border-gray-700/50">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-800/40 rounded-2xl p-4 text-center">
              <ArrowUpIcon className="w-6 h-6 text-red-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-white">$2,450</div>
              <div className="text-xs text-gray-400">Sent This Month</div>
            </div>
            <div className="bg-gray-800/40 rounded-2xl p-4 text-center">
              <ArrowDownIcon className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-white">$3,120</div>
              <div className="text-xs text-gray-400">Received This Month</div>
            </div>
            <div className="bg-gray-800/40 rounded-2xl p-4 text-center">
              <ChartBarIcon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-white">47</div>
              <div className="text-xs text-gray-400">Total Transactions</div>
            </div>
          </div>
        </div>

        {/* Action Tabs */}
        <div className="border-b border-gray-700/50">
          <div className="flex">
            <button
              onClick={() => setActiveTab("send")}
              className={`flex-1 py-4 px-6 text-center border-b-2 font-semibold transition-colors ${
                activeTab === "send"
                  ? "border-green-500 text-green-400"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              Send
            </button>
            <button
              onClick={() => setActiveTab("receive")}
              className={`flex-1 py-4 px-6 text-center border-b-2 font-semibold transition-colors ${
                activeTab === "receive"
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              Receive
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`flex-1 py-4 px-6 text-center border-b-2 font-semibold transition-colors ${
                activeTab === "history"
                  ? "border-purple-500 text-purple-400"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              History
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "send" && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Recipient Address or Stellar ID
                </label>
                <input
                  type="text"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="user@stellar.org or GDQP..."
                  className="w-full bg-gray-800/60 border border-gray-600/50 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Amount (XLM)
                </label>
                <input
                  type="number"
                  value={sendAmount}
                  onChange={(e) => setSendAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full bg-gray-800/60 border border-gray-600/50 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20"
                />
                <div className="mt-2 text-sm text-gray-400">
                  ≈ ${(parseFloat(sendAmount) * 0.124 || 0).toFixed(2)} USD
                </div>
              </div>

              <div className="bg-gray-800/40 rounded-2xl p-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Network Fee</span>
                  <span className="text-white">0.001 XLM</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Processing Time</span>
                  <span className="text-green-400">~3-5 seconds</span>
                </div>
                <div className="border-t border-gray-600/50 pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span className="text-gray-300">Total</span>
                    <span className="text-white">
                      {(parseFloat(sendAmount) + 0.001 || 0.001).toFixed(3)} XLM
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3">
                <PaperAirplaneIcon className="w-5 h-5" />
                Send Payment
              </button>
            </div>
          )}

          {activeTab === "receive" && (
            <div className="space-y-6 text-center">
              <div className="bg-white rounded-3xl p-8 mx-auto max-w-xs">
                <QrCodeIcon className="w-full h-full text-gray-900" />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Your Stellar Address
                </h3>
                <div className="bg-gray-800/60 rounded-2xl p-4">
                  <div className="text-sm text-gray-400 mb-2">Stellar ID</div>
                  <div className="text-white font-mono text-sm break-all mb-3">
                    alex@stellardev.stellar
                  </div>
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mx-auto">
                    <CopyIcon className="w-4 h-4" />
                    Copy Address
                  </button>
                </div>

                <div className="bg-gray-800/60 rounded-2xl p-4">
                  <div className="text-sm text-gray-400 mb-2">Public Key</div>
                  <div className="text-white font-mono text-xs break-all mb-3">
                    GDQP2KPQGKIHYJGXNUIYOMHARUARCA7DJT5FO2FFOOKY3B2WSQHG4W37
                  </div>
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mx-auto">
                    <CopyIcon className="w-4 h-4" />
                    Copy Public Key
                  </button>
                </div>
              </div>

              <div className="text-sm text-gray-400">
                Share your Stellar address or QR code to receive payments
              </div>
            </div>
          )}

          {activeTab === "history" && (
            <div className="space-y-4">
              {transactions.map((tx) => (
                <div
                  key={tx.id}
                  className="bg-gray-800/40 rounded-2xl p-4 hover:bg-gray-800/60 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          tx.type === "sent"
                            ? "bg-red-500/20 text-red-400"
                            : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {tx.type === "sent" ? (
                          <ArrowUpIcon className="w-5 h-5" />
                        ) : (
                          <ArrowDownIcon className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <div className="text-white font-semibold">
                          {tx.type === "sent" ? "Sent to" : "Received from"}{" "}
                          {tx.recipient || tx.sender}
                        </div>
                        <div className="text-sm text-gray-400">
                          {tx.timestamp}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-lg font-bold ${
                          tx.type === "sent" ? "text-red-400" : "text-green-400"
                        }`}
                      >
                        {tx.type === "sent" ? "-" : "+"}
                        {tx.amount} XLM
                      </div>
                      <div className="flex items-center gap-2">
                        {tx.status === "completed" ? (
                          <CheckCircleIcon className="w-4 h-4 text-green-400" />
                        ) : tx.status === "pending" ? (
                          <ClockIcon className="w-4 h-4 text-yellow-400" />
                        ) : (
                          <ExclamationTriangleIcon className="w-4 h-4 text-red-400" />
                        )}
                        <span className="text-sm text-gray-400 capitalize">
                          {tx.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">
                    Hash: {tx.hash}
                  </div>
                </div>
              ))}

              <div className="text-center py-8">
                <GlobeAltIcon className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <div className="text-gray-400">
                  All transactions are secured by Stellar blockchain
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
