import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
const Login = () => {
  const [email, setEmail] = useState("")
  
  const [password, setPassword] = useState("")
  const [signIn, setSignIn] = useState(true)
   const [user, setUser] = useState(null)
   useEffect(() => {
     let x = localStorage.getItem("user") 
     if (x) {
       setUser(x)
     }
   }, [])
   
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
       await createUserWithEmailAndPassword(auth, email, password);
      alert("Register successful") 
      alert(email)
      localStorage.setItem("user", email)
      window.location.pathname = "/"

    } catch (error) {

      alert("Register failed, Invalid credentials", error.message)
    }
    // const res =  await signInWithEmailAndPassword(auth, "rohith82005@gmail.com", "rohith@123") 

  }
  const handleSubmit2 = async (event) => {
    event.preventDefault()
    try {
      const res = await signInWithEmailAndPassword(auth, email, password); 
      alert("Login successful")
      localStorage.setItem("user", res)
      window.location.pathname = "/"
    } catch (error) {

      alert("Login failed, Invalid credentials", error.message)
    }

  }
  return (
    <>{user == null ?<>
      {signIn ?
        <div className = "bg-gray-200 mt-[19vh] h-fit mb-[19vh] pb-12 m-auto  p-8 rounded-lg shadow-lg w-full max-w-sm">
    < h1 className = "text-2xl font-semibold mb-4" > 7miners.in</h1 >
    <h2 className="text-xl  mb-2">Log in</h2> 
    <form  >
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 bg-white border border-gray-700 rounded focus:outline-none focus:border-blue-500" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 bg-white border border-gray-700 rounded focus:outline-none focus:border-blue-500"  value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={(event)=>handleSubmit2(event)} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Continue</button>
    </form> 
    <button onClick={()=> setSignIn(false)} className="text-blue-500 mt-4 block">Don't have an account?</button>
</div >
    :
<div className="bg-gray-200 mt-[19vh] h-fit mb-[19vh] pb-12 m-auto  p-8 rounded-lg shadow-lg w-full max-w-sm">
  <h1 className="text-2xl font-semibold mb-4">7miners.in</h1>
  <h2 className="text-xl  mb-2">Register</h2>
  <form  >
    <input type="email" placeholder="Email" className="w-full p-2 mb-4 bg-white border border-gray-700 rounded focus:outline-none focus:border-blue-500"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" placeholder="Password" className="w-full p-2 mb-4 bg-white border border-gray-700 rounded focus:outline-none focus:border-blue-500"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={(event) => handleSubmit(event)} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Continue</button>
  </form>
  <button onClick={()=> setSignIn(true)} className="text-blue-500 mt-4 block">Already have an account?</button>
</div>}
    </> :
    <div className='h-[87vh] flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-semibold text-center'>Welcome to 7miners {user}</h1> 
      <button onClick={()=>{localStorage.removeItem("user"); setUser(null)}} className='bg-red-500 text-white p-2 rounded mt-4'  >Logout</button>
    </div>
}</>
  )
}

export default Login
