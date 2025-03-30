import React from 'react'

const Login = () => {
  return (
    <div class="bg-gray-200 mt-[19vh] h-fit mb-[19vh] pb-12 m-auto  p-8 rounded-lg shadow-lg w-full max-w-sm">
    <h1 class="text-2xl font-semibold mb-4">7miners.in</h1>
    <h2 class="text-xl font-semibold mb-2">Log in</h2>
    <p class="mb-4">Enter your email and we'll send you a login code</p>
    <form>
        <input type="email" placeholder="Email" class="w-full p-2 mb-4 bg-white border border-gray-700 rounded focus:outline-none focus:border-blue-500" />
        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Continue</button>
    </form>
    <a href="/privacy-policy" class="text-blue-500 mt-4 block">Privacy</a>
</div>
  )
}

export default Login
