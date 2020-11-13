import React, { ReactElement } from 'react'
import anime from "animejs"
import { useSelector } from 'react-redux'
import ProjectCard from './ProjectCard'

interface Props {
  
}


export default function Projects({}: Props): ReactElement {
  const projects = useSelector(( state:any ) => state.projects)
  const projectCards = projects.map((project:any)=>(
    <ProjectCard project = {project}/>
  ))
  return (
    <div className = "projectsGrid">
      {projectCards}
    </div>
  )
}
