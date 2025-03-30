import React from 'react'
import { SliderComponent } from './SliderComponent'
import { useRef, useEffect } from 'react'
import { Plus, Minus, Share, MoveRight, Check, Cross, X, Facebook, Twitter, Linkedin, DockIcon } from 'lucide-react'
import { useCartStore } from '../store/useCartStore'
import { gsap } from "gsap"

import { useGSAP } from "@gsap/react";
const Home = () => {
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
        if(x)localStorage.setItem("cartQuantity", parseInt(x) + quantity)
            else localStorage.setItem("cartQuantity", quantity) 
    }

    useEffect(() => {
        animation()

    }, [])


    return (
        <div className=''>
            <div className='cartAppear fixed  hidden opacity-0 top-[1.5rem] right-4 md:right-24 shadow-sm w-[90vw] md:w-[25vw] border justify-center items-center  bg-white z-50 p-5'>
                <button onClick={() => exitCartAnimation()} className='cursor-pointer flex justify-end w-full'><X className='h-6' /></button>
                <h4 className='text-[0.7rem] text-gray-600 mb-2 flex'><Check className='h-4' />Item added to your cart</h4>
                <div className='flex gap-4'>
                    <img className='w-[4rem] border rounded-sm' src="https://7miners.in/cdn/shop/files/800-800-max-1.png?v=1742201216&width=713" alt="7miners" />
                    <h2 className='text-[0.7rem]'>Bitaxe Gamma 601</h2>
                </div>
                <div className='flex flex-col justify-center items-center mt-4'>
                    <a href='/cart' className='bg-white flex items-center justify-center m-1 w-full border h-[2.5rem] hover:border-2 text-black rounded-sm px-3 border-black hover:border-opacity-100 mt-2 text-[0.7rem]' style={{ boxSizing: 'border-box' }}>View Cart ({cartQuantity})</a>
                    <a href="/checkout" className='w-full'><button className='bg-black w-full h-[2.5rem] border border-white hover:border-black text-white rounded-sm px-3 mt-2 text-[0.7rem]'>Check out</button></a>
                    <a className='border-b border-gray-600 text-gray-500 text-[0.7rem] mt-3' href="/">Continue shopping</a>
                </div>
            </div>
            <div className='flex flex-col md:flex-row m-8  items-top mx-4 md:mx-28'>
                               <div className='postcard overflow-hidden border w-full ml-5 lg:ml-0 md:w-[50vw]  appear opacity-0 shadow-sm border-gray-100'>

                    <SliderComponent />
                </div>
                <div ref={itemDiv} className='pt-8 md:pt-24 mx-6 lg:mx-0 w-full md:w-[43vw] gap-1 h-auto md:h-[50vh] justify-center flex flex-col px-4 md:px-20'>
                    <p className='animate opacity-0 text-sm text-gray-500'>7MINERS</p>
                    <p className='animate opacity-0 text-3xl'>Bitaxe Gamma 601</p>
                    <div className='flex flex-col gap-1 my-3'>

                        <p className='animate opacity-0'>Rs. 25,960.00</p>
                        <p className='animate opacity-0 text-sm text-gray-500'>Taxes included. <a href='/shipping-policy' className='border-b hover:border-b-2 border-black'>Shipping</a> calculated at checkout.</p>
                    </div>
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
                                if(x)localStorage.setItem("cartQuantity", parseInt(x) + quantity)
                                    else localStorage.setItem("cartQuantity", quantity)
                            }}>Buy it now</button></a>
                        </div>
                        <div className='flex flex-col  md:flex-row justify-between h-fit items-center animate opacity-0 mt-4'>
                            <div className='flex text-3xl w-fit items-center gap-3'>

                                <a className='h-10 w-10 flex items-center justify-center' href="https://www.facebook.com/sharer/sharer.php?u=https://7miners.in" target="_blank">
                                    <Facebook className='hover:w-[1.8rem] hover:h-[1.8rem]' />
                                </a>

                                <a className='h-10 w-10 flex items-center justify-center' href="https://twitter.com/intent/tweet?url=https://7miners.in&text=Check this out!" target="_blank">

                                    <img className='w-6 hover:w-7 h-fit' src="https://imgs.search.brave.com/evybPWRZLyxZqDPmmjXT7nIRayQKJKENykRKzL86ml4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aW1t/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wOC90d2l0/dGVyLWNoYW5nZXMt/dG8teC5wbmc" alt="x" />
                                </a>

                                <a className='h-10 w-10 flex items-center justify-center' href="https://api.whatsapp.com/send?text=Check this out! https://7miners.in" target="_blank">
                                    <img className='w-5 brightness-0 hover:w-7 contrast-200 h-fit' src="https://imgs.search.brave.com/1_lYKyfLRXThu0LN4vcKf46xi0zCuhTZlf7k-fWGT6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC93aGF0c2Fw/cC1pY29uLTI1Nngy/NTYtbGtpZzlybzEu/cG5n" alt="whatsapp" />
                                </a>

                                <a className='h-10 w-10 flex items-center justify-center' href="https://www.linkedin.com/shareArticle?mini=true&url=https://7miners.in&title=Awesome%20Website" target="_blank">
                                    <Linkedin className='hover:w-[1.8rem] hover:h-[1.8rem]' />
                                </a>
                            </div>
                            <a href='/products/bitaxe' className='flex text-sm hover:gap-2 items-center mb-9 lg:mb-0 justify-start w-full md:w-[9vw] mt-4 md:mt-0'>View full details <MoveRight className="h-3" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
