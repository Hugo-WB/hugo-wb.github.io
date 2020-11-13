import React, { ReactElement } from 'react'
import { Header } from 'semantic-ui-react'
import "./Projects.css"

interface Props {
  project:any
  
}

export default function ProjectCard(props: Props): ReactElement {
  return (
    <div className="cardContainer">
      <img src={props.project.imageUrl} alt = {props.project.name + "image"}/>
      <Header as = "h2">
        {props.project.name}
      </Header>
      <Header as = "h6">
        {props.project.description}
      </Header>
    </div>

  )
}
