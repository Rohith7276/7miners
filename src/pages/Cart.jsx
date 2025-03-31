import { Trash, Plus, Minus } from 'lucide-react'
import React, { useEffect } from 'react' 
import { useState } from 'react'
import { useCartStore } from '../store/useCartStore'
const Cart = () => {

  const {  addCartQuantity, removeCartQuantity, cartQuantity, addToCart, setCart } = useCartStore() 
  const [Cart, setcart] = useState(cartQuantity)
  useEffect(() => {
    setcart(cartQuantity)
   
  }, [cartQuantity])
  

if(cartQuantity == 0){
  return(<div className='flex h-[47vh] flex-col gap-7 items-center justify-center  my-36'>
      <h1 className="text-5xl text-center text-black">Your cart is empty</h1>
      <a href='/' className="bg-black   border border-white hover:border-black    hover:bosrder-black text-white  text-center py-2  text-s  rounded-sm px-5 md:w-[15vw] ">Continue shopping</a>
  </div>)
}
  return (
    <div className="flex flex-col items-start mt-24 min-h-[68vh] justify-center m-auto w-[90vw] md:w-[70vw] mb-11 bg-white text-gray-500">
      <div className="text-start w-full">
        <div className="flex flex-col md:flex-row justify-between mb-5 items-center">
          <h1 className="text-2xl text-black">Your Cart</h1>
          <a href="/" className="text-[0.7rem] border-b border-gray-500 cursor-pointer mt-2 md:mt-0">
            Continue shopping
          </a>
        </div>
        <div className="container mx-auto py-4">
          <div className="grid grid-cols-3 border-b pb-2 mb-4">
            <div className="text-sm text-center font-semibold text-gray-500 mb-2 md:mb-0">
              PRODUCT
            </div>
            <div className="text-sm font-semibold text-gray-500 text-center">
              QUANTITY
            </div>
            <div className="text-sm font-semibold text-gray-500 text-center">
              TOTAL
            </div>
          </div>
          <div className="grid grid-cols-3 items-center mb-4">
            <div className="flex items-center justify-center flex-col md:flex-row space-x-4 mb-4 md:mb-0">
              <img
                alt="Bitaxe Gamma 601 product image"
                className="w-24 h-24 object-cover"
                height="100"
                src="https://7miners.in/cdn/shop/files/800-800-max-1.png?v=1742201216&width=713"
                width="100"
              />
              <div>
                <div className="text-sm text-black font-semibold">
                  Bitaxe Gamma 601
                </div>
                <div className="text-gray-500 text-[0.7rem]">
                  Rs. {Number(23990).toLocaleString('en-IN')}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center text-black">
              <div className="flex items-center border border-gray-500 w-fit py-1 md:py-2 rounded-sm">
                <button
                  className="disabled:text-gray-400 disabled:cursor-not-allowed md:pl-2 py-1"
                  disabled={cartQuantity === 1}
                  onClick={() => {
                    removeCartQuantity(1);
                    localStorage.setItem("cartQuantity", cartQuantity - 1);
                  }}
                >
                  <Minus className="h-[0.7rem]" />
                </button>
                <input
                  className="md:mx-2 text-sm outline-none w-[2rem] text-center"
                  onChange={(e) => {
                    if (e.target.value) {
                      setCart(e.target.value);
                      setcart(e.target.value);
                      localStorage.setItem("cartQuantity", cartQuantity);
                    } else localStorage.setItem("cartQuantity", 1);
                  }}
                  value={Cart}
                />
                <button
                  className="md:pr-2 py-1"
                  onClick={() => {
                    addCartQuantity(1);
                    localStorage.setItem("cartQuantity", cartQuantity + 1);
                  }}
                >
                  <Plus className="h-[0.7rem]" />
                </button>
              </div>
              <Trash
                className=" h-3 md:h-4 ml-4 cursor-pointer"
                onClick={() => {
                  removeCartQuantity(cartQuantity);
                  localStorage.setItem("cartQuantity", 0);
                }}
              />
            </div>
            <div className="text-center md:text-lg text-black">
              Rs. {Number(cartQuantity * 23990).toLocaleString('en-IN')}
            </div>
          </div>
          <div className="border-t pt-4">
            <div className="flex flex-col md:flex-row justify-end items-center mb-2">
              <div className="text-[0.7rem] text-black">Estimated total</div>
              <div className="ml-0 md:ml-4 text-lg ">
                Rs. {Number(cartQuantity * 23990).toLocaleString('en-IN')}
              </div>
            </div>
            <div className="md:text-sm text-[0.7rem] text-center md:text-end  w-full  text-gray-500 mb-4">
              Taxes included. Discounts and
              <a
                className="text-blue-500 inline mx-1 underline"
                href="/shipping-policy"
              >
                shipping
              </a>
              calculated at checkout.
            </div>
            <div className="flex justify-center md:justify-end">
              <a href="/checkout">
                <button className="bg-black border border-white hover:border-black text-white px-6 py-2 text-lg rounded-sm w-full md:w-[20vw]">
                  Check out
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart
