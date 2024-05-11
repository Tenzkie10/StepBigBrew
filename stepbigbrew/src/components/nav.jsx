import { Link } from "react-router-dom";
import Logo from '../images/stepbigbrew_logo.png';

const nav = () => {

    return (
        <>
            <nav className="flex items-center justify-between p-5 lg:flex-row text-white">
                <div>
                    <Link to="/home" className='hover:text-orange px-5 py-2 text-xl'>
                    <img class="object-scale-down h-50 w-60"src={Logo} alt="StepBigBrew Logo"/>  
                    </Link>
                    
                    
                </div>    
                    <div className='nav-options'>
                        <CustomLink to="/home">Home</CustomLink>
                        <CustomLink to="/about">About</CustomLink>
                        <CustomLink to="/menu">Menu</CustomLink>
                        <CustomLink to="/contact">Contact Us</CustomLink>
                    </div>
                </nav>
                        
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