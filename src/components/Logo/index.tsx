import { TimerIcon } from 'lucide-react'
import styles from './styles.module.css'

export const Logo = () => {
  return (
    <>
      <div className={styles.logo}>
        <a href="#" className={styles.logoLink}>
          <TimerIcon />
          <span>YoruFocus</span>
        </a>
      </div>
    </>
  )
}
