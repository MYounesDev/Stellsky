"use client";

import Header from "../components/Header";
import CreatePost from "../components/CreatePost";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Ana İçerik Alanı */}
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-6">
              <CreatePost />
              <Feed />
            </div>
          </div>

          {/* Sağ Kenar Çubuğu */}
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
