import { useLang } from '../lang'

const skills = {
  en: [
    'TECHOPS',
    'ROS 2',
    'EMBEDDED SOFTWARE',
    'IMAGE PROCESSING',
    '01 ADANA 01',
    'AUTONOMOUS VEHICLES',
    'CARLA',
    'IEEE İKÇÜ',
    'C',
    'PYTHON',
    'GITHUB',
  ],
  tr: [
    'TECHOPS',
    'ROS 2',
    'GÖMÜLÜ YAZILIM',
    'GÖRÜNTÜ İŞLEME',
    '01 ADANA 01',
    'OTONOM ARAÇLAR',
    'CARLA',
    'IEEE İKÇÜ',
    'C',
    'PYTHON',
    'GITHUB',
  ],
}

function Marquee() {
  const { lang } = useLang()
  const line = skills[lang].join('  ✦  ') + '  ✦  '
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {Array.from({ length: 4 }, (_, i) => (
          <span key={i}>{line}</span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
