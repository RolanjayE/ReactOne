import React from "react";

const Footer = ()=> {
    return (
        <div className="w-full py-8 px-4 bg-black">
           <div className="md:grid grid-cols-6 gap-4 max-w-[1240px] mx-auto text-gray-400">
            {/* first */}
               <div className="col-span-2 p-4">
                   <p className="text-1xl text-green-500 font-bold">React.</p>
                   <p className="text-sm pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore id soluta voluptatum sequi incidunt voluptates possimus, placeat, quas molestias animi omnis. Natus quod, eligendi qui suscipit ratione excepturi delectus maxime?</p>
                   <div className="flex gap-3 mt-8 text-white">
                      <i class="fa-brands fa-facebook"></i>
                      <i class="fa-brands fa-twitter"></i>
                      <i class="fa-brands fa-instagram"></i>
                      <i class="fa-brands fa-github"></i>
                   </div>
               </div>

            {/* second */}
               <div className="p-4 flex flex-col gap-3">
                <p className="text-sm">Solution</p>
                <p className="text-sm">Analytics</p>
                <p className="text-sm">Marketing</p>
                <p className="text-sm">Commerce</p>
                <p className="text-sm">Insight</p>
               </div>

            {/* three */}
               <div className="p-4 flex flex-col gap-3">
                <p className="text-sm">Support</p>
                <p className="text-sm">Pricing</p>
                <p className="text-sm">Documentation</p>
                <p className="text-sm">Guide</p>
                <p className="text-sm">API status</p>
               </div>

            {/* four */}
               <div className="p-4 flex flex-col gap-3">
                <p className="text-sm">Company</p>
                <p className="text-sm">About</p>
                <p className="text-sm">Blog</p>
                <p className="text-sm">Jobs</p>
                <p className="text-sm">Partners</p>
               </div>

            {/* five */}
               <div className="p-4 flex flex-col gap-3">
                <p className="text-sm">Legal</p>
                <p className="text-sm">Claim</p>
                <p className="text-sm">Privacy</p>
                <p className="text-sm">Terms</p>
               </div>

           </div>
        </div>
    )

}

export default Footer;