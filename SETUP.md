# Stellsky Frontend & Backend Setup

Bu dosya, Stellsky frontend ve backend projelerinin uyumlu çalışması için gerekli kurulum adımlarını içerir.

## Gereksinimler

- Node.js (v18 veya üzeri)
- MongoDB (lokal veya MongoDB Atlas)
- npm veya yarn

## Backend Kurulumu

1. **Server dizinine gidin:**

   ```bash
   cd server
   ```

2. **Bağımlılıkları yükleyin:**

   ```bash
   npm install
   ```

3. **Environment dosyası (.env) oluşturun:**

   ```env
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3000
   JWT_SECRET=your-super-secret-jwt-key-here-change-in-production
   MONGODB_URI=mongodb://localhost:27017/stellsky
   ```

4. **MongoDB'yi başlatın:**

   - Lokal MongoDB kullanıyorsanız: `mongod` komutu ile MongoDB'yi çalıştırın
   - MongoDB Atlas kullanıyorsanız: Connection string'i MONGODB_URI'ye ekleyin

5. **Server'ı başlatın:**

   ```bash
   npm run dev
   ```

   Server http://localhost:5000 adresinde çalışacak.

## Frontend Kurulumu

1. **Frontend dizinine gidin:**

   ```bash
   cd frontend
   ```

2. **Bağımlılıkları yükleyin:**

   ```bash
   npm install
   ```

3. **Environment dosyası (.env.local) oluşturun:**

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

4. **Frontend'i başlatın:**

   ```bash
   npm run dev
   ```

   Frontend http://localhost:3000 adresinde çalışacak.

## Kullanım

1. **Cüzdan ile Giriş:**

   - Stellsky ana sayfasına gidin
   - Sağ üst köşedeki "Sign In" butonuna tıklayın
   - Geçerli bir Stellar cüzdan adresi girin (G ile başlayan 56 karakter)
   - Sistem otomatik olarak backend'e login isteği gönderecek

2. **Post Paylaşma:**

   - Giriş yaptıktan sonra "Create Post" alanını kullanın
   - Metninizi yazın (maksimum 280 karakter)
   - "Post" butonuna tıklayın
   - Post backend'e kaydedilecek ve anında feed'de görünecek

3. **Posts Görüntüleme:**
   - Giriş yaptıktan sonra tüm posts otomatik olarak yüklenecek
   - Yeni post'lar feed'in en üstünde görünecek

## API Endpoints

### Authentication

- `POST /api/auth/login` - Cüzdan adresi ile giriş
- `GET /api/auth/isAuthenticated` - Auth durumu kontrolü

### Posts

- `POST /api/posts` - Yeni post oluştur
- `GET /api/posts` - Tüm posts'ları getir
- `GET /api/posts/user/:walletAddress` - Kullanıcının posts'larını getir
- `GET /api/posts/:id` - Belirli bir post'u getir
- `DELETE /api/posts/:id` - Post sil

## Geliştirme Notları

- Backend JWT token kullanarak authentication sağlar
- Frontend localStorage'da token ve cüzdan adresini saklar
- Posts MongoDB'de saklanır
- CORS frontend URL'sine göre yapılandırılmıştır
- API istekleri için Authorization header'ı gereklidir

## Sorun Giderme

1. **CORS Hatası:**

   - Server .env dosyasında FRONTEND_URL doğru olduğundan emin olun

2. **MongoDB Bağlantı Hatası:**

   - MongoDB servisinizin çalıştığından emin olun
   - MONGODB_URI'nin doğru olduğunu kontrol edin

3. **Token Hatası:**

   - Browser'da localStorage'ı temizleyin
   - Tekrar giriş yapın

4. **API Bağlantı Hatası:**
   - Backend'in çalıştığından emin olun (http://localhost:5000)
   - Network sekmesinde API isteklerini kontrol edin
