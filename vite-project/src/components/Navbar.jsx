import React from 'react'

export default function navbar() {
  return (
   <nav className='flex justify-between bg-slate-600 text-white py-4'>
    <div className="logo">
        <span className='font-bold text-xl mx-9'>Itask</span> 
    </div>
    <ul className='flex gap-8 mx-9'>
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
    </ul>
   </nav>
  ) 
}
