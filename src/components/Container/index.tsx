import styles from './styles.module.css'
import { ContainerProps } from './types'

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
