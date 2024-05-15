import m_img1 from '../images/black_coffee.jpg'

export default function menu(){
    return (
        <>
        <div className="menu-page lg:flex-row">
            <div className="menu-text"><b>MENU</b></div>
                <div className='coffee-container'>
                    <label id='bcoffee'>
                        <img className='' src={m_img1} alt='black coffe'></img>
                        Black Coffee
                    </label>
                </div>
        </div>
            <footer className='footer-sbb bg-neutral text-white text-center lg:text-center'>
                <p>© 2024 Step BigBrew</p>
            </footer> 
        </>
    )
}
