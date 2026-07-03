import { createContext, useState } from 'react'

export const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [theme, setTheme] = useState('light')

  const login = (userData) => {
    setUser(userData)
  }

  const logout = () => {
    setUser(null)
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const updateName = (newName) => {
    setUser({ ...user, name: newName })
  }

  return (
    <UserContext.Provider value={{ user, theme, login, logout, toggleTheme, updateName }}>
      {children}
    </UserContext.Provider>
  )
}