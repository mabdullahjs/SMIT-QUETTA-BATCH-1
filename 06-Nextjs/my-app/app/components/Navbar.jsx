import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-5'>
        <Link href={'/'}>Home</Link>
        <Link href={'/contact'}>Contact</Link>
        <Link href={'/user'}>User</Link>
        <Link href={'/product/singleproduct'}>nested</Link>
    </div>
  )
}

export default Navbar