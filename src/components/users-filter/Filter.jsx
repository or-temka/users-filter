import { Link } from 'react-router-dom'
import styles from './Filter.module.css'


function Filter() {
  return (
    <div className={styles.Filter}>
      <span>Сортировка: </span>
      <Link to="">Дата регистрации</Link>
      <Link to="">Рейтинг</Link>
    </div>
  )
}

export default Filter
