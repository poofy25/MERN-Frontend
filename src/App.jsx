import { BrowserRouter , Routes , Route , Navigate } from 'react-router-dom'

import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import HomePage from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'



function App() {
  const { user } = useAuthContext()
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={user ? <HomePage/> : <Navigate to='/login'/>} />

            <Route path="/login" element={!user ? <Login/> : <Navigate to='/'/>} />

            <Route path="/signup" element={!user ? <Signup/> : <Navigate to='/'/>} />

          </Routes>
        </div>
      </BrowserRouter>

    </div>
  )
}

export default App
