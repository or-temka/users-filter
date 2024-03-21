import { Link } from 'react-router-dom'
import styles from './ClearFiltersBtn.module.css'

function ClearFiltersBtn() {
  return (
    <Link className={styles.ClearFiltersBtn}>
      <div className={styles.ClearFiltersBtn__svg}></div>
      <span className={styles.ClearFiltersBtn__text}>Очистить фильтр</span>
    </Link>
  )
}

export default ClearFiltersBtn
