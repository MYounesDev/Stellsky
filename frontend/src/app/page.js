"use client";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainFeed from "../components/MainFeed";
import TrendingSidebar from "../components/TrendingSidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto flex">
        {/* Sol Sidebar - Navigasyon */}
        <div className="sticky top-16 h-[calc(100vh-4rem)]">
          <Sidebar />
        </div>

        {/* Ana İçerik - Feed */}
        <div className="flex-1 min-w-0">
          <MainFeed />
        </div>

        {/* Right Sidebar - Trending */}
        <div className="sticky top-16 h-[calc(100vh-4rem)]">
          <TrendingSidebar />
        </div>
      </div>
    </div>
  );
}
