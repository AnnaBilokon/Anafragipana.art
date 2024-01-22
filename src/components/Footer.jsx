import React from 'react'
import FacebookImage from '../images/facebook.png'
import BehanceImage from '../images/behance.png'
import InstagramImage from '../images/instagram.png'
import MailImage from '../images/mail.png'
import LinkedinImage from '../images/linkedin.png'
import Star from '../images/star.png'

const Footer = () => {
  return (
    <footer className=" z-10 bg-main bg-opacity-100 border-l-transparent border-r-transparent text-white">
      <div className="container flex flex-col justify-between  m-auto ">
        <div className="container p-8 flex place-content-center mb-2 mt-6">
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
            <img className="w-6 h-6 mr-3" src={InstagramImage} alt="logo" />
          </a>

          <a rel="preload" href="/">
            {' '}
            <img className="w-6 h-6 mr-3" src={LinkedinImage} alt="logo" />
          </a>
        </div>
        <div className="flex justify-center mb-8">
          <img src={Star} alt="star" />
        </div>

        <p className="text-base text-indigo text-center">
          © 2023 created by Anna Bilokon. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
