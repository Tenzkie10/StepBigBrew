import backgroundimg from '../images/c_bg.jpg';

export default function contact() {
    return (
        <>
            <div className='contact-page lg:flex-row'>
                <img className='bg_img' src={backgroundimg} alt="Background"></img>

                <div className='contact-overlay text-white'>
                    <h1>Contact Us</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor='FName'>First Name:</label>
                            <input type='text' id='FName' name='firstName' maxLength={128} required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor='LName'>Last Name:</label>
                            <input type='text' id='LName' name='lastName' maxLength={128} required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor='Email'>Email:</label>
                            <input type='email' id='Email' name='email' maxLength={320} required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor='PNum'>Phone Number:</label>
                            <input type='tel' id='PNum' name='phoneNumber' maxLength={11} pattern="[0-9]{11}" required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor='Mess'>Message:</label>
                            <textarea id='Mess' name='message' maxLength={150} required></textarea>
                        </div>
                        <button type='submit' >Submit</button>
                    </form>
                </div>
            </div>

            <footer className='footer-sbb bg-neutral text-white text-center lg:text-center'>
                <p>© 2024 Step BigBrew</p>
            </footer> 
        </>
    )
}