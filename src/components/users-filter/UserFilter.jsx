import { useEffect, useState } from 'react'

import SearchUserMenu from './SearchUserMenu'
import Filter from './Filter'
import Users from './Users'
import styles from './UserFilter.module.css'
import DeleteUserPopUp from './DeleteUserPopUp'

function UserFilter() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users')
      .then((response) => response.json())
      .then((users) => setUsers([...users]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <DeleteUserPopUp users={users} setUsers={setUsers} />
      <div className={styles.UserFilter}>
        <h1 className="h1">Список пользователей</h1>
        <SearchUserMenu />
        <Filter />
        <Users users={users} setUsers={setUsers} loading={loading} />
      </div>
    </>
  )
}

export default UserFilter
