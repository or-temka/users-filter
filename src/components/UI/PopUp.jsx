import styles from './PopUp.module.css'

function PopUp({ children, onClickBackground }) {
  return (
    <div className={styles.PopUp}>
      <div
        className={styles.PopUp__container}
        onClick={onClickBackground}
      ></div>
      <div className={styles.PopUp__content}>{children}</div>
    </div>
  )
}

export default PopUp
