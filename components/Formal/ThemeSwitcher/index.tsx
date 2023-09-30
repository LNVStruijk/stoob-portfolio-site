'use client'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@nextui-org/button'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div>
      {theme === 'dark' ? (
        <Button color='default' onClick={() => setTheme('light')}>
          Light 🌞
        </Button>
      ) : (
        <Button color='default' onClick={() => setTheme('dark')}>
          Dark 🌚
        </Button>
      )}
    </div>
  )
}

export default ThemeSwitcher
