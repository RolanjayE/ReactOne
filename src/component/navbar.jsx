import React, { useState } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className="bg-black text-white relative">
            {/* nav-container */}
            <div className='flex justify-between items-center h-24 max-w-[1240px] bg-black px-5 mx-auto'>
                {/* left */}
                <h1 className='text-green-300 text-2xl'>REACT.</h1>
                {/* right */}
                <ul className={`md:flex justify-center items-center hidden gap-8 ${nav ? 'hidden' : 'block'}`}>
                    <li className='text-base'>Home</li>
                    <li className='text-base'>Account</li>
                    <li className='text-base'>Sign in</li>
                    <li className='text-base py-2 px-4 bg-white text-black font-bold rounded-sm'>Get Started</li>
                </ul>

                { !nav ? <i className="fa-solid fa-bars text-2xl md:hidden" onClick={handleNav}></i> : <i class="fa-solid fa-xmark text-2xl md:hidden" onClick={handleNav}></i> }
                
            </div>

            {nav && (
                <div className='fixed top-0 left-0 ease-in-out duration-600 w-3/5 h-screen bg-black'>
                    <div className="text-center pt-10 font-bold">
                        <ul>
                            <li className='p-4'>Home</li>
                            <li className='p-4'>Contact</li>
                            <li className='p-4'>Resources</li>
                            <li className='p-4'>About</li>
                            <li className='p-4'>Contact</li>
                        </ul>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Navbar;
