import React from 'react'

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-12 px-6">
      <div className="w-full max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          About Me
        </h1>

        {/* Content */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center md:text-left">
          MERN Stack Developer with 1 year of experience in building modern, responsive, 
          and scalable web applications using MongoDB, Express.js, React.js, and Node.js. 
          Passionate about creating efficient backend systems and engaging user interfaces 
          while continuously learning new technologies and improving development skills.
        </p>
      </div>
    </section>
  )
}

export default About
