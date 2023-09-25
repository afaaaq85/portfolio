import projectsIcon from '../../assets/projects-icon.png'
import cvIcon from '../../assets/CV-icon.png'
import fullscreenIcon from '../../assets/fullscreen-icon.png'
import githubIcon from '../../assets/github-icon.png'
import linkedinIcon from '../../assets/linkedin-icon.png'
import './Desktop.css'

const Desktop = () => {
  return (
    <div className='desktop-items-grid'>
      <div className='item'>
        <img className='desktop-item-icon'  src={cvIcon} alt='img'/>
        <p>CV</p>
      </div>
      <div className='item'>
        <img className='desktop-item-icon' src={projectsIcon} alt='img'/>
        <p>My Projects</p>
      </div>
      <div className='item'>
        <img className='desktop-item-icon'  src={fullscreenIcon} alt='img'/>
        <p>Expand Screen</p>
      </div>
      <div className='item'>
        <img className='desktop-item-icon'  src={githubIcon} alt='img'/>
        <p>GitHub</p>
      </div>
      <div className='item'>
        <img className='desktop-item-icon'  src={linkedinIcon} alt='img'/>
        <p>Linkedin Profile</p>
      </div>
      <div className='item'>
        <img className='desktop-item-icon'  src={linkedinIcon} alt='img'/>
        <p>Linkedin Profile</p>
      </div>
    </div>
  )
}

export default Desktop
