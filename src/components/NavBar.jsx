import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Avatar from './Avatar'
import { GridIcon, LogoutIcon } from './Icons'

function Navbar() {
  const { user, theme, logout } = useContext(UserContext)
  const isDark = theme === 'dark'

  return (
    <nav
      className={`flex items-center justify-between px-4 sm:px-8 py-3 border-b ${
        isDark ? 'bg-[#171a5c] border-[#2b2f7a]' : 'bg-white border-gray-200'
      }`}
    >
      {/* Logo a la izquierda */}
      <div className="flex items-center gap-2">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? 'bg-indigo-600' : 'bg-indigo-600'}`}>
          <GridIcon className="w-5 h-5" fill="white" stroke="none" />
        </div>
        <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>SaaS Dash</span>
      </div>

      {/* Usuario + divisor + Log Out a la derecha */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:block text-right">
          <p className={`text-sm font-semibold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {user.name}
          </p>
          <p className={`text-xs leading-tight ${isDark ? 'text-indigo-200' : 'text-gray-400'}`}>
            {user.role} Account
          </p>
        </div>

        {/* Avatar con iniciales, reacciona al nombre automáticamente */}
        <Avatar name={user.name} />

        <div className={`hidden sm:block w-px h-6 ${isDark ? 'bg-[#3a3f8f]' : 'bg-gray-200'}`} />

        <button
          onClick={logout}
          className={`flex items-center gap-1 text-sm font-medium transition ${
            isDark ? 'text-indigo-200 hover:text-white' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <LogoutIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Log Out</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar