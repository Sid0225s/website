import React from 'react'
import projectImage from '../assets/images/project-1.jpg'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
    const projects = [
        {
            img: projectImage,
            title: "Automatc Dishwasher for College Mess",
            students: ["Jasjot Singh", "Asif Khan"]
        },
        {
            img: projectImage,
            title: "Automatc Dishwasher for College Mess",
            students: ["Jasjot Singh", "Asif Khan"]
        },
        {
            img: projectImage,
            title: "Automatc Dishwasher for College Mess",
            students: ["Jasjot Singh", "Asif Khan"]
        },
        {
            img: projectImage,
            title: "Automatc Dishwasher for College Mess",
            students: ["Jasjot Singh", "Asif Khan"]
        },
        {
            img: projectImage,
            title: "Automatc Dishwasher for College Mess",
            students: ["Jasjot Singh", "Asif Khan"]
        },
        {
            img: projectImage,
            title: "Automatc Dishwasher for College Mess",
            students: ["Jasjot Singh", "Asif Khan"]
        },
        {
            img: projectImage,
            title: "Automatc Dishwasher for College Mess Automatc Dishwasher for College Mess",
            students: ["Jasjot Singh", "Asif Khan"]
        },
        {
            img: projectImage,
            title: "Automatc Dishwasher for College Mess",
            students: ["Jasjot Singh", "Asif Khan"]
        },
    ]
  return (
    <div className="absolute top-0 left-0 w-full h-full text-white">
      <div className="relative w-full h-full overflow-hidden flex flex-col">
          <h1 className="text-4xl raleway tracking-wide font-semibold text-[#ffffff] bg-[#00000090] p-5 text-center rounded-md mb-5 h-[80px]">PROJECTS</h1>
          <div className='h-full flex-shrink relative'>
            <div className='absolute top-0 left-0 w-full h-full flex 2md:justify-start justify-center items-stretch flex-wrap overflow-y-scroll pb-10'>
                {projects.map((project, i) => <ProjectCard details={project} key={i} />)}
            </div>
          </div>
      </div>
    </div>
  )
}
