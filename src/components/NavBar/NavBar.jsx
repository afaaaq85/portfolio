import { useState, useEffect } from 'react'
import Windows11Icon from '../../assets/windows11icon.png'
import EdgeIcon from '../../assets/edgeicon.png'
import ReactIcon from '../../assets/react.png'
import MailIcon from '../../assets/mailicon.png'
import CalendarIcon from '../../assets/calendaricon.png'
import ReactIcon2 from '../../assets/reacticon2.png'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Tooltip from '@mui/material/Tooltip';
import './NavBar.css';

const NavBar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [temp, setTemp] = useState('');
  const [sky, setSky] = useState('');
  let api_key = '29be5c3b2c0496e1966dda45cd3f6ea5'
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Rawalpindi&units=Metric&appid=${api_key}`

  const search = async () => {
    let response = await fetch(url);
    const data = await response.json();
    setTemp(data.main.temp)
    setSky(data.weather[0].main)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
      setCurrentTime(new Date());
      search()
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fullDate = currentDate.toLocaleDateString();
  const options = {
    hour: 'numeric',
    minute: 'numeric'
  };
  const formattedTime = currentTime.toLocaleTimeString([], options);

  return (
    <div className='navbar-main'>
      <div className='made-with-react'>
        <p>Made with React</p>
        <img className='react-icon' src={ReactIcon2} />
      </div>
      <div className='navbar-container'>
        <div className='weather-container'>
          {/* <WbSunnyIcon /> */}
          {/* { sky==='Clouds'? <CloudIcon/>:<WbSunnyIcon/>} */}
          {sky === 'Clouds' ? <CloudIcon /> : sky === 'Sunny' ? <WbSunnyIcon /> : <ThunderstormIcon />}

          <p>{temp}°C</p>
        </div>
        <ul className='menu'>
          <Tooltip arrow placement='top' title='Windows' sx={{ backgroundColor: 'white' }}>
            <li><img className='icon-img' src={Windows11Icon} alt='11' /></li>
          </Tooltip>
          <Tooltip arrow placement='top' title='Portfolio'>
            <li><img className='icon-img' src={EdgeIcon} alt='11' /></li>
          </Tooltip>
          <Tooltip arrow placement='top' title='My Projects'>
            <li><img className='icon-img' src={ReactIcon} alt='11' /></li>
          </Tooltip>
          <Tooltip arrow placement='top' title='Message me'>
            <li><img className='icon-img' src={MailIcon} alt='11' /></li>
          </Tooltip>
          <Tooltip arrow placement='top' title='Calendly'>
            <li><img className='icon-img' src={CalendarIcon} alt='11' /></li>
          </Tooltip>
        </ul>
        <div className='date-time-container'>
          <p>{formattedTime}</p>
          <p>{fullDate}</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar;