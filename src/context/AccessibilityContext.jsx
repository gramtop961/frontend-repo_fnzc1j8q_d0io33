import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const defaultSettings = {
  darkMode: false,
  highContrast: false,
  fontScale: 1,
  reducedMotion: false,
}

const AccessibilityContext = createContext({
  settings: defaultSettings,
  setSetting: () => {},
  reset: () => {},
})

export function AccessibilityProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    try {
      const raw = localStorage.getItem('signify_accessibility')
      return raw ? { ...defaultSettings, ...JSON.parse(raw) } : defaultSettings
    } catch {
      return defaultSettings
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('signify_accessibility', JSON.stringify(settings))
    } catch {}
  }, [settings])

  useEffect(() => {
    // apply dark mode
    const root = document.documentElement
    if (settings.darkMode) root.classList.add('dark')
    else root.classList.remove('dark')

    // apply font scale
    root.style.setProperty('--font-scale', String(settings.fontScale))

    // reduced motion
    if (settings.reducedMotion) root.classList.add('rm')
    else root.classList.remove('rm')

    // high contrast
    if (settings.highContrast) root.classList.add('hc')
    else root.classList.remove('hc')
  }, [settings])

  const value = useMemo(() => ({
    settings,
    setSetting: (key, value) => setSettings(s => ({ ...s, [key]: value })),
    reset: () => setSettings(defaultSettings),
  }), [settings])

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  return useContext(AccessibilityContext)
}
