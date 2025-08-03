import { HeadingProps } from './types'
import styles from './styles.module.css'

export const Heading = ({ children }: HeadingProps) => {
  return (
    <>
      <h1 className={styles.heading}>{children}</h1>
    </>
  )
}
