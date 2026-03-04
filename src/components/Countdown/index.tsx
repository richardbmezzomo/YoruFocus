import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import styles from './styles.module.css'

export const Countdown = () => {
  const { state } = useTaskContext()
  return (
    <div className={styles.container}>{state.formatedSecondsRemaining}</div>
  )
}
