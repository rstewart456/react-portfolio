import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import codeproject from '../assets/image/codeproject.jpg';

const Projects = () => {
const proj = useSelector(state => state.projects.project)

    return (
      <div id='projects' 
      className='text-black h-full lg:min-h-screen bg-fixed' 
      style={{ backgroundImage: `url(${codeproject}) ` }}>
        <div className='projecttext opacity-90'>
        <div className='text-white text-center text-5xl py-12'>Projects Page</div>
        <div className='flex flex-row flex-wrap justify-between p-8'>
            {proj.map((doc) => (
              <div className='py-6' key={doc.id}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
                <img className="w-full p-1" src={doc.image} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{doc.name}</div>
                  <p className="text-gray-700 text-base h-32">
                    {doc.paragraph}
                  </p>
                </div>
                <div className="flex justify-between px-6 py-4">
                  <a target='_blank' rel="noopener noreferrer" href={doc.location} className="inline-block hover:bg-indigo-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Live Demo</a>
                  <a target='_blank' rel="noopener noreferrer" href={doc.github} className="inline-block hover:bg-indigo-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Github</a>
                </div>
                </div>
              </div>
            ))}
        </div>
        </div>
      </div>
    )
}


Projects.propTypes = {
    proj: PropTypes.array.isRequired,
    getProjects: PropTypes.func.isRequired,
}

export default (Projects)