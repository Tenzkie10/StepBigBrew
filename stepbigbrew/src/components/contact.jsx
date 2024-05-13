import backgroundimg from '../images/c_bg.jpg';

export default function contact(){
    return (
        <>
        <div className="contact-page lg:flex-row">
            <img className='bg_img' src={backgroundimg}></img>
        </div>
            <footer className='footer-sbb bg-neutral text-white text-center lg:text-center'>
                <p>© 2024 Step BigBrew</p>
            </footer> 
        </>
    )
}
