import React from 'react'

const Footer = () => {
  return (
<footer className='border-t bg-white sticky w-screen h-fit'>
  <div className="bg-white mt-11 pb-3 py-4">
    <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center text-sm text-gray-500 text-center gap-4 sm:gap-6">
      <p className="mb-2 sm:mb-0">© 2025, <a href='/' className='hover:underline' rel="noopener noreferrer">7Miners.in</a></p>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        <a href="/privacy-policy" className="hover:underline" rel="noopener noreferrer">Privacy Policy</a>
        <span className="hidden sm:inline">•</span>
        <a href="/terms-of-service" className="hover:underline" rel="noopener noreferrer">Terms of Service</a>
        <span className="hidden sm:inline">•</span>
        <a href="/shipping-policy" className="hover:underline" rel="noopener noreferrer">Shipping Policy</a>
        <span className="hidden sm:inline">•</span>
        <a href="/contact-information" className="hover:underline" rel="noopener noreferrer">Contact Information</a>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer
