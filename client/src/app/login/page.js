"use client";

import { useState } from "react";
import {
  EyeIcon,
  EyeSlashIcon,
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

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
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 1px, transparent 0), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: "100px 100px",
        }}
      ></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl animate-bounce"></div>

      {/* Main Container */}
      <div className="relative w-full max-w-4xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="text-center lg:text-left space-y-8 p-8">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center justify-center lg:justify-start gap-4 hover:scale-105 transition-transform duration-200"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-3xl">⭐</span>
            </div>
            <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Stellsky
            </span>
          </a>

          {/* Hero Text */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Connect with the
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Stars
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Join millions of people sharing their stories, ideas, and moments
              on Stellsky. Your voice matters in our cosmic community.
            </p>
          </div>

          {/* Features */}
          <div className="grid gap-4 max-w-md">
            <div className="flex items-center gap-3 text-gray-300">
              <SparklesIcon className="w-6 h-6 text-blue-400" />
              <span className="text-lg">Express yourself freely</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <SparklesIcon className="w-6 h-6 text-purple-400" />
              <span className="text-lg">Connect with like-minded people</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <SparklesIcon className="w-6 h-6 text-cyan-400" />
              <span className="text-lg">Share your cosmic journey</span>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md">
            {/* Form Container */}
            <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50">
              {/* Form Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Welcome Back
                </h2>
                <p className="text-gray-400">
                  Sign in to continue your cosmic adventure
                </p>
              </div>

              {/* Form */}
              <form className="space-y-6">
                {/* Email Field */}
                <div className="relative">
                  <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Password Field */}
                <div className="relative">
                  <LockClosedIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-2xl py-4 pl-12 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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

                {/* Remember Me / Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-blue-500 focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="text-gray-400 text-sm">Remember me</span>
                  </label>
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Sign In
                </button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-gray-900 text-gray-400">
                      Or continue with
                    </span>
                  </div>
                </div>

                {/* Social Login Buttons */}
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
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                    Twitter
                  </button>
                </div>
              </form>

              {/* Toggle Sign In/Sign Up */}
              <div className="text-center mt-8">
                <p className="text-gray-400">
                  Don't have an account?{" "}
                  <a
                    href="/register"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    Create Account
                  </a>
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm">
                © 2024 Stellsky. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
