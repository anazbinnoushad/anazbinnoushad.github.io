import { faHtml5 , faCss3Alt , faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Skills.css'
function Skills() {
  return (
    <div className='skills'>
        <div class="skills_title_body">
            <h1 class="skills_title">SKILLS</h1>
        </div>
        <div className="html_title">
            <p className='skill_name'>HTML5</p>
            <FontAwesomeIcon icon={faHtml5} className="icon"/>
        </div>
        <div className="css_title">
            <p className='skill_name'>CSS3</p>
            <FontAwesomeIcon icon={faCss3Alt} className="icon"/>
        </div>
        <div className="javascript_title">
            <p className='skill_name'>JavaScript</p>
            <FontAwesomeIcon icon={ faJsSquare } className="icon"/>
        </div>
        <div className="react_title">
            <p className='skill_name'>React</p>
            <FontAwesomeIcon icon={ faReact } className="icon"/>
        </div>
        <div className="firebase_title">
            <p className='skill_name'>Firebase</p>
        </div>
        <div className="material_ui">
            <p className='skill_name'>Material-UI</p>
        </div>
        <div className="styled">
            <p className='skill_name'>tailwindcss</p>
        </div>
    </div>

  )
}

export default Skills