import Tv from "../assets/LoginImages/Login_tv_screen.png";
import Downloads from "../assets/LoginImages/Login_Stranger_Things_banner.png"
import UnlimitedMovies from "../assets/LoginImages/Login_tv_screen_fes.png"
import ChildrenBanner from "../assets/LoginImages/Login_Childrens_Banner.png"
import './FeatureDetails.css'

const FeatureDetails = () =>{
    return (
        <div className="Feature-details">
                <div>
                    <div className="display-features-cards">
                        <div className="features-text">
                            <h1>Enjoy on your TV</h1>
                            <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                        </div>
                        <img className="card-img" src={Tv} alt="TV"/>
                    </div>
                </div>
                <hr/>
                <div className="">
                    <div  className="display-features-cards">
                        <img className="card-img-stranger" src={Downloads} alt="Downloads"/>
                        <div className="features-text">
                            <h1>Download your shows to watch offline</h1>
                            <h2>Save your favourites easily and always have something to watch.</h2>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="">
                    <div className="display-features-cards">
                        <div className="features-text">
                            <h1>Watch everywhere</h1>
                            <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                        </div>
                       <img className="card-img" src={UnlimitedMovies} alt="UnlimitedMovies"/>
                    </div>
                </div>
                <hr/>
                <div className="">
                    <div className="display-features-cards">
                        <img className="card-img" src={ChildrenBanner} alt="ChildrenBanner"/>
                        <div className="features-text">
                            <h1>Create profiles for kids</h1>
                            <h2>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h2>
                        </div>
                    </div>
                </div>
                
            </div>
    )
}
export default FeatureDetails