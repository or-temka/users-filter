import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UserFilter from './components/users-filter/UserFilter'
import PageNotFound from './components/other/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserFilter />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
