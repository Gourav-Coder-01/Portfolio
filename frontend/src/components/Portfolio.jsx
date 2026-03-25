import netflix from '../assets/project/netflix.png'
import shopsy from '../assets/project/shopsy.png'
import fullStack from '../assets/project/full-stack.png'

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-black text-white py-12 px-6">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
        My Latest Works
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://frontend-pearl-one-55.vercel.app/"
        >
          <img 
            src={fullStack} 
            alt="Full Stack Project" 
            className="w-full rounded hover:scale-105 duration-200 hover:shadow-[0_0_10px_10px_white]" 
          />
        </a>

        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://clone-gourav.netlify.app/"
        >
          <img 
            src={netflix} 
            alt="Netflix Clone Project" 
            className="w-full rounded hover:scale-105 duration-200 hover:shadow-[0_0_10px_10px_white]" 
          />
        </a>
      </div>
    </section>
  )
}

export default Portfolio
