import React from 'react'
import Button from './Button.jsx';

function ProjectCard(props) {
  const {name, techstack, details, codelink, prodlink} = props.project;
  return (
    <div class="project">
        <div class="project-container">
            <h1>{name}</h1>
            <h3>{techstack}</h3>
            <p>{details}</p>
        </div>
        <div class="project-links">
            <Button type="code" link={codelink}/>
            <Button type="prod" link={prodlink}/>
        </div>
    </div>
  )
}

export default ProjectCard