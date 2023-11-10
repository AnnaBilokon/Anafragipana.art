import React from 'react'
import { Link } from '@mui/material'

const NavLink = ({ href, title }) => {
  return (
    <div className="block py-2 pl-3 pr-4 text-slate-600 md:p-0 sm:text-xl rounded hover:text-slate-800">
      <Link
        href={href}
        underline="none"
        style={{
          textDecoration: 'none',
          color: '#1D053D',
          fontFamily: 'Lato',
        }}
      >
        {title}
      </Link>
    </div>
  )
}

export default NavLink
