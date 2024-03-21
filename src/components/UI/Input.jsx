import styles from './Input.module.css'

function Input({
  placeholder,
  imageClass,
  imagePosition,
  value,
  className,
  onChange,
}) {
  return (
    <input
      value={value}
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      className={`${className} ${styles.Input} ${imageClass} ${
        imagePosition == 'left' ? styles.Input_imgLeft : ''
      }`}
    />
  )
}

export default Input
