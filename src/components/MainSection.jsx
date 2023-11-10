import React from 'react'
import Navbar from './Navbar'
import ProjectSection from './ProjectSection'

const MainSection = () => {
  return (
    <div className="w-full h-fit bg-[#F5F5F5]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <ProjectSection />
      </div>
    </div>
  )
}

export default MainSection
