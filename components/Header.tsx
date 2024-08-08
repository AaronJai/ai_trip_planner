import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import ThemeSwitcher from './ThemeSwitcher'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='p-3 px-5 shadow-sm flex justify-between items-center'>
            <Link href='/'>
                <Image
                    src="/icons/logo.svg"
                    alt='logo'
                    width={100}
                    height={100}
                />
            </Link>

            <div className='flex items-center space-x-4'>
                <ThemeSwitcher />
                <Button>Sign In</Button>
            </div>

        </div>
    )
}

export default Header