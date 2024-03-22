import styles from './SearchUserMenu.module.css'
import Input from '../UI/Input'
import ClearFilterBtn from './ClearFiltersBtn'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import queryString from 'query-string'

function SearchUserMenu() {
  const navigate = useNavigate()

  const [searchValue, setSearchValue] = useState(
    queryString.parse(useLocation().search).search
  )

  // create other location params string
  const location = queryString.parse(useLocation().search)
  delete location.search
  let locationString = ''
  for (let key in location) {
    locationString += '&' + key + '=' + location[key]
  }
  return (
    <div className={styles.SearchUserMenu}>
      <Input
        value={searchValue || ''}
        onChange={(event) => {
          const eventValue = event.target.value
          setSearchValue(eventValue)
          if (eventValue) {
            navigate(`?search=${eventValue}${locationString}`, {
              relative: 'path',
            })
          } else {
            locationString
              ? navigate(`?${locationString}`, { relative: 'path' })
              : navigate('', { relative: 'path' })
          }
        }}
        placeholder="Поиск по имени или e-mail"
        imageClass="search-bg-img"
        imagePosition="left"
      />
      <ClearFilterBtn setSearchValue={setSearchValue} />
    </div>
  )
}

export default SearchUserMenu
