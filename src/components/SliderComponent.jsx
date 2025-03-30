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
const slideImages = [
  {
    url: "https://7miners.in/cdn/shop/files/800-800-max-1.png?v=1742201216&width=713", 
  },
  {
    url: '//7miners.in/cdn/shop/files/Bitaxe_Gamma_601_Solo_Miner_-_Coin_Mining_Central_1_740x_876f59a6-67e0-48c3-b471-b4d619de4ace.png?v=1742202078&width=1445', 
  }, 
  {
    url: "//7miners.in/cdn/shop/files/Bitaxe_Gamma_601_01.jpg?v=1742202078&width=1445", 
  },
  {
    url: "//7miners.in/cdn/shop/files/71TownN8TfL.jpg?v=1742202078&width=1445", 
  },
  {
    url: "//7miners.in/cdn/shop/files/s-l11200.jpg?v=1742202078&width=1445", 
  },
  {
    url: "//7miners.in/cdn/shop/files/s-1l1200.jpg?v=1742202078&width=1445", 
  },
  {
    url: "//7miners.in/cdn/shop/files/s-l1600.jpg?v=1742202078&width=1445", 
  },
  {
    url: "//7miners.in/cdn/shop/files/9-scaled.jpg?v=1742214556&width=1445", 
  },
];

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
      <div className="lg:mr-[-1.4rem]  mr-[-0.5rem]  lg:m-0" style={{ width: "30px", marginLeft: "-10px", cursor: "pointer" }}>
        <ChevronRight className="w-[2rem] curZ lg:wfull"/>

      </div>
    ),
  };
    return (
      <div className={`hover:${"hovering"} slide-container  h-fit   `}>
        <Slide {...zoomInProperties}>
         {slideImages.map((slideImage, index)=> (
            <div key={index} className='m-auto flex justify-center h-full items-center'>
              <img src={slideImage.url} className='imaage w-[80%]  m-auto' alt="" /> 
            </div>
          ))} 
        </Slide>
      </div>
    )
}