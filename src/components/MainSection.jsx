import React from 'react'
import Navbar from './Navbar'
import ProjectSection from './ProjectSection'

const MainSection = () => {
  return (
    // 	className="w-full h-fit bg-[#F5F5F5]"
    <div>
      <Navbar />
      <div className="w-full mt-14 mx-auto gap-x-1 px-12 py-4 ">
        <ProjectSection />
      </div>
    </div>
  )
}

export default MainSection
