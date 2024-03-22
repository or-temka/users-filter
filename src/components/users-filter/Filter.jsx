import { Link, useLocation } from 'react-router-dom'
import styles from './Filter.module.css'
import queryString from 'query-string'

function Filter() {
  const location = useLocation()
  const searchAsObj = queryString.parse(location.search)
  searchAsObj.sort_reverse = searchAsObj.sort_reverse == 'true' ? true : false

  const searchInputParams = searchAsObj.search
    ? '&search=' + searchAsObj.search
    : ''

  return (
    <div className={styles.Filter}>
      <span className={styles.Filter__label}>Сортировка: </span>
      <div className={styles.Filter__items}>
        <Link
          to={`?sort=registration_date&${
            searchAsObj.sort == 'registration_date'
              ? 'sort_reverse=' + !searchAsObj.sort_reverse
              : 'sort_reverse=false'
          }${searchInputParams}`}
          className={`${styles.Filter__item} ${
            searchAsObj.sort == 'registration_date'
              ? styles.Filter__item_active
              : ''
          } ${
            searchAsObj.sort == 'registration_date'
              ? searchAsObj.sort_reverse
                ? styles.Filter__item_down
                : styles.Filter__item_up
              : ''
          }`}
        >
          Дата регистрации
        </Link>
        <Link
          to={`?sort=rating&${
            searchAsObj.sort == 'rating'
              ? 'sort_reverse=' + !searchAsObj.sort_reverse
              : 'sort_reverse=false'
          }${searchInputParams}`}
          className={`${styles.Filter__item} ${
            searchAsObj.sort == 'rating' ? styles.Filter__item_active : ''
          } ${
            searchAsObj.sort == 'rating'
              ? searchAsObj.sort_reverse
                ? styles.Filter__item_down
                : styles.Filter__item_up
              : ''
          }`}
        >
          Рейтинг
        </Link>
      </div>
    </div>
  )
}

export default Filter
