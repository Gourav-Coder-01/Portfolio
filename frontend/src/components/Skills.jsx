import React, { useState } from 'react'
import { DiJavascript } from 'react-icons/di'
import { FaCss3, FaGithub, FaHtml5, FaNodeJs } from 'react-icons/fa'
import { RiTailwindCssLine } from 'react-icons/ri'
import { SiExpress, SiMongodb, SiReact } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

const skills = [
  { icon: FaHtml5, color: 'text-orange-600', proficiency: 85, name: 'HTML5' },
  { icon: FaCss3, color: 'text-blue-500', proficiency: 70, name: 'CSS3' },
  { icon: DiJavascript, color: 'text-yellow-400', proficiency: 60, name: 'JavaScript' },
  { icon: SiReact, color: 'text-blue-400', proficiency: 70, name: 'React' },
  { icon: RiTailwindCssLine, color: 'text-blue-600', proficiency: 80, name: 'Tailwind CSS' },
  { icon: VscVscode, color: 'text-blue-400', proficiency: 80, name: 'VS Code' },
  { icon: FaGithub, color: '', proficiency: 60, name: 'GitHub' },
  { icon: SiMongodb, color: 'text-green-600', proficiency: 55, name: 'MongoDB' },
  { icon: SiExpress, color: 'text-yellow-400', proficiency: 55, name: 'Express.js' },
  { icon: FaNodeJs, color: 'text-green-500', proficiency: 50, name: 'Node.js' },
]

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null)

  return (
    <div className="bg-black text-white pb-10">
      <div className="w-[80%] mx-auto py-3">
        <h1 className="text-center text-4xl mb-9">My Skills</h1>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
          {skills.map(({ icon: Icon, color, proficiency, name }, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedSkill({ name, proficiency })}
            >
              <Icon
                className={`w-full h-full rounded-2xl hover:scale-105 duration-200 border border-gray-400 p-1 ${color}`}
              />
              {/* Proficiency bar */}
              <div className="absolute w-24 h-2 bottom-1 bg-gray-300 rounded overflow-hidden opacity-0 transform scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out">
                <div
                  className="h-full bg-green-400"
                  style={{ width: `${proficiency}%` }}
                ></div>
              </div>
              {/* Tooltip text */}
              <span className="absolute top-[40%] bg-black text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none p-1 rounded">
                {proficiency}% Proficiency
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 bg-black/90 bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-80 text-center relative">
            <h2 className="text-2xl font-bold mb-2">{selectedSkill.name}</h2>
            <p className="mb-4">Proficiency: {selectedSkill.proficiency}%</p>
            <button
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded cursor-pointer"
              onClick={() => setSelectedSkill(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Skills
