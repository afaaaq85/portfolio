import { useState } from 'react';
import projectsIcon from '../../assets/projects-icon.png';
import cvIcon from '../../assets/CV-icon.png';
import fullscreenIcon from '../../assets/fullscreen-icon.png';
import githubIcon from '../../assets/github-icon.png';
import linkedinIcon from '../../assets/linkedin-icon.png';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import './Desktop.css';

const Desktop = () => {

  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;
  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

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
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
          Top-Center
        </Button>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="I love snacks"
          key={vertical + horizontal}
          className='snackbar'
        />
      </Box>
    </>

  );
};

export default Desktop;
