import { useState, useEffect } from "react";
import projectsIcon from "../../assets/projects-icon.png";
import cvIcon from "../../assets/CV-icon.png";
import fullscreenIcon from "../../assets/fullscreen-icon.png";
import githubIcon from "../../assets/github-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import Button from "@mui/material/Button";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import "./Desktop.css";

const Desktop = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(true);

  useEffect(() => {
    const popupShown = localStorage.getItem("popupShown");

    // Check if the popup has not been shown before
    if (!popupShown) {
      // Show the popup after 2 seconds
      const timeout = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("popupShown", "true"); // Set the flag in localStorage
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, []);

  
  useEffect(() => {
    // This effect runs on unmount (componentWillUnmount)
    return () => {
      localStorage.removeItem("popupShown"); // Remove the flag on component unmount
    };
  }, []);

  const handleFullScreen = () => {
    const element = document.documentElement; // Accessing the root HTML element
    if (!isFullScreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen(); // Enter full screen
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(); // For Safari
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen(); // For Mozilla Firefox
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen(); // For Internet Explorer/Edge
      }
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); // Exit full screen
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); // For Safari
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen(); // For Mozilla Firefox
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); // For Internet Explorer/Edge
      }
      setIsFullScreen(false);
    }
  };

  const handleVisitLink = (link) => {
    window.open(link, "_blank");
  };
  
  return (
    <>
      <div className="desktop-items-container">
        <div className="item">
          <img className="desktop-item-icon" src={projectsIcon} alt="img" />
          <p>Projects</p>
        </div>
        <div className="item" onClick={handleFullScreen}>
          <img className="desktop-item-icon" src={fullscreenIcon} alt="img" />
          <p>Expand </p>
        </div>
        <div className="item" onClick={()=>handleVisitLink('https://github.com/afaaaq85')}>
          <img className="desktop-item-icon" src={githubIcon} alt="img" />
          <p>GitHub</p>
        </div>
        <div className="item" onClick={()=>handleVisitLink('https://www.linkedin.com/in/afaaaq85')}>
          <img className="desktop-item-icon" src={linkedinIcon} alt="img" />
          <p>Linkedin </p>
        </div>
        <div className="item">
          <img className="desktop-item-icon" src={cvIcon} alt="img" />
          <p>CV</p>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="msg-box-info">
            <div className="msg-box-text">
              <LightbulbIcon fontSize="medium" />
              <p>Did you know?</p>
            </div>
            <div>
              <p>This app will work great on phone too!</p>
            </div>
          </div>
          <Button onClick={() => setShowPopup(false)} variant="text" color="primary">
            OK
          </Button>
        </div>
      )}
    </>
  );
};

export default Desktop;
