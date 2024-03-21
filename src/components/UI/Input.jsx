import styles from './Input.module.css'

function Input({ placeholder, imageClass, imagePosition }) {
  return (
    <input
      type="text"
      className={`${styles.Input} ${imageClass} ${
        imagePosition == 'left' ? styles.Input_imgLeft : styles.Input_imgRight
      }`}
    />
  )
}

export default Input
