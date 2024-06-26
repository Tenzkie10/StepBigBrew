import { useState } from 'react';
import axios from 'axios';
import backgroundimg from '../images/c_bg.jpg';
import { Link, useNavigate } from 'react-router-dom';

export default function Contact() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        phoneNumber: '',
    }); // Initialize errors state

    function validatePhoneNumber(phone_Number) {
        const phoneRegex = /^09\d{9}$/;
        return phoneRegex.test(phone_Number);
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        if (!validatePhoneNumber(values.phoneNumber)) {
            setErrors({ phoneNumber: '* Phone number must start with "09" and contain 11 digits.' }); // Set error message
            return;
        }

        console.log('Submitting form with values:', values); // Log form values

        axios.post('/api/add_contact', values)
            .then((res) => {
                console.log('Response from server:', res); // Log the response
                navigate('/');
            })
            .catch((err) => {
                console.error('Error submitting form:', err); // Log the error
            });
    }

    return (
        <>
            <div className='contact-page lg:flex-row'>
                <img className='bg_img' src={backgroundimg} alt="Background" />

                <div className='contact-overlay text-white'>
                    <h1>Contact Us</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor='FName'>First Name:</label>
                            <input type='text' id='FName' name='firstname' maxLength={128} required onChange={(e) => setValues({ ...values, firstname: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor='LName'>Last Name:</label>
                            <input type='text' id='LName' name='lastname' maxLength={128} required onChange={(e) => setValues({ ...values, lastname: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor='Email'>Email:</label>
                            <input type='email' id='Email' name='email' maxLength={320} required onChange={(e) => setValues({ ...values, email: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor='PNum'>Phone Number (+63):</label>
                            <input type='tel' id='PNum' name='phoneNumber' maxLength={11} pattern="[0-9]{11}" required onChange={(e) => setValues({ ...values, phoneNumber: e.target.value })} />
                            {errors.phoneNumber && <div className='error'>{errors.phoneNumber}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor='Mess'>Message:</label>
                            <textarea id='Mess' name='message' maxLength={150} required onChange={(e) => setValues({ ...values, message: e.target.value })}></textarea>
                        </div>
                        <button type='submit' className='sbtn'>Submit</button>
                    </form>
                </div>
            </div>

            <footer className='footer-sbb bg-neutral text-white text-center lg:text-center'>
                <p>© 2024 Step BigBrew</p>
            </footer>
        </>
    );
}
