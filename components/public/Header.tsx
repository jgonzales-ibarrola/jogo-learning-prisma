import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='flex justify-between items-center py-5'>
      <Link href={'/'} className='text-2xl font-bold'>
        Logo
      </Link>

      <nav>
        <ul className='flex items-center'>
          <li>
            <Link href={'/'} className='px-5'>
              Home
            </Link>
            <Link href={'/profile'} className='pl-5'>
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
