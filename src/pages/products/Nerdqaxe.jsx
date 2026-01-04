import React from 'react'
import { SliderComponent } from '../../components/SliderComponent'
import { useRef,useState, useEffect } from 'react'
import { Plus, Minus, Share, MoveRight, Check, Cross, X, Linkedin, Facebook, File } from 'lucide-react'
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
                <h2 className='text-[0.7rem]'>NerdQaxe</h2>
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
                        <div className='m-auto flex justify-center  h-full items-center p-10'>
                            <img src={`/NERDQAXE/1.png`} className='imaage w-[70%]   m-auto' alt="" />
                        </div>
                        <div className='m-auto flex justify-center  h-full items-center p-5'>
                            <img src={`/NERDQAXE/2.png`} className='imaage w-[100%]   m-auto' alt="" />
                        </div>
                     
                        <div className='m-auto flex p-12 justify-center  h-full items-center'>
                            <img src={`/NERDQAXE/3.png`} className='imaage w-[80%]   m-auto' alt="" />
                        </div>
                        <div className='m-auto flex justify-center  h-full items-center p-5'>
                            <img src={`/NERDQAXE/4.png`} className='imaage w-[80%]   m-auto' alt="" />
                        </div>
                        <div className='m-auto flex justify-center  h-full items-center p-5'>
                            <img src={`/NERDQAXE/5.png`} className='imaage w-[80%]   m-auto' alt="" />
                        </div>
                        <div className='m-auto flex justify-center  h-full items-center p-5'>
                            <img src={`/NERDQAXE/6.png`} className='imaage w-[80%]   m-auto' alt="" />
                        </div>
                        <div className='m-auto flex justify-center  h-full items-center p-5'>
                            <img src={`/NERDQAXE/7.jpg`} className='imaage w-[80%]   m-auto' alt="" />
                        </div>
                        <div className='m-auto flex justify-center  h-full items-center p-5 cursor-pointer' onClick={() => window.open('/NERDQAXE/8.pdf', '_blank')}>
                            <div className='imaage  m-auto flex  gap-3 p-5 items-center justify-center flex-col bg-gray-50 rounded-md '>
                             <div>


                                <File className=' text-2xl' width={200} height={200}/>
                             </div>
                                 
                                <p className='text-gray-700 font-semibold block text-2xl'>Click to view PDF</p>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
            <div ref={itemDiv} className=' md:mt-[-3rem] pl-[4rem]   mx-6 lg:mx-0 w-full md:w-[36rem] gap-1 h-auto   justify-center flex flex-col px-4 md:pl-20'>
                <p className='animate opacity-0 text-sm text-gray-500'>7MINERS</p>
                <p className='animate opacity-0 text-3xl'>The NerdQaxe Bitcoin ASIC Miner</p>
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
                        <button onClick={() => { addToCart(1, quantity); addCartAnimation() }} className='bg-white flex items-center justify-center animate opacity-0 w-full border h-[2.5rem] hover:border-2 text-black rounded-sm px-3 border-black hover:border-opacity-100 mt-2 text-[0.7rem]' style={{ boxSizing: 'border-box' }}>Add to Cart</button>
                        <button className='w-full'> <button className='bg-black animate opacity-0 w-full h-[2.5rem] border border-white hover:border-black text-white rounded-sm px-3 mt-2 text-[0.7rem]' onClick={() => {

                            addToCart(1, quantity)
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
            <h2 className='text-xl font-bold mb-4'>NerdQaxe - Open-Source Bitcoin ASIC Miner</h2>
            <p className='mb-4'>Powerful Mining in a Compact Form Factor</p>
            <p className='mb-4'>NerdQaxe is a fully open-source Bitcoin ASIC miner equipped with 4 BM1370 ASIC chips from Antminer's S21 Pro. This design ensures efficient and powerful mining capabilities, achieving up to 4.8 TH/s at an energy efficiency of ~16.2 W/TH. It operates using a 12V 10A power supply, making it perfect for home miners seeking reliable performance.
                <br />
                At the core of NerdQaxe is the combination of ESP-miner and AxeOS, an open-source firmware that empowers you with full control over your mining operations. The intuitive web interface simplifies setting adjustments and performance monitoring, making mining more accessible and streamlined. NerdQaxe is an open-source miner based on the Bitaxe project, designed to deliver powerful hashing power efficiently.
                <br />
                The NerdQaxe features the LilyGo T-Display S3 full-color screen with a responsive graphical interface, providing real-time insights into your mining operations at a glance.
            </p>
            <h3 className='text-lg font-semibold mb-2'>Key Specifications</h3>
            <ul className='list-disc pl-5 mb-4'>
                <li>Hashrate: Up to 4.8 TH/s</li>
                <li>ASIC Chips: 4x BM1370 (S21 Pro)</li>
                <li>Power Consumption: ~77W</li>
                <li>Power Supply: 12V 10A (included)</li>
                <li>Energy Efficiency: ~16.2 W/TH</li>
                <li>Display: LILYGO T-Display S3 (full-color)</li>
            </ul>
            <h3 className='text-lg font-semibold mb-2'>Features</h3>
            <ul className='list-disc pl-5 mb-4'>
                <li>Fully open-source design based on Bitaxe project</li>
                <li>ESP-miner and AxeOS firmware for complete control</li>
                <li>Intuitive web interface for easy configuration and monitoring</li>
                <li>Real-time performance metrics on full-color display</li>
                <li>Energy efficient operation at ~77W</li>
                <li>Compact and portable design</li>
            </ul>
            <h3 className='text-lg font-semibold mb-2'>Available Options</h3>
            <p className='mb-4'><strong>Stand:</strong> Without Stand, Black Stand, Orange Stand, Purple Stand</p>
            <p className='mb-4'><strong>Case:</strong> Black Case, Orange Case, Purple Case</p>
            <p className='mb-4'><strong>Plug:</strong> USA Plug, EU Plug</p>
            <h3 className='text-lg font-semibold mb-2'>Additional Information</h3>
            <ul className='list-disc pl-5 mb-4'>
                <li>Weight: 1 kg</li>
                <li>Dimensions: 14 × 10 × 12 cm</li>
            </ul>
            <h3 className='text-lg font-semibold mb-2'>Product Information</h3>
            <p className='mb-4'>All products and items are brand new.</p>
            <h3 className='text-lg font-semibold mb-2'>Damages</h3>
            <p className='mb-4'>Important: Please make a full and complete video of unboxing from the beginning without any cuts in the video, inspect your order upon reception and contact us immediately if the item is damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.</p>
            <h3 className='text-lg font-semibold mb-2'>Exchanges</h3>
            <p className='mb-4'>No exchanges are accepted.</p>
            <h3 className='text-lg font-semibold mb-2'>Return and Refunds Policy</h3>
            <p className='mb-4'>No cancellation and no refunds. Order once placed cannot be modified.</p>
            <h3 className='text-lg font-semibold mb-2'>Warranty</h3>
            <p className='mb-4'>No warranty is provided by the manufacturer.</p>
            <p className='mb-4'>For more info or clarification, write to us: <a href="mailto:contact@7miners.in" className='text-blue-500 underline'>contact@7miners.in</a>.</p>
        </section>
    </div>
    )
}

export default Nerdoctaxe
