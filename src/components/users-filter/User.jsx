import { Link, useLocation } from 'react-router-dom'
import styles from './User.module.css'
import queryString from 'query-string'

function User({ id, username, email, registration_date, rating }) {
  // create other location params string
  const locationParams = queryString.parse(useLocation().search)
  delete locationParams.delete_user_pop_up
  let locationString = ''
  for (let key in locationParams) {
    locationString += '&' + key + '=' + locationParams[key]
  }

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
        <Link
          className={styles.User__cross}
          to={`?delete_user_pop_up=${id}${locationString}`}
        ></Link>
      </div>
    </div>
  )
}

export default User
