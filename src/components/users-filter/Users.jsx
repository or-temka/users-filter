import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import User from './User'
import Input from '../UI/Input'
import styles from './Users.module.css'
import sortArrayBy from '../../utils/sortArrayBy'

const MAX_PAGE_USERS = 5

function Users({ users, setUsers, loading }) {
  const location = useLocation()
  const searchParamsAsObject = queryString.parse(location.search)

  let tempUsers = [...users]

  // input filter users
  const searchInputText = searchParamsAsObject.search
  if (searchInputText) {
    tempUsers = [...users].filter(
      (user) =>
        user.username.toLowerCase().includes(searchInputText.toLowerCase()) ||
        user.email.toLowerCase().includes(searchInputText.toLowerCase())
    )
  }

  const [nowPage, setNowPage] = useState(1)
  let maxPageElementsNum = nowPage * MAX_PAGE_USERS
  let minPageElementsNum = maxPageElementsNum - MAX_PAGE_USERS
  const maxPages = Math.ceil(tempUsers.length / MAX_PAGE_USERS)

  // set max and min page
  if (nowPage > maxPages && maxPages != 0) {
    setNowPage(maxPages)
  }

  // Sort
  if (searchParamsAsObject.sort) {
    tempUsers = sortArrayBy(
      tempUsers,
      searchParamsAsObject.sort,
      searchParamsAsObject.sort_reverse
    )
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
          tempUsers.map((user, index) => {
            if (index >= minPageElementsNum && index < maxPageElementsNum) {
              return <User {...user} key={user.username} />
            }
          })
        )}
      </div>
      {/* down menu with second information */}
      <div className={styles.Users__pageBtns}>
        {/* page listener */}
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

        {/* user count */}
        <div className={styles.Users__allUsersBox}>
          <span className={styles.Users__allUsersText}>Всего: </span>
          <span className={styles.Users__allUsersText}>{users.length}</span>
          <span className={styles.Users__allUsersText}> (Найдено: </span>
          <span className={styles.Users__allUsersText}>{tempUsers.length})</span>
        </div>

        {/* next, prev page btns */}
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
