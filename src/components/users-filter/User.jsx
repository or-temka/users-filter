import { Link } from 'react-router-dom'
import styles from './User.module.css'

function User({ username, email, registration_date, rating }) {
  const userRegDate = new Date(registration_date)

  return (
    <div className={styles.User}>
      <div className={styles.User__container}>
        <span className={`${styles.User__data} ${styles.User__name}`}>
          {username}
        </span>
        <span className={`${styles.User__data} ${styles.User__data_email}`}>
          {email}
        </span>
        <span className={`${styles.User__data} ${styles.User__data_date}`}>
          {`${(userRegDate.getDate() > 9 ? '' : '0') + userRegDate.getDate()}.${
            (userRegDate.getMonth() > 9 ? '' : '0') + userRegDate.getMonth()
          }.${userRegDate.getFullYear().toString().slice(2, 4)}`}
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
