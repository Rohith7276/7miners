import React, { useEffect, useState } from 'react'
import emailjs from "@emailjs/browser";

const Contact = () => {
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")
const [name, setName] = useState("")
const [phone, setPhone] = useState("")
const [loading, setLoading] = useState(false)
  // Removed duplicate handleSubmit function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    console.log(loading)
   
  }, [loading])
  

  const handleSubmit = () => {  
    setLoading(true)
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
    setLoading(false)

      return;
    }

    try {
      emailjs
      .send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: name,
                to_name: "Anand",
                message: "From: \nEmail:"+ email + "\nPhone No: " + phone+ "\nName: " + name+ "\nMessage: " + message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            alert("Email sent successfully");
          },
          (error) => {
                alert("Email couldn't be sent");
                console.log(error);
            }
          )
          .finally(() => {
            setLoading(false);
          });
      } catch (error) {
        console.error("Error sending email:", error);
        setLoading(false);
      }
    };

  return (
    <div className="w-full flex flex-col min-h-[72vh] m-auto mt-28 p-8">
      <div className='max-w-lg mx-auto mb-8'>

      <h1 className="text-4xl font-semibold mb-8">Contact</h1>
      <div className="space-y-6">
        <div className="flex space-x-4">
          <input type="text" placeholder="Name" className="w-1/2 p-2 border border-gray-300" value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-1/2 p-2 border border-gray-300" />
        </div>
        <input type="text" placeholder="Phone number" className="w-full p-2 border border-gray-300" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Comment" className="w-full p-2 border border-gray-300 h-32"></textarea>
        <button onClick={handleSubmit} className={`px-6 w-28 py-2 bg-black ${loading? "cursor-wait bg-gray-500" : ""}  text-white`} disabled={loading} >{loading? "Loading...": "Send"}</button>
      </div>

      </div>

      <div className="flex flex-col md:flex-row m-auto gap-6 md:pl-28 pt-20 items-center md:items-start">
   <img alt="7miners" className="w-screen md:w-1/2" height="400" src="https://7miners.in/cdn/shop/files/9-scaled.jpg?v=1742214556&width=750" width="600"/>

   <div className="p-8 w-fit ">
    <h1 className="text-3xl font-semibold mb-4">
     Contact Us
    </h1>
    <p className="text-lg mb-2">
     7miners.in
    </p>
    <p className="text-lg mb-2">
     No 2, 2nd Main, 2nd Stage, 16th B Cross, Yelahanka
    </p>
    <p className="text-lg mb-2">
     New Town, Bengaluru, Karnataka 560064.
    </p>
    <p className="text-lg mb-2">
     Mobile: 7760659382
    </p>
    <p className="text-lg">
     email: contact@7miners.in
    </p>
   </div>
</div>
    </div>
  )
}

export default Contact
