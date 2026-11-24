import { createContext, useContext } from 'react'

export const LangContext = createContext({ lang: 'en', setLang: () => {} })

export const useLang = () => useContext(LangContext)

export function initialLang() {
  const saved = localStorage.getItem('lang')
  if (saved === 'en' || saved === 'tr') return saved
  return navigator.language?.toLowerCase().startsWith('tr') ? 'tr' : 'en'
}
