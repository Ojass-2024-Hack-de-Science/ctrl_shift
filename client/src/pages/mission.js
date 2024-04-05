import React from 'react'
import './mission.css'


import '../components/Navbar.css'; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="mission">
      <div className="">
        {/* Logo or brand name */}
        <a href="/" style={{
        display:'flex'
        }}>Our Mission</a>
      </div>
      
    </nav>
  );
}



export const Mission = () => {
  return (
    <div className='main-container'>
        <div><Navbar/></div>
        <div className='mission-container'>
        <div className='left1'>Leave Parking to Us<br/>Because life's too short to circle blocks</div>
    <div className='right1'><img className='arrow' src={'https://cdn-icons-png.flaticon.com/512/2931/2931528.png'} /></div>
    
    </div>
    
    </div>
  )
}
