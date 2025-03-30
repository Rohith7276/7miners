import React from 'react'

const Contact = () => {
  return (
    <div class="w-full flex flex-col min-h-[72vh] m-auto mt-28 p-8">
      <div className='max-w-lg mx-auto mb-8'>

      <h1 class="text-4xl font-semibold mb-8">Contact</h1>
      <form class="space-y-6">
        <div class="flex space-x-4">
          <input type="text" placeholder="Name" class="w-1/2 p-2 border border-gray-300" />
          <input type="email" placeholder="Email *" class="w-1/2 p-2 border border-gray-300" />
        </div>
        <input type="text" placeholder="Phone number" class="w-full p-2 border border-gray-300" />
        <textarea placeholder="Comment" class="w-full p-2 border border-gray-300 h-32"></textarea>
        <button type="submit" class="px-6 py-2 bg-black text-white">Send</button>
      </form>

      </div>

      <div class="flex flex-col md:flex-row m-auto gap-6 md:pl-28 pt-20 items-center md:items-start">
   <img alt="7miners" class="w-screen md:w-1/2" height="400" src="https://7miners.in/cdn/shop/files/9-scaled.jpg?v=1742214556&width=750" width="600"/>

   <div class="p-8 w-fit ">
    <h1 class="text-3xl font-semibold mb-4">
     Contact Us
    </h1>
    <p class="text-lg mb-2">
     7miners.in
    </p>
    <p class="text-lg mb-2">
     No 2, 2nd Main, 2nd Stage, 16th B Cross, Yelahanka
    </p>
    <p class="text-lg mb-2">
     New Town, Bengaluru, Karnataka 560064.
    </p>
    <p class="text-lg mb-2">
     Mobile: 7760659382
    </p>
    <p class="text-lg">
     email: contact@7miners.in
    </p>
   </div>
</div>
    </div>
  )
}

export default Contact
