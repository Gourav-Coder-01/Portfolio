const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left side */}
        <div className="text-center md:text-left">
          <h1 className="text-lg sm:text-xl font-bold">Gourav</h1>
          <p className="text-sm sm:text-base">Frontend developer</p>
        </div>

        {/* Right side: subscription */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2.5 w-full md:w-auto justify-center md:justify-end">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border rounded w-full sm:w-auto text-sm sm:text-base"
          />
          <button className="bg-linear-to-r from-blue-500 to-purple-500 text-white rounded cursor-pointer px-4 py-2 text-sm sm:text-base hover:scale-105 duration-200">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
