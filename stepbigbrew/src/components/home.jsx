import backgroundimg from '../images/mainbg.jpg'

const home = () => {
    return (
        <>
        <div className='main'>
            <img className='bg_img' src={backgroundimg}></img>
            <div className='overlay'>
            <div className='content'><b>Making Every Sip A Step <br></br>In The Right Direction!</b>
            <button className='order-button'><b>Order Now!</b></button>
            </div>
            </div>
        </div>
        
        </>
    )
}
export default home