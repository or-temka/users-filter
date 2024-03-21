import styles from './SearchUserMenu.module.css'
import Input from '../UI/Input'
import ClearFilterBtn from './ClearFiltersBtn'

function SearchUserMenu() {
  return (
    <div className={styles.SearchUserMenu}>
      <Input
        placeholder="Поиск по имени или e-mail"
        imageClass="search-bg-img"
        imagePosition="left"
      />
      <ClearFilterBtn />
    </div>
  )
}

export default SearchUserMenu