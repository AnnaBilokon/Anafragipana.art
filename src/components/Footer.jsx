import React from 'react'
import FacebookImage from '../images/facebook.png'
import BehanceImage from '../images/behance.png'
import InstagramImage from '../images/instagram.png'
import MailImage from '../images/mail.png'
import LinkedinImage from '../images/linkedin.png'

const Footer = () => {
  return (
    <footer className=" z-10 bg-[#F5F5F5] bg-opacity-100 border-l-transparent border-r-transparent text-white">
      <div className="container flex flex-col justify-between m-auto ">
        <div className="container p-16 flex place-content-center  mb-3">
          <a rel="preload" href="/">
            {' '}
            <img className="w-6 h-6 mr-3" src={FacebookImage} alt="logo" />
          </a>

          <a rel="preload" href="/">
            {' '}
            <img className="w-6 h-6 mr-3" src={BehanceImage} alt="logo" />
          </a>

          <a rel="preload" href="/">
            {' '}
            <img className="w-6 h-6 mr-3" src={MailImage} alt="logo" />
          </a>

          <a rel="preload" href="/">
            {' '}
            <img className="w-6 h-6 mr-2" src={InstagramImage} alt="logo" />
          </a>

          <a rel="preload" href="/">
            {' '}
            <img className="w-6 h-6 mr-2" src={LinkedinImage} alt="logo" />
          </a>
        </div>

        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
