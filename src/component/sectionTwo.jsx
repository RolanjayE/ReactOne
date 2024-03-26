import React from "react";
import secondsec from '../img/secondsec.png';



const SectionTwo = () => {
    return (
        <div className="bg-gray-50 w-full h-[90vh] flex justify-center items-center px-4 my-10">

            <div className="flex flex-col gap-4 md:flex-row max-w-[1240px]  px-5 mx-auto items-center">

                {/* left img */}
                <div className="md:w-1/2">
                    <img src={secondsec} alt="Second Section" />
                </div>
                {/* right info */}
                <div className="md:w-1/2">
                    <p className='text-base text-green-600'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className="text-3xl font-bold py-3">Manage Data Analytics Centrally</h1>
                    <p className="text-base text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis iste excepturi aliquid totam neque ipsum, atque tempore cupiditate nisi repudiandae, aut inventore quaerat, quis similique. Eligendi sed a porro eius.</p>
                    <button className='py-2 px-10 bg-black text-white rounded-sm mt-6'>Get Started</button>
                </div>

            </div>
            
        </div>
    )
}


export default SectionTwo;