import React from 'react'
import "./Home.css"
import hh from "./hh.png"

export default function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
           <img className='home_image' 
           src={hh} alt=""/>
      </div>
    </div>
  )
}
