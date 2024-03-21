import User from './User'
import styles from './Users.module.css'

function Users() {
  return (
    <div className={styles.Users}>
      <User
        username="Username"
        eMail="test@test.ru"
        dateOfCreate="23.09.19"
        rating={12}
      />
      <User
        username="Username"
        eMail="test@test.ru"
        dateOfCreate="23.09.19"
        rating={12}
      />
    </div>
  )
}

export default Users
