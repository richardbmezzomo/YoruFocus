import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon
} from 'lucide-react'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

type AvailableTheme = 'dark' | 'light'

export const Menu = () => {
  const [theme, setTheme] = useState<AvailableTheme>(() => {
    const themeStorage =
      (localStorage.getItem('theme') as AvailableTheme) || 'dark'
    return themeStorage
  })

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  }

  function handleChangeTheme(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    e.preventDefault()

    setTheme(prev => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark'
      return nextTheme
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <nav className={styles.menu}>
        <a
          href="#"
          aria-label="Ir para a home"
          title="Ir para a home"
          className={styles.menuLink}
        >
          <HouseIcon />
        </a>
        <a
          href="#"
          aria-label="Ver histórico"
          title="Ver histórico"
          className={styles.menuLink}
        >
          <HistoryIcon />
        </a>
        <a
          href="#"
          aria-label="Configurações"
          title="Configurações"
          className={styles.menuLink}
        >
          <SettingsIcon />
        </a>
        <a
          href="#"
          aria-label="Alterar tema"
          title="Alterar tema"
          className={styles.menuLink}
          onClick={handleChangeTheme}
        >
          {nextThemeIcon[theme]}
        </a>
      </nav>
      <ToastContainer position="top-center" autoClose={3000} theme={theme} />
    </>
  )
}
