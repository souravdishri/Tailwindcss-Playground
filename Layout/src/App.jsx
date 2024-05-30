import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-cyan-600 text-4xl '>Hello React! | Tailwind CSS </h1>

    <h2 className='text-white text-2xl m' >For Equal</h2>
    <div className='grid gap-4 m-4 sm:grid-cols-2 grid-cols-2' >
      <div className='bg-green-600 rounded-xl shadow-xl min-h-[100px] '></div>
      <div className='bg-teal-600 rounded-xl shadow-xl min-h-[100px] '></div>
    </div>
{/* <h1 className='text-white text-2xl'>For 3 Elements</h1> */}
    <div className='grid gap-4 m-4 sm:grid-cols-3' >
      <div className='bg-red-600 rounded-xl shadow-xl min-h-[100px] '></div>
      <div className='bg-teal-600 rounded-xl shadow-xl min-h-[100px] '></div>
      <div className='bg-yellow-600 rounded-xl shadow-xl min-h-[100px] '></div>
    </div>


    <h2 className='text-white text-2xl'>For Non-Equal</h2>
    <div className='grid gap-4 m-4 sm:grid-cols-12' >
      <div className='bg-green-600 rounded-xl shadow-xl min-h-[100px] sm:col-span-4 '></div>
      <div className='bg-teal-600 rounded-xl shadow-xl min-h-[100px] sm:col-span-8 '></div>
    </div>

{/* <h1 className='text-white text-2xl'>For 3 Elements</h1> */}
    <div className='grid gap-4 m-4 sm:grid-cols-12' >
      <div className='bg-green-600 rounded-xl shadow-xl min-h-[100px] sm:col-span-2 hidden sm:block '></div>
      <div className='bg-teal-600 rounded-xl shadow-xl min-h-[100px] sm:col-span-4 '></div>
      <div className='bg-yellow-600 rounded-xl shadow-xl min-h-[100px] sm:col-span-6 hidden sm:block'></div>
    </div>
    </>
  )
}

export default App
