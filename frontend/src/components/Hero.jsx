import React from 'react'
import logo from '../assets/logo2.png'
import { FaGithub } from 'react-icons/fa'
import resume from '../assets/frontend-resume.pdf'

const Hero = () => {
  return (
    <section id="home" className="max-sm:min-h-[60vh] min-h-screen flex flex-col items-center max-sm:pt-12 bg-black text-white justify-center text-center max-sm:px-3">

      <div className="w-60 h-50 rounded-full hover:scale-110 duration-200 max-sm:w-40 max-sm:h-40">
        <img src={logo} alt='logo' />
      </div>

      <h1 className="text-4xl font-bold max-sm:text-3xl">
        <span className="text-yellow-300">I'm Gourav,</span>
        <br/>
        Frontend developer self taught
      </h1>

      <p className="mt-4 max-w-xl">
        I am frontend developer from 2024 have experience of frontend technologies with frameworks like React.js and Tailwind CSS.
      </p>

      <div className="flex justify-between items-center gap-4 mt-6">
        <a target='_blank' href="https://github.com/Gourav-Coder-01">
      <FaGithub className='text-4xl hover:shadow-[0_0_20px_10px_yellow] rounded-2xl duration-200'/>
        </a>
        <a
          href={resume}
          download
          className="border px-6 py-2 rounded hover:shadow-[0_0_15px_5px_pink] duration-200 hover:scale-105"
        >
          My resume
        </a>
      </div>

    </section>
  )
}

export default Hero