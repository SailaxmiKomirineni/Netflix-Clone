import './LoginTopSection.css'
import Logo from '../assets/logo.png';
import {useState, useEffect} from 'react'
import { useNavigate} from 'react-router-dom'

const LoginTopSection = () =>{
    const navigate = useNavigate()
    const initialValue = {email:''}
    const [formValue, setFormValues] = useState(initialValue)
    const [formError, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleSignUpValues = (e) =>{
        const {name, value} = e.target
        setFormValues({...formValue, [name] : value})
        console.log(formValue.email);
    }

    const handleSignUpSubmit = (e) =>{
        e.preventDefault()
        
        const err = validate(formValue)
        setFormErrors(validate(formValue))
        // console.log(formValue);
        setIsSubmit(true);
        console.log(err);
        
    }

    useEffect(() => {
        console.log("Change values", formValue);
        console.log('err', formError);
    }, [formValue])

    useEffect(()=>{
      
        if(Object.keys(formError).length===0 && isSubmit){
            console.log(formValue);
        }
    }, [formError]);

    const validate = (values) =>{
        // console.log(values);
        const errors = {}
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
        if(!values.email){
            errors.email = "Please enter email address"
            console.log(errors);
        }else if (!emailPattern.test(values.email)){
            errors.email = "Invalid email address"
        }
        
        return errors

    }

    const handleSignin = () => {
        navigate('/login')
    }

    return(   
        <div className="IntroductionPage">
            <div className="bg">
                <header className="header">
                    <div>
                        <img className="logo" src={Logo} alt='Logo'/>  
                    </div>
                    <div className="signIn-selectLanguage-container">
                        <i className="fa fa-globe" aria-hidden="true"></i>
                        <select className='selectLanguage-dropdown border rounded'>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                        </select> 
                        <button onClick={handleSignin} className="LoginPage-signIn-btn">Sign In</button>                                                        
                    </div>
                </header>
                <div className="Signup">
                    <div>
                        <div className="details">
                            <h1 className="body-Title">Unlimited movies, TV shows and more</h1>
                            <p>Watch anywhere. Cancel anytime.</p>
                            <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        </div>
                        <form className="signUp-form" onSubmit={handleSignUpSubmit}>
                            <div className="signUp-input-container">
                                <div>
                                    <input  type="email" 
                                            placeholder="Email address"
                                            name="email"
                                            value={formValue.email}
                                            onChange={handleSignUpValues}/>
                                    <p>{formError.email}</p>
                                </div>     
                                <button   className="getStarted-btn">Get Started <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>              
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>        
    )
}

export default LoginTopSection

