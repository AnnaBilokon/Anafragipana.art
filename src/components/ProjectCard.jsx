import React from 'react'

const ProjectCard = ({ imgUrl, title }) => {
  return (
    <div>
      <div
        className="h-560 w-96 rounded-2xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
      >
        <div className="overlay rounded-2xl items-center justify-center absolute top-0 left-0 w-full h-full  bg-gradient-to-br from-[#FFF3E5] to-[#AB76F4] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <a href="/" rel="noreferrer" target="_blank">
            <div className="text-white rounded-2xl mt-3 py-6">
              <h5 className="text-xl font-semibold mb-2">{title}</h5>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
