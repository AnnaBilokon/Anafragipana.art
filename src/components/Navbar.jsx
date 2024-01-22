'use client'
import React, { useState } from 'react'
import NavLink from '../components/Navlink.jsx'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from '../components/MenuOverlay.jsx'
import logoImage from '../images/logo2.png'

const navLinks = [
  { id: 1, title: 'WORK', path: '/work' },
  { id: 2, title: 'ABOUT', path: '/about' },
  { id: 3, title: 'CONTACT', path: '/contact' },
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-main">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <a
          rel="preload"
          href="/"
          className="text-2xl md:text-5xl text-black font-semibold"
        >
          {' '}
          <img
            src={logoImage}
            color="white"
            width="200"
            height="200"
            alt="logo"
          />
        </a>

        <div className="mobile-menu block md:hidden ">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-800 text-slate-800 hover:text-slate-600 hover:border-slate-600"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-800 text-slate-800 hover:text-slate-600 hover:border-slate-600"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar
