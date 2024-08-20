import './SignIn.css';
import Logo from '../assets/logo.png';
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
 
const SignIn = () =>{
    const navigate = useNavigate();
    const initialState = {email:"", password:""};
    const [formValues, setFormValues] = useState(initialState)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleLogo = () =>{
        navigate("/")
    }
    const handleSignIn = () =>{
        if(isSubmit===true){
            navigate("/home")
        }
    }

    const handleChange = (e)=>{
        const { name, value } = e.target
        setFormValues({...formValues, [name]:value})
    }

    const handlesubmit = (e) =>{
       e.preventDefault();
       setFormErrors(validate(formValues))
       setIsSubmit(true)
    }

    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length===0 && isSubmit){
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) =>{
        const errors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if(!values.email){
            errors.email = "Please enter a valid email address"
        }else if(!emailPattern.test(values.email)){
            errors.email = "Invalid email address"
        }
        if(!values.password){
            errors.password = "Your password must contain between 4 and 60 characters."
        }else if(values.password.length<4 || values.password.length>60){
            errors.password = "Your password must contain between 4 and 60 characters."
        }
        else if(!passwordPattern.test(values.password)){
            errors.password = "Password must be at least 8 characters long, and include at least one uppercase letter, one lowercase letter, one number, and one special character."
        }
        return errors
    }

    return (
            <div className="signIn-Container">
                <header className="SignIn-header">
                    <div className="login">
                        <img onClick={handleLogo} className="logo-signIn" src={Logo} alt='Logo'/>  
                        <form onSubmit={handlesubmit}>
                            <div className="form-content">
                                <h1>Sign In</h1>
                                <div className="input-email-password-cont">
                                    <input onChange={handleChange} 
                                        className="signIn-form-input"
                                        name="email" type="email" 
                                        placeholder="Email Address" 
                                        value={formValues.email}
                                    />
                                    <p className="err-msg">{formErrors.email}</p>
                                </div>
                                <div className="input-email-password-cont">
                                    <input  onChange={handleChange} 
                                            className="signIn-form-input" 
                                            name="password" 
                                            type="password" 
                                            placeholder="Password" 
                                            value={formValues.password}
                                    />
                                    <p className="err-msg">{formErrors.password}</p>
                                </div>
                                <button type="submit" onClick={handleSignIn} className="signIn-btn">Sign In</button>
                                <p className="or">OR</p>
                                <button className="code">Use a sign-in code</button>
                                <a className="forget-password" href="https://www.netflix.com/in/LoginHelp">Forget password?</a>
                                <div className="signIn-checkbox">
                                    <input id="checkbox" type="checkbox" />
                                    <label htmlFor="checkbox">Remember me</label>
                                </div>
                        <p className="new">New to Netflix? <span onClick={handleLogo}>Sign up now.</span></p>
                                <p className="learn">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more.</span></p>
                            </div>
                            
                        </form>
                    </div>                       
                </header>
                <footer>
                    <div className="footer-container">
                        <h1>Questions? Call 000-800-919-1694</h1>
                        <div className="footer-division">
                            <ul>
                                <li>FAQ</li>
                                <li>Cookie Preferences</li>
                            </ul>
                            <ul>
                                <li>Help Centre</li>
                                <li>Corporate Information</li>
                            </ul>
                            <ul>
                                <li>Terms of Use</li>
                            </ul>
                            <ul>
                                <li>Privacy</li>
                            </ul>
                        </div>
                    </div>
                    
                </footer>
            </div>

    )
} 
export default SignIn

