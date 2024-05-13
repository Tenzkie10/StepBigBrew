import m_img1 from '../images/caf_latte.jpg'

export default function menu(){
    return (
        <>
        <div className="menu-page lg:flex-row">
            <div className="crazy-shape">
                <div className="menu-text"><b>MENU</b></div>
                <img className='' src={m_img1}></img>
            </div>
        </div>
            <footer className='footer-sbb bg-neutral text-white text-center lg:text-center'>
                <p>© 2024 Step BigBrew</p>
            </footer> 
        </>
    )
}
