import SearchUserMenu from './SearchUserMenu'
import Filter from './Filter'
import Users from './Users'
import styles from './UserFilter.module.css'
import { useEffect, useState } from 'react'

function UserFilter() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [userSearch, setUserSearch] = useState('')

  useEffect(() => {
    fetch('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users')
      .then((response) => response.json())
      .then((users) => setUsers([...users]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className={styles.UserFilter}>
      <h1 className="h1">Список пользователей</h1>
      <SearchUserMenu
        userSearch={userSearch}
        setUserSearch={(text) => {
          setUserSearch(text)
        }}
      />
      <Filter />
      <Users userSearch={userSearch} users={users} loading={loading} />
    </div>
  )
}

export default UserFilter
