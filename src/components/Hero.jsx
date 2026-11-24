import PointCloud from './PointCloud'
import photo from '../assets/profile.jpeg'
import { useLang } from '../lang'

const text = {
  en: {
    label: '[ COMPUTER ENGINEERING / EMBEDDED / ROS 2 ]',
    desc: 'First-year Computer Engineering student at İzmir Katip Çelebi University. I work on embedded software, image processing and autonomous vehicle software with ROS 2.',
    cta: 'MY PROJECTS ↓',
    tag: 'IEEE İKÇÜ · VICE CHAIR',
  },
  tr: {
    label: '[ BİLGİSAYAR MÜHENDİSLİĞİ / GÖMÜLÜ / ROS 2 ]',
    desc: "İzmir Katip Çelebi Üniversitesi'nde Bilgisayar Mühendisliği birinci sınıf öğrencisiyim. Gömülü yazılım, görüntü işleme ve ROS 2 ile otonom araç yazılımı üzerine çalışıyorum.",
    cta: 'PROJELERİM ↓',
    tag: 'IEEE İKÇÜ · BAŞKAN YARDIMCISI',
  },
}

function Hero() {
  const { lang } = useLang()
  const t = text[lang]

  return (
    <section id="hero">
      <PointCloud />
      <div className="hero-content">
        <div className="hero-text">
          <p className="label">{t.label}</p>
          <h1>
            GÖKTUĞ
            <br />
            KOCATÜRK
          </h1>
          <p className="hero-desc">{t.desc}</p>
          <a className="btn" href="#projects">{t.cta}</a>
        </div>
        <div className="hero-photo">
          <img src={photo} alt="Göktuğ Kocatürk" />
          <span className="tag">{t.tag}</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
