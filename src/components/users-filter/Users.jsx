import User from './User'
import styles from './Users.module.css'

function Users() {
  return (
    <div className={styles.Users}>
      <div className={styles.Users__tableHeader}>
        <span className={`${styles.Users__headerItem}`}>Имя пользователя</span>
        <span
          className={`${styles.Users__headerItem} ${styles.Users__headerItem_email}`}
        >
          E-mail
        </span>
        <span
          className={`${styles.Users__headerItem} ${styles.Users__headerItem_date}`}
        >
          Дата регистрации
        </span>
        <span
          className={`${styles.Users__headerItem} ${styles.Users__headerItem_rating}`}
        >
          Рейтинг
        </span>
        <span className={styles.Users__lastHeaderItem}></span>
      </div>
      <hr className={styles.Users__hr} />
      <div>
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
      <div className={styles.Users__pageBtns}>
        <span className={styles.Users__pageNum}>Page: 1/5</span>
        <div>
          <button
            className={`${styles.Users__pageBtn} ${styles.Users__pageBtn_prev}`}
          ></button>
          <button
            className={`${styles.Users__pageBtn} ${styles.Users__pageBtn_next}`}
          ></button>
        </div>
      </div>
    </div>
  )
}

export default Users
