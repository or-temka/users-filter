import { Link } from 'react-router-dom'
import styles from './Filter.module.css'

function Filter() {
  return (
    <div className={styles.Filter}>
      <span className={styles.Filter__label}>Сортировка: </span>
      <div className={styles.Filter__items}>
        <Link
          to=""
          className={`${styles.Filter__item} ${styles.Filter__item_active}`}
        >
          Дата регистрации
        </Link>
        <Link to="" className={styles.Filter__item}>
          Рейтинг
        </Link>
      </div>
    </div>
  )
}

export default Filter
