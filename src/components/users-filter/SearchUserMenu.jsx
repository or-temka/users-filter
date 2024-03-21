import styles from './SearchUserMenu.module.css'
import Input from '../UI/Input'
import ClearFilterBtn from './ClearFiltersBtn'

function SearchUserMenu({ userSearch, setUserSearch }) {
  return (
    <div className={styles.SearchUserMenu}>
      <Input
        value={userSearch}
        onChange={(event) => {
          setUserSearch(event.target.value)
        }}
        placeholder="Поиск по имени или e-mail"
        imageClass="search-bg-img"
        imagePosition="left"
      />
      <ClearFilterBtn setUserSearch={setUserSearch} />
    </div>
  )
}

export default SearchUserMenu
