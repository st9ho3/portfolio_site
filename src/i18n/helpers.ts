import { ui, defaultLang } from "./ui"

export const getLangFromURL = (url: URL) => {
    const language = url.pathname.split('/')[1]
    if (language in ui) { 
        return language as keyof typeof ui }
    return defaultLang
}

export function useTranslation(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
