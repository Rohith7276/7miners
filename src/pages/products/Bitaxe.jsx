import React from 'react'
import { SliderComponent } from '../../components/SliderComponent'
import { useRef, useEffect } from 'react'
import { Plus, Minus, Share, MoveRight, Check, Cross, X, Linkedin, Facebook } from 'lucide-react'
import { useCartStore } from '../../store/useCartStore'
import { gsap } from "gsap"

import { useGSAP } from "@gsap/react";
const Bitaxe = () => {
    const itemDiv = useRef(null);

    const { quantity, addQuantity, removeQuantity, cartQuantity, setQuantity, addToCart } = useCartStore()

    const images = [
        "https://7miners.in/cdn/shop/files/800-800-max-1.png?v=1742201216&width=713",
        "https://7miners.in/cdn/shop/files/800-800-max-1.png?v=1742201216&width=713",
        "https://7miners.in/cdn/shop/files/800-800-max-1.png?v=1742201216&width=713",
        "https://7miners.in/cdn/shop/files/800-800-max-1.png?v=1742201216&width=713",
        "https://7miners.in/cdn/shop/files/800-800-max-1.png?v=1742201216&width=713",
        "https://7miners.in/cdn/shop/files/800-800-max-1.png?v=1742201216&width=713",
    ]

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


    return (
                    <div className=''>
            <div className='cartAppear fixed hidden justify-between opacity-0 top-[1.5rem] right-4 md:right-24 shadow-sm w-[90vw] md:w-[25vw] border   items-center  bg-white z-50 p-5'>
                <button onClick={() => exitCartAnimation()} className='cursor-pointer flex justify-end w-full'><X className='h-6' /></button>
                <h4 className='text-[0.7rem] text-gray-600 mb-2 flex'><Check className='h-4' />Item added to your cart</h4>
                <div className='flex gap-4'>
                    <img className='w-[4rem] border rounded-sm' src={`/${1}.jpg`} alt="7miners" />
                    <h2 className='text-[0.7rem]'>Bitaxe Gamma 601</h2>
                </div>
                <div className='flex flex-col justify-center items-center mt-4'>
                    <a href='/cart' className='bg-white flex items-center justify-center m-1 w-full border h-[2.5rem] hover:border-2 text-black rounded-sm px-3 border-black hover:border-opacity-100 mt-2 text-[0.7rem]' style={{ boxSizing: 'border-box' }}>View Cart ({cartQuantity})</a>
                    <a href="/checkout" className='w-full'><button className='bg-black w-full h-[2.5rem] border border-white hover:border-black text-white rounded-sm px-3 mt-2 text-[0.7rem]'>Check out</button></a>
                    <a className='border-b border-gray-600 text-gray-500 text-[0.7rem] mt-3' href="/">Continue shopping</a>
                </div>
            </div>      
            <div className='flex my-8 justify-between mt-24 md:w-[70rem] w-screen flex-col items-center lg:flex-row m-auto items-top  '> 

            <div className='postcard overflow-hidden mb-6 ml-11 px-5 md:px-0 md:ml-0 border w-full  mt-4 md:w-[35vw]  appear opacity-0 shadow-sm border-gray-100'>

                    <SliderComponent />
                </div>
                <div ref={itemDiv} className=' md:mt-[-3rem] pl-[4rem] pr-[1rem] mx-6 lg:mx-0 w-full md:w-[36rem] gap-1 h-auto   justify-center flex flex-col px-4 md:pl-20'>
                    <p className='animate opacity-0 text-sm text-gray-500'>7MINERS</p>
                    <p className='animate opacity-0 text-3xl'>Bitaxe Gamma 601</p>
                    <div className='flex flex-col gap-1 my-3'>

                        <div className='flex flex-col gap-1 my-3'>
                            <h1 className='animate opacity-0 text-xl'> <span className='text-red-700'>Limited Time Offer!!!</span><br /><span className='text-4xl font-semibold text-blue-500'>7.59%</span> Off Till April 5th with free shipping! </h1>
                            <p className='animate opacity-0 mt-1 text-2xl'><span className='line-through text-sm'>Rs. ₹25,960</span> Rs. 23,990</p>
                            <p className='animate opacity-0 text-sm text-gray-500'>Taxes included. <a href='/shipping-policy' className='border-b hover:border-b-2 border-black'>Shipping</a> calculated at checkout.</p>
                        </div>        </div>
                    <div className='flex flex-col  gap-1'>
                        <h3 className='opacity-0 text-sm text-gray-500 animate'>Quantity</h3>
                        <div className='flex animate opacity-0 items-center border border-gray-500 w-fit py-2 rounded-sm'>
                            <button className='  disabled:text-gray-400 disabled:cursor-not-allowed pl-2 py-1' disabled={quantity === 1} onClick={() => removeQuantity(1)}><Minus className='h-[0.7rem]' /></button>
                            <input className='mx-2 text-sm outline-none w-[2rem] text-center' onChange={(e) => { if (e.target.value) setQuantity(parseInt(e.target.value)); else setQuantity(1) }} value={quantity} />
                            <button className='  pr-2 py-1' onClick={() => addQuantity(1)}><Plus className='h-[0.7rem]' /></button>
                        </div>
                        <div className='flex flex-col items-center mt-4'>
                            <button onClick={handleAddToCart} className='bg-white flex items-center justify-center animate opacity-0 w-full border h-[2.5rem] hover:border-2 text-black rounded-sm px-3 border-black hover:border-opacity-100 mt-2 text-[0.7rem]' style={{ boxSizing: 'border-box' }}>Add to Cart</button>
                            <a href='/checkout' className='w-full'> <button className='bg-black animate opacity-0 w-full h-[2.5rem] border border-white hover:border-black text-white rounded-sm px-3 mt-2 text-[0.7rem]' onClick={() => {
                                let x = localStorage.getItem("cartQuantity")
                                addToCart()
                                localStorage.setItem("cartQuantity", parseInt(x) + quantity)
                            }}>Buy it now</button></a>
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
                                    <img className='w-5 brightness-0  contrast-200 h-fit' src="https://imgs.search.brave.com/1_lYKyfLRXThu0LN4vcKf46xi0zCuhTZlf7k-fWGT6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC93aGF0c2Fw/cC1pY29uLTI1Nngy/NTYtbGtpZzlybzEu/cG5n" alt="whatsapp" />
                                </a>

                                <a className='h-10 w-10  flex items-center justify-center' href="https://www.linkedin.com/shareArticle?mini=true&url=https://7miners.in&title=Awesome%20Website" target="_blank">
                                    <Linkedin className=' ' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='p-8 mx-10 lg:mx-52   lg:mt-[11vh] bg-gray-50'>
                <h2 className='text-xl font-bold mb-4'>THE BITAXE</h2>
                <p className='mb-4'>The first open source hardware miner.</p>
                <p className='mb-4'>The Bitaxe project is a single ASIC miner board fully open-source, who showcases reverse engineering of Bitmain’s mining chips. It currently has various versions, all primarily centered around a single ASIC mining chip.</p>
                <h3 className='text-lg font-semibold mb-2'>Current versions</h3>
                <ul className='list-disc pl-5 mb-4'>
                    <li>Bitaxe Ultra – 500Ghs – BM1366 chip (S19) Not available.</li>
                    <li>Bitaxe Supra – 700Ghs – BM1368 chip (S21) Not available.</li>
                    <li>Bitaxe Gamma – 1.2Ths – BM1370 (S21 pro) In stock.</li>
                </ul>
                <h3 className='text-lg font-semibold mb-2'>Easy to setup, Plug & Play!</h3>
                <p className='mb-4'>Setting up the Bitaxe is incredibly simple. Just power it with a 5V adapter using its barrel jack, and it will immediately create a Wi-Fi network. Once connected, you can access a web portal where you can configure all the basic mining parameters, such as the Wi-Fi credentials, pool settings, and your Bitcoin address, making the process quick and user-friendly.</p>
                <h3 className='text-lg font-semibold mb-2'>Advanced features:</h3>
                <ul className='list-disc pl-5 mb-4'>
                    <li>Low power: Bitaxe works with only 15W of power.</li>
                    <li>ASIC Tunning: bitaxe offers you the possibility to play with ASIC settings, play, learn and squeeze your ASIC hashrate.</li>
                    <li>Miner Control: AxeOs gives you the control of your hash settings and miner stats.</li>
                    <li>Over temperature security: Overtemperature control for safe operation at home.</li>
                    <li>Community firmware upgrades: bitaxe has an awake and active community that constantly provides firmware updates.</li>
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

export default Bitaxe
