import React, { useState } from 'react';

const Hero = () => {
   return (
        <div className='bg-black text-white w-full h-screen flex justify-center items-center text-center'>
            <div className='p-4'>
                <p className='text-base text-green-300'>GROWING WITH DATA ANALYTICS</p>
                <h1 className="p-2 md:text-7xl text-5xl font-bold">Grow with  data</h1>
                <div className=''>
                    <p className="text-2xl font-bold">Fast, Flexible financing for <span className='text-gray-400'>Gray</span></p>
                    <p className="text-base text-gray-400">Monitor your data analytics to increase revenue for BTB, BTC & SASS platform</p>
                </div>
                <button className='py-2 px-10 bg-green-500 rounded-sm mt-6'>Get Started</button>
            </div>
        </div>
    );
};

export default Hero;
