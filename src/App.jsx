import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UserFilter from './components/users-filter/UserFilter'
import PageNotFound from './components/other/PageNotFound'
import DeleteUserPopUp from './components/users-filter/DeleteUserPopUp'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/">
            <Route index element={<UserFilter />}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
