import LoginTopSection from './LoginTopSection'
import "./LoginPage.css"
import FeatureDetails from './FeatureDetails'
import Footer from './Footer'

const  LoginPage = () => {
    return (
        <div className="LoginPage">
            <LoginTopSection/>
            <hr />
            <FeatureDetails/>
            <hr/>
            <Footer/>
        </div>
    )
}

export default LoginPage