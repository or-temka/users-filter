import SearchUserMenu from './SearchUserMenu'
import Filter from './Filter'
import Users from './Users'
import styles from './UserFilter.module.css'

function UserFilter() {
  return (
    <div className={styles.UserFilter}>
      <h1 className="h1">Список пользователей</h1>
      <SearchUserMenu />
      <Filter />
      <Users />
    </div>
  )
}

export default UserFilter
