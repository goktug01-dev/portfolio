# Teknik Rapor: React Portfolio Geliştirme ve GitHub Pages Yayınlama

| | |
|---|---|
| **Görev** | TO-0005 · TechOps | React Portfolio Geliştirme ve GitHub Pages Yayınlama |
| **Sorumlu** | Göktuğ Kocatürk |
| **Destek** | Samet Ünsal |
| **Tarih** | 12.11.2026 → 19.11.2026 |
| **Repo** | https://github.com/goktug01-dev/portfolio |
| **Canlı site** | https://goktug01-dev.github.io/portfolio/ |

## 1. Giriş

Bu görevin amacı, React ve Vite ile responsive bir kişisel portfolyo sitesi geliştirmek, çalışmayı Git ve GitHub üzerinden sürüm kontrolü altında yürütmek, GitHub Actions ile otomatik dağıtım kurmak ve siteyi GitHub Pages üzerinde yayınlamaktır.

Bu çalışmada ayrıca modern bir yazılım geliştirme akışı uygulanmıştır: ayrı bir branch'te çalışma, anlamlı commit mesajları, Pull Request ile birleştirme ve otomatik yayın.

## 2. Kullanılan Teknolojiler ve Seçim Nedenleri

| Teknoloji | Neden seçildi |
|---|---|
| **React** | Sayfayı yeniden kullanılabilir bileşenlere bölmeyi sağlar. Görev bunu şart koşuyor. |
| **Vite** | Hızlı geliştirme sunucusu ve basit üretim derlemesi sunar. React şablonu hazır gelir. |
| **Three.js ve @react-three/fiber** | Three.js 3D grafik motorudur. @react-three/fiber onu React bileşeni gibi kullanmayı sağlar. Arka plandaki nokta bulutu için kullanıldı. |
| **CSS (kütüphanesiz)** | Tasarım üzerinde tam kontrol için hazır bir arayüz kütüphanesi kullanılmadı. |
| **ESLint** | Vite şablonuyla birlikte gelen kod denetleyicisi. |
| **GitHub Actions** | Kod `main`'e gelince derleme ve yayını otomatikleştirir. |
| **GitHub Pages** | Statik siteler için ücretsiz barındırma sağlar. |

## 3. Mimari

Uygulama tek sayfalı (single page) bir yapıdır. Akış şöyledir:

1. Tarayıcı `index.html` dosyasını açar. Dosyada boş bir `<div id="root">` bulunur.
2. `main.jsx`, React'e `App` bileşenini bu kutunun içine çizmesini söyler.
3. `App.jsx`, bileşenleri sırayla yerleştirir: Navbar, Hero, Marquee, About, Projects, Contact, Footer.

### Bileşenler (8 adet)

| Bileşen | Görevi |
|---|---|
| `Navbar` | Sabit üst menü, bölümlere bağlantılar |
| `Hero` | Karşılama alanı: ad, tanıtım yazısı, fotoğraf |
| `PointCloud` | Hero arkasındaki 3D nokta bulutu (Three.js) |
| `Marquee` | Kayan beceri şeridi |
| `About` | Hakkımda metni ve rol/ilgi alanı kartları |
| `Projects` | Proje kartları |
| `Contact` | GitHub, LinkedIn ve e-posta bağlantıları |
| `Footer` | Alt bilgi |

`About` ve `Projects` bileşenlerinde kart bilgileri bir dizide (`highlights`, `projects`) tutulur ve `.map()` ile ekrana çizilir. Böylece yeni kart eklemek için sadece diziye bir kayıt eklemek yeterlidir.

### 3D Nokta Bulutu

`PointCloud` bileşeni 70×70 noktalık bir ızgara oluşturur. Her karede noktaların yüksekliği sinüs fonksiyonlarıyla güncellenerek LiDAR taramasını andıran bir dalga ve tepe efekti üretilir.Fare konumu, sahnenin hafifçe eğilmesi için kullanılır. İlk sürümde hareket gözü yorduğu için dalga genliği, dönüş hızı ve fare etkisi azaltılmış, nokta bulutuna saydamlık verilmiştir.

## 4. Geliştirme Süreci ve Git Akışı

Çalışma `main` branch'ine doğrudan yazılmadan, `feat/portfolio` adlı ayrı bir branch'te yürütüldü. Branch, Pull Request #1 ile `main`'e birleştirildi. Pull Request toplam 12 commit içeriyordu.

| # | Commit mesajı | Kapsam |
|---|---|---|
| 1 | `chore: initialize React + Vite project` | Vite + React şablonunun kurulması |
| 2 | `chore: remove Vite template boilerplate` | Şablon örnek içeriğinin temizlenmesi |
| 3 | `feat: add Navbar component` | Navbar |
| 4 | `feat: add About section` | About |
| 5 | `feat: add Hero section and switch content to English` | Hero ve içeriğin İngilizceye çevrilmesi |
| 6 | `feat: add Projects section` | Projects |
| 7 | `feat: add Contact and Footer sections` | Contact, Footer, App güncellemesi |
| 8 | `chore: add three.js and react-three-fiber` | 3D bağımlılıkları |
| 9 | `feat: add LiDAR point cloud 3D background` | PointCloud |
| 10 | `feat: redesign Hero with photo and 3D scene` | Hero yeniden tasarımı |
| 11 | `style: fix hero photo frame and calm point cloud` | Fotoğraf çerçevesi, nokta bulutunun sadeleştirilmesi, Marquee ve brutalist tema |
| 12 | `ci: add GitHub Pages deploy workflow` | `base` ayarı ve dağıtım workflow'u |

Commit mesajlarında `chore`, `feat`, `style`, `ci` ön ekleri kullanılmıştır. Böylece geçmiş bakıldığında değişikliğin türü anlaşılır.

## 5. Tasarım Kararları

İlk sürümde koyu lacivert zemin, mor-mavi degrade ve eş boyutlu yuvarlak kartlar kullanılmış, ancak sonuç hazır bir şablon gibi göründüğü ve kişisel bir kimlik taşımadığı için reddedilmiştir. Bunun yerine şu yön seçilmiştir:

- **Brutalist tarz:** Krem zemin, kalın siyah çizgiler, sert gölgeler, büyük başlıklar ve tek vurgu rengi (turuncu).
- **3D öğe:** İlgi alanlarıyla (otonom araçlar, görüntü işleme) uyumlu olduğu için LiDAR nokta bulutu seçilmiştir.
- **Fotoğraf:** Hero bölümünde renkli, hafif eğik ve sert gölgeli bir çerçeve içinde gösterilir.
- **Responsive:** `@media (max-width: 800px)` kuralıyla hero iki sütundan tek sütuna geçer, menü alt alta dizilir. Renkler ve kenarlıklar `:root` içindeki CSS değişkenlerinden okunur, tema tek yerden değiştirilebilir.
- **Erişilebilirlik:** `prefers-reduced-motion` ayarı açık kullanıcılarda kayan şerit animasyonu kapatılır.

## 6. Yayınlama (CI/CD)

Yayın için üç parça gereklidir:

1. **`vite.config.js` içinde `base: '/portfolio/'`.** Proje siteleri `kullanıcı.github.io/repo-adı/` altında yayınlandığı için varlık yollarının bu önekle başlaması gerekir. Aksi halde CSS ve görseller bulunamaz.
2. **`.github/workflows/deploy.yml`.** `main` branch'ine push yapıldığında çalışır. Adımlar:
   1. Kodu indir (`actions/checkout`)
   2. Node'u kur (`actions/setup-node`)
   3. `npm ci` ile bağımlılıkları kur
   4. `npm run build` ile siteyi derle
   5. `actions/configure-pages` ile Pages'i hazırla
   6. `dist` klasörünü yükle (`actions/upload-pages-artifact`)
   7. Yayınla (`actions/deploy-pages`)
3. **GitHub'da Settings → Pages → Source: GitHub Actions.**

Pull Request birleştirildikten sonra workflow otomatik çalışmış ve dağıtım başarıyla tamamlanmıştır.

## 7. Karşılaşılan Sorunlar ve Çözümleri

| Sorun | Neden | Çözüm |
|---|---|---|
| Terminale yazılan Git komutları çalışmıyordu | `npm run dev` terminali sürekli meşgul ediyordu | `Ctrl + C` ile durdurmak, Git için ikinci bir terminal açmak |
| Commit beklenen branch'e gitmedi | Branch açılmadan `main` üzerinde çalışılıyordu | `git checkout -b feat/portfolio` ile branch açmak |
| Bir bileşen ekranda görünmedi, commit komutu dosyayı bulamadı | Dosya adı `Project.jsx`, import ise `Projects` idi | Dosyayı `Projects.jsx` olarak yeniden adlandırmak |
| `git add` sırasında satır sonu uyarısı | Windows (CRLF) ve diğer sistemler (LF) arasındaki fark | Zararsız bir uyarıdır, yok sayıldı |
| Terminalde "not a git repository" hatası | Terminal reponun içindeki klasörde değil, bir üst klasörde açıktı | Terminali doğru klasörde açmak (`cd`) |
| Tasarım değişikliğinde fotoğraf çerçevesi ve boyut sınırı kayboldu, fotoğraf taştı | CSS kuralları yanlışlıkla silinmişti | Eksik kuralları yeniden yazmak, `object-fit` ve `aspect-ratio` kullanmak. Gerektiğinde `git diff` ve `git restore` ile geri dönülebilir |
| Nokta bulutu fare ile çok hareketli ve göz yorucu | Fare ve dalga etkisi yüksekti | Genlik, hız ve fare etkisini düşürmek, saydamlık eklemek |
| Dağıtımdan hemen sonra 404 | İlk dağıtım henüz tamamlanmamıştı | Actions sekmesinden yeşil tik beklenip sayfa yenilendi |
| Derlemede "chunk 500 kB'tan büyük" uyarısı | Three.js kütüphanesi büyük | Hata değil, bilgilendirme. Gelecek iyileştirme olarak kod bölme önerilir |

## 8. Test ve Doğrulama

- `npm run build` komutu yerelde hatasız tamamlandı.
- Site yerelde `npm run dev` ile denendi.
- Tarayıcı geliştirici araçlarının (F12) cihaz modu ile telefon boyutunda yerleşim kontrol edildi.
- GitHub Actions workflow'u başarıyla tamamlandı (yeşil tik).
- Canlı adres tarayıcıda açılarak doğrulandı.

## 9. Sonuç ve Öğrenilenler

- Git'te branch açma, anlamlı commit atma, Pull Request açma ve birleştirme akışı uygulandı.
- React'te bileşen, `import`/`export`, `.map()` ile liste çizme ve bileşenleri birleştirme mantığı öğrenildi.
- Vite'ın proje yapısı, `base` ayarının yayındaki önemi ve derleme çıktısı (`dist`) anlaşıldı.
- GitHub Actions ile CI/CD kurulumu yapıldı.
- Hata mesajlarını okuyarak sorunun nerede olduğunu bulma pratiği kazanıldı.

## 10. Geliştirme Önerileri

- Sayfa kaydırıldıkça bölümlerin belirmesi (scroll animasyonu)
- Experience (deneyim) zaman çizgisi bölümü
- Açık/koyu tema ve TR/EN dil düğmeleri
- Three.js için kod bölme (code splitting) ile ilk yüklenme boyutunun küçültülmesi
- Proje kartlarına ekran görüntüleri
- Favicon ve paylaşım önizleme (Open Graph) etiketleri

## 11. Teslim Kontrol Listesi

| Ölçüt | Durum |
|---|---|
| Çalışan GitHub Pages bağlantısı | ✅ https://goktug01-dev.github.io/portfolio/ |
| Public repository | ✅ |
| En az 5 React component | ✅ 8 bileşen |
| En az 5 anlamlı commit | ✅ 12 commit |
| 1 Pull Request | ✅ PR #1 |
| Başarılı GitHub Actions deployment | ✅ |
| README.md | ✅ |
| TECHNICAL_REPORT.md | ✅ |

## 12. Kullanılan Araçlar ve Kaynakça

**Araçlar:** Visual Studio Code, Git, GitHub, Node.js ve npm. Kurulum, hata ayıklama ve kod örnekleri için yapay zekâ asistanı (Claude) danışman olarak kullanılmıştır.

**Kaynaklar:**
- Vite, Deploying a Static Site: https://vite.dev/guide/static-deploy
- React belgeleri: https://react.dev
- Three.js belgeleri: https://threejs.org/docs
- React Three Fiber belgeleri: https://r3f.docs.pmnd.rs
- GitHub Pages belgeleri: https://docs.github.com/pages
- GitHub Actions belgeleri: https://docs.github.com/actions
