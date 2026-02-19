import React from 'react'
import allAssets from '../assets/asset'

function Footer({theme}) {
  return (
    <div className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
        {/* footer top */}
        <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
            <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
                <img src={theme === 'dark' ? allAssets.logoDark : allAssets.logo} alt="" className='w-32 sm:w-44'/>
                <p className='max-w-md'>From strategy to execution, we craft digital solutions that move your business forward.</p>
                <ul className='flex gap-8'>
                    <li><a className='hover:text-primary' href="#hero">Home</a></li>
                    <li><a className='hover:text-primary' href="#services">Services</a></li>
                    <li><a className='hover:text-primary' href="#ourWork">Our Work</a></li>
                    <li><a className='hover:text-primary' href="#contactUs">Contact Us</a></li>
                </ul>
            </div>
            <div className='text-gray-600 dark:text-gray-400'>
                <h3 className='font-semibold'>Subscribe to our newsletter</h3>
                <p className='text-sm mt-2 mb-6'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className='flex gap-2 text-sm'>
                    <input type="email" placeholder='Enter your email' className="w-full p-3 text-sm outline-none rounded bg-transparent border border-gray-300 dark:border-gray-500 dark:text-gray-200"/>
                    <button className='bg-primary text-white rounded px-6'>Subscribe</button>
                </div>
            </div>
        </div>
        <hr className='border-gray-300 dark:border-gray-600 my-6'/>
        {/* footer bottom */}
        <div className='flex sm:justify-between items-center gap-4 flex-wrap pb-6 text-sm text-gray-500'>
            <p className=''>Copyright 2025 © Al-Shahriar - All Right Reserved.</p>
            <div className='flex gap-4 items-center justify-between'>
                <img src={allAssets.facebook} alt="" />
                <img src={allAssets.xLogo} alt="" />
                <img src={allAssets.insta} alt="" />
                <img src={allAssets.linkedin} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer