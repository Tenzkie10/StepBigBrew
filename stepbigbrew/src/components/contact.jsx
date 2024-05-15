import backgroundimg from '../images/c_bg.jpg';

export default function contact(){
    return (
        <>
        <div className='contact-page lg:flex-row'>
            <img className='bg_img' src={backgroundimg}></img>

            <div className='contact_overlay text-white'>
                <h1>Contact Us</h1>
                <label id='FName'>First Name:
                    <input type='text' id='FName'></input>
                </label><br></br>
                <label id='LName'>Last Name:
                    <input type='text' id='LName'></input>
                </label><br></br>
                <label id='Email'>Email:
                    <input type='email' id='Email'></input>
                </label><br></br>
                <label id='PNum'>Phone Number:
                    <input type='number' id='PNum'></input>
                </label><br></br>
                <label id='Mess'>Message:
                    <textarea id='Mess'></textarea>
                </label><br></br>
                <button>Submit</button>

            </div>
        </div>

            <footer className='footer-sbb bg-neutral text-white text-center lg:text-center'>
                <p>© 2024 Step BigBrew</p>
            </footer> 
        </>
    )
}
