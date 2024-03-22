import { useLocation, useNavigate } from 'react-router-dom'

import styles from './DeleteUserPopUp.module.css'
import PopUp from '../UI/PopUp'
import queryString from 'query-string'

function DeleteUserPopUp({ users, setUsers }) {
  // create other location params string
  const locationParams = queryString.parse(useLocation().search)
  const userIdForDel = locationParams.delete_user_pop_up
  delete locationParams.delete_user_pop_up
  let locationString = ''
  for (let key in locationParams) {
    locationString += '&' + key + '=' + locationParams[key]
  }

  const navigate = useNavigate()

  return (
    <>
      {userIdForDel && (
        <PopUp
          onClickBackground={() => {
            navigate(locationString ? `?${locationString}` : "", { relative: 'path' })
          }}
        >
          <div className={styles.DeleteUserPopUp}>
            <div className={styles.DeleteUserPopUp__textBox}>
              <span className={styles.DeleteUserPopUp__text}>
                Вы уверены, что хотите удалить пользователя?
              </span>
            </div>
            <div className={styles.DeleteUserPopUp__buttons}>
              <button
                className={`button ${styles.DeleteUserPopUp__button} ${styles.DeleteUserPopUp__button_confirm}`}
                onClick={() => {
                  let newArrayOfUsers = [...users]
                  const indexForDel = newArrayOfUsers.findIndex(
                    (user) => user.id == userIdForDel
                  )
                  newArrayOfUsers.splice(indexForDel, 1)
                  setUsers(newArrayOfUsers)
                  navigate(locationString ? `?${locationString}` : "", { relative: 'path' })
                }}
              >
                Да
              </button>
              <button
                className={`button ${styles.DeleteUserPopUp__button} ${styles.DeleteUserPopUp__button_cancel}`}
                onClick={() => {
                  navigate(locationString ? `?${locationString}` : "", { relative: 'path' })
                }}
              >
                Нет
              </button>
            </div>
          </div>
        </PopUp>
      )}
    </>
  )
}

export default DeleteUserPopUp
