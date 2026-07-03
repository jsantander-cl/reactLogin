import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import {
  UserIcon,
  CogIcon,
  SunIcon,
  MoonIcon,
  GlobeIcon,
  BellIcon,
  CreditCardIcon,
  ServerIcon,
  ShieldIcon,
  GridIcon,
  ChartBarIcon,
} from './Icons'

function Dashboard() {
  const { user, theme, toggleTheme, updateName } = useContext(UserContext)
  const [newName, setNewName] = useState('') // vacío para mostrar el placeholder
  const [notifications, setNotifications] = useState(true)
  const isDark = theme === 'dark'

  const handleUpdateName = (e) => {
    e.preventDefault()
    if (newName.trim() !== '') {
      updateName(newName)
      setNewName('') // limpia el input y vuelve a mostrar el placeholder
    }
  }

  const handleReset = () => {
    if (theme !== 'light') toggleTheme()
    setNotifications(true)
  }

  // Clases reutilizables según el tema
  const cardBg = isDark ? 'bg-[#1f2470] border border-[#2b2f7a]' : 'bg-white'
  const inputBase = isDark
    ? 'bg-[#12123a] border-[#3a3f8f] text-white placeholder-indigo-300 focus:ring-[#3aab9e]'
    : 'bg-white border-gray-300 text-gray-900 focus:ring-indigo-500'
  const labelText = isDark ? 'text-indigo-100' : 'text-gray-700'
  const mutedText = isDark ? 'text-indigo-300' : 'text-gray-400'
  const titleText = isDark ? 'text-white' : 'text-gray-900'

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 pb-24 lg:pb-8">
      <h1 className={`text-2xl sm:text-3xl font-bold ${titleText}`}>
        Welcome back, {user.name.split(' ')[0]}
      </h1>
      <p className={`text-sm sm:text-base mt-1 mb-6 ${mutedText}`}>
        Manage your account settings and preferences here.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <div className={`rounded-2xl shadow p-5 sm:p-6 ${cardBg}`}>
          <div className="flex items-center gap-3 mb-5">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isDark ? 'bg-[#262b7a] text-[#7dd3c8]' : 'bg-indigo-100 text-indigo-600'}`}>
              <UserIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className={`font-semibold ${titleText}`}>Profile Settings</h2>
              <p className={`text-xs ${mutedText}`}>Manage your public identity</p>
            </div>
          </div>

          <form onSubmit={handleUpdateName}>
            <label className={`block text-sm font-medium mb-1 ${labelText}`}>Full Name</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Enter your name"
              className={`w-full border rounded-lg px-3 py-2.5 text-sm mb-4 focus:outline-none focus:ring-2 ${inputBase}`}
            />

            <label className={`block text-sm font-medium mb-1 ${labelText}`}>Email Address</label>
            <input
              type="email"
              value={user.email}
              disabled
              className={`w-full border rounded-lg px-3 py-2.5 text-sm mb-4 ${
                isDark ? 'bg-[#1a1d5e] border-[#2b2f7a] text-indigo-300' : 'bg-gray-50 border-gray-200 text-gray-500'
              }`}
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className={`text-white text-sm font-semibold px-5 py-2 rounded-lg transition ${
                  isDark ? 'bg-indigo-600 hover:bg-indigo-600]' : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>

        {/* App Preferences */}
        <div className={`rounded-2xl shadow p-5 sm:p-6 flex flex-col ${cardBg}`}>
          <div className="flex items-center gap-3 mb-5">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isDark ? 'bg-[#2a2470] text-[#a78bfa]' : 'bg-purple-100 text-purple-600'}`}>
              <CogIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className={`font-semibold ${titleText}`}>App Preferences</h2>
              <p className={`text-xs ${mutedText}`}>Customize your workspace experience</p>
            </div>
          </div>

          <div className={`flex items-center justify-between py-3 border-b ${isDark ? 'border-[#2b2f7a]' : 'border-gray-100'}`}>
            <div>
              <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>Theme Mode</p>
              <p className={`text-xs ${mutedText}`}>Switch between light and dark visual styles</p>
            </div>
            <div className={`flex rounded-full p-1 ${isDark ? 'bg-[#12123a]' : 'bg-gray-100'}`}>
              <button
                onClick={() => theme !== 'light' && toggleTheme()}
                className={`flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full transition ${
                  theme === 'light'
                    ? isDark ? 'bg-indigo-600 text-white' : 'bg-white shadow text-gray-900'
                    : isDark ? 'text-indigo-300' : 'text-gray-400'
                }`}
              >
                <SunIcon className="w-3.5 h-3.5" /> Light
              </button>
              <button
                onClick={() => theme !== 'dark' && toggleTheme()}
                className={`flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full transition ${
                  theme === 'dark'
                    ? isDark ? 'bg-indigo-600 text-white' : 'bg-white shadow text-gray-900'
                    : isDark ? 'text-indigo-300' : 'text-gray-400'
                }`}
              >
                <MoonIcon className="w-3.5 h-3.5" /> Dark
              </button>
            </div>
          </div>

          <div className={`flex items-center justify-between py-3 border-b ${isDark ? 'border-[#2b2f7a]' : 'border-gray-100'}`}>
            <div className="flex items-center gap-2">
              <GlobeIcon className={`w-4 h-4 ${mutedText}`} />
              <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>Interface Language</p>
            </div>
            <span className={`text-sm font-medium cursor-pointer ${isDark ? 'text-[#ffffff]' : 'text-indigo-600'}`}>
              English (US) ⌄
            </span>
          </div>

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-2">
              <BellIcon className={`w-4 h-4 ${mutedText}`} />
              <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>Email Notifications</p>
            </div>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-11 h-6 rounded-full flex items-center px-0.5 transition ${
                notifications
                  ? isDark ? 'bg-indigo-600 justify-end' : 'bg-indigo-600 justify-end'
                  : isDark ? 'bg-[#2b2f7a] justify-start' : 'bg-gray-300 justify-start'
              }`}
            >
              <span className="w-5 h-5 bg-white rounded-full shadow" />
            </button>
          </div>

          <button
            onClick={handleReset}
            className={`mt-auto w-full text-sm font-semibold py-2.5 rounded-lg transition ${
              isDark ? 'bg-[#12123a] text-indigo-200 hover:bg-[#2b2f7a]' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Reset to Default
          </button>
        </div>
      </div>

      {/* Cards informativas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <div className={`rounded-2xl shadow p-5 flex items-center gap-3 ${cardBg}`}>
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${isDark ? 'bg-[#173d33] text-green-400' : 'bg-green-100 text-green-600'}`}>
            <CreditCardIcon className="w-5 h-5" />
          </div>
          <div>
            <p className={`text-xs tracking-wide ${mutedText}`}>CURRENT PLAN</p>
            <p className={`font-semibold ${titleText}`}>Pro Monthly</p>
          </div>
        </div>

        <div className={`rounded-2xl shadow p-5 flex items-center gap-3 ${cardBg}`}>
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${isDark ? 'bg-[#1a2f5c] text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
            <ServerIcon className="w-5 h-5" />
          </div>
          <div>
            <p className={`text-xs tracking-wide ${mutedText}`}>STORAGE USED</p>
            <p className={`font-semibold ${titleText}`}>8.4 GB / 20 GB</p>
          </div>
        </div>

        <div className={`rounded-2xl shadow p-5 flex items-center gap-3 ${cardBg}`}>
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${isDark ? 'bg-[#4a3a12] text-yellow-400' : 'bg-yellow-100 text-yellow-600'}`}>
            <ShieldIcon className="w-5 h-5" />
          </div>
          <div>
            <p className={`text-xs tracking-wide ${mutedText}`}>SECURITY LEVEL</p>
            <p className={`font-semibold ${titleText}`}>Excellent</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`text-center text-xs mt-10 pt-6 border-t ${isDark ? 'text-indigo-300 border-[#2b2f7a]' : 'text-gray-400 border-gray-100'}`}>
        © 2026 SaaS Dash Inc. All rights reserved. ·{' '}
        <button className="underline cursor-pointer">Privacy Policy</button> ·{' '}
        <button className="underline cursor-pointer">Terms of Service</button>
      </footer>

      {/* Nav inferior mobile */}
      <div className={`lg:hidden fixed bottom-0 left-0 right-0 flex justify-around py-2 border-t ${isDark ? 'bg-[#171a5c] border-[#2b2f7a]' : 'bg-white border-gray-200'}`}>
        <button className={`flex flex-col items-center gap-0.5 text-xs ${mutedText}`}>
          <GridIcon className="w-5 h-5" /> Dashboard
        </button>
        <button className={`flex flex-col items-center gap-0.5 text-xs ${mutedText}`}>
          <ChartBarIcon className="w-5 h-5" /> Analytics
        </button>
        <button className={`flex flex-col items-center gap-0.5 text-xs ${mutedText}`}>
          <CogIcon className="w-5 h-5" /> Settings
        </button>
        <button className={`flex flex-col items-center gap-0.5 text-xs ${mutedText}`}>
          <UserIcon className="w-5 h-5" /> Account
        </button>
      </div>
    </div>
  )
}

export default Dashboard