import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'

function App() {
  const { user, theme } = useContext(UserContext)

  return (
    <div className={theme === 'dark' ? 'bg-[#0f1147] min-h-screen' : 'bg-gray-50 min-h-screen'}>
      {user === null ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <Dashboard />
        </>
      )}
    </div>
  )
}

export default App