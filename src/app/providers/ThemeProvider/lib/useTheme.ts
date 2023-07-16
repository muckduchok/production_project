import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/themeContext'
import { useContext } from 'react'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme | undefined
}

export function useTheme (): UseThemeResult {
  const { theme, setThem } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    if (setThem != null) {
      setThem(newTheme)
    }
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}
