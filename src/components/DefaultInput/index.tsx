import styles from './styles.module.css'
interface DefaultInputProps extends React.ComponentProps<'input'> {
  id: string
  labelText?: string
}

export const DefaultInput = ({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input
        className={styles.input}
        id={id}
        type={type}
        {...rest}
        placeholder="Digite algo"
      />
    </>
  )
}
