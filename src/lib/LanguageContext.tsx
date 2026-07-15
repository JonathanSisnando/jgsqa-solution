import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { Lang, Translation } from './translations'
import { TRANSLATIONS } from './translations'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translation
}

const Ctx = createContext<LangCtx>(null!)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('kbyte-lang') as Lang) || 'pt'
    }
    return 'pt'
  })

  useEffect(() => {
    localStorage.setItem('kbyte-lang', lang)
    document.documentElement.lang = lang
    document.title = TRANSLATIONS[lang].meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', TRANSLATIONS[lang].meta.description)
  }, [lang])

  return (
    <Ctx.Provider value={{ lang, setLang, t: TRANSLATIONS[lang] }}>
      {children}
    </Ctx.Provider>
  )
}

export const useLang = () => useContext(Ctx)
