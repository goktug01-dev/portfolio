const skills = [
  'TechOps',
  'ROS 2',
  'EMBEDDED SOFTWARE',
  'IMAGE PROCESSING',
  '01 ADANA 01',
  'AUTONOMOUS VEHICLES',
  'İEEE İKÇÜ',
  'GITHUB',
]

function Marquee() {
  const line = skills.join('  ✦  ') + '  ✦  '
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