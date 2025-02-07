import { useState } from 'react'
import Navbar from './components/Navbar'
import BubbleAnimation from "./components/BubbleAnimation";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='body-background h-screen'>
     <Navbar /> 
      <div>
        <p className='text-center text-shadow text-4xl text-red-600 font-bold font-dancing my-5 '>Hey Baby! Thank you for bringing so much joy, laughter, purpose and clarity to my life</p>
        <p className='text-center text-shadow text-4xl text-red-600 font-bold font-dancing my-5'>Please allow me the honor of showing you just how special you are on Valentines day</p>
        <p className='text-center text-7xl text-red-600 font-semibold font-great mt-10 '>Will You Be My Valentine?</p>
        
        <div className='flex w-full justify-center my-10 gap-10'>
          <button className='font-dancing border rounded-md font-bold text-white hover:bg-green-400 py-2 px-6 bg-green-500'>YES</button>
          <button className='font-dancing border rounded-md font-bold text-white hover:bg-red-400 py-2 px-6 bg-red-500'>NO</button>
        </div>
        
        <BubbleAnimation />
      </div>
    </div>
  )
}

export default App
