import { useState } from 'react';
import projectsIcon from '../../assets/projects-icon.png';
import cvIcon from '../../assets/CV-icon.png';
import fullscreenIcon from '../../assets/fullscreen-icon.png';
import githubIcon from '../../assets/github-icon.png';
import linkedinIcon from '../../assets/linkedin-icon.png';
import Button from '@mui/material/Button';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import './Desktop.css';

const Desktop = () => {

  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      <div className='desktop-items-container'>
        <div className='item'>
          <img className='desktop-item-icon' src={projectsIcon} alt='img' />
          <p>Projects</p>
        </div>
        <div className='item'>
          <img className='desktop-item-icon' src={fullscreenIcon} alt='img' />
          <p>Expand </p>
        </div>
        <div className='item'>
          <img className='desktop-item-icon' src={githubIcon} alt='img' />
          <p>GitHub</p>
        </div>
        <div className='item'>
          <img className='desktop-item-icon' src={linkedinIcon} alt='img' />
          <p>Linkedin </p>
        </div>
        <div className='item'>
          <img className='desktop-item-icon' src={cvIcon} alt='img' />
          <p>CV</p>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className='msg-box-info'>
            <div className='msg-box-text'>
              <LightbulbIcon fontSize='medium' />
              <p>Did you know?</p>
            </div>
            <div>
              <p>This app will work great on phone too!</p>
            </div>
          </div>
          <Button onClick={() => setShowPopup(false)} variant="text" color='primary'>OK</Button>
        </div>
      )}
    </>

  );
};

export default Desktop;
