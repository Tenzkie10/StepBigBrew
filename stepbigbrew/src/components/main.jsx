import Nav from './nav';
import Home from './home';
import About from './about';
import Menu from './menu';
import Contact from './contact';
import Order from './order';

import { Route, Routes, Navigate } from 'react-router-dom';

const main = () => {
    return (
       <>       <div className='bg-neutral'>
                <Nav/>
                
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/order" element={<Order/>}/>
                </Routes>
            </div>
       </>
    )
}

export default main

