import React from "react";

const SectionTree = () => {
    return (
        <div className="bg-black w-full h-[40vh] flex justify-center items-center p-4 ">

            <div className="flex flex-col md:flex-row max-w-[1240px] px-5 gap-6 mx-auto">

                {/* left */}
                <div className="border-solid">
                    <p className="text-white font-bold text-2xl">Want tips & tricks to optimize your flow ?</p>
                    <p className="text-base text-gray-400">Sign up ypur newsletter and stay up to date</p>
                </div>

                {/* right */}
                <div className="">
                    <form className="flex gap-2" action="">
                        <input className="px-2" type="text" placeholder="Enter your email"/>
                        <button className="py-2 px-6 bg-green-500 rounded-sm text-white">Notify Me</button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default SectionTree