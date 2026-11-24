import { useLang } from '../lang'

const text = {
  en: {
    title: 'About Me',
    intro:
      "I'm a first-year Computer Engineering student at İzmir Katip Çelebi University. I'm interested in embedded software and image processing, and I'm building my skills in C and ROS 2 by working on real projects with my teams.",
    highlights: [
      {
        title: 'Vice Chair · IEEE İKÇÜ',
        text: 'I serve on the Executive Board of the IEEE student branch at İzmir Katip Çelebi University.',
      },
      {
        title: 'Intern · IEEE İKÇÜ TechOps',
        text: "I'm an intern in TechOps, the branch's technical operations and infrastructure department.",
      },
      {
        title: 'Software Team · ROTA',
        text: "I'm on the ROTA team's software team in the TEKNOFEST Robotaxi (autonomous taxi) category, working with ROS 2.",
      },
      {
        title: 'Interests',
        text: 'Embedded software and image processing, built on a solid foundation in C.',
      },
    ],
  },
  tr: {
    title: 'Hakkımda',
    intro:
      "İzmir Katip Çelebi Üniversitesi'nde Bilgisayar Mühendisliği birinci sınıf öğrencisiyim. Gömülü yazılım ve görüntü işlemeyle ilgileniyorum; ekiplerimle gerçek projelerde çalışarak C ve ROS 2 becerilerimi geliştiriyorum.",
    highlights: [
      {
        title: 'Başkan Yardımcısı · IEEE İKÇÜ',
        text: "İzmir Katip Çelebi Üniversitesi IEEE Öğrenci Kolu'nun Yönetim Kurulu'nda görev alıyorum.",
      },
      {
        title: 'Stajyer · IEEE İKÇÜ TechOps',
        text: "Kolun teknik operasyon ve altyapı birimi olan TechOps'ta stajyerim.",
      },
      {
        title: 'Yazılım Ekibi · ROTA',
        text: 'ROTA takımının TEKNOFEST Robotaksi kategorisindeki yazılım ekibinde ROS 2 ile çalışıyorum.',
      },
      {
        title: 'İlgi Alanları',
        text: 'Sağlam bir C temeli üzerine gömülü yazılım ve görüntü işleme.',
      },
    ],
  },
}

function About() {
  const { lang } = useLang()
  const t = text[lang]

  return (
    <section id="about">
      <h2>{t.title}</h2>
      <p>{t.intro}</p>
      <div className="highlights">
        {t.highlights.map((item, i) => (
          <div className="card" key={i}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
