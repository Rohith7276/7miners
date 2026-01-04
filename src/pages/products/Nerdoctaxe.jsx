import React from 'react'
import { SliderComponent } from '../../components/SliderComponent'
import { useRef,useState, useEffect } from 'react'
import { Plus, Minus, Share, MoveRight, Check, Cross, X, Linkedin, Facebook } from 'lucide-react'
import { useCartStore } from '../../store/useCartStore'
import { gsap } from "gsap"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { ChevronLeft, ChevronRight } from 'lucide-react';


import { useGSAP } from "@gsap/react";
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

const Nerdoctaxe = () => {
    const [quantity, setQuantity] = useState(1)
    const { cart, cartQuantity, addToCart } = useCartStore()
    const zoomInProperties = {
        duration: 5000,
        transitionDuration: 500, // Transition duration between slides in milliseconds
        indicators: true, // Show slide indicators
        arrows: true, // Show arrows for navigation 
        prevArrow: (
            <div className="ml-[-0.7rem] lg:ml-0" style={{ width: "30px", marginRight: "-10px", cursor: "pointer" }}>
                <ChevronLeft className="w-[2rem] curZ lg:wfull" />
            </div>
        ),
        nextArrow: (
            <div className="   mr-[-0.5rem]  lg:m-0" style={{ width: "30px", marginLeft: "-10px", cursor: "pointer" }}>
                <ChevronRight className="w-[2rem] curZ lg:wfull" />

            </div>
        ),
    };
    const itemDiv = useRef(null);
 



    const { contextSafe } = useGSAP()


    const animation = contextSafe(() => {
        gsap.to(".appear", {
            opacity: 1,
            duration: 0.5,
            // delay: 1, 
            x: -20
        })
        gsap.to(".animate", {
            y: 40,
            opacity: 1,
            duration: 0.5,
            delay: 0.6,
            stagger: 0.15,
            x: -20
        })

    })
    const addCartAnimation = contextSafe(() => {

        gsap.to(".cartAppear", {
            opacity: 1,
            duration: 0.5,
            y: 40
        })

    })
    const exitAnim = contextSafe(() => {
        gsap.to(".cartAppear", {
            opacity: 0,
            duration: 0.5,
            y: -40
        })

    })
    const exitCartAnimation = () => {
        exitAnim()
    }

    const handleAddToCart = () => {
        let x = localStorage.getItem("cartQuantity")
        addToCart()
        Array.from(document.getElementsByClassName("cartAppear")).forEach(element => {
            element.style.display = "block"
        });
        addCartAnimation()
        localStorage.setItem("cartQuantity", parseInt(x) + quantity)
    }

    useEffect(() => {
        animation()

    }, [])


    return (<div className=''>
        <div className='cartAppear fixed   justify-between opacity-0 top-[1.5rem] right-4 md:right-24 shadow-sm w-[90vw] md:w-[25vw] border   items-center  bg-white z-50 p-5'>
            <button onClick={() => exitCartAnimation()} className='cursor-pointer flex justify-end w-full'><X className='h-6' /></button>
            <h4 className='text-[0.7rem] text-gray-600 mb-2 flex'><Check className='h-4' />Item added to your cart</h4>
            <div className='flex gap-4'>
                <img className='w-[4rem] border rounded-sm' src={`/${1}.jpg`} alt="7miners" />
                <h2 className='text-[0.7rem]'>NerdOctaxe</h2>
            </div>
            <div className='flex flex-col justify-center items-center mt-4'>
                <a href='/cart' className='bg-white flex items-center justify-center m-1 w-full border h-[2.5rem] hover:border-2 text-black rounded-sm px-3 border-black hover:border-opacity-100 mt-2 text-[0.7rem]' style={{ boxSizing: 'border-box' }}>View Cart ({cartQuantity})</a>
                <a href="/checkout" className='w-full'><button className='bg-black w-full h-[2.5rem] border border-white hover:border-black text-white rounded-sm px-3 mt-2 text-[0.7rem]'>Check out</button></a>
                <a className='border-b border-gray-600 text-gray-500 text-[0.7rem] mt-3' href="/">Continue shopping</a>
            </div>
        </div>
        <div className='flex my-8 justify-between md:w-[70rem] pl-5 w-[99vw] flex-col items-center lg:flex-row m-auto items-top  '>

            <div className='postcard overflow-hidden mb-6 ml-11 px-5 md:px-0 md:ml-0 border w-full  mt-4 md:w-[35vw]  appear opacity-0 shadow-sm border-gray-100'>

                <div className={`hover:${"hovering"} slide-container  h-fit   `}>
                    <Slide {...zoomInProperties}>
                        <div className='m-auto flex justify-center  h-full items-center'>
                            <img src={`/NERDOCTAXE/1.jpg`} className='imaage w-[100%]   m-auto' alt="" />
                        </div>
                        <div className='m-auto flex justify-center  h-full items-center'>
                            <video
                                src="/NERDOCTAXE/2.mp4"
                                controls
                                autoPlay
                                muted
                                playsInline
                                className="imaage w-[80%] m-auto"
                            />

                        </div>
                        <div className='m-auto flex p-12 justify-center  h-full items-center'>
                            <img src={`/NERDOCTAXE/3.png`} className='imaage w-[80%]   m-auto' alt="" />
                        </div>
                        <div className='m-auto flex justify-center  h-full items-center'>
                            <img src={`/NERDOCTAXE/4.jpg`} className='imaage w-[80%]   m-auto' alt="" />
                        </div>
                        <div className='m-auto flex justify-center  h-full items-center'>
                            <img src={`/NERDOCTAXE/5.png`} className='imaage w-[80%]   m-auto' alt="" />
                        </div>
                        <div className='m-auto flex justify-center  h-full items-center'>
                            <img src={`/NERDOCTAXE/6.png`} className='imaage w-[80%]   m-auto' alt="" />
                        </div>
                        <div className='m-auto flex justify-center  h-full items-center'>
                            <img src={`/NERDOCTAXE/7.png`} className='imaage w-[80%]   m-auto' alt="" />
                        </div>
                        <div className='m-auto flex justify-center  h-full items-center'>
                            <img src={`/NERDOCTAXE/8.png`} className='imaage w-[80%]   m-auto' alt="" />
                        </div>
                        <div className='m-auto flex justify-center  h-full items-center'>
                            <img src={`/NERDOCTAXE/9.png`} className='imaage w-[80%]   m-auto' alt="" />
                        </div>
                        <div className='m-auto flex justify-center  h-full items-center'>
                            <img src={`/NERDOCTAXE/10.png`} className='imaage w-[80%]   m-auto' alt="" />
                        </div>
                        <div className='m-auto flex justify-center  h-full items-center'>
                            <img src={`/NERDOCTAXE/11.png`} className='imaage w-[80%]   m-auto' alt="" />
                        </div>
                        <div className='m-auto flex justify-center  h-full items-center'>
                            <img src={`/NERDOCTAXE/12.png`} className='imaage w-[80%]   m-auto' alt="" />
                        </div>
                    </Slide>
                </div>
            </div>
            <div ref={itemDiv} className=' md:mt-[-3rem] pl-[4rem]   mx-6 lg:mx-0 w-full md:w-[36rem] gap-1 h-auto   justify-center flex flex-col px-4 md:pl-20'>
                <p className='animate opacity-0 text-sm text-gray-500'>7MINERS</p>
                <p className='animate opacity-0 text-3xl'>The NerdOctaxe 8 ASIC Chips</p>
                <div className='flex flex-col gap-1 my-3'>
                    <div className='flex flex-col gap-1 my-3'>
                        <p className='animate opacity-0 mt-1 text-2xl'> Rs. ₹25,750 </p>
                        <p className='animate opacity-0 text-sm text-gray-500'>Taxes included. <a href='/shipping-policy' className='border-b hover:border-b-2 border-black'>Shipping</a> calculated at checkout.</p>
                    </div>    </div>
                <div className='flex flex-col  gap-1'>
                    <h3 className='opacity-0 text-sm text-gray-500 animate'>Quantity</h3>
                    <div className='flex animate opacity-0 items-center border border-gray-500 w-fit py-2 rounded-sm'>
                        <button className='  disabled:text-gray-400 disabled:cursor-not-allowed pl-2 py-1' disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)}><Minus className='h-[0.7rem]' /></button>
                        <input className='mx-2 text-sm outline-none w-[2rem] text-center' onChange={(e) => { if (e.target.value) setQuantity(parseInt(e.target.value)); else setQuantity(1) }} value={quantity} />
                        <button className='  pr-2 py-1' onClick={() => setQuantity(quantity + 1)}><Plus className='h-[0.7rem]' /></button>
                    </div>
                    <div className='flex flex-col items-center mt-4'>
                        <button onClick={() => { addToCart(2, quantity); addCartAnimation() }} className='bg-white flex items-center justify-center animate opacity-0 w-full border h-[2.5rem] hover:border-2 text-black rounded-sm px-3 border-black hover:border-opacity-100 mt-2 text-[0.7rem]' style={{ boxSizing: 'border-box' }}>Add to Cart</button>
                        <button className='w-full'> <button className='bg-black animate opacity-0 w-full h-[2.5rem] border border-white hover:border-black text-white rounded-sm px-3 mt-2 text-[0.7rem]' onClick={() => {

                            addToCart(2, quantity)
                            window.location.href = "/checkout"

                        }}>Buy it now</button></button>
                    </div>
                    <div className='flex flex-col  md:flex-row justify-between h-fit items-center animate opacity-0 mt-4'>
                        <div className='flex text-3xl w-fit mb-20 lg:mb-0 items-center gap-3'>

                            <a className='h-10 w-10 flex items-center justify-center' href="https://www.facebook.com/sharer/sharer.php?u=https://7miners.in" target="_blank">
                                <Facebook className=' ' />
                            </a>

                            <a className='h-10 w-10 flex items-center justify-center' href="https://twitter.com/intent/tweet?url=https://7miners.in&text=Check this out!" target="_blank">

                                <img className='w-6   h-fit' src="https://imgs.search.brave.com/evybPWRZLyxZqDPmmjXT7nIRayQKJKENykRKzL86ml4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aW1t/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wOC90d2l0/dGVyLWNoYW5nZXMt/dG8teC5wbmc" alt="x" />
                            </a>

                            <a className='h-10 w-10 flex items-center justify-center' href="https://api.whatsapp.com/send?text=Check this out! https://7miners.in" target="_blank">
                                <img className="w-6 hover:w-7 h-6 object-contain" src="https://images.seeklogo.com/logo-png/16/1/whatsapp-logo-png_seeklogo-168310.png" alt="whatsapp" />
                            </a>

                            <a className='h-10 w-10  flex items-center justify-center' href="https://www.linkedin.com/shareArticle?mini=true&url=https://7miners.in&title=Awesome%20Website" target="_blank">
                                <Linkedin className=' ' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className='p-8 mx-10 lg:mx-52 mb-11  lg:mt-[11vh] bg-gray-50'>
            <h2 className='text-xl font-bold mb-4'>THE The NerdOctaxe 8 ASIC Chips</h2>
            <p className='mb-4'>Pure Open-Source Power</p>
            <p className='mb-4'>The NerdOctaxe is built on the foundation of the Bitaxe project but expands the architecture significantly with eight BM1370 ASIC chips, delivering up to 12 TH/s of hashrate in its Revision 3.1. Thanks to the upgraded 6-phase VRM, the new TPS53667 power controller, and an improved PCB layout, the NerdOctaxe achieves an efficiency of around 15.8 J/TH, with a typical power consumption of 160 W. This makes the Rev 3.1 one of the most powerful and thermally stable open-source miners available today.
                <br />
                Just like the NerdAxe and NerdQaxe family, the NerdOctaxe features the LilyGo T-Display S3 full-color screen with a responsive graphical interface. It runs a dedicated ESP-Miner fork, adapted specifically for multi-chip miners, and integrates seamlessly with AxeOS offering an intuitive web dashboard for configuration, pool management, and complete real-time monitoring.
                <br />
                This open-source miner is the result of the collaborative work of the OSMU community and the broader open hardware ecosystem. The original design was created by @Pual91, and the Revision 3.1 enhancements, including the new 6-phase VRM, improved power delivery, cleaner routing, and updated component structure, were developed by @BitMaker_ at Bitronics, continuing the tradition of innovation and community-driven progress in Bitcoin mining.

            </p>
            <h3 className='text-lg font-semibold mb-2'>Current versions</h3>
            <ul className='list-disc pl-5 mb-4'>
                <li>NerdOctaxe Gamma – 10 to 12Ths – BM1370 chip (S21+)</li>
            </ul>
            <h3 className='text-lg font-semibold mb-2'>The Most Powerful Open-Source Desktop Miner
            </h3>
            <p className='mb-4'>The NerdOctaxe brings powerful open-source mining into a compact, elegant form factor, delivering up to 12 TH/s of hashrate in its latest Revision 3.1. With its signature full-color LilyGo T-Display S3 interface and a clean, responsive UI, the NerdOctaxe gives you instant access to hashrate, ASIC temperatures, power consumption and real-time miner status.
                <br />
                Easy to Set Up, Plug and Play
                <br />
                Setting up the NerdOctaxe is fast and simple. Connect a 12V 20A PSU through its upgraded XT60 high-current connector and the miner will automatically create a Wi-Fi network. From there, access the web portal to configure Wi-Fi, mining pool settings and your Bitcoin address in just minutes.
            </p>
            <h3 className='text-lg font-semibold mb-2'>Advanced features:</h3>
            <ul className='list-disc pl-5 mb-4'>
                <li>Efficient power usage: The NerdOctaxe operates at around 160W to 200W depending on frequency and tuning.</li>
                <li>Improved power stage: New 6-phase VRM with TPS53667 controller for improved thermal stability and higher achievable frequencies.</li>
                <li>High-current input: Upgraded XT60 connector supports higher power draw and safer long-term operation.</li>
                <li>ASIC tuning: Tune frequencies and voltages across 8 BM1370 chips to optimize your hashrate up to 12 TH/s on Revision 3.1.</li>
                <li>Miner control: AxeOS provides full control over hashrate, stability, temperature and system stats via the local screen and the web dashboard.</li>
                <li>Over temperature protection: Smart thermal safeguards ensure safe operation at home.</li>
            </ul>
            <h3 className='text-lg font-semibold mb-2'>Specifications</h3>
            <ul className='list-disc pl-5 mb-4'>
                <li>Input: 12V DC</li>
                <li>Consumption: 160W to 200W</li>
                <li>Recommended PSU: 12V 20A</li>
                <li>Max input capacity: 160W to 200W via XT60 connector</li>
                <li>Hashrate: up to 12 TH/s on Revision 3.1</li>
            </ul>
            <h3 className='text-lg font-semibold mb-2'>Product Information</h3>
            <p className='mb-4'>All the products and items are Brand New.</p>
            <h3 className='text-lg font-semibold mb-2'>Damages</h3>
            <p className='mb-4'>Important: Please make a full and complete video of unboxing from the beginning without any cuts in the video, inspect your order upon reception and contact us immediately if the item is damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.</p>
            <h3 className='text-lg font-semibold mb-2'>Exchanges</h3>
            <p className='mb-4'>No Exchanges are accepted.</p>
            <h3 className='text-lg font-semibold mb-2'>Return and Refunds Policy</h3>
            <p className='mb-4'>No Cancellation and No Refunds. Order once placed cannot be modified.</p>
            <h3 className='text-lg font-semibold mb-2'>Warranty</h3>
            <p className='mb-4'>No warranty is provided by the manufacturer.</p>
            <p className='mb-4'>For more info or clarification, write to us: <a href="mailto:contact@7miners.in" className='text-blue-500 underline'>contact@7miners.in</a>.</p>
        </section>
    </div>
    )
}

export default Nerdoctaxe
