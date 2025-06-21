"use client";

import MainLayout from "../../components/MainLayout";
import {
  UserIcon,
  BellIcon,
  ShieldCheckIcon,
  EyeIcon,
  CogIcon,
  WalletIcon,
  GlobeAltIcon,
  ChevronRightIcon,
  PencilIcon,
  TrashIcon,
  KeyIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  SunIcon,
  MoonIcon,
  LanguageIcon,
  CurrencyDollarIcon,
  LockClosedIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Settings() {
  const [activeSection, setActiveSection] = useState("profile");
  const [notifications, setNotifications] = useState({
    posts: true,
    messages: true,
    likes: false,
    follows: true,
    stellarPay: true,
    newsletter: false,
  });
  const [privacy, setPrivacy] = useState({
    profilePublic: true,
    showOnlineStatus: true,
    allowMessages: true,
    showEmail: false,
  });

  const settingsSections = [
    {
      id: "profile",
      name: "Profil Ayarları",
      icon: UserIcon,
      color: "blue",
    },
    {
      id: "security",
      name: "Güvenlik",
      icon: ShieldCheckIcon,
      color: "green",
    },
    {
      id: "notifications",
      name: "Bildirimler",
      icon: BellIcon,
      color: "yellow",
    },
    {
      id: "privacy",
      name: "Gizlilik",
      icon: EyeIcon,
      color: "purple",
    },
    {
      id: "wallet",
      name: "Cüzdan",
      icon: WalletIcon,
      color: "cyan",
    },
    {
      id: "appearance",
      name: "Görünüm",
      icon: SunIcon,
      color: "pink",
    },
    {
      id: "advanced",
      name: "Gelişmiş",
      icon: CogIcon,
      color: "gray",
    },
  ];

  const connectedDevices = [
    {
      id: 1,
      name: "MacBook Pro",
      type: "desktop",
      lastActive: "Şimdi aktif",
      location: "İstanbul, Türkiye",
    },
    {
      id: 2,
      name: "iPhone 15",
      type: "mobile",
      lastActive: "2 saat önce",
      location: "İstanbul, Türkiye",
    },
    {
      id: 3,
      name: "Windows PC",
      type: "desktop",
      lastActive: "1 gün önce",
      location: "Ankara, Türkiye",
    },
  ];

  const getColorClass = (color, type = "text") => {
    const colorMap = {
      blue: {
        text: "text-blue-400",
        bg: "bg-blue-500/20",
        border: "border-blue-500/30",
      },
      green: {
        text: "text-green-400",
        bg: "bg-green-500/20",
        border: "border-green-500/30",
      },
      yellow: {
        text: "text-yellow-400",
        bg: "bg-yellow-500/20",
        border: "border-yellow-500/30",
      },
      purple: {
        text: "text-purple-400",
        bg: "bg-purple-500/20",
        border: "border-purple-500/30",
      },
      cyan: {
        text: "text-cyan-400",
        bg: "bg-cyan-500/20",
        border: "border-cyan-500/30",
      },
      pink: {
        text: "text-pink-400",
        bg: "bg-pink-500/20",
        border: "border-pink-500/30",
      },
      gray: {
        text: "text-gray-400",
        bg: "bg-gray-500/20",
        border: "border-gray-500/30",
      },
    };
    return colorMap[color]?.[type] || colorMap.gray[type];
  };

  return (
    <MainLayout>
      <div className="border-x border-gray-700/50 min-h-screen bg-gray-950/50">
        {/* Header */}
        <div className="border-b border-gray-700/50 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <CogIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Ayarlar</h1>
              <p className="text-gray-400">
                Hesap ve uygulama ayarlarınızı yönetin
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Settings Sidebar */}
          <div className="w-80 border-r border-gray-700/50 p-6">
            <div className="space-y-2">
              {settingsSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 group ${
                    activeSection === section.id
                      ? `${getColorClass(
                          section.color,
                          "bg"
                        )} border ${getColorClass(section.color, "border")}`
                      : "hover:bg-gray-800/60"
                  }`}
                >
                  <section.icon
                    className={`w-6 h-6 transition-all ${
                      activeSection === section.id
                        ? `${getColorClass(section.color)} scale-110`
                        : "text-gray-400 group-hover:text-white group-hover:scale-105"
                    }`}
                  />
                  <span
                    className={`text-lg font-medium transition-colors ${
                      activeSection === section.id
                        ? getColorClass(section.color)
                        : "text-gray-300 group-hover:text-white"
                    }`}
                  >
                    {section.name}
                  </span>
                  <ChevronRightIcon
                    className={`w-5 h-5 ml-auto transition-all ${
                      activeSection === section.id
                        ? `${getColorClass(section.color)} rotate-90`
                        : "text-gray-500 group-hover:text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Settings Content */}
          <div className="flex-1 p-6">
            {/* Profile Settings */}
            {activeSection === "profile" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Profil Ayarları
                  </h2>

                  {/* Profile Picture */}
                  <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700/50 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Profil Fotoğrafı
                    </h3>
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-3xl">U</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex gap-3">
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
                            <PencilIcon className="w-4 h-4" />
                            Değiştir
                          </button>
                          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
                            <TrashIcon className="w-4 h-4" />
                            Kaldır
                          </button>
                        </div>
                        <p className="text-sm text-gray-400">
                          JPG, PNG veya GIF. Maksimum 5MB.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Temel Bilgiler
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Ad
                          </label>
                          <input
                            type="text"
                            defaultValue="Alex"
                            className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Soyad
                          </label>
                          <input
                            type="text"
                            defaultValue="Rodriguez"
                            className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Kullanıcı Adı
                        </label>
                        <input
                          type="text"
                          defaultValue="alexdev.stellar"
                          className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Bio
                        </label>
                        <textarea
                          rows={4}
                          defaultValue="🚀 Building the future of Web3 social media on Stellar blockchain. DeFi enthusiast, NFT creator, and cosmic explorer. #StellarDev #Web3Builder #DeFi"
                          className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Website
                        </label>
                        <input
                          type="url"
                          defaultValue="https://stellardev.space"
                          className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105 mt-6">
                      Değişiklikleri Kaydet
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeSection === "security" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Güvenlik Ayarları
                  </h2>

                  {/* Security Status */}
                  <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-2xl p-6 border border-green-500/30 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircleIcon className="w-8 h-8 text-green-400" />
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          Hesabınız Güvende
                        </h3>
                        <p className="text-gray-300">
                          Tüm güvenlik ayarları aktif durumda
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Password */}
                  <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700/50 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Şifre
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Mevcut Şifre
                        </label>
                        <input
                          type="password"
                          className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Yeni Şifre
                        </label>
                        <input
                          type="password"
                          className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Yeni Şifre (Tekrar)
                        </label>
                        <input
                          type="password"
                          className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
                        <KeyIcon className="w-5 h-5" />
                        Şifreyi Güncelle
                      </button>
                    </div>
                  </div>

                  {/* Two-Factor Authentication */}
                  <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700/50 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      İki Faktörlü Kimlik Doğrulama
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-300 mb-2">
                          Hesabınızı ek güvenlik katmanı ile koruyun
                        </p>
                        <p className="text-sm text-gray-400">
                          SMS veya authenticator app kullanarak
                        </p>
                      </div>
                      <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105">
                        Aktif Et
                      </button>
                    </div>
                  </div>

                  {/* Connected Devices */}
                  <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Bağlı Cihazlar
                    </h3>
                    <div className="space-y-4">
                      {connectedDevices.map((device) => (
                        <div
                          key={device.id}
                          className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl"
                        >
                          <div className="flex items-center gap-4">
                            {device.type === "mobile" ? (
                              <DevicePhoneMobileIcon className="w-8 h-8 text-blue-400" />
                            ) : (
                              <ComputerDesktopIcon className="w-8 h-8 text-green-400" />
                            )}
                            <div>
                              <h4 className="font-semibold text-white">
                                {device.name}
                              </h4>
                              <p className="text-sm text-gray-400">
                                {device.lastActive} • {device.location}
                              </p>
                            </div>
                          </div>
                          <button className="text-red-400 hover:text-red-300 font-medium">
                            Çıkış Yap
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeSection === "notifications" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Bildirim Ayarları
                  </h2>

                  <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Push Bildirimleri
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(notifications).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl"
                        >
                          <div>
                            <h4 className="font-semibold text-white capitalize">
                              {key === "posts" && "Yeni Gönderiler"}
                              {key === "messages" && "Mesajlar"}
                              {key === "likes" && "Beğeniler"}
                              {key === "follows" && "Takipçiler"}
                              {key === "stellarPay" && "Stellar Pay"}
                              {key === "newsletter" && "Haber Bülteni"}
                            </h4>
                            <p className="text-sm text-gray-400">
                              {key === "posts" &&
                                "Takip ettiğiniz kişilerin gönderileri"}
                              {key === "messages" && "Yeni doğrudan mesajlar"}
                              {key === "likes" &&
                                "Gönderilerinizi beğenen kullanıcılar"}
                              {key === "follows" && "Yeni takipçi bildirimleri"}
                              {key === "stellarPay" &&
                                "Ödeme ve transfer bildirimleri"}
                              {key === "newsletter" &&
                                "Haftalık özet ve güncellemeler"}
                            </p>
                          </div>
                          <button
                            onClick={() =>
                              setNotifications((prev) => ({
                                ...prev,
                                [key]: !value,
                              }))
                            }
                            className={`w-12 h-6 rounded-full transition-all duration-200 ${
                              value ? "bg-blue-600" : "bg-gray-600"
                            }`}
                          >
                            <div
                              className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                                value ? "translate-x-6" : "translate-x-1"
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Privacy Settings */}
            {activeSection === "privacy" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Gizlilik Ayarları
                  </h2>

                  <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Profil Gizliliği
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(privacy).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl"
                        >
                          <div>
                            <h4 className="font-semibold text-white capitalize">
                              {key === "profilePublic" && "Herkese Açık Profil"}
                              {key === "showOnlineStatus" &&
                                "Çevrimiçi Durumu Göster"}
                              {key === "allowMessages" && "Mesajlara İzin Ver"}
                              {key === "showEmail" && "E-posta Adresini Göster"}
                            </h4>
                            <p className="text-sm text-gray-400">
                              {key === "profilePublic" &&
                                "Profiliniz herkese görünür olacak"}
                              {key === "showOnlineStatus" &&
                                "Diğer kullanıcılar çevrimiçi durumunuzu görebilir"}
                              {key === "allowMessages" &&
                                "Diğer kullanıcılar size mesaj gönderebilir"}
                              {key === "showEmail" &&
                                "E-posta adresiniz profilinizde görüntülenir"}
                            </p>
                          </div>
                          <button
                            onClick={() =>
                              setPrivacy((prev) => ({ ...prev, [key]: !value }))
                            }
                            className={`w-12 h-6 rounded-full transition-all duration-200 ${
                              value ? "bg-blue-600" : "bg-gray-600"
                            }`}
                          >
                            <div
                              className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                                value ? "translate-x-6" : "translate-x-1"
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Wallet Settings */}
            {activeSection === "wallet" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Cüzdan Ayarları
                  </h2>

                  {/* Wallet Status */}
                  <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-6 border border-blue-500/30 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <WalletIcon className="w-8 h-8 text-blue-400" />
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          Stellar Cüzdan
                        </h3>
                        <p className="text-gray-300">Bağlantı durumu: Aktif</p>
                      </div>
                    </div>
                    <div className="bg-gray-800/40 rounded-xl p-4 mt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Cüzdan Adresi:</span>
                        <span className="text-blue-400 font-mono">
                          GAXB...7XYZ
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Transaction Settings */}
                  <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700/50 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      İşlem Ayarları
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
                        <div>
                          <h4 className="font-semibold text-white">
                            Otomatik Onay
                          </h4>
                          <p className="text-sm text-gray-400">
                            Küçük miktarlı işlemler için
                          </p>
                        </div>
                        <button className="w-12 h-6 bg-gray-600 rounded-full">
                          <div className="w-5 h-5 bg-white rounded-full translate-x-1" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
                        <div>
                          <h4 className="font-semibold text-white">
                            İşlem Bildirimleri
                          </h4>
                          <p className="text-sm text-gray-400">
                            Tüm gelen/giden işlemler için
                          </p>
                        </div>
                        <button className="w-12 h-6 bg-blue-600 rounded-full">
                          <div className="w-5 h-5 bg-white rounded-full translate-x-6" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Security Features */}
                  <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Güvenlik Özellikleri
                    </h3>
                    <div className="space-y-3">
                      <button className="w-full flex items-center justify-between p-4 bg-gray-700/30 hover:bg-gray-700/50 rounded-xl transition-colors">
                        <div className="flex items-center gap-3">
                          <LockClosedIcon className="w-6 h-6 text-yellow-400" />
                          <span className="text-white font-medium">
                            Cüzdan Kilitle
                          </span>
                        </div>
                        <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                      </button>
                      <button className="w-full flex items-center justify-between p-4 bg-gray-700/30 hover:bg-gray-700/50 rounded-xl transition-colors">
                        <div className="flex items-center gap-3">
                          <KeyIcon className="w-6 h-6 text-blue-400" />
                          <span className="text-white font-medium">
                            Yedek Anahtarlar
                          </span>
                        </div>
                        <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                      </button>
                      <button className="w-full flex items-center justify-between p-4 bg-gray-700/30 hover:bg-gray-700/50 rounded-xl transition-colors">
                        <div className="flex items-center gap-3">
                          <ExclamationTriangleIcon className="w-6 h-6 text-red-400" />
                          <span className="text-white font-medium">
                            Cüzdan Bağlantısını Kes
                          </span>
                        </div>
                        <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Appearance Settings */}
            {activeSection === "appearance" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Görünüm Ayarları
                  </h2>

                  {/* Theme */}
                  <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700/50 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Tema
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      <button className="p-4 bg-white rounded-xl border-2 border-gray-300 hover:border-blue-500 transition-colors">
                        <div className="w-full h-20 bg-gray-100 rounded-lg mb-2"></div>
                        <span className="text-black font-medium">Açık</span>
                      </button>
                      <button className="p-4 bg-gray-900 rounded-xl border-2 border-blue-500 transition-colors">
                        <div className="w-full h-20 bg-gray-800 rounded-lg mb-2"></div>
                        <span className="text-white font-medium">Koyu</span>
                      </button>
                      <button className="p-4 bg-gradient-to-br from-gray-100 to-gray-900 rounded-xl border-2 border-gray-300 hover:border-blue-500 transition-colors">
                        <div className="w-full h-20 bg-gradient-to-br from-gray-200 to-gray-800 rounded-lg mb-2"></div>
                        <span className="text-white font-medium">Otomatik</span>
                      </button>
                    </div>
                  </div>

                  {/* Language */}
                  <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700/50 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Dil
                    </h3>
                    <select className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                      <option value="tr">Türkçe</option>
                      <option value="en">English</option>
                      <option value="es">Español</option>
                      <option value="fr">Français</option>
                      <option value="de">Deutsch</option>
                    </select>
                  </div>

                  {/* Display Settings */}
                  <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Ekran Ayarları
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Font Boyutu
                        </label>
                        <select className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                          <option value="small">Küçük</option>
                          <option value="medium">Orta</option>
                          <option value="large">Büyük</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
                        <div>
                          <h4 className="font-semibold text-white">
                            Animasyonları Azalt
                          </h4>
                          <p className="text-sm text-gray-400">
                            Daha az animasyon efekti
                          </p>
                        </div>
                        <button className="w-12 h-6 bg-gray-600 rounded-full">
                          <div className="w-5 h-5 bg-white rounded-full translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Advanced Settings */}
            {activeSection === "advanced" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Gelişmiş Ayarlar
                  </h2>

                  {/* Data & Storage */}
                  <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700/50 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Veri & Depolama
                    </h3>
                    <div className="space-y-3">
                      <button className="w-full flex items-center justify-between p-4 bg-gray-700/30 hover:bg-gray-700/50 rounded-xl transition-colors">
                        <span className="text-white font-medium">
                          Önbelleği Temizle
                        </span>
                        <span className="text-sm text-gray-400">2.5 MB</span>
                      </button>
                      <button className="w-full flex items-center justify-between p-4 bg-gray-700/30 hover:bg-gray-700/50 rounded-xl transition-colors">
                        <span className="text-white font-medium">
                          Medya Dosyalarını İndir
                        </span>
                        <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                      </button>
                      <button className="w-full flex items-center justify-between p-4 bg-gray-700/30 hover:bg-gray-700/50 rounded-xl transition-colors">
                        <span className="text-white font-medium">
                          Veri Kullanımı
                        </span>
                        <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </div>

                  {/* Developer Options */}
                  <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700/50 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Geliştirici Seçenekleri
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
                        <div>
                          <h4 className="font-semibold text-white">
                            Debug Modu
                          </h4>
                          <p className="text-sm text-gray-400">
                            Geliştirici günlüklerini etkinleştir
                          </p>
                        </div>
                        <button className="w-12 h-6 bg-gray-600 rounded-full">
                          <div className="w-5 h-5 bg-white rounded-full translate-x-1" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
                        <div>
                          <h4 className="font-semibold text-white">
                            Beta Özellikleri
                          </h4>
                          <p className="text-sm text-gray-400">
                            Deneysel özellikleri test et
                          </p>
                        </div>
                        <button className="w-12 h-6 bg-blue-600 rounded-full">
                          <div className="w-5 h-5 bg-white rounded-full translate-x-6" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Danger Zone */}
                  <div className="bg-red-900/20 rounded-2xl p-6 border border-red-500/30">
                    <h3 className="text-xl font-semibold text-red-400 mb-4">
                      Tehlikeli Bölge
                    </h3>
                    <div className="space-y-3">
                      <button className="w-full flex items-center justify-between p-4 bg-red-900/30 hover:bg-red-900/50 rounded-xl transition-colors border border-red-500/30">
                        <span className="text-red-400 font-medium">
                          Hesabı Dondur
                        </span>
                        <ChevronRightIcon className="w-5 h-5 text-red-400" />
                      </button>
                      <button className="w-full flex items-center justify-between p-4 bg-red-900/30 hover:bg-red-900/50 rounded-xl transition-colors border border-red-500/30">
                        <span className="text-red-400 font-medium">
                          Tüm Verileri Sil
                        </span>
                        <ChevronRightIcon className="w-5 h-5 text-red-400" />
                      </button>
                      <button className="w-full flex items-center justify-between p-4 bg-red-900/30 hover:bg-red-900/50 rounded-xl transition-colors border border-red-500/30">
                        <span className="text-red-400 font-medium">
                          Hesabı Sil
                        </span>
                        <ChevronRightIcon className="w-5 h-5 text-red-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
