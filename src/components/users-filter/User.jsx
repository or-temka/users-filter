import styles from './User.module.css'

function User({ username, eMail, dateOfCreate, rating }) {
  return (
    <div className={styles.User}>
      <span className={styles.User__name}>{username}</span>
      <span className={styles.User__data}>{eMail}</span>
      <span className={styles.User__data}>{dateOfCreate}</span>
      <span className={styles.User__data}>{rating}</span>
    </div>
  )
}

export default User
