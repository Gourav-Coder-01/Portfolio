import React, { useState } from 'react'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/contact`, {   // your backend endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      if (data.success) {
        alert('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert('Failed to send message.')
      }
    } catch (err) {
      alert('Error sending message.')
    }
  }

  return (
    <section id="contact" className="py-16 px-6 bg-black text-white">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
        Get in touch
      </h1>

      {/* Responsive Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Let's talk</h2>
          <p className="text-sm sm:text-base md:text-lg">I am available for new projects.</p>

          <p className="mt-4 text-sm sm:text-base">📧 gourav.kr201@gmail.com</p>
          <p className="text-sm sm:text-base">📞 7210734600</p>
          <p className="text-sm sm:text-base">📍 Delhi, India</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="border p-2 rounded text-sm sm:text-base focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border p-2 rounded text-sm sm:text-base focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="5"
            className="border p-2 rounded text-sm sm:text-base focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="bg-linear-to-r from-blue-500 to-purple-500 text-white p-2 rounded cursor-pointer hover:scale-105 duration-200 text-sm sm:text-base"
          >
            Submit now
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
