import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';
import { useState } from 'react';
import Logo from '../images/stepbigbrew_logo.png';

const nav = () => {

    return (
        <>
            <div className="flex items-center justify-between p-5 lg:flex-row text-white">
                <div>
                    <a href="#" className='hover:text-orange px-5 py-2 text-xl'>
                    <img class="object-scale-down h-50 w-60"src={Logo} alt="StepBigBrew Logo"/>  
                    </a>
                    
                    
                </div>
                <div className="space-x-12">
                    <div className='lg:block space-x-2'>
                        <a href="#" className="hover:text-orange px-5 [font-family:'Inter-Regular',Helvetica] font-normal text-[#fff7f7] text-[24px] tracking-[0] leading-[normal]"><b>Home</b></a>
                        <a href="#" className="hover:text-orange px-5 [font-family:'Inter-Regular',Helvetica] font-normal text-[#fff7f7] text-[24px] tracking-[0] leading-[normal]"><b>About</b></a>
                        <a href="#" className="hover:text-orange px-5 [font-family:'Inter-Regular',Helvetica] font-normal text-[#fff7f7] text-[24px] tracking-[0] leading-[normal]"><b>Menu</b></a>
                        <a href="#" className="hover:text-orange px-5 [font-family:'Inter-Regular',Helvetica] font-normal text-[#fff7f7] text-[24px] tracking-[0] leading-[normal] "><b>Contact Us</b></a>
                    </div>
                </div>
            </div>
            
            
        </>
    )
}



export default nav