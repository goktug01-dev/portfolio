# Göktuğ Kocatürk | Kişisel Portfolyo

React ve Vite ile geliştirilmiş, 3D nokta bulutu arka planına sahip, responsive kişisel portfolyo sitesi. GitHub Actions ile otomatik derlenir ve GitHub Pages üzerinde yayınlanır.

**Canlı site:** https://goktug01-dev.github.io/portfolio/

## Özellikler

- Bileşen tabanlı yapı (React)
- LiDAR taramasını andıran, Three.js ile çizilen interaktif 3D nokta bulutu
- Krem zemin ve siyah çizgilerle brutalist tasarım
- Masaüstü, tablet ve telefona uyumlu (responsive) yerleşim
- `main` branch'ine yapılan her güncellemede otomatik yayın (CI/CD)

## Kullanılan Teknolojiler

| Teknoloji | Kullanım amacı |
|---|---|
| React | Sayfayı bileşenlere bölmek |
| Vite | Geliştirme sunucusu ve üretim derlemesi |
| Three.js + @react-three/fiber | 3D nokta bulutu |
| CSS (özel) | Tasarım ve responsive düzen |
| ESLint | Kod denetimi |
| Git ve GitHub | Sürüm kontrolü, Pull Request |
| GitHub Actions | Otomatik derleme ve yayın |
| GitHub Pages | Barındırma |

## Proje Yapısı

```
portfolio/
├── .github/workflows/deploy.yml   # Otomatik yayın tarifi
├── public/                        # Olduğu gibi yayınlanan dosyalar
├── src/
│   ├── assets/                    # Görseller (profil fotoğrafı vb.)
│   ├── components/
│   │   ├── Navbar.jsx             # Üst menü
│   │   ├── Hero.jsx               # Karşılama bölümü ve fotoğraf
│   │   ├── PointCloud.jsx         # 3D nokta bulutu (Three.js)
│   │   ├── Marquee.jsx            # Kayan beceri şeridi
│   │   ├── About.jsx              # Hakkımda
│   │   ├── Projects.jsx           # Projeler
│   │   ├── Contact.jsx            # İletişim bağlantıları
│   │   └── Footer.jsx             # Alt bilgi
│   ├── App.jsx                    # Bileşenleri sırayla dizen ana sayfa
│   ├── main.jsx                   # React giriş noktası
│   └── index.css                  # Genel stiller
├── index.html
├── package.json
├── vite.config.js                 # base: '/portfolio/' ayarı burada
├── README.md
└── TECHNICAL_REPORT.md            # Teknik rapor
```

## Kurulum ve Çalıştırma

Gereksinim: Node.js (LTS sürüm) ve Git.

```bash
git clone https://github.com/goktug01-dev/portfolio.git
cd portfolio
npm install
npm run dev
```

Geliştirme sunucusu `http://localhost:5173/portfolio/` adresinde açılır. Adresteki `/portfolio/` kısmı `vite.config.js` içindeki `base` ayarından gelir.

Diğer komutlar:

| Komut | Ne yapar |
|---|---|
| `npm run dev` | Siteyi bilgisayarda canlı çalıştırır |
| `npm run build` | Yayına hazır sürümü `dist` klasörüne üretir |
| `npm run lint` | Kodu ESLint ile denetler |

## Yayınlama

Yayın tamamen otomatiktir:

1. Değişiklikler ayrı bir branch'te yapılır ve Pull Request ile `main`'e birleştirilir.
2. `main`'e yeni kod geldiğinde `.github/workflows/deploy.yml` çalışır.
3. Robot bağımlılıkları kurar, `npm run build` ile siteyi derler ve `dist` klasörünü GitHub Pages'e yükler.

Gerekli ayarlar:
- `vite.config.js` içinde `base: '/portfolio/'` (repo adıyla aynı olmalı)
- GitHub'da **Settings → Pages → Source: GitHub Actions**

## Geliştirme Akışı

Commit mesajlarında `chore`, `feat`, `style`, `ci`, `docs` gibi ön ekler kullanılmıştır. Çalışma `feat/portfolio` branch'inde yapılmış, Pull Request #1 ile `main`'e birleştirilmiştir.

Ayrıntılı süreç, karşılaşılan sorunlar ve çözümleri için [TECHNICAL_REPORT.md](./TECHNICAL_REPORT.md) dosyasına bakınız.

## İletişim

- GitHub: [goktug01-dev](https://github.com/goktug01-dev)
- LinkedIn: [Göktuğ Kocatürk](https://www.linkedin.com/in/g%C3%B6ktu%C4%9F-kocat%C3%BCrk-b8290b380/)
