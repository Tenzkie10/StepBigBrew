import Nav from './nav';
import Home from './home';
import About from './about';
import { Route, Routes } from 'react-router-dom';

const main = () => {
    return (
       <>       <div className="bg-neutral">
                <Nav/>
                
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    
                </Routes>
            </div>
       </>
    )
}

export default main

