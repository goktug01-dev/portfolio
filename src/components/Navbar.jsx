import { useLang } from '../lang'

const text = {
  en: { about: 'About', projects: 'Projects', contact: 'Contact', switch: 'Language' },
  tr: { about: 'Hakkımda', projects: 'Projeler', contact: 'İletişim', switch: 'Dil' },
}

function Navbar() {
  const { lang, setLang } = useLang()
  const t = text[lang]

  return (
    <nav>
      <h2 className="nav-brand">
        <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" width="28" height="28" />
        Göktuğ Kocatürk
      </h2>
      <div className="nav-right">
        <ul>
          <li><a href="#about">{t.about}</a></li>
          <li><a href="#projects">{t.projects}</a></li>
          <li><a href="#contact">{t.contact}</a></li>
        </ul>
        <div className="lang-switch" role="group" aria-label={t.switch}>
          {['en', 'tr'].map((code) => (
            <button
              key={code}
              type="button"
              lang={code}
              aria-pressed={lang === code}
              onClick={() => setLang(code)}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
