import React from 'react'
import WebCard from './WebCard'
import { getProjectData } from '@/lib/data'

const projectData = getProjectData()

interface Project {
  id: number
  Title: string
  ImagePaths: string
  TechnologiesPaths: Array<string>
  TechnologiesLinks: Array<string>
  Description: string
  WebsiteLink: string
}

const page = () => {
  return (
    <div className='lg:grid lg:grid-cols-2 lg:gap-5'>
      {projectData.map((project: Project) => (
        <WebCard key={project.id} Web={project} />
      ))}
    </div>
  )
}

export default page