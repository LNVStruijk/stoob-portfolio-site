import React, { FC } from 'react'
import ThemeSwitcher from '../ThemeSwitcher'
import { Button } from '@nextui-org/react'

const Navbar: FC = () => {
  return (
    <div className='container mx-auto flex justify-end items-center py-4 px-4 lg:px-6 mb-4'>
      <div className='flex items-center gap-x-4'>
        <ThemeSwitcher />
        <Button color='primary'>Get in touch</Button>
      </div>
    </div>
  )
}

export default Navbar
