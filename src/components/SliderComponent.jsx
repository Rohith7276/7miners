import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
 

export const SliderComponent = () => {
  const zoomInProperties = {
    duration: 5000,
    transitionDuration: 500, // Transition duration between slides in milliseconds
    indicators: true, // Show slide indicators
    arrows: true, // Show arrows for navigation 
    prevArrow: (
      <div className="ml-[-0.7rem] lg:ml-0" style={{ width: "30px", marginRight: "-10px", cursor: "pointer" }}>
        <ChevronLeft className="w-[2rem] curZ lg:wfull"/>
      </div>
    ),
    nextArrow: (
      <div className="   mr-[-0.5rem]  lg:m-0" style={{ width: "30px", marginLeft: "-10px", cursor: "pointer" }}>
        <ChevronRight className="w-[2rem] curZ lg:wfull"/>

      </div>
    ),
  };
    return (
      <div className={`hover:${"hovering"} slide-container  h-fit   `}>
        <Slide {...zoomInProperties}> 
            <div className='m-auto flex justify-center  h-full items-center'>
              <img src={`/${1}.jpg`} className='imaage w-[100%]   m-auto' alt="" /> 
            </div> 
            <div className='m-auto flex justify-center  h-full items-center'>
              <img src={`/${2}.jpg`} className='imaage w-[70%]   m-auto' alt="" /> 
            </div> 
            <div className='m-auto flex p-12 justify-center  h-full items-center'>
              <img src={`/${3}.jpg`} className='imaage w-[70%]   m-auto' alt="" /> 
            </div> 
            <div className='m-auto flex justify-center  h-full items-center'>
              <img src={`/${4}.jpg`} className='imaage w-[70%]   m-auto' alt="" /> 
            </div> 
        </Slide>
      </div>
    )
}