import backgroundimg from '../images/mainbg.jpg';
import { Link } from "react-router-dom";

const home = () => {
    return (
        <>
        <div className='main'>
                <img className='bg_img lg:flex-row' src={backgroundimg} alt="Background"></img>
                <div className='overlay ssm:'>
                    <div className='content text-white text-center lg:text-left lg:text-8xl ssm:text-xs md:text-sm'><b>Making Every Sip A Step<br></br>In The Right Direction!</b>   
                        <Link to="/menu">
                            <button className='order-button lg:text-2xl ssm:text-sm'><b>Order Now!</b></button>
                        </Link>
                    </div>
                </div>    
            </div>
            <footer className='footer-sbb bg-neutral text-white text-center lg:text-center'>
                <p>© 2024 Step BigBrew</p>
            </footer>    
        </>
    )
}
export default home