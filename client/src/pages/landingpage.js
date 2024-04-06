import React from 'react'
import './landingpage.css'
import { Mission } from './mission'
import { Pricing } from './pricing'


export const Landingpage = () => {
  return (
    <div>
    <div className='landing-container'>
        <div className='text'>Leave Parking to Us<br/>Because life's too short to circle blocks</div>
    <div className='arrow-container'><img className='arrow' src={'https://cdn-icons-png.flaticon.com/512/2931/2931528.png'} /></div>
    <div><button className='get-started'>Get Started</button></div>
    </div>
    <Mission/>
    <Pricing />
    </div>
    
  )
}
