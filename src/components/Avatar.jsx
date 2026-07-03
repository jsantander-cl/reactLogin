function getInitials(name) {
  if (!name) return ''
  const parts = name.trim().split(' ')
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[1][0]).toUpperCase()
}

function Avatar({ name, size = 'w-9 h-9', textSize = 'text-sm' }) {
  return (
    <div className={`${size} rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold ${textSize}`}>
      {getInitials(name)}
    </div>
  )
}

export default Avatar