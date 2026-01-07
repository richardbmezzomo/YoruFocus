import styles from './styles.module.css'

interface DefaultButtonProps extends React.ComponentProps<'button'> {
  state?: 'play' | 'stop'
  icon: React.ReactNode
}

export const DefaultButton = ({
  state = 'play',
  icon,
  ...props
}: DefaultButtonProps) => {
  return (
    <>
      <button className={`${styles.button} ${styles[state]}`} {...props}>
        {icon}
      </button>
    </>
  )
}
