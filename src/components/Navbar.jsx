import React from 'react'
import { gsap } from "gsap"
import { useEffect, useState } from 'react'

import { useGSAP } from "@gsap/react";
import { useCartStore } from '../store/useCartStore';
import { Search, User, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const { contextSafe } = useGSAP()
  const [search, setSearch] = useState(false)
  const { cartQuantity } = useCartStore()
  const items = [
    {
      id: 1,
      name: "Bitaxe Gamma 601",
      price: 23990,
      image: "https://7miners.in/cdn/shop/files/800-800-max-1.png?v=1742201216&width=713",
      link: "/products/bitaxe",
    }
  ]
  const [searchItems, setSearchItems] = useState([])

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setSearchItems(searchTerm !== "" ? filteredItems : []);
  }

  const animation = contextSafe(() => {
    gsap.fromTo(".navAnimate",
      { y: -100, opacity: 0 },
      {
        y: 0,
        duration: 0.5,
        opacity: 1,
      })
  })

  useEffect(() => {
    animation()
  }, [])

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navElement = document.querySelector("nav");

      if (currentScrollY < lastScrollY) {
        navElement.style.transform = "translateY(0)";
      } else {
        navElement.style.transform = "translateY(-100%)";
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [path, setPath] = useState(null)
  useEffect(() => {
    setPath(window.location.pathname)
  }, [])

  return (
    <nav className='flex z-[100] w-screen  justify-between items-center bg-white py-3 border-b-2 border-gray-200 px-2 md:px-12 lg:px-36 fixed top-0 left-0 z-50 transition-transform duration-300'>
      <div className=' md:w-[60vw] w-full flex justify-between m-auto'>
      <ul className='flex gap-4 text-sm justify-centeritems-center text-gray-700'>
        <a href='/' className='text-xl md:text-2xl navAnimate opacity-0 lg:mr-4 text-gray-800'>7miners.in</a>
        <a href='/' className={`${path === "/" ? "border-black hover:border-b-2" : "border-transparent"} text-xs md:text-sm h-[1.3rem] navAnimate opacity-0 my-3 cursor-pointer border-b hover:border-black`}>Home</a>
        <a href='/catalog' className={`${path === "/catalog" ? "border-black" : "border-transparent"} text-xs md:text-sm navAnimate opacity-0 my-3 h-[1.3rem] cursor-pointer border-b hover:border-black`}>Catalog</a>
        <a href='/contact' className={`${path === "/contact" ? "border-black" : "border-transparent"} text-xs md:text-sm navAnimate opacity-0 my-3 h-[1.3rem] cursor-pointer border-b hover:border-black`}>Contact</a>
      </ul>
      <div className='flex gap-4 md:gap-6 lg:gap-9 justify-start mr-3 items-center'>
        <div className='navAnimate opacity-0 w-5 md:w-7'>
          <Search
            className='text-gray-700 w-fit h-[1.5rem] md:h-[1.7rem] hover:h-[1.6rem] md:hover:h-[1.8rem] navAnimate opacity-0 cursor-pointer'
            onClick={() => setSearch(!search)}
          />
        </div>
        {search && (
          <div className='fixed w-[60vw] left-[20vw] top-[3.5rem] md:top-[4.5rem] right-2 md:right-24 flex flex-col gap-2 items-start bg-white border border-gray-300 rounded-md shadow-md p-2'>
            <input
              type="text"
              className='border border-gray-300 w-full rounded-md h-[1.8rem] md:h-[2rem] px-2 text-[0.7rem] md:text-sm'
              placeholder='Search...'
              onChange={handleSearch} 
               
            />
            <div className='w-full m-auto'>
              {searchItems.length > 0 ? (
                searchItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className='flex gap-2 items-center border-b border-gray-300 py-2 hover:bg-gray-100 w-full px-2'
                  >
                    <img src={item.image} alt={item.name} className='w-36 h-36 object-cover rounded-md' />
                    <span className='text-sm text-gray-700'>{item.name}</span>
                  </a>
                ))
              ) : (
                <p className='text-sm text-gray-500 px-2'>No results found</p>
              )}
            </div>
          </div>
        )}
        <a href='/login' className='navAnimate opacity-0 w-5 md:w-7'>
          <User className='text-gray-700 hover:h-[1.6rem] md:hover:h-[1.8rem] w-fit h-[1.5rem] md:h-[1.7rem] navAnimate opacity-0 cursor-pointer' />
        </a>
        <a className='navAnimate opacity-0 w-5 md:w-7' href='/cart'>
          <ShoppingBag className='text-gray-700 hover:h-[1.6rem] md:hover:h-[1.8rem] w-fit h-[1.5rem] md:h-[1.7rem] cursor-pointer' />
          {cartQuantity !== 0 && (
            <div className='text-[0.6rem] md:text-[0.7rem] bg-black relative text-white mt-[-0.8rem] md:mt-[-0.9rem] z-50 ml-3 md:ml-5 rounded-full h-[0.7rem] md:h-[1rem] w-3 md:w-4 flex justify-center items-center'>
              <span>{cartQuantity}</span>
            </div>
          )}
        </a>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
