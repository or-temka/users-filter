import { Link } from 'react-router-dom'
import styles from './User.module.css'

function User({ username, eMail, dateOfCreate, rating }) {
  return (
    <div className={styles.User}>
      <div className={styles.User__container}>
        <span className={`${styles.User__data} ${styles.User__name}`}>
          {username}
        </span>
        <span className={`${styles.User__data} ${styles.User__data_email}`}>
          {eMail}
        </span>
        <span className={`${styles.User__data} ${styles.User__data_date}`}>
          {dateOfCreate}
        </span>
        <span className={`${styles.User__data} ${styles.User__data_rating}`}>
          {rating}
        </span>
        <Link className={styles.User__cross}></Link>
      </div>
    </div>
  )
}

export default User
