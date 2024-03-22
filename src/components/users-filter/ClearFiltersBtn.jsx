import { Link, useLocation } from 'react-router-dom'
import styles from './ClearFiltersBtn.module.css'

function ClearFiltersBtn({ setSearchValue }) {
  const locationParams = useLocation().search
  console.log(locationParams)

  return (
    <>
      {locationParams && (
        <Link
          className={styles.ClearFiltersBtn}
          to=""
          onClick={() => {
            setSearchValue('')
          }}
        >
          <div className={styles.ClearFiltersBtn__svg}></div>
          <span className={styles.ClearFiltersBtn__text}>Очистить фильтр</span>
        </Link>
      )}
    </>
  )
}

export default ClearFiltersBtn
