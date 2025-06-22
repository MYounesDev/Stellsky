# 🚀 Stellsky Backend - Vercel Deployment Guide

Bu dokümantasyon Stellsky backend'ini Vercel'e deploy etmek için gerekli adımları içerir.

## 📋 Ön Gereksinimler

1. **Vercel Hesabı** - [vercel.com](https://vercel.com) üzerinden hesap oluşturun
2. **MongoDB Atlas** - Ücretsiz MongoDB Atlas cluster'ı oluşturun
3. **GitHub Repository** - Kodunuz GitHub'da olmalı

## 🔧 1. Environment Variables

Vercel dashboard'da aşağıdaki environment variable'ları ekleyin:

### Gerekli Environment Variables:

```bash
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/stellsky?retryWrites=true&w=majority

# JWT Secret (Güçlü bir secret key kullanın)
JWT_SECRET=your-super-secret-jwt-key-here-minimum-32-characters-long

# Frontend URL (Deploy edildikten sonra güncelleyin)
FRONTEND_URL=https://your-frontend-app.vercel.app

# Node Environment
NODE_ENV=production
```

### Environment Variables Nasıl Eklenir:

1. Vercel Dashboard'a gidin
2. Projenizi seçin
3. **Settings** → **Environment Variables**
4. Her bir variable için **Add** butonuna tıklayın
5. Name ve Value alanlarını doldurun
6. **Production**, **Preview**, **Development** ortamlarını seçin

## 🚀 2. Deploy Adımları

### Option 1: GitHub Integration (Önerilen)

1. **Vercel Dashboard** → **New Project**
2. **Import Git Repository**
3. GitHub repo'nuzu seçin
4. **Root Directory**: `server` klasörünü seçin
5. **Framework Preset**: `Other` seçin
6. **Build Command**: Boş bırakın (package.json'da tanımlı)
7. **Output Directory**: Boş bırakın
8. **Install Command**: `npm install`
9. **Deploy** butonuna tıklayın

### Option 2: Vercel CLI

```bash
# Vercel CLI'yi yükleyin
npm i -g vercel

# Server klasörüne gidin
cd server

# Deploy edin
vercel

# Production deploy için
vercel --prod
```

## 🔍 3. Deploy Sonrası Kontroller

Deploy tamamlandıktan sonra aşağıdaki URL'leri test edin:

```bash
# Health Check
https://your-backend-url.vercel.app/health

# API Base
https://your-backend-url.vercel.app/api

# API Documentation
https://your-backend-url.vercel.app/api-docs

# Test API Endpoint
https://your-backend-url.vercel.app/api/posts
```

## ⚙️ 4. Frontend Konfigürasyonu

Frontend'inizde API URL'sini güncelleyin:

```javascript
// frontend/src/lib/api.js
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://your-backend-url.vercel.app/api";
```

Environment variable olarak:

```bash
# Frontend .env.local
NEXT_PUBLIC_API_URL=https://your-backend-url.vercel.app/api
```

## 🐛 5. Troubleshooting

### Yaygın Sorunlar:

1. **CORS Errors**:

   - Backend'daki `allowedOrigins` array'ine frontend URL'nizi ekleyin
   - Environment variable `FRONTEND_URL` doğru set edilmiş mi kontrol edin

2. **Database Connection**:

   - MongoDB Atlas IP whitelist'inde `0.0.0.0/0` (All IPs) ekleyin
   - Connection string doğru mu kontrol edin

3. **Environment Variables**:

   - Vercel dashboard'da tüm environment variable'lar set edilmiş mi?
   - Variable isimleri tam doğru mu?

4. **JWT Errors**:
   - JWT_SECRET minimum 32 karakter olmalı
   - Güçlü bir secret key kullanın

### Log'ları İncelemek:

```bash
# Vercel CLI ile logs
vercel logs

# Real-time logs
vercel logs --follow
```

## 🎯 6. Domain ve SSL

Vercel otomatik olarak:

- HTTPS SSL sertifikası sağlar
- Custom domain ekleme imkanı verir
- CDN ve caching optimize eder

## 🔄 7. Otomatik Deploy

GitHub integration ile:

- `main` branch'e push → Production deploy
- Pull request → Preview deploy
- Commit'ler otomatik deploy tetikler

## 📞 Support

Sorunlarla karşılaştığınızda:

1. Vercel dashboard logs'ları kontrol edin
2. MongoDB Atlas logs'ları kontrol edin
3. Environment variables'ları doğrulayın
4. CORS ayarlarını kontrol edin

## 🎉 Başarılı Deploy!

Backend başarıyla deploy edildikten sonra:

1. ✅ API endpoints çalışıyor
2. ✅ Database bağlantısı aktif
3. ✅ Frontend ile entegrasyon tamamlanmış
4. ✅ Swagger documentation erişilebilir

**Backend URL'nizi frontend'de kullanmayı unutmayın!** 🚀
