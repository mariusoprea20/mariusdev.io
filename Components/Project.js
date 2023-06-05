import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Animation1 from "./portofolioImg/animation1.png";
import Animation2 from "./portofolioImg/animation2.png";
import Animation3 from "./portofolioImg/animation3.png";
import myplace1 from "./portofolioImg/myplace1.png";
import myplace2 from "./portofolioImg/myplace2.png";
import myplace3 from "./portofolioImg/myplace3.png";
import myplace4 from "./portofolioImg/myplace4.png";
import myplace5 from "./portofolioImg/myplace5.png";
import myplace6 from "./portofolioImg/myplace6.png";
import myplace7 from "./portofolioImg/myplace7.png";
import myplace8 from "./portofolioImg/myplace8.png";
import myplace9 from "./portofolioImg/myplace9.png";
import tweeterData1 from "./portofolioImg/tweeterData1.png";
import tweeterData2 from "./portofolioImg/tweeterData2.png";
import tweeterData3 from "./portofolioImg/tweeterData3.png";
import GitLink from "./images/github3.png";
import OpenLink from "./images/openlink.png";
import "./CSS/projects.css";

function Project() {


    const handleMyPlaceLive =()=>{
        window.open("http://unn-w20039534.newnumyspace.co.uk/myplace/");
    }
    const handleAnimationLive =()=>{
        window.open("http://unn-w20039534.newnumyspace.co.uk/animation/");
    }
    const handleTweeterLive =()=>{
        window.open("http://w20039534.eastus.cloudapp.azure.com/index.html");
    }
    const handleMyPlaceGit =()=>{
        window.open("https://github.com/mariusoprea20/E-recruiting-software-MyPlace.com.git");
    }
    const handleAnimationGit =()=>{
        window.open("https://github.com/mariusoprea20/FireCamp-Graphics-Animation.git");
    }
    const handleTweeterGit =()=>{
        window.open("https://github.com/mariusoprea20/Tweeter-Data-with-Google-Maps-Implementation.git");
    }

    return (
        <div className="projectExamples">
            <h2>My Work</h2>
            {/**MyPlace project */}
            <div className="myPlace">
                <div className="myPlaceDetails">
                    <h4>myPlace.com</h4>
                    <p>myPlace is an e-recruiting platform engineered to optimize
                        recruitment and hiring. Features like a chat application,
                        search and filtering tools enrich the user experience, making
                        the hiring process more efficient.
                    </p>
                    <div className="techUsed">
                        <p>PHP</p>
                        <p>React.js</p>
                        <p>SQLite</p>
                        <p>Firebase</p>
                    </div>
                    <div className="linkOpener">
                        <div className="linkIcon" onClick={handleMyPlaceGit}><p>Code</p><img src={GitLink} alt="github" loading="lazy" /></div>
                        <div className="linkIcon" onClick={handleMyPlaceLive}><p>Live</p><img src={OpenLink} alt="openlink" loading="lazy" /></div>
                    </div>
                </div>
                {/**create a Carousel to display imgs about the project */}
                <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showIndicators={false} className="myPlaceCarousel">
                    <div className="myPlaceimg" >
                        <img src={myplace1} alt="myplace1" loading="lazy" />
                    </div>
                    <div className="myPlaceimg">
                        <img src={myplace2} alt="myplace2" loading="lazy" />
                    </div>
                    <div className="myPlaceimg">
                        <img src={myplace3} alt="myplace3" loading="lazy" />
                    </div>
                    <div className="myPlaceimg">
                        <img src={myplace4} alt="myplace4" loading="lazy" />
                    </div>
                    <div className="myPlaceimg">
                        <img src={myplace5} alt="myplace5" loading="lazy" />
                    </div>
                    <div className="myPlaceimg">
                        <img src={myplace6} alt="myplace6" loading="lazy" />
                    </div>
                    <div className="myPlaceimg">
                        <img src={myplace7} alt="myplace7" loading="lazy" />
                    </div>
                    <div className="myPlaceimg">
                        <img src={myplace8} alt="myplace8" loading="lazy" />
                    </div>
                    <div className="myPlaceimg">
                        <img src={myplace9} alt="myplace9" loading="lazy" />
                    </div>
                </Carousel>
            </div>

            {/**Animation project*/}
            <div className="animation">
                <div className="animationDetails">
                    <h4>Fire Camp</h4>
                    <p>The animation provided is a fire camp created in Three.js that contains several visual elements and provides
                        user control thorugh a GUI interface.
                    </p>
                    <div className="techUsed">
                        <p>JavaScript</p>
                        <p>Three.js</p>
                        <p>HTML</p>
                    </div>
                    <div className="linkOpener">
                        <div className="linkIcon" onClick={handleAnimationGit}><p>Code</p><img src={GitLink} alt="github" loading="lazy" /></div>
                        <div className="linkIcon" onClick={handleAnimationLive}><p>Live</p><img src={OpenLink} alt="openlink" loading="lazy" /></div>
                    </div>
                </div>
                {/**create a Carousel to display imgs about the project */}
                <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showIndicators={false} className="animationCarousel" >
                    <div className="animationImg" >
                        <img src={Animation1} alt="animation1" loading="lazy" />
                    </div>
                    <div className="animationImg">
                        <img src={Animation2} alt="animation2" loading="lazy" />
                    </div>
                    <div className="animationImg">
                        <img src={Animation3} alt="animation3" loading="lazy" />
                    </div>
                </Carousel>
            </div>

            {/**Tweeter Data project */}
            <div className="tweeterData">
                <div className="tweeterDetails">
                    <h4>Tweeter Data</h4>
                    <p>The app scans tweets containing '#climatechange' and 'netzero' 
                        as markers on a Google Map. Each marker shows the distance between 
                        locations, weather data, and integrates Google OAuth2 for user login 
                        and Azure Cloud deployment.
                    </p>
                    <div className="techUsed">
                        <p>JavaScript</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JQuery</p>
                    </div>
                    <div className="linkOpener">
                        <div className="linkIcon" onClick={handleTweeterGit}><p>Code</p><img src={GitLink} alt="github" loading="lazy" /></div>
                        <div className="linkIcon" onClick={handleTweeterLive}><p>Live</p><img src={OpenLink} alt="openlink" loading="lazy" /></div>
                    </div>
                </div>
                {/**create a Carousel to display imgs about the project */}
                <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showIndicators={false} className="tweeterCarousel">
                    <div className="tweeterDataImg" >
                        <img src={tweeterData1} alt="tweeteData" loading="lazy" />
                    </div>
                    <div className="tweeterDataImg">
                        <img src={tweeterData2} alt="tweeterData" loading="lazy" />
                    </div>
                    <div className="tweeterDataImg">
                        <img src={tweeterData3} alt="tweeterData" loading="lazy" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
export default Project;