import React from 'react'
import ProjectCard from './ProjectCard'
import imageProject1 from '../images/project1.jpg'
import imageProject2 from '../images/project2.jpg'
import imageProject3 from '../images/project3.jpg'

const projectsData = [
  {
    id: 1,
    title: 'Projest 1',

    image: imageProject1,
  },
  {
    id: 2,
    title: 'Project 2',

    image: imageProject2,
  },
  {
    id: 3,
    title: 'Project 3',

    image: imageProject3,
  },
]

const ProjectSection = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-indigo mt-4 mb-8 md:mb-12 ">
        My projects
      </h2>
      <div className="w-full grid grid-cols-3 justify-items-center gap-8 md:gap-12 ">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imgUrl={project.image}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectSection
