import React from 'react'
import { assets } from '../assets/assets'

export const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                 <img src={assets.logo} className='mb-5 w-32'/>
                 <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorum repudiandae velit commodi architecto, consectetur praesentium incidunt perferendis quaerat! Quam veniam maxime itaque sequi illo assumenda ullam nostrum aut minima.</p>
            
            
            </div>

<div>
    <p className='text-xl font-medium mb-5'>COMPANY</p>
    <ul className='flex flex-col gap-1 text-gray-600'>
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy</li>
     </ul>
</div>
<div>
    <p className='text-xl font-medium mb-5'>Get In Touch</p>
    <ul className='flex flex-col gap-1 text-gray-600'>
        <li>+1-212-456-7980</li>
        <li>contact@forever.com</li>
    </ul>
</div>
        </div>
<div>
    <hr/>
    <p className='py-5 text-sm text-center'>CopyRights 2024 @forever.com-All Right Reserved</p>
</div>
        

    </div>
  )
}
