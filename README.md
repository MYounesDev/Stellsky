# Stellsky 🌟

**Stellar blockchain tabanlı sosyal medya platformu** - Kullanıcıların Stellar cüzdan adresleri ile giriş yapabileceği, post paylaşabileceği ve sosyal etkileşimde bulunabileceği modern bir web uygulaması.

## ✨ Özellikler

- 🔐 **Stellar Cüzdan Entegrasyonu** - Kullanıcılar Stellar cüzdan adresleri ile güvenli giriş
- 📝 **Post Paylaşım Sistemi** - Metin ve resim paylaşımı (280 karakter limit)
- ❤️ **Beğeni (Like) Sistemi** - Postları beğenme ve beğeni geri çekme
- 👤 **Kullanıcı Profilleri** - Kişisel profil sayfaları
- 🔄 **Gerçek Zamanlı Güncellemeler** - Anında post görüntüleme
- 🤖 **AI Entegrasyonu** - Gelişmiş arama ve öneri sistemi
- 📱 **Responsive Tasarım** - Mobil ve masaüstü uyumlu modern UI

## 🛠️ Teknoloji Stack

### Frontend

- **Next.js 15.3.4** - React framework
- **React 19** - UI kütüphanesi
- **Tailwind CSS 4** - Stil framework
- **Stellar SDK** - Blockchain entegrasyonu
- **Lucide React** - İkon kütüphanesi

### Backend

- **Node.js** - Runtime environment
- **Express.js 5** - Web framework
- **MongoDB** - Veritabanı
- **JWT** - Kimlik doğrulama
- **Stellar SDK** - Blockchain operations
- **Swagger** - API dokümantasyonu

### AI Komponenti

- **FastAPI** - Python web framework
- **PyMongo** - MongoDB driver
- **Elasticsearch** - Arama motoru
- **NLTK** - Doğal dil işleme

## 📦 Kurulum

### Gereksinimler

- Node.js (v18 veya üzeri)
- MongoDB (lokal veya Atlas)
- Python 3.8+ (AI modülü için)
- npm veya yarn

### 1. Proje Klonlama

```bash
git clone <repository-url>
cd Stellsky
```

### 2. Backend Kurulumu

```bash
cd server
npm install

# Environment dosyası oluşturun
cp env.example .env
# .env dosyasını düzenleyin:
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/stellsky
# JWT_SECRET=your-secret-key
# FRONTEND_URL=http://localhost:3000

# MongoDB'yi başlatın
mongod

# Server'ı başlatın
npm run dev
```

### 3. Frontend Kurulumu

```bash
cd frontend
npm install

# Environment dosyası oluşturun
echo "NEXT_PUBLIC_API_URL=http://localhost:5000/api" > .env.local

# Frontend'i başlatın
npm run dev
```

### 4. AI Modülü Kurulumu (Opsiyonel)

```bash
cd AI
pip install -r requirements.txt

# AI servisini başlatın
python app.py
```

## 🚀 Kullanım

### Giriş Yapma

1. http://localhost:3000 adresine gidin
2. Sağ üst köşedeki "Sign In" butonuna tıklayın
3. Geçerli Stellar cüzdan adresinizi girin (G ile başlayan 56 karakter)
4. Sistem otomatik olarak giriş yapacak

### Post Paylaşma

1. Giriş yaptıktan sonra "What's on your mind?" alanını kullanın
2. Metninizi yazın (maks. 280 karakter)
3. İsteğe bağlı olarak resim URL'si ekleyin
4. "Post" butonuna tıklayın

### Sosyal Etkileşim

- Postları beğenmek için ❤️ ikonuna tıklayın
- Kullanıcı profillerini görüntülemek için isimlere tıklayın
- Tüm postlar ana feed'de gerçek zamanlı görüntülenir

## 🔧 API Endpoints

### Authentication

- `POST /api/auth/login` - Cüzdan ile giriş
- `GET /api/auth/isAuthenticated` - Kimlik doğrulama kontrolü

### Posts

- `GET /api/posts` - Tüm postları getir
- `POST /api/posts` - Yeni post oluştur
- `GET /api/posts/:id` - Belirli post getir
- `DELETE /api/posts/:id` - Post sil
- `PUT /api/posts/:id/like` - Post beğen
- `PUT /api/posts/:id/unlike` - Beğeniyi geri çek
- `GET /api/posts/user/:address` - Kullanıcı postları

### Detaylı API dokümantasyonu için: http://localhost:5000/api-docs

## 📁 Proje Yapısı

```
Stellsky/
├── frontend/              # Next.js frontend
│   ├── src/
│   │   ├── app/          # Next.js app router
│   │   ├── components/   # React bileşenleri
│   │   ├── contexts/     # React context'leri
│   │   ├── hooks/        # Custom hooks
│   │   └── services/     # API servisleri
│   └── package.json
├── server/               # Node.js backend
│   ├── controllers/      # API kontrolcüleri
│   ├── middleware/       # Express middleware
│   ├── routes/          # API rotaları
│   ├── utils/           # Yardımcı fonksiyonlar
│   └── server.js        # Ana server dosyası
├── AI/                  # Python AI modülü
│   ├── api.py           # FastAPI endpoints
│   ├── model.py         # AI modelleri
│   └── requirements.txt # Python bağımlılıkları
└── README.md
```

## 🎨 Özellik Detayları

### Stellar Entegrasyonu

- Stellar cüzdan adreslerini doğrulama
- Blockchain tabanlı kimlik doğrulama
- Güvenli token yönetimi

### Güvenlik

- JWT token tabanlı kimlik doğrulama
- CORS koruması
- Input validasyonu
- Güvenli API endpoints

### Performance

- Responsive tasarım
- Lazy loading
- Optimize edilmiş bundle size
- Hızlı API yanıtları

## 🤝 Katkıda Bulunma

1. Proje fork'layın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit'leyin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push'layın (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🐛 Sorun Giderme

### Yaygın Sorunlar

**1. MongoDB Bağlantı Hatası**

```bash
# MongoDB'nin çalıştığından emin olun
mongod --version
```

**2. CORS Hatası**

- `.env` dosyasında `FRONTEND_URL` ayarını kontrol edin
- Backend ve frontend'in doğru portlarda çalıştığından emin olun

**3. Token Hatası**

- Browser localStorage'ı temizleyin
- Tekrar giriş yapın

**4. Stellar Cüzdan Hatası**

- Cüzdan adresinin geçerli Stellar formatında olduğundan emin olun
- Adres G ile başlamalı ve 56 karakter olmalı

### Destek

Herhangi bir sorun yaşarsanız:

1. GitHub Issues'da sorun bildirin
2. Logs'ları kontrol edin (browser console + server logs)
3. Setup adımlarını tekrar gözden geçirin

## 🌟 Gelecek Özellikler

- [ ] Takip sistemi (Follow/Unfollow)
- [ ] Direkt mesajlaşma
- [ ] Grup oluşturma
- [ ] NFT entegrasyonu
- [ ] Mobil uygulama
- [ ] Push notifications
- [ ] Trend analizi
- [ ] Advanced search

---

**Stellsky** ile blockchain tabanlı sosyal medya deneyimini yaşayın! 🚀
