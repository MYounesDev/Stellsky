"use client";

import { useState } from "react";
import {
  EyeIcon,
  EyeSlashIcon,
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
  SparklesIcon,
  CheckCircleIcon,
  WalletIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4 font-montserrat">
      {/* Stellar Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-green-400 rounded-full animate-bounce delay-700"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 1px, transparent 0), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: "100px 100px",
        }}
      ></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl animate-bounce"></div>

      {/* Main Container */}
      <div className="relative w-full max-w-5xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="text-center lg:text-left space-y-8 p-8">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center justify-center lg:justify-start gap-4 hover:scale-105 transition-transform duration-200"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl relative">
              <span className="text-white font-bold text-3xl">⭐</span>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Stellsky
              </span>
              <span className="text-sm text-gray-400 font-medium">
                Powered by Stellar
              </span>
            </div>
          </a>

          {/* Hero Text */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Join the
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                Cosmic
              </span>
              <br />
              Community
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Create your account and become part of the most innovative Web3
              social platform. Connect, share, and explore the decentralized
              future.
            </p>
          </div>

          {/* Web3 Features */}
          <div className="grid gap-4 max-w-md">
            <div className="flex items-center gap-3 text-gray-300">
              <WalletIcon className="w-6 h-6 text-purple-400" />
              <span className="text-lg">Connect your crypto wallet</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <GlobeAltIcon className="w-6 h-6 text-blue-400" />
              <span className="text-lg">Decentralized social experience</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <ShieldCheckIcon className="w-6 h-6 text-cyan-400" />
              <span className="text-lg">Secure blockchain technology</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <SparklesIcon className="w-6 h-6 text-green-400" />
              <span className="text-lg">Earn rewards for participation</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">4.7M+</div>
              <div className="text-xs text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">892K+</div>
              <div className="text-xs text-gray-400">Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">$45M+</div>
              <div className="text-xs text-gray-400">Volume</div>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md">
            {/* Form Container */}
            <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50">
              {/* Form Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Create Your Account
                </h2>
                <p className="text-gray-400">
                  Start your journey in the decentralized social universe
                </p>
              </div>

              {/* Registration Form */}
              <form className="space-y-6">
                {/* Full Name Field */}
                <div className="relative">
                  <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Username Field */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-medium">
                    @
                  </span>
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Password Field */}
                <div className="relative">
                  <LockClosedIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-2xl py-4 pl-12 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="w-5 h-5" />
                    ) : (
                      <EyeIcon className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Confirm Password Field */}
                <div className="relative">
                  <LockClosedIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-2xl py-4 pl-12 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeSlashIcon className="w-5 h-5" />
                    ) : (
                      <EyeIcon className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Password Requirements */}
                <div className="bg-gray-800/30 rounded-2xl p-4 space-y-2">
                  <div className="text-sm text-gray-400 mb-2">
                    Password must contain:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div
                      className={`flex items-center gap-2 ${
                        formData.password.length >= 8
                          ? "text-green-400"
                          : "text-gray-500"
                      }`}
                    >
                      <CheckCircleIcon className="w-3 h-3" />
                      <span>8+ characters</span>
                    </div>
                    <div
                      className={`flex items-center gap-2 ${
                        /[A-Z]/.test(formData.password)
                          ? "text-green-400"
                          : "text-gray-500"
                      }`}
                    >
                      <CheckCircleIcon className="w-3 h-3" />
                      <span>Uppercase letter</span>
                    </div>
                    <div
                      className={`flex items-center gap-2 ${
                        /[0-9]/.test(formData.password)
                          ? "text-green-400"
                          : "text-gray-500"
                      }`}
                    >
                      <CheckCircleIcon className="w-3 h-3" />
                      <span>Number</span>
                    </div>
                    <div
                      className={`flex items-center gap-2 ${
                        /[!@#$%^&*]/.test(formData.password)
                          ? "text-green-400"
                          : "text-gray-500"
                      }`}
                    >
                      <CheckCircleIcon className="w-3 h-3" />
                      <span>Special character</span>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="w-4 h-4 mt-1 rounded border-gray-600 bg-gray-800 text-purple-500 focus:ring-purple-500 focus:ring-2"
                  />
                  <span className="text-gray-400 text-sm leading-relaxed">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Privacy Policy
                    </a>
                    . I understand that this is a Web3 platform powered by
                    Stellar blockchain.
                  </span>
                </label>

                {/* Create Account Button */}
                <button
                  type="submit"
                  disabled={!agreedToTerms}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
                  <span className="relative z-10">Create Account</span>
                </button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-gray-900 text-gray-400">
                      Or register with
                    </span>
                  </div>
                </div>

                {/* Social Registration Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 rounded-2xl py-3 px-4 text-white transition-all duration-200 hover:scale-105"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 rounded-2xl py-3 px-4 text-white transition-all duration-200 hover:scale-105"
                  >
                    <WalletIcon className="w-5 h-5" />
                    Wallet
                  </button>
                </div>
              </form>

              {/* Sign In Link */}
              <div className="text-center mt-8">
                <p className="text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    Sign In
                  </a>
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm">
                © 2024 Stellsky. Secure Web3 Social Platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
