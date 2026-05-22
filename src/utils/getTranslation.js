import { translations } from '../translations'

export function getT(lang) {
  const dict = translations[lang] || translations.en
  return function t(key) {
    const keys = key.split('.')
    let result = dict
    for (const k of keys) {
      result = result?.[k]
    }
    return result ?? key
  }
}
