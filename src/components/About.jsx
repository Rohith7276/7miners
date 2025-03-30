import React from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react";
const About = () => {

  gsap.registerPlugin(ScrollTrigger);
  const { contextSafe } = useGSAP()
  const animation = contextSafe(() => {
    const toAnimate = document.querySelectorAll(".aboutAnimate")
    toAnimate.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 100%",
              end: "top 100%", 
              markers: false,
              toggleActions: "play none none reverse",
            },
          }
        );
      } 
    } )
  })
  React.useEffect(() => {
    animation()
  }
    , [])

  return (
    <div className=' opacity-0 aboutAnimate flex flex-col gap-3 mx-[10vw] lg:mx-[24vw] my-14'>
      <h1 className=' opacity-0 aboutAnimate text-3xl '>7miners</h1>
      <div className=' opacity-0 aboutAnimate flex flex-col my-3 gap-2'>
        <h2 className=' opacity-0 aboutAnimate text-lg font-bold text-gray-600'>Welcome to 7Miners - Bringing the Bitcoin Revolution to India</h2>
        <p className=' opacity-0 aboutAnimate text-gray-600 text-sm'>At 7Miners, our mission is to bring the revolution of Bitcoin and Bitcoin mining to India. We believe that Bitcoin holds the potential to reshape financial systems, and through innovative technology and community-driven learning, we aim to empower individuals to become a part of this transformation.</p>
      </div>
      <div className=' opacity-0 aboutAnimate flex flex-col my-3 gap-2'>
        <h2 className=' opacity-0 aboutAnimate text-lg font-bold text-gray-600'>What We Offer</h2>
        <p className=' opacity-0 aboutAnimate text-gray-600 text-sm'>At 7Miners, we support open-source projects designed to enhance Bitcoin adoption. Bitaxe have already set new standards in home mining innovation. These devices are more than just tools; they provide hands-on learning experiences, encouraging experimentation and customization.

        </p>
        <p className=' opacity-0 aboutAnimate text-gray-600 text-sm'>Our products are crafted to inspire users to build, tweak, and expand their technical skills, ensuring that knowledge flows freely across the community. Through accessible tutorials, hardware guides, and active support, we invite you to embark on your own journey into Bitcoin mining.</p>
      </div>
      <div className=' opacity-0 aboutAnimate flex flex-col my-3 gap-2'>
        <h2 className=' opacity-0 aboutAnimate text-lg font-bold text-gray-600'>Our Commitment to India</h2>
        <p className=' opacity-0 aboutAnimate text-gray-600 text-sm'>The Bitcoin revolution is global, and we believe India has a crucial role to play. Our mission is to ensure that home mining is accessible to Indian households, empowering individuals to participate in Bitcoin's decentralized future. By blending innovation with education, we are committed to building a strong Bitcoin community in India that thrives on shared knowledge and collaboration.</p>
      </div>
      <div className=' opacity-0 aboutAnimate flex flex-col my-3 gap-2'>
        <h2 className=' opacity-0 aboutAnimate text-lg font-bold text-gray-600'>Who We Are</h2>
        <p className=' opacity-0 aboutAnimate text-gray-600 text-sm'>Our team is a group of Bitcoin-focused professionals with extensive expertise in electronics and hardware design. This technical excellence is reflected in every product we create. We believe that the best way to foster innovation is to empower individuals with the tools they need to learn, build, and grow.</p>
        <p className=' opacity-0 aboutAnimate text-gray-600 text-sm'>Join us at 7Miners and become part of the movement that is driving the Bitcoin mining revolution in India!</p>
      </div>
    </div>
  )
}

export default About
