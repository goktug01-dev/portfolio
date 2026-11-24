import hutbeShot from '../assets/hutbe.png'
import { useLang } from '../lang'

const projects = [
  {
    title: { en: 'TEKNOFEST Robotaxi · ROTA', tr: 'TEKNOFEST Robotaksi · ROTA' },
    text: {
      en: "I'm on the ROTA team's software group in TEKNOFEST Robotaxi (original vehicle category), working on simulation and integration. I build the virtual track and vehicle in CARLA and connect them to ROS 2, so the team can test perception, planning and control code in simulation.",
      tr: 'ROTA takımının TEKNOFEST Robotaksi (Özgün Araç) yazılım ekibinin bir parçasıyım. Simülasyon ve entegrasyon tarafında çalışıyorum: CARLA\'da sanal pisti ve aracı hazırlayıp ROS 2 ile bağlayarak, algılama, planlama ve kontrol kodlarının denenebileceği ortamı kuruyorum.',
    },
  },
  {
    title: { en: 'IEEE İKÇÜ Hub', tr: 'IEEE İKÇÜ Hub' },
    text: {
      en: "Our student branch's internal operations portal, built in TechOps. Members send petitions through role-based approval chains and get a document number anyone can verify online. It also handles meeting minutes, room booking and inventory, and runs on Firebase's free plan.",
      tr: "Öğrenci kolumuzun TechOps'ta geliştirilen iç operasyon portalı. Üyeler dilekçelerini rol bazlı onay zincirinden geçirir ve herkesin çevrimiçi doğrulayabildiği bir evrak numarası alır. Toplantı tutanakları, oda rezervasyonu ve demirbaş takibi de burada; Firebase'in ücretsiz planında çalışıyor.",
    },
    link: 'https://github.com/goktug01-dev/ieee-hub',
  },
  {
    title: { en: 'Hutbe Sunum Asistanı', tr: 'Hutbe Sunum Asistanı' },
    text: {
      en: "A web app that turns Diyanet's Friday sermon PDFs into a PowerPoint presentation in seconds, one sentence per slide. It runs in the browser on phone or desktop with nothing to install. I made it as a gift for my father.",
      tr: "Diyanet'in cuma hutbesi PDF'lerini saniyeler içinde, her cümle ayrı slaytta olacak şekilde PowerPoint sunumuna dönüştüren bir web uygulaması. Kurulum gerektirmeden telefonda ya da bilgisayarda tarayıcıdan çalışıyor. Babama hediye olarak yaptım.",
    },
    link: 'https://github.com/goktug01-dev/HutbeSunumAsistani',
    image: hutbeShot,
    imageAlt: { en: 'Hutbe Sunum Asistanı web interface', tr: 'Hutbe Sunum Asistanı web arayüzü' },
  },
]

const text = {
  en: { title: 'Projects', github: 'View on GitHub →' },
  tr: { title: 'Projeler', github: "GitHub'da incele →" },
}

function Projects() {
  const { lang } = useLang()
  const t = text[lang]

  return (
    <section id="projects">
      <h2>{t.title}</h2>
      <div className="projects-grid">
        {projects.map((item) => (
          <div className="card" key={item.link ?? item.title.en}>
            <h3>{item.title[lang]}</h3>
            <p>{item.text[lang]}</p>
            {item.image && (
              <img
                className="card-img"
                src={item.image}
                alt={item.imageAlt[lang]}
                loading="lazy"
              />
            )}
            {item.link && (
              <a href={item.link} target="_blank" rel="noreferrer">
                {t.github}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
