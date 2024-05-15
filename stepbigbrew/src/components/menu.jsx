import m_img1 from '../images/black_coffee.jpg'
import m_img2 from '../images/caf_latte.jpg'
import m_img3 from '../images/caffemocha.jpg'
import m_img4 from '../images/capc.jpg'
import m_img5 from '../images/car_mac.jpg'
import m_img6 from '../images/espreconpan.jpg'
import m_img7 from '../images/espremachi.jpg'
import m_img8 from '../images/esspresso.jpg'
import m_img9 from '../images/flatwhite.jpg'
import m_img10 from '../images/icecafam.jpg'
import m_img11 from '../images/whitechocmo.jpg'

export default function menu(){
    return (
        <>
        <div className="menu-page lg:flex-row">
            <div className="menu-text"><b>MENU</b></div>
                <div className='coffee-container'>
                    <label className='coffee-label' id='bcoffee'>
                        <img src={m_img1} alt='black coffee'></img>
                        Black Coffee
                    </label>
                    <label className='coffee-label' id='clatte'>
                        <img src={m_img2} alt='caffe latte'></img>
                        Caffe Latte
                    </label>
                    <label className='coffee-label' id='cmocha'>
                        <img src={m_img3} alt='caffee mocha'></img>
                        Caffee Mocha
                    </label>
                    <label className='coffee-label' id='cchino'>
                        <img src={m_img4} alt='capochino'></img>
                        Capochino
                    </label>
                    <label className='coffee-label' id='cmacch'>
                        <img src={m_img5} alt='caramel macchiato'></img>
                        Caramel Macchiato
                    </label>
                    <label className='coffee-label' id='econpan'>
                        <img src={m_img6} alt='espressoconpanna'></img>
                        Espresso con panna
                    </label>
                    <label className='coffee-label' id='emacchi'>
                        <img src={m_img7} alt='espressomacchiato'></img>
                        Espresso Macchiato
                    </label>
                    <label className='coffee-label' id='espre'>
                        <img src={m_img8} alt='espresso'></img>
                        Espresso
                    </label>
                    <label className='coffee-label' id='fwhite'>
                        <img src={m_img9} alt='flatwhite'></img>
                        Flate White
                    </label>
                    <label className='coffee-label' id='icame'>
                        <img src={m_img10} alt='coldbrewcoffee'></img>
                        Iced Caffe Americano
                    </label>
                    <label className='coffee-label' id='wcmo'>
                        <img src={m_img11} alt='whitechocolatemocha'></img>
                        White Chocolate Mocha
                    </label>
                </div>
        </div>
            <footer className='footer-sbb bg-neutral text-white text-center lg:text-center'>
                <p>© 2024 Step BigBrew</p>
            </footer> 
        </>
    )
}
