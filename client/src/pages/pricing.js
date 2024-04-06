import React from 'react'
import './pricing.css'
import {Check} from 'phosphor-react'



import '../components/Navbar.css'; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="mission">
      <div className="">
        {/* Logo or brand name */}
        <a href="/" style={{
        display:'flex'
        }}>Pricing</a>
      </div>
      
    </nav>
  );
}



export const Pricing = () => {
  return (
    <div className='main-container2'>
        <div><Navbar/></div>
        <div className='mission-container2'>
        <div className='left2'>
            <div className='cardleft'>
                <div className='inside'>INSTANT<br/>
        <span style={{fontSize: "60px"}}>Free</span>
        <p style={{fontSize: "15px"}}>skdbcdcbdkcjbjb sdckjdsbcdjsbcd sdkjcbsdcjb</p>
        <hr className="new5" />
        <ul>
            <li><Check size={32} /></li>
            <li><Check size={32} /></li>
        </ul>
        </div>
        
        </div>
           
        </div>
    <div className='right2'><div className='cardright'><div className='cardleft'>
                <div className='inside'>INSTANT<br/>
        <span style={{fontSize: "60px"}}>Free</span>
        <p style={{fontSize: "15px"}}>skdbcdcbdkcjbjb sdckjdsbcdjsbcd sdkjcbsdcjb</p>
        <hr className="new5" />
        <ul>
            <li><Check size={32} /></li>
            <li><Check size={32} /></li>
            <li><Check size={32} /></li>
            <li><Check size={32} /></li>
            <li><Check size={32} /></li>
        </ul>
        </div>
        
        </div>
        </div>
        </div>
    
    </div>
    
    </div>
  )
}

