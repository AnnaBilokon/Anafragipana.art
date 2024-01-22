import React, { useState, useRef } from 'react'
import { TextField } from '@mui/material'

const ContactsPage = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    // emailjs
    //   .sendForm(
    //     'service_tl8ifmr',
    //     'template_pj6kl99',
    //     form.current,
    //     'nW-afQ52mtug8BgmE',
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text)
    //     },
    //     (error) => {
    //       console.log(error.text)
    //     },
    //   )

    if (e) {
      console.log('Message sent.')
      setEmailSubmitted(true)
    }
  }
  return (
    <section
      id="contact"
      className="grid md:grid-cols-1 my-5 md:my-5 py-12 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <h5 className="text-4xl text-center font-bold text-indigo">Contact</h5>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form
            className="flex flex-col items-center"
            onSubmit={sendEmail}
            ref={form}
          >
            <div className="h-11 w-512 mb-12">
              <label
                htmlFor="reply_to"
                className="text-indigo block mb-2 text-sm font-bold"
              >
                Name*
              </label>
              <input
                name="name"
                type="text"
                id="name"
                required
                className="bg-[#F7F1FE] opacity-50 border border-indigo placeholder-[#9CA2A9] text-[#76569d] text-base rounded  block w-full p-2.5"
                placeholder="Your name"
              />
            </div>
            <div className="h-11 w-512 mb-12">
              <label
                htmlFor="from_name"
                className="text-indigo block text-sm mb-2 font-bold"
              >
                Email*
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#F7F1FE] opacity-50 border border-indigo placeholder-[#9CA2A9] text-[#76569d] text-base rounded  block w-full p-2.5"
                placeholder="Email address"
              />
            </div>
            <div className="h-32 w-512 mb-12">
              <label
                htmlFor="message"
                className="text-indigo block text-sm mb-2 font-bold"
              >
                Your message*
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#F7F1FE] opacity-50 border border-indigo placeholder-[#9CA2A9] text-[#76569d] text-base rounded block h-32 w-512 p-2.5"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="bg-[#391C62] h-11 w-fit text-[#F7F1FE] font-bold py-2.5 px-5 rounded-lg"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>

    // <div className="h-full w-full">
    //   <h2 className="text-center text-4xl text-indigo mt-4 mb-8 md:mb-12 ">
    //     Contact
    //   </h2>
    //   <div className="flex flex-col items-center gap-y-14">
    //     <TextField
    //       className="h-11 w-512 text-indigo"
    //       id="Name"
    //       label="Name"
    //       variant="outlined"
    //     />
    //     <TextField
    //       className="h-11 w-512"
    //       id="Email address"
    //       label="Email address"
    //       variant="outlined"
    //     />
    //     <TextField
    //       className="h-32 w-512"
    //       id="Your message"
    //       label="Your message"
    //       variant="outlined"
    //     />
    //   </div>
    // </div>
  )
}

export default ContactsPage
