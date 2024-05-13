import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import Logo from '../images/stepbigbrew_logo.png';

const nav = () => {

    const [toggle, setToggle] = useState(false);

    function openMenu(){
        setToggle(true);
    }
    function closeMenu(){
        setToggle(false);
    }
    return (
        <>
            <nav className="flex items-center justify-between p-5 lg:flex-row text-white">
                <div>
                    <Link to="/home" className='hover:text-orange px-5 py-2 text-xl'>
                    <img class="object-scale-down h-50 w-60"src={Logo} alt="StepBigBrew Logo"/>  
                    </Link>
                    
                    
                </div>    
                    <div className='nav-options ssm:hidden lg:block lg:flex-col'>
                        <CustomLink to="/home">Home</CustomLink>
                        <CustomLink to="/about">About</CustomLink>
                        <CustomLink to="/menu">Menu</CustomLink>
                        <CustomLink to="/contact">Contact Us</CustomLink>
                    </div>
                <div className="ssm:block lg:hidden">
                    {toggle ? (<AiOutlineClose onClick={closeMenu} size={30} className="text-white"></AiOutlineClose>):
                    (<HiMenuAlt1 onClick={openMenu} size={30} className="text-white"/>)}
                    
                </div>

               
                </nav>
                <div className="flex justify-between ml-10">
                    <ul className="text-white text-xl mb-2 ssm:block lg:hidden">
                        <li><CustomLink to="/home">Home</CustomLink></li>
                        <li><CustomLink to="/about">About</CustomLink></li>
                        <li><CustomLink to="/menu">Menu</CustomLink></li>
                        <li><CustomLink to="/contact">Contact Us</CustomLink></li>
                    </ul>
                </div>        
        </>
    )
}

function CustomLink({to, children, ...props}){
    const path = window.location.pathname
    return(
        <a className={path === to ? "active hover:text-orange" : "hover:text-orange px-4"} >
            <Link to={to}>{children}</Link>
        </a>
    )
}

export default nav