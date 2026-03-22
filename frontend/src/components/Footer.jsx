import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-row justify-between items-center gap-6">
        
        {/* Left side */}
        <div className="text-center md:text-left">
          <h1 className="text-lg sm:text-xl font-bold">Gourav</h1>
          <p className="text-sm sm:text-base">Frontend developer</p>
        </div>

        {/* Right side: subscription */}
        <a target="_blank" href="https://wa.me/917210734600">
        <FaWhatsapp className="text-4xl max-sm:text-3xl text-green-500 bg-white rounded-4xl hover:scale-110 duration-200 hover:shadow-[0_0_10px_10px_green]" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
