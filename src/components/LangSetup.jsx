'use client'
import { useEffect } from 'react'

export default function LangSetup({ lang }) {
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  return null
}
