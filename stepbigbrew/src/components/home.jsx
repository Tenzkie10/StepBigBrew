import backgroundimg from '../images/mainbg.jpg';
import { Link } from "react-router-dom";

const home = () => {
    return (
        <>
        <div className='main'>
            <img className='bg_img' src={backgroundimg}></img>
            <div className='overlay'>
                <div className='content'><b>Making Every Sip A Step<br></br>In The Right Direction!</b>   
                    <Link to="/menu">
                    <button className='order-button' ><b>Order Now!</b></button>
                    </Link>
                </div>
            </div>    

                
        </div>
        <footer className='footer-sbb bg-neutral'>
            <p>© 2024 Step BigBrew</p>
        </footer>   
        </>
    )
}
export default home