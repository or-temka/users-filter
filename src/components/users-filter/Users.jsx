import { useState } from 'react'
import User from './User'
import Input from '../UI/Input'
import styles from './Users.module.css'

const MAX_PAGE_USERS = 5

function Users({ users, loading }) {
  const [nowPage, setNowPage] = useState(1)
  let maxPageElementsNum = nowPage * MAX_PAGE_USERS
  let minPageElementsNum = maxPageElementsNum - MAX_PAGE_USERS
  const maxPages = Math.ceil(users.length / MAX_PAGE_USERS)

  if (nowPage > maxPages && maxPages != 0) {
    setNowPage(maxPages)
  } else if (nowPage < 1){
    setNowPage(1)
  }

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
        {/* Users loading */}
        {loading ? (
          <span className="loader"></span>
        ) : (
          users.map((user, index) => {
            if (index >= minPageElementsNum && index < maxPageElementsNum) {
              return <User {...user} key={user.username} />
            }
          })
        )}
      </div>
      <div className={styles.Users__pageBtns}>
        <div>
          <span
            className={`${styles.Users__pageNum} ${styles.Users__pageNum_title}`}
          >
            Page:
          </span>
          <Input
            className={styles.Users__pageInput}
            value={nowPage}
            onChange={(event) => setNowPage(event.target.value)}
          />
          <span
            className={`${styles.Users__pageNum} ${styles.Users__pageNum_max}`}
          >
            / {maxPages}
          </span>
        </div>

        <div>
          <button
            onClick={() => {
              if (nowPage > 1) {
                setNowPage(nowPage - 1)
              }
            }}
            className={`${styles.Users__pageBtn} ${styles.Users__pageBtn_prev}`}
          ></button>
          <button
            onClick={() => {
              if (nowPage < maxPages) {
                setNowPage(nowPage + 1)
              }
            }}
            className={`${styles.Users__pageBtn} ${styles.Users__pageBtn_next}`}
          ></button>
        </div>
      </div>
    </div>
  )
}

export default Users
