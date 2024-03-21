import { Link } from 'react-router-dom'
import styles from './ClearFiltersBtn.module.css'

function ClearFiltersBtn({ setUserSearch }) {
  return (
    <Link
      className={styles.ClearFiltersBtn}
      onClick={() => {
        setUserSearch('')
      }}
    >
      <div className={styles.ClearFiltersBtn__svg}></div>
      <span className={styles.ClearFiltersBtn__text}>Очистить фильтр</span>
    </Link>
  )
}

export default ClearFiltersBtn
