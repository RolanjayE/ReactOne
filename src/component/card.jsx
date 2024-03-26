import React from "react";


const card = () => {
    return (
        <div className="w-full p-4 py-8 bg-gray-100">

           <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-20 text-center py-10">

            {/* left */}
              <div className="bg-white rounded-sm p-4">
                <div className="mt-[-60px] mb-4 py-4 text-white flex items-center justify-center">
                   <div className="bg-green-600 p-4 px-5 rounded-full"><i class="fa-solid fa-user text-3xl"></i></div>
                </div>
                <h1 className="font-2xl font-bold">Single user</h1>
                <h1 className="text-3xl font-bold py-8">$10</h1>
                <div className="flex flex-col text-gray-800 gap-2">
                    <p className="text-base border-b py-1">500 gb Storage</p>
                    <p className="text-base border-b py-1">1 User allowed</p>
                    <p className="text-base py-1">Send up to 2GB</p>
                </div>
                <button className='py-2 px-10 bg-green-600 text-white rounded-sm mt-6'>Start Trial</button>
              </div>
            {/* center */}
              <div className="bg-black text-white rounded-sm p-4">
                <div className="mt-[-60px] mb-4 py-4 text-white flex items-center justify-center">
                   <div className="bg-green-600 p-4 rounded-full"><i class="fa-solid fa-handshake text-3xl"></i></div>
                </div>
                <h1 className="font-2xl font-bold">Partnership</h1>
                <h1 className="text-3xl font-bold py-8">$30</h1>
                <div className="flex flex-col gap-2 text-white">
                    <p className="text-base border-b py-1">1 TB Storage</p>
                    <p className="text-base border-b py-1">3 User allowed</p>
                    <p className="text-base py-1">Send up to 10 GB</p>
                </div>
                <button className='py-2 px-10 bg-green-600 text-white rounded-sm mt-6'>Start Trial</button>
              </div>
            {/* right */}
              <div className="bg-white rounded-sm p-4">
                <div className="mt-[-60px] mb-4 py-4 text-white flex items-center justify-center">
                   <div className="bg-green-600 p-4 rounded-full"><i class="fa-solid fa-users text-3xl"></i></div>
                </div>
                <h1 className="font-2xl font-bold">Group Account</h1>
                <h1 className="text-3xl font-bold py-8">$60</h1>
                <div className="flex flex-col text-gray-800 gap-2">
                    <p className="text-base border-b py-1">5 gb Storage</p>
                    <p className="text-base border-b py-1">10 User allowed</p>
                    <p className="text-base py-1">Send up to 2D GB</p>
                </div>
                <button className='py-2 px-10 bg-green-600 text-white rounded-sm mt-6'>Start Trial</button>
              </div>
        
           </div>
        </div>
    )
}

export default card